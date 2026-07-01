import type { Metadata } from "next";
import Link from "next/link";
import { practice } from "@/content/home";
import { BrandMark } from "@/components/shared/BrandMark";
import { MeridianFigure } from "@/components/shared/MeridianFigure";
import { DrawOnScroll } from "@/components/shared/DrawOnScroll";

export const metadata: Metadata = {
  title: "Homepage-Konzepte | Arztpraxis Dr. Bucar",
  description: "Zwei Gestaltungskonzepte für die neue Homepage der Arztpraxis Dr. med. Martina Bucar.",
};

const CONCEPTS = [
  {
    href: "/v1",
    theme: "theme-v1",
    label: "Konzept 1",
    name: "Curth Calm",
    description:
      "Ruhige, editoriale Gestaltung — frostiges Panel im Hero, warme Naturtöne, Fokus auf Vertrauen und Klarheit.",
    tags: ["Lora + Raleway", "Sanft & vertrauensvoll", "Easter Egg: „qi“ tippen"],
  },
  {
    href: "/v2",
    theme: "theme-v2",
    label: "Konzept 2",
    name: "Alpine Meridian",
    description:
      "Markante TCM-Editorial-Ästhetik — Bento-Grid, große Typografie, Tinte & Terrakotta statt Baukasten-Look.",
    tags: ["Fraunces + Source Sans 3", "Mutig & eigenständig", "Easter Egg: 3× klicken"],
  },
] as const;

export default function ConceptPicker() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="border-b border-stone-200 px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-6xl items-center gap-3">
          <BrandMark className="h-8 w-8 text-stone-700" />
          <div>
            <p className="text-sm font-medium text-stone-800">{practice.doctorName}</p>
            <p className="text-xs text-stone-500">Homepage-Redesign — Konzeptübersicht</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">Konzeptvorschau</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
          Zwei Richtungen für eine zeitgemäße Praxis-Homepage
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600">
          Beide Entwürfe nutzen dieselben Praxisinhalte, verfolgen aber unterschiedliche gestalterische Wege —
          inspiriert von zeitgemäßen Homepages für ganzheitliche Medizin. Dies ist eine interne Vorschau, keine
          Live-Website.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {CONCEPTS.map((concept) => (
            <Link
              key={concept.href}
              href={concept.href}
              className={`${concept.theme} group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-black/10 p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-10`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--accent-strong)" }}>
                  {concept.label}
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-current text-sm transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>

              <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">{concept.name}</h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-80">{concept.description}</p>

              <div className="mt-8 flex-1">
                <DrawOnScroll>
                  <MeridianFigure
                    variant={concept.theme === "theme-v1" ? "calm" : "ink"}
                    titleId={`picker-meridian-${concept.label}`}
                    className="mx-auto h-44 w-auto opacity-90"
                  />
                </DrawOnScroll>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-wide opacity-70">
                {concept.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-current px-3 py-1">
                    {tag}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-stone-200 px-6 py-8 text-center text-xs text-stone-400 lg:px-10">
        Konzeptentwurf · kein Live-Betrieb · Inhalte auf Basis von {practice.website}
      </footer>
    </div>
  );
}
