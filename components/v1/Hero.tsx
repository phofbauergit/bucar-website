import { hero, practice, pillars } from "@/content/home";
import { MeridianFigure } from "@/components/shared/MeridianFigure";
import { Reveal } from "@/components/shared/Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-16 pt-10 lg:px-10 lg:pb-24 lg:pt-14">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-sm lg:mx-0">
          <MeridianFigure variant="calm" titleId="hero-meridian-v1" className="w-full text-v1-forest" />
        </Reveal>

        <Reveal delay={80}>
          <div className="rounded-[2rem] border border-v1-border/70 bg-v1-surface/80 p-7 shadow-[0_1px_2px_rgba(45,74,62,0.06)] backdrop-blur-sm sm:p-10 lg:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-v1-sage">
              {practice.doctorTitle} · {practice.focus.replace("Schwerpunkt ", "")}
            </p>
            <h1 className="mt-3 font-display text-4xl leading-[1.08] text-v1-forest sm:text-5xl">
              {hero.headline}
            </h1>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-v1-ink/85">
              {hero.intro}
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <li key={pillar.title} className="flex items-start gap-2.5 text-sm text-v1-ink/80">
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-v1-sage" fill="none" aria-hidden="true">
                    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.3" opacity="0.5" />
                    <path d="M6 10.2l2.6 2.6L14 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{pillar.title}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${practice.phoneHref}`}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-v1-forest px-6 py-3.5 text-sm font-medium text-v1-bg transition-colors duration-200 hover:bg-v1-ink"
              >
                {hero.ctaPrimary} — {practice.phone}
              </a>
              <a
                href="#schwerpunkte"
                className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-v1-forest underline-offset-4 transition-colors hover:text-v1-ink hover:underline"
              >
                {hero.ctaSecondary}
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-v1-ink/50">
              Huglfing · Grünwald — bitte telefonisch anmelden
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
