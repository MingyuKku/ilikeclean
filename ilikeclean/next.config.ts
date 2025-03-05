import type { NextConfig } from 'next'

const PRODUCTION = 'production'
const isDev = process.env.NODE_ENV !== PRODUCTION

const nextConfig: NextConfig = {
	reactStrictMode: false,
	output: 'standalone',
	productionBrowserSourceMaps: isDev,
}

export default nextConfig
