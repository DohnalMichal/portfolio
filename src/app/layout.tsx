import type { Metadata } from "next";
import "./globals.css";
import { BackgroundBeams } from "@/components/BackgroundBeams";
import { Navbar } from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} antialiased bg-gray-900`}>
        <Navbar />
        {children}
        <BackgroundBeams />
      </body>
    </html>
  );
}
