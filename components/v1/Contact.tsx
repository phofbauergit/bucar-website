import { locations, practice } from "@/content/home";
import { Reveal } from "@/components/shared/Reveal";

export function Contact() {
  return (
    <section id="kontakt" className="bg-v1-forest px-6 py-20 text-v1-bg lg:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-v1-clay">Kontakt</p>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
            Rufen Sie an — ich freue mich auf Sie
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-v1-bg/85">
            Terminvereinbarungen ausschließlich telefonisch. Für allgemeine Anliegen erreichen Sie die Praxis
            auch per E-Mail.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={`tel:${practice.phoneHref}`}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-v1-bg px-6 py-3.5 text-sm font-medium text-v1-forest transition-colors duration-200 hover:bg-v1-clay"
            >
              {practice.phone}
            </a>
            <a
              href={`mailto:${practice.email}`}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-v1-bg/40 px-6 py-3.5 text-sm font-medium text-v1-bg transition-colors duration-200 hover:border-v1-bg hover:bg-v1-bg/10"
            >
              {practice.email}
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {locations.map((location, i) => (
            <Reveal key={location.name} delay={i * 80}>
              <div className="rounded-2xl border border-v1-bg/15 bg-v1-bg/5 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl">{location.name}</h3>
                  {location.primary && (
                    <span className="rounded-full bg-v1-clay/90 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-v1-forest">
                      Hauptstandort
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-v1-bg/85">{location.address}</p>
                <p className="mt-3 text-sm font-medium text-v1-clay">{location.hours}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-v1-bg/60">{location.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
