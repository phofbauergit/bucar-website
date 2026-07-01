import { hero, practice, philosophy } from "@/content/home";
import { MeridianFigure } from "@/components/shared/MeridianFigure";
import { DrawOnScroll } from "@/components/shared/DrawOnScroll";
import { TripleClickReveal } from "@/components/v2/TripleClickReveal";
import { MagneticCTA } from "@/components/v2/MagneticCTA";

export function Hero() {
  return (
    <section id="top" className="relative border-b border-v2-mist/50 px-6 pb-20 pt-14 lg:px-12 lg:pb-28 lg:pt-20">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-v2-terracotta">
            {practice.doctorTitle}
          </p>
          <h1 className="mt-5 font-display text-[2.75rem] font-medium leading-[1.02] tracking-tight text-v2-ink sm:text-6xl lg:text-[4.2rem]">
            {hero.headline}
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-v2-ink/75">{hero.intro}</p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <MagneticCTA className="inline-flex cursor-pointer items-center gap-2 bg-v2-ink px-7 py-4 text-sm font-medium tracking-wide text-v2-bone transition-colors duration-200 hover:bg-v2-terracotta">
              {hero.ctaPrimary} — {practice.phone}
            </MagneticCTA>
            <a
              href="#therapien"
              className="inline-flex cursor-pointer items-center gap-2 border border-v2-ink/25 px-7 py-4 text-sm font-medium text-v2-ink transition-colors duration-200 hover:border-v2-terracotta hover:text-v2-terracotta"
            >
              {hero.ctaSecondary}
            </a>
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-v2-ink/45">
            Huglfing · Grünwald — Terminvereinbarung ausschließlich telefonisch
          </p>
        </div>

        <div className="relative bg-v2-ink p-3 lg:p-5">
          <TripleClickReveal quote={philosophy.thichNhatHanh} source={philosophy.thichNhatHanhSource}>
            <DrawOnScroll className="relative -translate-x-2 -translate-y-2 bg-v2-parchment p-6 lg:-translate-x-3 lg:-translate-y-3">
              <MeridianFigure variant="ink" titleId="hero-meridian-v2" className="w-full text-v2-terracotta" />
            </DrawOnScroll>
          </TripleClickReveal>
          <p className="mt-2 text-center text-[0.65rem] uppercase tracking-[0.3em] text-v2-bone/50">
            Dreimal klicken für ein verborgenes Zitat
          </p>
        </div>
      </div>
    </section>
  );
}
