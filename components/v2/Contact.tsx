import { locations, practice } from "@/content/home";
import { MagneticCTA } from "@/components/v2/MagneticCTA";

export function Contact() {
  return (
    <section id="kontakt" className="px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-v2-terracotta">Kontakt</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-v2-ink sm:text-5xl">
              Rufen Sie an
            </h2>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-v2-ink/65">
              Terminvereinbarungen ausschließlich telefonisch. Für allgemeine Anliegen erreichen Sie die Praxis
              auch per E-Mail.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <MagneticCTA className="inline-flex cursor-pointer items-center gap-2 bg-v2-ink px-7 py-4 text-sm font-medium text-v2-bone transition-colors duration-200 hover:bg-v2-terracotta">
                {practice.phone}
              </MagneticCTA>
              <a
                href={`mailto:${practice.email}`}
                className="inline-flex cursor-pointer items-center gap-2 border border-v2-ink/25 px-7 py-4 text-sm font-medium text-v2-ink transition-colors duration-200 hover:border-v2-terracotta hover:text-v2-terracotta"
              >
                {practice.email}
              </a>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden bg-v2-mist/40 sm:grid-cols-2">
            {locations.map((location) => (
              <div key={location.name} className="bg-v2-parchment p-7">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl text-v2-ink">{location.name}</h3>
                  {location.primary && (
                    <span className="bg-v2-terracotta px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-v2-bone">
                      Haupt&shy;standort
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm text-v2-ink/70">{location.address}</p>
                <p className="mt-4 text-sm font-medium text-v2-jade">{location.hours}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-v2-ink/45">{location.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
