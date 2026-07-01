import { about, practice } from "@/content/home";
import { Reveal } from "@/components/shared/Reveal";
import { BrandMark } from "@/components/shared/BrandMark";

export function Vita() {
  return (
    <section id="vita" className="bg-v1-muted px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="flex flex-col items-start">
          <div className="flex aspect-[4/5] w-full max-w-sm items-center justify-center rounded-[2rem] border border-v1-border bg-v1-surface">
            <div className="flex flex-col items-center gap-3 text-v1-sage">
              <BrandMark className="h-16 w-16" />
              <span className="text-xs uppercase tracking-[0.2em]">Praxisimpressionen — Platzhalter</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-v1-sage">Über mich</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-v1-forest sm:text-4xl">
            {about.heading}
          </h2>
          <p className="mt-2 text-sm font-medium text-v1-ink/70">{about.subtitle}</p>
          <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-v1-ink/85">{about.intro}</p>

          <blockquote className="mt-6 max-w-xl border-l-2 border-v1-clay pl-5 font-display text-lg italic leading-relaxed text-v1-forest">
            „{about.quote}“
          </blockquote>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-v1-sage">Werdegang</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-v1-ink/80">
                {about.milestones.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-v1-sage" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-v1-sage">Qualifikationen</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-v1-ink/80">
                {about.qualifications.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-v1-clay" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-sm text-v1-ink/70">
            {practice.doctorName} · {practice.doctorTitle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
