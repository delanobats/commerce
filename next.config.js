/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'delanobats.com'
    ],
  },
}

module.exports = nextConfig
