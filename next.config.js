/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    // Build should not fail on lint warnings in CI
    ignoreDuringBuilds: true,
  },
  images: {
    // We only use local images; avoid remote loader setup and reduce tracing
    unoptimized: true,
  },
}

module.exports = nextConfig
