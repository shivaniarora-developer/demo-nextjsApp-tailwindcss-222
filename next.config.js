/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    swcMinify: true,
    optimizeFonts: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "dummyimage.com",
            },
        ],
        minimumCacheTTL: 15000000,
    }

}

module.exports = nextConfig
