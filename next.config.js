/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
    reactStrictMode: true,
    env: {
        GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN,
    },
};

module.exports = nextConfig;
