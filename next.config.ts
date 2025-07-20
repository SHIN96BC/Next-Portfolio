import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  webpack: (config, context) => {
    // msw 설정
    if (context?.isServer) {
      // next server build => ignore msw/browser
      if (Array.isArray(config.resolve.alias)) {
        // in Next the type is always object, so this branch isn't necessary. But to keep TS happy, avoid @ts-ignore and prevent possible future breaking changes it's good to have it
        config.resolve.alias.push({ name: 'msw/browser', alias: false });
      } else {
        config.resolve.alias['msw/browser'] = false;
      }

      config.externals.push('_http_common');
    } else {
      // browser => ignore msw/node
      if (Array.isArray(config.resolve.alias)) {
        config.resolve.alias.push({ name: 'msw/node', alias: false });
      } else {
        config.resolve.alias['msw/node'] = false;
      }
    }

    return config;
  },
};

export default nextConfig;
