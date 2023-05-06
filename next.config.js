const { i18n } = require('./next-i18next.config.js');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  sassOptions: {
    additionalData: `@use "./src/styles/abstracts/_index.scss" as *;`,
  },
}

module.exports = nextConfig;
