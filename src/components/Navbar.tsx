"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
];

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-row items-center justify-between sm:justify-between py-8 max-w-5xl mx-auto relative z-[100] px-8 ">
      <div className="flex flex-row space-x-8 items-center border px-4 py-2 rounded-2xl border-gray-700/60 bg-gray-800">
        <Link
          href="/"
          className="text-sm flex items-center justify-center text-white space-x-2"
        >
          <Image
            src="/me.jpeg"
            width={30}
            height={30}
            alt="Michal Dohnal"
            className="transition duration-500 blur-0 scale-100 rounded-full"
          />
          <span className="font-inter font-bold">Michal Dohnal</span>
        </Link>
        {LINKS.map((link, index) => (
          <Link
            className="text-white text-sm group block p-2 relative"
            key={link.href}
            href={link.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-gray-700 block rounded-xl"
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
            <div className="z-20 relative text-white">{link.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { Navbar };
