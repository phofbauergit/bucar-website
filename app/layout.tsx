import type { Metadata } from "next";
import { Lora, Raleway, Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arztpraxis Dr. med. Martina Bucar — Ganzheitliche Heilmethoden & TCM",
  description:
    "Ganzheitliche Allgemeinarztpraxis in Oberbayern. Schwerpunkt Traditionelle Chinesische Medizin, Akupunktur, Phytotherapie, Mesotherapie und mehr. Huglfing & Grünwald.",
  metadataBase: new URL("https://arztpraxis-bucar.de"),
  openGraph: {
    title: "Arztpraxis Dr. med. Martina Bucar",
    description:
      "Der Mensch in seiner Ganzheit — westlicher Therapiestandard vereint mit ganzheitlichem Wissen aus der Chinesischen Medizin.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${lora.variable} ${raleway.variable} ${fraunces.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900">
        {children}
      </body>
    </html>
  );
}
