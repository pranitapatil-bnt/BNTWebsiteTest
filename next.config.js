// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images:{
//     domains:["images.pexels.com"]
//   },
//   server:{ host: '0.0.0.0' }
// }

// module.exports = nextConfig


const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com"], // Whitelisted domains for images
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, must-revalidate",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
        ],
      },
    ];
  },
  server: { host: "0.0.0.0" }, // Bind to all network interfaces
};

module.exports = nextConfig;

