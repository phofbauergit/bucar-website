import type { Metadata } from "next";
import { Header } from "@/components/v3/Header";
import { Hero } from "@/components/v3/Hero";
import { Befunde } from "@/components/v3/Befunde";
import { Process } from "@/components/v3/Process";
import { Vita } from "@/components/v3/Vita";
import { Philosophy } from "@/components/v3/Philosophy";
import { Contact } from "@/components/v3/Contact";
import { Footer } from "@/components/v3/Footer";
import { MobileCallBar } from "@/components/v3/MobileCallBar";

export const metadata: Metadata = {
  title: "Konzept 3 — Pulse Editorial | Arztpraxis Dr. Bucar",
  description:
    "Homepage-Konzept 3: technisch-klinische Editorial-Ästhetik mit Puls-Linie, Vitaldaten-Readouts und Befund-Karten.",
};

export default function V3Page() {
  return (
    <div className="theme-v3 pb-16 sm:pb-0">
      <Header />
      <main className="font-body">
        <Hero />
        <Befunde />
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
