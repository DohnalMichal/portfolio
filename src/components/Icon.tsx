import type { SimpleIcon } from "simple-icons";

type IconProps = {
  icon: SimpleIcon;
  size?: number;
  className?: string;
  /** When true, hides the icon from assistive technology (use when icon is beside visible text) */
  decorative?: boolean;
};

export const Icon = ({
  icon,
  size = 24,
  className,
  decorative = false,
}: IconProps) => (
  <svg
    role={decorative ? undefined : "img"}
    aria-hidden={decorative ? "true" : undefined}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {!decorative && <title>{icon.title}</title>}
    <path d={icon.path} />
  </svg>
);
