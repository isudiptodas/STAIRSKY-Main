import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { legalContent, type LegalDocument } from "@/data/legal-content";

export default function LegalPage({ document }: { document: LegalDocument }) {
  const content = legalContent[document];

  return (
    <main className="min-h-screen bg-[#f5f4f1] px-6 py-8 sm:px-10 lg:px-16">
      <header className="mx-auto flex max-w-[1100px] items-center justify-between border-b border-black/15 pb-6">
        <Link className="font-display text-2xl uppercase tracking-[-0.08em]" href="/">STAIRSKY</Link>
        <Link className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.14em] transition-opacity hover:opacity-50" href="/"><FiArrowLeft className="size-4" />Back to home</Link>
      </header>
      <article className="mx-auto max-w-[850px] py-20 sm:py-28">
        <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">Stairsky Studio · {content.updated}</p>
        <h1 className="font-editorial text-5xl tracking-[-0.05em] sm:text-7xl">{content.title}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">{content.introduction}</p>
        <div className="mt-16 divide-y divide-black/15 border-y border-black/15">
          {content.sections.map((section) => <section className="py-7 sm:py-9" key={section.title}>
            <h2 className="font-editorial text-2xl">{section.title}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">{section.body}</p>
          </section>)}
        </div>
      </article>
      <footer className="mx-auto max-w-[1100px] border-t border-black/15 py-6 text-[10px] uppercase tracking-[0.13em] text-neutral-500">© {new Date().getFullYear()} Stairsky Studio</footer>
    </main>
  );
}
