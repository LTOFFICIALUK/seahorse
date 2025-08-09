/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Build should not fail on lint warnings in CI
    ignoreDuringBuilds: true,
  },
  images: {
    // We only use local images; avoid remote loader setup and reduce tracing
    unoptimized: true,
  },
  experimental: {
    // Reduce the scope of file tracing to avoid micromatch recursion issues on some environments
    outputFileTracingExcludes: {
      '*': [
        'node_modules/**',
        '.git/**',
        'scripts/**',
      ],
    },
  },
}

module.exports = nextConfig
