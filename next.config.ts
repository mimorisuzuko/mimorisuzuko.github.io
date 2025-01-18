import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	distDir: "docs",
	eslint: {
		ignoreDuringBuilds: true
	},
	typescript: {
		ignoreBuildErrors: true
	}
};

export default nextConfig;
