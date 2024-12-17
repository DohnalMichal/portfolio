import type { SimpleIcon } from "simple-icons";

type IconProps = {
  icon: SimpleIcon;
  size?: number;
  className?: string;
};

export const Icon = ({ icon, size = 24, className }: IconProps) => (
  <svg
    role="img"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <title>{icon.title}</title>
    <path d={icon.path} />
  </svg>
);
