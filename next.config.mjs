/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['10.113.177.18', '10.0.0.82'],
  images: {
    domains: ['github.com', 'yt3.ggpht.com'], // allow GitHub images
  },
}

export default nextConfig
