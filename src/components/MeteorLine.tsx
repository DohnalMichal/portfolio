import { motion } from "framer-motion";

type MeteorProps = {
  /**
   * Delay before each shooting cycle (in seconds)
   * @default 5
   */
  delay?: number;
  /**
   * Duration of the shooting animation (in seconds)
   * @default 3
   */
  duration?: number;
  /**
   * Controls how far (in px) the meteor travels vertically
   */
  height?: number;
};

const MeteorLine = ({ delay = 5, duration = 3, height = 220 }: MeteorProps) => {
  const PATH = `M0.5 0 L0.5 ${height}`;

  return (
    <div
      className="absolute -left-6 w-px bg-zinc-800 overflow-hidden"
      style={{ height }}
    >
      <svg
        width="1"
        height={height}
        viewBox={`0 0 1 ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
      >
        <defs>
          <motion.linearGradient
            id="linear_gradient_meteor"
            gradientUnits="userSpaceOnUse"
            initial={{
              x1: "0%",
              x2: "0%",
              y1: "0%",
              y2: "0%",
            }}
            animate={{
              x1: ["0%", "100%"],
              x2: ["0%", "95%"],
              y1: ["0%", "100%"],
              y2: ["0%", "75%"],
            }}
            transition={{
              duration,
              ease: "easeInOut",
              repeat: Infinity,
              delay,
              repeatDelay: Math.random() * 2 + 3,
            }}
          >
            <stop stopColor="#18CCFC" stopOpacity="0" />
            <stop stopColor="#18CCFC" />
            <stop offset="32.5%" stopColor="#6344F5" />
            <stop offset="100%" stopColor="#AE48FF" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
        <motion.path
          d={PATH}
          stroke="url(#linear_gradient_meteor)" // Reference the gradient
          strokeOpacity="1"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};

export { MeteorLine };
