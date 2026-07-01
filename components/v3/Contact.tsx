import { locations, practice } from "@/content/home";
import { Reveal } from "@/components/shared/Reveal";
import { PulsePhoneCTA } from "@/components/v3/PulsePhoneCTA";

export function Contact() {
  return (
    <section id="kontakt" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-xl">
          <p className="font-mono-v3 text-[0.65rem] uppercase tracking-[0.35em] text-v3-signal">Kontakt</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-v3-graphite sm:text-4xl">
            Rufen Sie an — ich freue mich auf Sie
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-v3-subtle">
            Terminvereinbarungen ausschließlich telefonisch. Für allgemeine Anliegen erreichen Sie die Praxis auch per
            E-Mail.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PulsePhoneCTA>{practice.phone}</PulsePhoneCTA>
            <a
              href={`mailto:${practice.email}`}
              className="inline-flex cursor-pointer items-center gap-2 border border-v3-border px-6 py-3.5 text-sm font-medium text-v3-graphite transition-colors hover:border-v3-signal hover:text-v3-signal"
            >
              {practice.email}
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {locations.map((loc, i) => (
            <Reveal key={loc.name} delay={i * 60}>
              <div className="border border-v3-border bg-v3-surface p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold text-v3-graphite">{loc.name}</h3>
                  {loc.primary && (
                    <span className="font-mono-v3 text-[0.55rem] uppercase tracking-[0.2em] text-v3-signal">
                      Hauptstandort
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm text-v3-subtle">{loc.address}</p>
                <p className="mt-4 font-mono-v3 text-sm font-medium text-v3-signal">{loc.hours}</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-wide text-v3-subtle/70">{loc.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
