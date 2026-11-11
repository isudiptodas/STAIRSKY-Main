"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { FiAlertCircle, FiArrowDownRight, FiArrowLeft, FiArrowRight, FiArrowUpRight, FiCheck, FiGlobe, FiMenu, FiPause, FiPlay, FiPlus, FiX } from "react-icons/fi";
import { copy, heroFilms, languages, projects, services, workCategories, type Language } from "@/data/site-content";

const sectionIds = ["about", "areas", "works", "services", "contact"];

type EnquiryToast = { success: boolean; message: string };

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const loopItems = [...items, ...items];

  return (
    <div className="ticker-wrap overflow-hidden whitespace-nowrap">
      <div className={`ticker-track flex w-max items-center ${reverse ? "reverse" : ""}`}>
        {loopItems.map((item, index) => <span className="flex items-center gap-8 px-6 sm:gap-10 sm:px-8" key={`${item}-${index}`}><span>{item}</span><span className="text-[#d5ff54] text-[0.7em]">✳</span></span>)}
      </div>
    </div>
  );
}

function PlayPause({ playing, onClick, label }: { playing: boolean; onClick: () => void; label: string }) {
  return <button aria-label={label} className="group flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 hover:scale-105 sm:size-14" onClick={onClick}>{playing ? <FiPause className="size-4 fill-current" /> : <FiPlay className="ml-1 size-4 fill-current" />}</button>;
}

function PortfolioFilm({ film, index, watch, title, industry, filmLabel }: { film: (typeof projects)[number]["films"][number]; index: number; watch: string; title: [string, string]; industry: string; filmLabel: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().then(() => setPlaying(!video.paused)).catch(() => setPlaying(false));
  }, []);

  return (
    <article className="film-card group">
      <div className="relative aspect-[0.79] overflow-hidden bg-neutral-200">
        <video autoPlay className="project-video absolute inset-0 h-full w-full object-cover" loop muted playsInline poster={`https://images.unsplash.com/${film.poster}?auto=format&fit=crop&w=900&q=80`} preload="none" ref={videoRef} onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)}>
          <source src={film.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
          <PlayPause label={`${playing ? "Pause" : watch}: ${film.client}`} playing={playing} onClick={() => {
            if (!videoRef.current) return;
            if (videoRef.current.paused) videoRef.current.play().catch(() => setPlaying(false));
            else videoRef.current.pause();
          }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-6">
          <p className="mb-2 text-[9px] uppercase tracking-[0.17em] text-white/70">{industry} <span className="px-1">/</span> {filmLabel} 0{index + 1}</p>
          <h3 className="font-editorial text-2xl leading-tight sm:text-3xl">{title[0]} <span className="italic">{title[1]}</span></h3>
          <p className="mt-3 text-[10px] uppercase tracking-[0.14em] text-white/70">{film.client}</p>
        </div>
      </div>
    </article>
  );
}

export default function Page() {
  const [language, setLanguage] = useState<Language>("en");
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHero, setActiveHero] = useState(0);
  const [heroPlaying, setHeroPlaying] = useState(true);
  const [activeWork, setActiveWork] = useState(0);
  const [showAllServices, setShowAllServices] = useState(false);
  const [isProjectFormValid, setIsProjectFormValid] = useState(false);
  const [isSubmittingProject, setIsSubmittingProject] = useState(false);
  const [enquiryToast, setEnquiryToast] = useState<EnquiryToast | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const touchStartX = useRef<number | null>(null);
  const t = copy[language];
  const activeFilm = heroFilms[activeHero];
  const activeProjects = projects[activeWork];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    let active = true;
    videoRef.current?.play().then(() => {
      if (active) setHeroPlaying(true);
    }).catch(() => {
      if (active) setHeroPlaying(false); 
    });

    return () => { active = false; };
  }, [activeHero]);

  const changeHero = (direction: number) => {
    setActiveHero((current) => (current + direction + heroFilms.length) % heroFilms.length);
  };

  useEffect(() => {
    if (!enquiryToast) return;
    const timeout = window.setTimeout(() => setEnquiryToast(null), 6000);
    return () => window.clearTimeout(timeout);
  }, [enquiryToast]);

  const updateProjectFormValidity = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const formData = new FormData(form);
    const requiredFields = ["name", "email", "category", "message"];
    setIsProjectFormValid(
      form.checkValidity() &&
      requiredFields.every((field) => String(formData.get(field) ?? "").trim().length > 0),
    );
  };

  const handleProjectSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity() || !isProjectFormValid || isSubmittingProject) return;

    setIsSubmittingProject(true);
    setEnquiryToast(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      const result: EnquiryToast = await response.json();
      setEnquiryToast(result);

      if (response.ok && result.success) {
        form.reset();
        setIsProjectFormValid(false);
      }
    } catch {
      setEnquiryToast({ success: false, message: "We couldn't send your enquiry. Please try again." });
    } finally {
      setIsSubmittingProject(false);
    }
  };

  return (
    <main className="overflow-hidden">
      <header className="relative z-50 flex h-[76px] items-center justify-between bg-white px-5 sm:px-8 lg:h-[84px] lg:px-14">
        <Link aria-label="Stairsky home" className="flex h-full w-[118px] items-center" href="#home">
          <Image alt="Stairsky" className="h-[74px] w-[92px] object-contain object-left" height={645} priority src="/assets/logo.png" width={803} />
          <span className="sr-only">Stairsky</span>
        </Link>
        <nav aria-label="Main navigation" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex xl:gap-11">
          {t.nav.map((label, index) => <a className="text-[11px] font-medium uppercase tracking-[0.11em] transition-opacity hover:opacity-50" href={`#${sectionIds[index]}`} key={label}>{label}</a>)}
        </nav>
        <div className="relative ml-auto flex items-center gap-3">
          <button aria-expanded={languageOpen} aria-label="Choose language" className="flex h-11 min-w-14 items-center justify-center gap-2 bg-black px-3 text-xs font-medium text-white transition-colors hover:bg-[#262626]" onClick={() => setLanguageOpen(!languageOpen)}><FiGlobe className="size-3.5" /><span>{languages.find((item) => item.code === language)?.label}</span></button>
          <AnimatePresence>
            {languageOpen && <motion.div animate={{ opacity: 1, y: 0 }} className="absolute right-0 top-[calc(100%+10px)] z-50 min-w-48 border border-black/10 bg-white p-2 shadow-xl" exit={{ opacity: 0, y: -8 }} initial={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}>
              {languages.map((item) => <button className={`flex w-full items-center justify-between px-3 py-2.5 text-left text-sm text-black transition-colors hover:bg-[#f2f1ed] ${language === item.code ? "font-semibold" : ""}`} key={item.code} onClick={() => { setLanguage(item.code); setLanguageOpen(false); }}><span>{item.name}</span><span className="text-[10px] text-neutral-500">{item.label}</span></button>)}
            </motion.div>}
          </AnimatePresence>
          <button aria-expanded={mobileMenuOpen} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} className="flex size-11 items-center justify-center border border-black/10 text-black lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <FiX className="size-5" /> : <FiMenu className="size-5" />}</button>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && <motion.nav animate={{ opacity: 1, height: "auto" }} className="absolute left-0 right-0 top-full overflow-hidden border-t border-black/10 bg-white px-6 lg:hidden" exit={{ opacity: 0, height: 0 }} initial={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}><div className="flex flex-col py-3">{t.nav.map((label, index) => <a className="border-b border-black/5 py-4 text-xs font-medium uppercase tracking-[0.14em]" href={`#${sectionIds[index]}`} key={label} onClick={() => setMobileMenuOpen(false)}>{label}</a>)}</div></motion.nav>}
        </AnimatePresence>
      </header>

      <section aria-label="Featured films" className="relative isolate flex min-h-[calc(100svh-76px)] items-end overflow-hidden bg-[#161616] text-white lg:min-h-[calc(100svh-84px)]" id="home" onTouchEnd={(event) => { if (touchStartX.current === null) return; const delta = event.changedTouches[0].clientX - touchStartX.current; if (Math.abs(delta) > 48) changeHero(delta > 0 ? -1 : 1); touchStartX.current = null; }} onTouchStart={(event) => { touchStartX.current = event.touches[0].clientX; }}>
        <video aria-label={activeFilm.kicker} autoPlay className="absolute inset-0 -z-20 h-full w-full object-cover" key={activeFilm.video} loop muted playsInline poster={activeFilm.poster} preload="metadata" ref={videoRef} onCanPlay={() => { if (heroPlaying) videoRef.current?.play().catch(() => setHeroPlaying(false)); }} onPlay={() => setHeroPlaying(true)}>
          <source src={activeFilm.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/25 to-black/5" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
        <div className="relative z-10 w-full px-6 pb-12 sm:px-10 sm:pb-16 lg:px-16 lg:pb-[7.5rem]">
          <AnimatePresence mode="wait">
            <motion.div animate={{ opacity: 1, y: 0 }} className="max-w-3xl" exit={{ opacity: 0, y: 12 }} initial={{ opacity: 0, y: 14 }} key={`${language}-${activeHero}`} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
              <h1 className="font-editorial max-w-[800px] text-[clamp(2.8rem,8vw,7.2rem)] leading-[0.99] tracking-[-0.065em]">{t.heroTitles[activeHero]}</h1>
              <p className="mt-5 max-w-md text-sm leading-6 text-white/75 sm:text-base sm:leading-7">{t.heroDescription}</p>
              <a className="mt-7 inline-flex items-center gap-3 border-b border-white/60 pb-2 text-[10px] font-medium uppercase tracking-[0.17em] transition-colors hover:border-[#d5ff54] hover:text-[#d5ff54]" href="#contact">{t.heroCta}<FiArrowDownRight className="size-4" /></a>
            </motion.div>
          </AnimatePresence>
          <div className="mt-10 flex items-end justify-between sm:mt-12">
            <div className="flex items-center gap-2.5 sm:gap-3" role="tablist" aria-label="Choose featured film">
              {heroFilms.map((film, index) => <button aria-label={`Show film ${index + 1}`} aria-selected={activeHero === index} className="group flex h-6 items-center" key={film.video} onClick={() => setActiveHero(index)} role="tab"><span className={`h-[2px] transition-all duration-500 ${activeHero === index ? "w-10 bg-[#d5ff54] sm:w-16" : "w-5 bg-white/50 group-hover:bg-white sm:w-8"}`} /></button>)}
              <span className="ml-2 text-[10px] tracking-[0.12em] text-white/70">0{activeHero + 1} <span className="px-1 text-white/40">/</span> 0{heroFilms.length}</span>
            </div>
            <div className="flex items-center gap-2">
              <PlayPause label={heroPlaying ? "Pause featured film" : "Play featured film"} playing={heroPlaying} onClick={() => {
                if (!videoRef.current) return;
                if (videoRef.current.paused) videoRef.current.play().then(() => setHeroPlaying(true)).catch(() => setHeroPlaying(false));
                else { videoRef.current.pause(); setHeroPlaying(false); }
              }} />
              <button aria-label="Previous film" className="hidden size-12 items-center justify-center rounded-full border border-white/40 transition-colors hover:bg-white hover:text-black sm:flex" onClick={() => changeHero(-1)}><FiArrowLeft className="size-4" /></button>
              <button aria-label="Next film" className="flex size-12 items-center justify-center rounded-full border border-white/40 transition-colors hover:bg-white hover:text-black sm:size-14" onClick={() => changeHero(1)}><FiArrowRight className="size-4" /></button>
            </div>
          </div>
        </div>
        <span className="absolute right-6 top-1/2 hidden -rotate-90 text-[9px] uppercase tracking-[0.25em] text-white/70 lg:block">Scroll to explore</span>
      </section>

      <section className="bg-[#f5f4f1] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40" id="about">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[0.75fr_1.25fr] md:gap-20">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}>
            <span className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500"><span className="size-1.5 rounded-full bg-black" />{t.aboutLabel}</span>
            <p className="font-editorial mt-7 max-w-[320px] text-2xl leading-[1.25] sm:text-[2rem]">{t.aboutTitle}</p>
          </motion.div>
          <motion.div className="space-y-6 md:pt-12" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true, amount: 0.25 }}>
            {t.aboutParagraphs.map((paragraph) => <p className="max-w-[740px] text-[15px] leading-7 text-neutral-600 sm:text-[17px] sm:leading-8" key={paragraph}>{paragraph}</p>)}
          </motion.div>
        </div>
      </section>

      <section aria-label="Our capabilities" className="bg-black py-5 text-white sm:py-6">
        <Marquee items={t.marquee} />
      </section>

      <section className="relative isolate flex min-h-[600px] items-center overflow-hidden bg-black px-6 py-24 text-white sm:min-h-[740px] sm:px-10 lg:min-h-[850px] lg:px-16">
        <div className="model-rings absolute inset-y-0 right-[10%] z-20 flex w-[78%] items-center justify-center sm:right-[-8%] sm:w-[65%]">
          <Image alt="Side profile portrait" className="absolute bottom-0 right-[4%] z-30 h-[68%] w-auto max-w-[74%] object-contain object-bottom sm:right-[10%] sm:h-[96%] lg:h-[82%]" height={668} src="/assets/side-profile-model.png" width={373} />
        </div>
        <div className="relative z-0 mx-auto w-full max-w-[1440px]">
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}>
            <p className="mb-6 text-[10px] uppercase tracking-[0.22em] text-white/60 sm:text-xs">{t.filmEyebrow}</p>
            <p className="font-editorial text-[clamp(1.7rem,4vw,3rem)] leading-tight">{t.filmTitle}</p>
            <h2 className="font-display mt-1 w-full bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-[clamp(1.5rem,6vw,2.5rem)] uppercase leading-[0.9] text-transparent sm:text-[clamp(3rem,9vw,10rem)]">{t.filmWord}</h2>
            <p className="mt-9 max-w-sm text-sm leading-6 text-white/65 sm:text-base">{t.filmDescription}</p>
            <a className="mt-8 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] transition-colors hover:text-[#d5ff54]" href="#works">See what we make <FiArrowUpRight className="size-4" /></a>
          </motion.div>
        </div>
        <span className="absolute bottom-7 left-6 text-[9px] uppercase tracking-[0.2em] text-white/40 sm:left-10 lg:left-16">ST / 001</span>
      </section>

      <section className="bg-[#121212] py-20 text-white sm:py-28" id="areas">
        <div className="px-6 text-center sm:px-10">
          <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-white/50">{t.areaLabel}</p>
          <h2 className="font-editorial text-3xl tracking-tight sm:text-5xl">{t.areaTitle}</h2>
        </div>
        <div className="area-mask mt-12 space-y-3 overflow-hidden sm:mt-16 sm:space-y-5">
          {[t.areas, [...t.areas].reverse()].map((row, rowIndex) => <div className="ticker-wrap overflow-hidden" key={rowIndex}><div className={`ticker-track area-track flex w-max items-center gap-3 sm:gap-5 ${rowIndex === 1 ? "reverse" : ""}`}>{[...row, ...row].map((area, index) => <span className="shrink-0 border border-white/15 bg-white px-5 py-3 text-[11px] font-medium text-black sm:px-7 sm:py-4 sm:text-sm" key={`${area}-${index}`}>{area}</span>)}</div></div>)}
        </div>
      </section>

      <section className="bg-[#f5f4f1] px-6 py-24 sm:px-10 sm:py-32 lg:px-16" id="works">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <span className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500"><span className="size-1.5 rounded-full bg-black" />{t.workLabel}</span>
              <h2 className="font-editorial mt-6 max-w-2xl text-4xl leading-[1.12] tracking-[-0.045em] sm:text-6xl">{t.workTitle}</h2>
              <p className="mt-5 text-sm text-neutral-500">{t.workDescription}</p>
            </div>
            <span className="hidden text-[10px] uppercase tracking-[0.16em] text-neutral-400 sm:block">2024 — 2026</span>
          </div>
          <div className="mt-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-14">
            {t.workCategories.map((label, index) => <button aria-pressed={activeWork === index} className={`shrink-0 rounded-full border px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.1em] transition-colors sm:px-5 sm:text-[11px] ${activeWork === index ? "border-black bg-black text-white" : "border-black/15 text-neutral-500 hover:border-black hover:text-black"}`} key={label} onClick={() => setActiveWork(index)}>{label}</button>)}
          </div>
          <AnimatePresence mode="wait">
            <motion.div animate={{ opacity: 1, y: 0 }} className="mt-7 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3" exit={{ opacity: 0, y: 12 }} initial={{ opacity: 0, y: 12 }} key={activeWork} transition={{ duration: 0.32 }}>
              {activeProjects.films.map((film, index) => <PortfolioFilm film={film} filmLabel={t.filmLabel} index={index} industry={t.workCategories[workCategories.indexOf(film.industry)]} key={film.id} title={t.workFilmTitles[index]} watch={t.watch} />)}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="bg-white px-6 py-24 sm:px-10 sm:py-32 lg:px-16" id="services">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 sm:flex-row sm:items-end">
            <div>
              <span className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500"><span className="size-1.5 rounded-full bg-black" />{t.serviceLabel}</span>
              <h2 className="font-editorial mt-6 text-4xl tracking-[-0.04em] sm:text-6xl">{t.serviceTitle}</h2>
            </div>
            <button aria-expanded={showAllServices} className="inline-flex w-fit items-center gap-3 border-b border-black/40 pb-2 text-[10px] font-medium uppercase tracking-[0.15em] transition-colors hover:border-black" onClick={() => setShowAllServices(!showAllServices)}>{showAllServices ? t.viewLess : t.viewAll}<FiPlus className={`size-4 transition-transform duration-300 ${showAllServices ? "rotate-45" : ""}`} /></button>
          </div>
          <div className="divide-y divide-black/15 border-y border-black/15">
            <AnimatePresence initial={false}>
              {services.slice(0, showAllServices ? services.length : 1).map((service, index) => <motion.article animate={{ opacity: 1, height: "auto" }} className="grid gap-4 overflow-hidden py-7 sm:grid-cols-[55px_1fr_1fr] sm:items-center sm:gap-8 sm:py-9" exit={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }} initial={{ opacity: 0, height: 0 }} key={service.number} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                <span className="text-[10px] tracking-[0.1em] text-neutral-400">{service.number}</span>
                <h3 className="font-editorial text-2xl tracking-tight sm:text-3xl">{language === "en" ? service.name : t.services[index][0]}</h3>
                <p className="max-w-md text-sm leading-6 text-neutral-500">{language === "en" ? service.description : t.services[index][1]}</p>
              </motion.article>)}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-16" id="contact">
        <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div className="flex flex-col justify-between">
            <div>
              <span className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/55"><span className="size-1.5 rounded-full bg-[#d5ff54]" />{t.projectLabel}</span>
              <h2 className="font-editorial mt-7 max-w-xl text-5xl leading-[1.08] tracking-[-0.05em] sm:text-7xl">{t.projectTitle}</h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-white/60 sm:text-base">{t.projectDescription}</p>
            </div>
            <div className="mt-12 lg:mt-24">
              <p className="mb-3 text-[9px] uppercase tracking-[0.18em] text-white/45">{t.emailLabel}</p>
              <a className="font-editorial border-b border-white/35 pb-1 text-2xl transition-colors hover:border-[#d5ff54] hover:text-[#d5ff54] sm:text-3xl" href="mailto:hello@stairsky.com">hello@stairsky.com</a>
            </div>
          </div>
          <form className="grid gap-x-5 gap-y-7 sm:grid-cols-2" onChange={updateProjectFormValidity} onInput={updateProjectFormValidity} onSubmit={handleProjectSubmit}>
            <label className="contact-field">{t.formName}<input autoComplete="name" className="contact-input" name="name" placeholder="Jane Smith" required /></label>
            <label className="contact-field">{t.formEmail}<input autoComplete="email" className="contact-input" name="email" placeholder="jane@company.com" required type="email" /></label>
            <label className="contact-field">{t.formPhone}<input autoComplete="tel" className="contact-input" name="phone" placeholder="+91 00000 00000" type="tel" /></label>
            <label className="contact-field">{t.formCategory}<select className="contact-input appearance-none" defaultValue="" name="category" required>{t.formOptions.map((option, index) => <option className="bg-black text-white" disabled={index === 0} key={option} value={index === 0 ? "" : option}>{option}</option>)}</select></label>
            <label className="contact-field sm:col-span-2">{t.formMessage}<textarea className="contact-input min-h-24 resize-y" name="message" placeholder="What are you dreaming up?" required rows={2} /></label>
            <div className="sm:col-span-2">
              <button aria-busy={isSubmittingProject} className="group inline-flex items-center gap-4 border border-white/35 px-5 py-4 text-[10px] font-medium uppercase tracking-[0.15em] text-white transition-colors hover:border-[#d5ff54] hover:bg-[#d5ff54] hover:text-black disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/35 disabled:hover:bg-transparent disabled:hover:text-white" disabled={!isProjectFormValid || isSubmittingProject} type="submit">{t.formSubmit}{isSubmittingProject ? <span aria-hidden="true" className="size-4 animate-spin rounded-full border border-current border-t-transparent" /> : <FiArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}</button>
              <p className="mt-4 text-[10px] leading-5 text-white/40">{t.formNote}</p>
            </div>
          </form>
        </div>
        <AnimatePresence>
          {enquiryToast && (
            <motion.div
              animate={{ opacity: 1, y: 0, scale: 1 }}
              aria-live={enquiryToast.success ? "polite" : "assertive"}
              className={`fixed bottom-6 right-6 z-[100] flex max-w-[calc(100vw-3rem)] items-start gap-3 border px-5 py-4 text-sm shadow-2xl sm:bottom-8 sm:right-8 sm:max-w-md ${enquiryToast.success ? "border-[#d5ff54]/40 bg-[#171a0d] text-white" : "border-red-300/40 bg-[#201010] text-white"}`}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              role={enquiryToast.success ? "status" : "alert"}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              {enquiryToast.success ? <FiCheck className="mt-0.5 size-5 shrink-0 text-[#d5ff54]" /> : <FiAlertCircle className="mt-0.5 size-5 shrink-0 text-red-300" />}
              <p className="flex-1 leading-6">{enquiryToast.message}</p>
              <button aria-label="Dismiss notification" className="ml-1 shrink-0 p-0.5 text-white/60 transition-colors hover:text-white" onClick={() => setEnquiryToast(null)} type="button"><FiX className="size-4" /></button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <footer className="bg-black px-6 pb-8 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1440px] border-t border-white/15 pt-8">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <Link className="font-display text-3xl uppercase tracking-[-0.08em]" href="#home">STAIRSKY</Link>
              <p className="mt-3 text-xs text-white/45">{t.footerLine}</p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-[9px] uppercase tracking-[0.12em] text-white/55 sm:justify-end">
              {t.footerLinks.map((label, index) => <Link className="transition-colors hover:text-white" href={`/${["terms", "privacy", "data-usage"][index]}`} key={label}>{label}</Link>)}
              <a className="inline-flex items-center gap-1 transition-colors hover:text-white" href="https://www.instagram.com/" rel="noreferrer" target="_blank">Instagram <FiArrowUpRight className="size-3" /></a>
            </div>
          </div>
          <div className="mt-10 flex justify-between border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.12em] text-white/35"><span>© {new Date().getFullYear()} Stairsky Studio</span><a href="#home">Back to top ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
