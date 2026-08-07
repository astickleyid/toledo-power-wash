/** @type {import('next').NextConfig} */
const isGhPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isGhPages
    ? {
        basePath: "/toledo-power-wash",
        assetPrefix: "/toledo-power-wash/",
      }
    : {}),
};

export default nextConfig;
