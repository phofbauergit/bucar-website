import { therapies, practice } from "@/content/home";
import { Seal } from "@/components/shared/Seal";

/** Offset bento grid — deliberately uneven spans instead of a uniform 3-col
 * template. The first and fifth cards span two columns to break the grid. */
const SPANS = ["lg:col-span-2", "", "", "lg:col-span-2", "", "", "", ""];

export function Therapies() {
  return (
    <section id="therapien" className="border-b border-v2-mist/50 bg-v2-parchment px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-v2-terracotta">Therapien</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-medium leading-tight text-v2-ink sm:text-5xl">
              Ein Spektrum, kein Standardprogramm
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-v2-ink/60">
            Einzeln oder kombiniert — immer ausgehend von Ihrer individuellen Diagnostik.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden bg-v2-mist/40 sm:grid-cols-2 lg:grid-cols-4">
          {therapies.map((therapy, i) => (
            <article
              key={therapy.slug}
              className={`group flex flex-col justify-between bg-v2-bone p-7 transition-colors duration-200 hover:bg-v2-ink ${SPANS[i] ?? ""}`}
            >
              <div>
                <Seal
                  icon={therapy.icon}
                  className="h-10 w-10 text-v2-terracotta transition-colors duration-200 group-hover:text-v2-jade"
                  ringClassName="text-v2-jade opacity-50"
                />
                <h3 className="mt-5 font-display text-xl leading-snug text-v2-ink transition-colors duration-200 group-hover:text-v2-bone">
                  {therapy.name}
                </h3>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-v2-terracotta transition-colors duration-200 group-hover:text-v2-jade">
                  {therapy.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-v2-ink/70 transition-colors duration-200 group-hover:text-v2-bone/80">
                  {therapy.teaser}
                </p>
              </div>
              <a
                href={`tel:${practice.phoneHref}`}
                className="mt-6 inline-flex w-fit cursor-pointer items-center gap-2 border-b border-v2-ink/30 pb-0.5 text-xs font-semibold uppercase tracking-wide text-v2-ink transition-colors duration-200 group-hover:border-v2-jade group-hover:text-v2-jade"
              >
                Termin erfragen
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
