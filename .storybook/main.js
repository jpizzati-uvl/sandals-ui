const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    {
      name: '@storybook/preset-scss',
      options: {
        sassLoaderOptions: {
          additionalData:
            "@use './src/styles/abstracts/mixins'; @use './src/styles/abstracts/functions'; @use './src/styles/abstracts/variables';",
        },
        cssLoaderOptions: {
          modules: {
            localIdentName: '[name]__[local]',
          },
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
