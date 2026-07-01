import type { ReactNode } from "react";

export function KineticHeadline({
  children,
  className = "",
  as: Tag = "h1",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag className={`kinetic-headline font-display ${className}`}>
      {children}
    </Tag>
  );
}
