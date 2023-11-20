module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

const withImages = require("next-images");
module.exports = withImages();