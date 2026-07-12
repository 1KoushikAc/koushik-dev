import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Project — Koushik",
  description: "Get in touch to build a high-converting digital platform that positions your business as an authority.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
