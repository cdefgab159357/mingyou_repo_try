import BuilderDevTools from "@builder.io/dev-tools/next";
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()(
  BuilderDevTools()(
    BuilderDevTools()({
      reactStrictMode: true,
      webpack: (config) => {
        // 設置路徑別名
        config.resolve.alias['@'] = path.resolve('./');
        return config;
      },
    })
  )
);

export default nextConfig;
