/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  trailingSlash: true,
  // The repo also holds non-Next folders (figma/, projects/), so keep Next's lint
  // pass scoped to the site source instead of the whole working tree.
  eslint: {
    dirs: ['app', 'components', 'data', 'lib'],
  },
};

module.exports = nextConfig;