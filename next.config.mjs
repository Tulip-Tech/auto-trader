/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
	domains: ['m.atcdn.co.uk', 'atcdn.co.uk'],
	remotePatterns: [
	  {
		protocol: 'https',
		hostname: 'm.atcdn.co.uk',
		port: '',
		pathname: '/**',
	  },
	  {
		protocol: 'https',
		hostname: 'atcdn.co.uk',
		port: '',
		pathname: '/**',
	  },
	],
  },
};

export default nextConfig;
