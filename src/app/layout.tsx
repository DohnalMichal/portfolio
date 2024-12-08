import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { BackgroundBeams } from "@/components/BackgroundBeams";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Porfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-gray-900`}>
        <Navbar />
        {children}
        <BackgroundBeams />
      </body>
    </html>
  );
}
