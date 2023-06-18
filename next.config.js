/** @type {import('next').NextConfig} */
const nextConfig = {
  images: [
    'res.cloudinary.com',
    'elegantthemes.com',
    'loremflickr.com',
    'picsum.photos',
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
