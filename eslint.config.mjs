import nextConfig from '@next/eslint-plugin-next';

export default [
  {
    ignores: ['.next/*', 'node_modules/*']
  },
  ...nextConfig.configs['core-web-vitals']
];
