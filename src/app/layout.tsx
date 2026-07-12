import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

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
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased selection:bg-accent selection:text-white relative">
        <SmoothScrollProvider>
          {/* Architectural Background Blueprint Grid */}
          <div className="fixed inset-0 grid grid-cols-4 md:grid-cols-12 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pointer-events-none -z-50 opacity-[0.03] md:opacity-[0.04]">
            {[...Array(13)].map((_, i) => (
              <div key={i} className="h-full w-[1px] bg-foreground" />
            ))}
          </div>

          {/* Interactive Custom Cursor */}
          <CustomCursor />

          {/* Global Layout Navigation */}
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
