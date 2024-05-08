/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const NextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
    distDir: ".next",
    assetPrefix: process.env.NODE_ENV === "production" ? `https://${process.env.NEXT_PUBLIC_CLIENT_APP_DOMAIN}` : `http://${process.env.NEXT_PUBLIC_CLIENT_DEV_DOMAIN}`

};

export default NextConfig;
