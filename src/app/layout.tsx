import type { Metadata } from "next";
import "./globals.css";
import { BackgroundBeams } from "@/components/BackgroundBeams";
import { Navbar } from "@/components/Navbar";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michal Dohnal",
  description: "A showcase of my projects, skills, and experiences.",
  applicationName: "Michal Dohnal's Portfolio",
  keywords: ["portfolio", "frontend", "developer"],
  authors: [{ name: "Michal Dohnal", url: "https://www.michaldohnal.dev/" }],
  creator: "Michal Dohnal",
  publisher: "Michal Dohnal",
  themeColor: "#111827",
  manifest: "./manifest.json",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      {
        url: "/favicon/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/favicon/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/favicon/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/favicon/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/favicon/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/favicon/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/favicon/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/favicon/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/favicon/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/favicon/apple-icon-180x180.png", sizes: "180x180" },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://www.michaldohnal.dev/",
    title: "Michal Dohnal",
    siteName: "Michal Dohnal's Portfolio",
    description: "A showcase of my projects, skills, and experiences.",
    locale: "en_US",
    images: [
      {
        url: "/me.jpeg",
        width: 2079,
        height: 2079,
        alt: "Michal Dohnal's Portfolio",
      },
    ],
  },
  other: {
    "msapplication-TileColor": "#111827",
    "msapplication-TileImage": "/favicon/ms-icon-144x144.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <BackgroundBeams />
      </body>
    </html>
  );
}
