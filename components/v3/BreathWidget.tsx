"use client";

export function BreathWidget() {
  return (
    <div
      className="flex flex-col items-center gap-3 rounded-sm border border-v3-border bg-v3-surface/80 px-6 py-5 backdrop-blur-sm"
      aria-label="Atemübung — folgen Sie dem Rhythmus des Kreises"
    >
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="breath-ring absolute inset-0 rounded-full border border-v3-signal/40" />
        <div className="absolute inset-2 rounded-full bg-v3-signal/10" />
        <div className="relative h-3 w-3 rounded-full bg-v3-signal" />
      </div>
      <p className="text-[0.65rem] uppercase tracking-[0.3em] text-v3-subtle">Kurz durchatmen</p>
      <p className="max-w-[10rem] text-center text-[0.7rem] leading-relaxed text-v3-subtle/80">
        5 Sekunden ein · 5 Sekunden aus
      </p>
    </div>
  );
}
