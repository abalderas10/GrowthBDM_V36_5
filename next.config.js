const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'hebbkx1anhila5yf.public.blob.vercel-storage.com'
    ],
    unoptimized: true
  },
  experimental: {
    appDir: true,
    mdxRs: true
  }
};

module.exports = withMDX(nextConfig);