/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['career-files.s3.us-west-1.amazonaws.com']
  }
}

module.exports = nextConfig
