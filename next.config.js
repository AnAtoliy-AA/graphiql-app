/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'robohash.org', //TODO remove it it used for example images
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
