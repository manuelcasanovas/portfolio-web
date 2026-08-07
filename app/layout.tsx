import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serifFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sansFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Micaela Bianchi",
  description:
    "Portfolio de Micaela Bianchi. Trabajos fotográficos y audiovisuales.",
  keywords: [
    "Fotografia",
    "Micaela Bianchi",
    "Portfolio",
    "Audiovisual"
  ],
  authors: [{ name: "Micaela Bianchi" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${serifFont.variable} ${sansFont.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#FBFBFB] text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
