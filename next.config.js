/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        mongodb_username: process.env.mongodb_username,
        mongodb_password: process.env.mongodb_password,
        mongodb_clustername: process.env.mongodb_clustername,
        mongodb_database: process.env.mongodb_database
    }
}

module.exports = nextConfig
