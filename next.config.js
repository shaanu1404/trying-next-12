/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        hostname: "img.freepik.com"
      }
    ]
  }
}

module.exports = nextConfig
