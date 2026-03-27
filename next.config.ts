import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@tabler/icons-react",
      "framer-motion",
    ],
  },
};

export default nextConfig;
