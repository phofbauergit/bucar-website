import { process } from "@/content/home";

export function Timeline() {
  return (
    <section id="ablauf" className="px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-v2-terracotta">Ablauf</p>
        <h2 className="mt-4 max-w-lg font-display text-4xl font-medium leading-tight text-v2-ink sm:text-5xl">
          So läuft Ihr Termin ab
        </h2>

        <ol className="relative mt-16 border-l border-v2-mist pl-8 sm:pl-12">
          {process.map((step) => (
            <li key={step.step} className="relative mb-14 last:mb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center bg-v2-bone font-display text-sm text-v2-terracotta ring-1 ring-v2-terracotta sm:-left-[57px] sm:h-10 sm:w-10"
              >
                {step.step}
              </span>
              <h3 className="font-display text-2xl text-v2-ink">{step.title}</h3>
              <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-v2-ink/65">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
