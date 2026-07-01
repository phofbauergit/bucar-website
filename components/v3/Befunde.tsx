import { therapies } from "@/content/home";
import { Reveal } from "@/components/shared/Reveal";
import { BefundCard } from "@/components/v3/BefundCard";
import { PulseLine } from "@/components/v3/PulseLine";

export function Befunde() {
  return (
    <section id="befunde" className="border-b border-v3-border bg-v3-surface px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono-v3 text-[0.65rem] uppercase tracking-[0.35em] text-v3-signal">Therapiespektrum</p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight text-v3-graphite sm:text-4xl">
            Befunde — kein Standardprogramm
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-v3-subtle">
            Jede Therapie als individueller Befund. Einzeln oder kombiniert — immer ausgehend von Ihrer Diagnostik.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {therapies.map((therapy, i) => (
            <Reveal key={therapy.slug} delay={i * 50}>
              <BefundCard therapy={therapy} index={i} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-4xl px-0">
        <PulseLine interactive={false} />
      </div>
    </section>
  );
}
