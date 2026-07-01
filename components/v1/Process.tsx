import { process } from "@/content/home";
import { Reveal } from "@/components/shared/Reveal";

export function Process() {
  return (
    <section id="ablauf" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-v1-sage">So läuft Ihr Termin ab</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight text-v1-forest sm:text-4xl">
            Vier Schritte zu Ihrem individuellen Therapiekonzept
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.step} delay={i * 70} as="li" className="relative">
              <span className="font-display text-4xl text-v1-clay/70">{step.step}</span>
              <h3 className="mt-3 font-display text-lg text-v1-forest">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-v1-ink/75">{step.body}</p>
              {i < process.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hairline absolute right-[-1rem] top-4 hidden h-px w-8 lg:block"
                />
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
