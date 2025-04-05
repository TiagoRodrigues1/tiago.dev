import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["geist", "react-tweet"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
