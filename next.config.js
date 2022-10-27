/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: ["api.appworks-school.tw"],
	},
	experimental: {
		// Required:
		appDir: true,
		images: {
			unoptimized: true,
		},
	},
};

module.exports = nextConfig;
