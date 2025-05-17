import { defineConfig, mergeConfig, UserConfig } from 'vite';

export default (config: UserConfig) => {
  return mergeConfig(config, defineConfig({
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      allowedHosts: ['localhost','strapi-backend.poc', 'pochost'],
      //allowedHosts: true,
    }
  }));
};