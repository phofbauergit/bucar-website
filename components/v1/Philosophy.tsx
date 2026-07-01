import { philosophy } from "@/content/home";
import { Reveal } from "@/components/shared/Reveal";

export function Philosophy() {
  return (
    <section className="px-6 py-20 lg:px-10 lg:py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-v1-sage">{philosophy.eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl leading-tight text-v1-forest sm:text-4xl">
          {philosophy.heading}
        </h2>
        <blockquote className="mt-8 font-display text-2xl italic leading-relaxed text-v1-forest sm:text-[1.7rem]">
          „{philosophy.quote}“
        </blockquote>
        <p className="mx-auto mt-6 max-w-xl text-[1.02rem] leading-relaxed text-v1-ink/80">{philosophy.body}</p>

        <div className="hairline mx-auto my-10 w-24" />

        <p className="mx-auto max-w-lg text-base italic leading-relaxed text-v1-ink/70">
          „{philosophy.thichNhatHanh}“
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-v1-sage">
          {philosophy.thichNhatHanhSource}
        </p>
      </Reveal>
    </section>
  );
}
