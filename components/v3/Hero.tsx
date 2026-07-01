import { hero, practice, pillars } from "@/content/home";
import { Reveal } from "@/components/shared/Reveal";
import { MeridianGrid } from "@/components/v3/MeridianGrid";
import { KineticHeadline } from "@/components/v3/KineticHeadline";
import { ReadoutChip } from "@/components/v3/ReadoutChip";
import { BreathWidget } from "@/components/v3/BreathWidget";
import { PulsePhoneCTA } from "@/components/v3/PulsePhoneCTA";
import { PulseLine } from "@/components/v3/PulseLine";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-v3-border">
      <MeridianGrid />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10 lg:py-24">
        <div>
          <Reveal>
            <p className="font-mono-v3 text-[0.65rem] uppercase tracking-[0.35em] text-v3-signal">
              {practice.doctorTitle}
            </p>
          </Reveal>

          <Reveal delay={60}>
            <KineticHeadline className="mt-5 text-4xl leading-[1.02] text-v3-graphite sm:text-5xl lg:text-[3.4rem]">
              {hero.headline}
            </KineticHeadline>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-lg text-[1.02rem] leading-relaxed text-v3-subtle">{hero.intro}</p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <ReadoutChip value={28} suffix="+" label="Jahre TCM-Erfahrung" delay={0} />
              <ReadoutChip value={2} label="Praxisstandorte" delay={120} />
              <ReadoutChip value={80} suffix="%" label="Banerji-Erfolgsquote" delay={240} />
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <PulsePhoneCTA>
                {hero.ctaPrimary} — {practice.phone}
              </PulsePhoneCTA>
              <a
                href="#befunde"
                className="inline-flex cursor-pointer items-center gap-2 border border-v3-border px-6 py-3.5 text-sm font-medium text-v3-graphite transition-colors hover:border-v3-signal hover:text-v3-signal"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-6 font-mono-v3 text-[0.6rem] uppercase tracking-[0.2em] text-v3-subtle/70">
              Huglfing · Grünwald — Termin ausschließlich telefonisch
            </p>
          </Reveal>
        </div>

        <Reveal delay={100} className="flex flex-col items-center justify-center gap-8">
          <BreathWidget />

          <div className="w-full max-w-xs space-y-4">
            {pillars.slice(0, 2).map((pillar) => (
              <div key={pillar.title} className="border-l-2 border-v3-signal/30 pl-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-v3-graphite">{pillar.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-v3-subtle">{pillar.body.slice(0, 90)}…</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="relative px-6 pb-10 lg:px-10">
        <PulseLine className="mx-auto max-w-4xl" />
      </div>
    </section>
  );
}
