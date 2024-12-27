"use client";

import { format } from "date-fns";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type ArticleLinkProps = {
  href: string;
  date: string;
  title: string;
  description: string;
};

export const ArticleLink = ({
  href,
  date,
  title,
  description,
}: ArticleLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative px-10 py-5"
    >
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              transition: { duration: 0.15 },
            }}
            className="absolute inset-0 h-full w-full rounded-lg bg-gray-800"
          />
        )}
      </AnimatePresence>
      <div className="relative z-50">
        <small className="border-l border-gray-500 pl-2 text-gray-500">
          {format(new Date(date), "MMMM do yyyy")}
        </small>

        <h2 className="mt-4 text-lg font-bold">{title}</h2>
        <p className="mt-2 max-w-4xl text-sm leading-loose text-gray-400">
          {description}
        </p>
        <p className="mt-4 text-sm text-blue-500">Learn more</p>
      </div>
    </Link>
  );
};
