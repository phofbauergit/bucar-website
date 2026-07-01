import { therapies, practice } from "@/content/home";
import { Seal } from "@/components/shared/Seal";
import { Reveal } from "@/components/shared/Reveal";

export function Schwerpunkte() {
  return (
    <section id="schwerpunkte" className="bg-v1-muted px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-v1-sage">Schwerpunkte</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight text-v1-forest sm:text-4xl">
            Folgende Therapien finden in der Praxis Anwendung
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {therapies.map((therapy, i) => (
            <Reveal key={therapy.slug} delay={i * 60}>
              <article className="group flex h-full flex-col rounded-2xl border border-v1-border bg-v1-surface p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_-12px_rgba(31,58,48,0.25)]">
                <Seal icon={therapy.icon} className="h-11 w-11 text-v1-forest" ringClassName="text-v1-sage opacity-60" />
                <h3 className="mt-4 font-display text-lg leading-snug text-v1-forest">{therapy.name}</h3>
                <p className="mt-1.5 text-xs font-medium uppercase tracking-wide text-v1-sage">{therapy.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-v1-ink/75">{therapy.teaser}</p>
                <a
                  href={`tel:${practice.phoneHref}`}
                  className="mt-5 inline-flex cursor-pointer items-center gap-1.5 self-start rounded-full border border-v1-sage/60 px-4 py-1.5 text-xs font-medium text-v1-forest transition-colors duration-200 group-hover:border-v1-forest group-hover:bg-v1-forest group-hover:text-v1-bg"
                >
                  Termin erfragen
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
