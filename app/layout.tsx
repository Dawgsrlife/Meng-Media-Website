import type { Metadata } from "next";
import { Oswald, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Meng Media | Performance Marketing",
  description: "Meng Media powers brands to scale through performance-driven creative strategies.",
};

import ScrollToTopButton from '../components/ScrollToTopButton';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${inter.variable} ${instrumentSerif.variable} antialiased font-sans`}
      >
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
