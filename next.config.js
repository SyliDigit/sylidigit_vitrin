/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Recommandé pour l'export statique Next.js
    domains: ['images.pexels.com'],
  },
  devIndicators: false,
  output: 'export', // <-- Cette ligne indique à Next.js de générer du HTML pur
}

module.exports = nextConfig
