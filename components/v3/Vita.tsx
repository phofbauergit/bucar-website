import { about } from "@/content/home";
import { Reveal } from "@/components/shared/Reveal";
import { BrandMark } from "@/components/shared/BrandMark";

export function Vita() {
  return (
    <section id="vita" className="border-y border-v3-border bg-v3-muted/40 px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="flex aspect-[4/5] max-w-sm flex-col items-center justify-center border border-v3-border bg-v3-surface p-10">
            <BrandMark className="h-16 w-16 text-v3-signal/40" />
            <p className="mt-6 text-center font-mono-v3 text-[0.6rem] uppercase tracking-[0.25em] text-v3-subtle">
              Praxisimpressionen
              <br />
              Platzhalter
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal delay={60}>
            <p className="font-mono-v3 text-[0.65rem] uppercase tracking-[0.35em] text-v3-signal">Vita</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-v3-graphite sm:text-4xl">
              {about.heading}
            </h2>
            <p className="mt-2 text-sm font-medium text-v3-subtle">{about.subtitle}</p>
            <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-v3-graphite/85">{about.intro}</p>
          </Reveal>

          <Reveal delay={120}>
            <blockquote className="mt-8 border-l-2 border-v3-signal pl-5 text-base italic leading-relaxed text-v3-subtle">
              „{about.quote}"
            </blockquote>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-mono-v3 text-[0.6rem] uppercase tracking-[0.25em] text-v3-subtle">Werdegang</h3>
                <ul className="mt-4 space-y-2.5">
                  {about.milestones.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-v3-graphite/80">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-v3-signal" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-mono-v3 text-[0.6rem] uppercase tracking-[0.25em] text-v3-subtle">Qualifikationen</h3>
                <ul className="mt-4 space-y-2.5">
                  {about.qualifications.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-v3-graphite/80">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-v3-signal" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
