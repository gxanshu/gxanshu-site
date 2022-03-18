/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  eslint: {
    dirs: ["src"],
  },
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/aianshu/image/upload/",
    domains: [
      "cdn.hashnode.com",
      "res.cloudinary.com",
      // Spotify Album
      "i.scdn.co",
      "www.mozilla.com",
      "octodex.github.com",
    ],
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
};
