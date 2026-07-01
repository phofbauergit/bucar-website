import { philosophy } from "@/content/home";
import { Reveal } from "@/components/shared/Reveal";

export function Philosophy() {
  return (
    <section className="bg-v3-graphite px-6 py-20 text-v3-paper lg:px-10 lg:py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="font-mono-v3 text-[0.65rem] uppercase tracking-[0.35em] text-v3-signal">{philosophy.eyebrow}</p>
        <blockquote className="mt-8 font-display text-2xl font-medium leading-snug sm:text-3xl lg:text-4xl">
          „{philosophy.quote}"
        </blockquote>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-v3-paper/70">{philosophy.body}</p>
        <p className="mt-8 text-sm italic text-v3-signal">{philosophy.motto}</p>
        <footer className="mt-10 border-t border-v3-paper/10 pt-8">
          <p className="text-base italic leading-relaxed text-v3-paper/60">„{philosophy.thichNhatHanh}"</p>
          <cite className="mt-2 block text-xs uppercase tracking-[0.2em] text-v3-paper/40 not-italic">
            {philosophy.thichNhatHanhSource}
          </cite>
        </footer>
      </Reveal>
    </section>
  );
}
