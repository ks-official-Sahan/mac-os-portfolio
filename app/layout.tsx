import type { Metadata } from "next";
import { Geist, Geist_Mono, Georama } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const georama = Georama({
  variable: "--font-georama",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahan Sachintha",
  description: "Portfolio of Sahan Sachintha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${georama.variable} antialiased`}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
