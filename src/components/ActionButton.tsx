"use client";

import { cn } from "@/utils/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  download?: string;
};

const sharedClass = (className?: string) =>
  cn(
    "relative inline-flex h-12 overflow-hidden rounded-full p-px focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 focus-visible:ring-offset-1 focus-visible:ring-offset-blue-400",
    className,
  );

const Inner = ({ children }: { children: React.ReactNode }) => (
  <>
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 px-4 py-1 text-sm font-semibold text-gray-100 backdrop-blur-3xl hover:bg-gray-800">
      {children}
    </span>
  </>
);

export const ActionButton = ({
  className,
  children,
  onClick,
  href,
  download,
}: Props) => {
  if (href) {
    return (
      <a href={href} download={download} className={sharedClass(className)}>
        <Inner>{children}</Inner>
      </a>
    );
  }
  return (
    <button type="button" className={sharedClass(className)} onClick={onClick}>
      <Inner>{children}</Inner>
    </button>
  );
};
