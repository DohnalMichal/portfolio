import type { Config } from "tailwindcss";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    preflight: true,
  },
  theme: {
    fontFamily: {
      mono: ["Menlo", "Consolas", "monospace"],
    },
    extend: {
      typography: (theme: (value: string) => void) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.300"),
            h1: {
              color: theme("colors.gray.100"),
            },
            h2: {
              color: theme("colors.gray.100"),
            },
            h3: {
              color: theme("colors.gray.100"),
            },
            a: {
              color: theme("colors.blue.500"),
              textDecoration: "none",
              "&:hover": {
                color: theme("colors.blue.400"),
              },
            },
            blockquote: {
              color: theme("colors.gray.300"),
              fontStyle: "normal",
            },
          },
        },
      }),
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [addVariablesForColors, typography],
};

function addVariablesForColors({
  addBase,
  theme,
}: {
  addBase: (base: Record<string, Record<string, string>>) => void;
  theme: (path: string) => Record<string, string>;
}) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars: Record<string, string> = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, String(val)]),
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
