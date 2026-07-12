import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const serifFont = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Koushik — Premium Web Design & Development for Startups",
  description:
    "I build premium websites for startups, founders, and businesses. Solving real business problems through design, technology, and high-end user experience.",
  openGraph: {
    title: "Koushik — Premium Web Design & Development",
    description:
      "I build premium websites for startups, founders, and businesses. Solving real business problems through design, technology, and high-end user experience.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Koushik — Premium Web Design & Development",
    description:
      "I build premium websites for startups, founders, and businesses. Solving real business problems through design, technology, and high-end user experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${serifFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased selection:bg-accent selection:text-white">
        <SmoothScrollProvider>
          <Navbar />
          <PageTransition>
            <main className="flex-grow">{children}</main>
          </PageTransition>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
