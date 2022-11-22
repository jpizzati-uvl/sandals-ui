const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: `@storybook/preset-scss`,
      options: {
        rule: {
          test: /\.s[ca]ss$/,
        },
        cssLoaderOptions: {
          modules: {
            localIdentName: "[local]_[hash:base64:5]",
          },
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
