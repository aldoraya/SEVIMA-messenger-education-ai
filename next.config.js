/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimentals: {
        appDir: true,
    },
    images: {
        domains: [
            "lh3.googleusercontent.com",
        ]
    }
}

module.exports = nextConfig
