import type { Metadata } from "next";
import { Header } from "@/components/v1/Header";
import { Hero } from "@/components/v1/Hero";
import { Schwerpunkte } from "@/components/v1/Schwerpunkte";
import { Process } from "@/components/v1/Process";
import { Vita } from "@/components/v1/Vita";
import { Philosophy } from "@/components/v1/Philosophy";
import { Contact } from "@/components/v1/Contact";
import { Footer } from "@/components/v1/Footer";
import { MobileCallBar } from "@/components/v1/MobileCallBar";
import { QiListener } from "@/components/shared/QiListener";

export const metadata: Metadata = {
  title: "Konzept 1 — Curth Calm | Arztpraxis Dr. Bucar",
  description:
    "Homepage-Konzept 1: ruhige, editoriale Gestaltung inspiriert von zeitgemäßen Praxis-Websites für ganzheitliche Medizin.",
};

export default function V1Page() {
  return (
    <div className="theme-v1 pb-16 sm:pb-0">
      <QiListener />
      <Header />
      <main className="font-body">
        <Hero />
        <Schwerpunkte />
        <Process />
        <Vita />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}
