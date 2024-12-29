import { cn } from "@/utils/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const ActionButton = ({ className, children, onClick }: Props) => {
  return (
    <button
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-1 focus:ring-offset-blue-400",
        className,
      )}
      onClick={onClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 px-4 py-1 text-sm font-semibold text-gray-100 backdrop-blur-3xl hover:bg-gray-800">
        {children}
      </span>
    </button>
  );
};
