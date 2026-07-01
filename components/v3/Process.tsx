import { process } from "@/content/home";
import { Reveal } from "@/components/shared/Reveal";
import { PulseLine } from "@/components/v3/PulseLine";

export function Process() {
  return (
    <section id="ablauf" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono-v3 text-[0.65rem] uppercase tracking-[0.35em] text-v3-signal">Protokoll</p>
          <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold leading-tight text-v3-graphite sm:text-4xl">
            So läuft Ihr Termin ab
          </h2>
        </Reveal>

        <ol className="relative mt-14">
          <div className="absolute left-[1.125rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-v3-border sm:block" aria-hidden="true" />

          {process.map((step, i) => (
            <Reveal key={step.step} delay={i * 70} as="li" className="relative mb-10 last:mb-0 sm:pl-12">
              <div className="flex gap-5 sm:block">
                <span className="font-mono-v3 flex h-9 w-9 shrink-0 items-center justify-center border border-v3-signal bg-v3-surface text-xs font-medium text-v3-signal sm:absolute sm:left-0 sm:top-0">
                  {step.step}
                </span>
                <div className="sm:pt-0.5">
                  <h3 className="font-display text-xl font-semibold text-v3-graphite">{step.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-v3-subtle">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      <div className="mx-auto mt-16 max-w-4xl">
        <PulseLine />
      </div>
    </section>
  );
}
