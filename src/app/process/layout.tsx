import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Project Blueprint & Process — Koushik",
  description: "A structured, 8-stage project pipeline designed to produce high-end design-engineer outcomes.",
};

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
