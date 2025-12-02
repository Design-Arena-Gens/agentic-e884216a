/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.pollinations.ai'
      }
    ]
  },
  experimental: {
    typedRoutes: true
  }
};

export default nextConfig;
