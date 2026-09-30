import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Branded 404 (app/global-not-found.tsx), needed because the root layout lives under [lang].
    globalNotFound: true,
  },
};

export default nextConfig;
