/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  distDir: 'dist', // Specify the distribution directory
  images: {
    unoptimized: true // Required for static export when using Image component
  }
};

export default nextConfig;
