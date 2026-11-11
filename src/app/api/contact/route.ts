import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const recipient = 'isudipto4u@gmail.com';

type Enquiry = { 
    name: string;
    email: string;
    phone: string;
    category: string;
    message: string;
};

function escapeHtml(value: string) {
    return value.replace(/[&<>"']/g, (character) => {
        const entities: Record<string, string> = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
        };
        return entities[character];
    });
}

function parseEnquiry(body: unknown): Enquiry | null {
    if (!body || typeof body !== 'object') return null;

    const values = body as Record<string, unknown>;
    const fields = ['name', 'email', 'phone', 'category', 'message'] as const;
    if (fields.some((field) => values[field] !== undefined && typeof values[field] !== 'string')) return null;

    const enquiry = {
        name: typeof values.name === 'string' ? values.name.trim() : '',
        email: typeof values.email === 'string' ? values.email.trim() : '',
        phone: typeof values.phone === 'string' ? values.phone.trim() : '',
        category: typeof values.category === 'string' ? values.category.trim() : '',
        message: typeof values.message === 'string' ? values.message.trim() : '',
    };

    if (
        !enquiry.name ||
        !enquiry.email ||
        !enquiry.category ||
        !enquiry.message ||
        enquiry.name.length > 120 ||
        enquiry.email.length > 254 ||
        enquiry.phone.length > 40 ||
        enquiry.category.length > 120 ||
        enquiry.message.length > 5000 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)
    ) {
        return null;
    }

    return enquiry;
}

export async function POST(request: Request) {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ success: false, message: 'Please submit a valid enquiry.' }, { status: 400 });
    }

    const enquiry = parseEnquiry(body);
    if (!enquiry) {
        return NextResponse.json({ success: false, message: 'Please complete all required fields with valid information.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error('Contact enquiry email is unavailable: RESEND_API_KEY is not configured.');
        return NextResponse.json({ success: false, message: 'Our enquiry service is temporarily unavailable. Please try again later.' }, { status: 503 });
    }

    const escape = escapeHtml;
    const row = (label: string, value: string) => `
        <tr>
            <th align="left" style="padding:12px 16px;border-bottom:1px solid #e8e8e8;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:1px;vertical-align:top">${label}</th>
            <td style="padding:12px 16px;border-bottom:1px solid #e8e8e8;color:#171717;font-size:14px;line-height:1.6;white-space:pre-wrap">${escape(value) || 'Not provided'}</td>
        </tr>`;

    try {
        const resend = new Resend(apiKey);
        const { error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: recipient,
            replyTo: enquiry.email,
            subject: 'New project enquiry — Stairsky',
            html: `
                <div style="max-width:680px;margin:0 auto;padding:32px 20px;font-family:Arial,sans-serif;color:#171717">
                    <p style="margin:0 0 8px;color:#777;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase">Stairsky · Website enquiry</p>
                    <h1 style="margin:0 0 24px;font-family:Georgia,serif;font-size:30px;font-weight:normal">A new project enquiry</h1>
                    <table role="presentation" style="width:100%;border:1px solid #e8e8e8;border-collapse:collapse">
                        ${row('Name', enquiry.name)}
                        ${row('Email', enquiry.email)}
                        ${row('Contact number', enquiry.phone)}
                        ${row('Project type', enquiry.category)}
                        ${row('Project details', enquiry.message)}
                    </table>
                    <p style="margin:20px 0 0;color:#777;font-size:12px">Reply to this email to contact ${escape(enquiry.name)}.</p>
                </div>`,
            text: [
                'STAIRSKY — WEBSITE ENQUIRY',
                '',
                `Name: ${enquiry.name}`,
                `Email: ${enquiry.email}`,
                `Contact number: ${enquiry.phone || 'Not provided'}`,
                `Project type: ${enquiry.category}`,
                '',
                'Project details:',
                enquiry.message,
            ].join('\n'),
        });

        if (error) {
            console.error('Contact enquiry email could not be sent:', error);
            return NextResponse.json({ success: false, message: 'We could not send your enquiry right now. Please try again.' }, { status: 502 });
        }

        return NextResponse.json({ success: true, message: 'Your enquiry has been sent successfully. We will be in touch soon.' });
    } catch (error) {
        console.error('Contact enquiry email request failed:', error);
        return NextResponse.json({ success: false, message: 'We could not send your enquiry right now. Please try again.' }, { status: 502 });
    }
}