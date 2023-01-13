const path = require('path');

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
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
            "@use './styles/abstracts/mixins'; @use './styles/abstracts/functions'; @use './styles/abstracts/variables';",
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
