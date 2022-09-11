/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        mongodb_username: 'user',
        mongodb_password: 'Densoft1',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'next-blog'
    }
}

module.exports = nextConfig
