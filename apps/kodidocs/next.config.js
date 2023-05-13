const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental appDir has to be here, even its stable. We have to wait for vanilla extract to update this
  experimental: {
    appDir: true,
  },
}

module.exports = withVanillaExtract(nextConfig)
