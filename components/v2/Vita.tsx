import { about, practice } from "@/content/home";
import { BrandMark } from "@/components/shared/BrandMark";

export function Vita() {
  return (
    <section id="vita" className="border-b border-v2-mist/50 px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-v2-terracotta">Vita</p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-v2-ink sm:text-5xl">
            {about.heading}
          </h2>
          <p className="mt-3 text-sm font-medium uppercase tracking-wide text-v2-ink/50">{about.subtitle}</p>
          <blockquote className="mt-8 border-l border-v2-terracotta pl-6 font-display text-xl italic leading-relaxed text-v2-ink">
            „{about.quote}“
          </blockquote>
          <p className="mt-8 text-sm text-v2-ink/60">
            {practice.doctorName} · {practice.doctorTitle}
          </p>
        </div>

        <div className="grid gap-8">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-v2-ink/45">Werdegang</h3>
            <ul className="mt-4 space-y-3">
              {about.milestones.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-v2-ink/75">
                  <span aria-hidden="true" className="mt-2 h-1 w-4 shrink-0 bg-v2-terracotta" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-v2-ink/45">Qualifikationen</h3>
            <ul className="mt-4 space-y-3">
              {about.qualifications.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-v2-ink/75">
                  <span aria-hidden="true" className="mt-2 h-1 w-4 shrink-0 bg-v2-jade" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4 border border-v2-mist p-5">
            <BrandMark className="h-9 w-9 shrink-0 text-v2-terracotta" />
            <p className="text-xs uppercase tracking-[0.2em] text-v2-ink/50">
              Praxisimpressionen — Platzhalter bis zum Fotoshooting
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
