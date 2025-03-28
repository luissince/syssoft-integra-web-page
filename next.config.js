/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*.syssoftintegra.com", 
            },
        ],
    },
    output: 'standalone'
}

module.exports = nextConfig