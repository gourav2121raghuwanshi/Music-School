import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",  //res.cloudinary.com
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
