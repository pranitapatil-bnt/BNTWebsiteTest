/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["images.pexels.com"]
  },
  server:{ host: '0.0.0.0' }
}

module.exports = nextConfig
