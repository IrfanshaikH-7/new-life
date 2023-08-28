/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
    images: {
      remotePatterns: [
       
        {
          protocol: "https",
          hostname: "uploadthing.com",
        },
       
      ],
    },
  };


module.exports = nextConfig
