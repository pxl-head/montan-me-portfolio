import type { NextConfig } from 'next';

const isGitHubPagesBuild = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  ...(isGitHubPagesBuild
    ? {
        output: 'export' as const,
        trailingSlash: true,
      }
    : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPagesBuild ? '/montan-me-portfolio' : '',
  },
};

export default nextConfig;
