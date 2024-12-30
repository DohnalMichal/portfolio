"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { SimpleIcon, siGithub } from "simple-icons/icons";
import { Icon } from "./Icon";
import { Link as LinkIcon } from "lucide-react";

type Item = {
  title: string;
  description: string;
  link?: string;
  github: string;
  icons: SimpleIcon[];
};

type Props = {
  items: Item[];
  className?: string;
};

export const ProjectsCards = ({ items, className }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-gray-700/[0.8]"
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
          <Card>
            <div className="flex h-full flex-col justify-between">
              <div>
                <h4 className="mt-4 font-bold tracking-wide text-gray-100">
                  {item.title}
                </h4>

                <p className="mt-8 text-sm leading-relaxed tracking-wide text-gray-400">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-row gap-2">
                  {item.icons.map((tech) => (
                    <Icon
                      key={tech.title}
                      icon={tech}
                      size={16}
                      className="text-gray-400"
                    />
                  ))}
                </div>
              </div>
              <div>
                {item.link && (
                  <Link
                    href={item.link}
                    className="group flex max-w-fit flex-row items-center gap-2 pt-8 text-sm text-gray-400 hover:text-gray-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon size={16} />
                    View live
                  </Link>
                )}
                <Link
                  href={item.github}
                  className="group flex max-w-fit flex-row items-center gap-2 pt-2 text-sm text-gray-400 hover:text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon={siGithub} size={16} />
                  View source
                </Link>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border-none border-transparent bg-gray-800 p-4 group-hover:border-gray-400",
        className,
      )}
    >
      <div className="relative z-50 h-full">
        <div className="h-full p-4">{children}</div>
      </div>
    </div>
  );
};
