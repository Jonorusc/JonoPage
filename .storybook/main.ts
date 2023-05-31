import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const toPath = (_path) => path.join(process.cwd(), _path);

const config: StorybookConfig = {
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  webpackFinal: async (storybookWebpackConfig, { configType }) => {
    const { resolve = {} } = storybookWebpackConfig;
    const { alias = {} } = resolve;
    // Add the '@' alias
    alias['@'] = toPath('src');

    // Update the config
    storybookWebpackConfig.resolve = { ...resolve, alias };

    // Return the updated config
    return storybookWebpackConfig;
  }
};

export default config;
