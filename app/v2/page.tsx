import type { Metadata } from "next";
import { Header } from "@/components/v2/Header";
import { Hero } from "@/components/v2/Hero";
import { Therapies } from "@/components/v2/Therapies";
import { Timeline } from "@/components/v2/Timeline";
import { Philosophy } from "@/components/v2/Philosophy";
import { Vita } from "@/components/v2/Vita";
import { Contact } from "@/components/v2/Contact";
import { Footer } from "@/components/v2/Footer";
import { MobileCallBar } from "@/components/v2/MobileCallBar";

export const metadata: Metadata = {
  title: "Konzept 2 — Alpine Meridian | Arztpraxis Dr. Bucar",
  description:
    "Homepage-Konzept 2: markante TCM-editoriale Gestaltung mit Bento-Grid, Zeitleiste und großformatiger Typografie.",
};

export default function V2Page() {
  return (
    <div className="theme-v2 pb-16 sm:pb-0">
      <Header />
      <main className="font-body">
        <Hero />
        <Therapies />
        <Timeline />
        <Philosophy />
        <Vita />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}
