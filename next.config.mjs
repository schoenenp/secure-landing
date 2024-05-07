/** @type {import('next').NextConfig} */
await import("./src/env.js");

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
    distDir: ".next",
};

export default nextConfig;
