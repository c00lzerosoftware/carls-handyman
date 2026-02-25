import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carl's Handyman and Home Repair | Denham Springs",
  description: "5.0 star rated handyman services in Denham Springs, LA. Home repairs, decks, fences, painting, carpentry. Call (225) 324-0219 for free estimate.",
  keywords: "handyman Denham Springs, home repair, deck builder, fence installation, painting services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
