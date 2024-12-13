import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'links.papareact.com',
        pathname: '/**', // Include the specific path if necessary
      },
      {
        protocol: 'https',
        hostname: 'imgur.com',
        pathname: '/5V4wehM.png',  // This pattern allows access to all paths on imgur.com
      },
    ],
  },
};

export default nextConfig;
