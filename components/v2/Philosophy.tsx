import { philosophy } from "@/content/home";

export function Philosophy() {
  return (
    <section className="border-y border-v2-mist/30 bg-v2-ink px-6 py-24 text-v2-bone lg:px-12 lg:py-36">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-v2-terracotta">
          {philosophy.eyebrow}
        </p>
        <blockquote className="mt-8 font-display text-3xl font-medium leading-[1.15] tracking-tight sm:text-5xl">
          „{philosophy.quote}“
        </blockquote>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-v2-bone/70">{philosophy.body}</p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-v2-jade">{philosophy.motto}</p>
      </div>
    </section>
  );
}
