"use client";

import { LINKS } from "@/data/links";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative z-[100] mx-auto flex max-w-5xl flex-row items-center justify-between px-8 py-8 sm:justify-between">
      <div className="flex flex-row items-center space-x-8 rounded-2xl border border-gray-700/60 bg-gray-800 px-4 py-2">
        <Link
          href="/"
          className="flex items-center justify-center space-x-2 text-sm text-white"
        >
          <Image
            src="/me.jpeg"
            width={30}
            height={30}
            alt="Michal Dohnal"
            className="scale-100 rounded-full blur-0 transition duration-500"
          />
          <span className="font-inter text-nowrap font-bold">
            Michal Dohnal
          </span>
        </Link>
        {LINKS.map((link, index) => (
          <Link
            className="group relative block p-2 text-sm text-white"
            key={link.href}
            href={link.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 block h-full w-full rounded-xl bg-gray-700"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="relative z-20 text-white">{link.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};
