"use client";

import { practice } from "@/content/home";
import type { ReactNode } from "react";

type PulsePhoneCTAProps = {
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

export function PulsePhoneCTA({ children, className = "", variant = "primary" }: PulsePhoneCTAProps) {
  const base =
    variant === "primary"
      ? "bg-v3-graphite text-v3-paper hover:bg-v3-signal"
      : "border border-v3-border bg-v3-surface text-v3-graphite hover:border-v3-signal hover:text-v3-signal";

  return (
    <a
      href={`tel:${practice.phoneHref}`}
      className={`phone-beat inline-flex cursor-pointer items-center gap-2.5 px-6 py-3.5 text-sm font-medium transition-colors duration-200 ${base} ${className}`}
      aria-label={`${practice.phone} anrufen`}
    >
      <svg
        viewBox="0 0 24 24"
        className="phone-beat-icon h-4 w-4 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="M4 12h16" strokeLinecap="round" opacity="0.35" />
        <path d="M4 12 L8 8 L8 16 L12 12 L12 12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12 L16 6 L16 18 L20 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children ?? practice.phone}
    </a>
  );
}
