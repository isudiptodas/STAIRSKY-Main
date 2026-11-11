export const legalContent = {
  terms: {
    title: "Terms & conditions",
    updated: "Last updated: October 2026",
    introduction: "These terms explain the basics of using Stairsky's website and getting in touch with our studio. By using this site, you agree to these terms.",
    sections: [
      { title: "Using this website", body: "You may browse and share links to this website for personal and business reference. Please do not copy, republish, or commercially use our text, designs, films, or other creative work without written permission." },
      { title: "Our work and services", body: "Examples shown on this site are for portfolio purposes. A project begins only when both parties agree to its scope, schedule, fees, and terms in a separate written agreement." },
      { title: "Information on this site", body: "We do our best to keep the website accurate and available, but its content is provided for general information and may change. It is not a promise that a specific service or result will be available." },
      { title: "Third-party links", body: "Some links lead to services operated by others. Stairsky does not control and is not responsible for their content, availability, or terms." },
      { title: "Contact", body: "Questions about these terms? Write to hello@stairsky.com." },
    ],
  },
  privacy: {
    title: "Privacy policy",
    updated: "Last updated: October 2026",
    introduction: "We respect your privacy. This policy describes the information Stairsky may receive when you browse this site or contact our studio.",
    sections: [
      { title: "Information you share", body: "If you send us a project enquiry, you choose to share details such as your name, email address, phone number, project category, and message. This website opens your email application to send the enquiry; it does not transmit the form directly to a Stairsky server." },
      { title: "How we use it", body: "We use information you send to respond to you, understand your enquiry, and discuss potential work. We do not sell personal information." },
      { title: "Service providers and links", body: "This site may load fonts and film media from third-party providers, and may link to external websites. Those providers may receive technical information such as your IP address when your browser requests their content. Their own privacy terms apply." },
      { title: "Your choices", body: "You can choose not to submit an enquiry. To ask about or request deletion of information you have sent us, email hello@stairsky.com." },
      { title: "Updates", body: "We may update this policy as the site or our practices change. The date at the top indicates when it was last revised." },
    ],
  },
  "data-usage": {
    title: "Data usage",
    updated: "Last updated: October 2026",
    introduction: "Here is a plain-language overview of data handled through this website and the choices available to you.",
    sections: [
      { title: "Project enquiries", body: "The project form is processed in your browser and opens a pre-filled email addressed to hello@stairsky.com. You can review or edit the message before sending it. Nothing is sent until you choose to send that email." },
      { title: "Essential website data", body: "The site uses your browser to display the requested page and load its assets. We do not use this form to collect analytics or advertising profiles." },
      { title: "External media", body: "Film previews and web fonts are served by external providers. When loaded, those providers may process connection data under their own policies. You can disable media loading through your browser settings." },
      { title: "Retention and requests", body: "Messages you email us are retained only as needed to respond and manage our business relationship. Contact hello@stairsky.com if you have a question or want to request deletion." },
    ],
  },
} as const;

export type LegalDocument = keyof typeof legalContent;
