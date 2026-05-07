// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aanya Mehta — Product & Strategy",
  description:
    "Product manager and business analyst building thoughtful tools at the intersection of strategy, operations and design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body className="bg-paper text-ink antialiased selection:bg-ink selection:text-paper">
        {children}
      </body>
    </html>
  );
}