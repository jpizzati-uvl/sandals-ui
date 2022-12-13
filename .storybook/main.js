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
            localIdentName: "[local]",
            // localIdentName: "[hash:base64:5]",
          },
        },
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules.map((rule) => {
      if (rule.oneOf) {
        rule.oneOf = rule.oneOf.slice().map((subRule) => {
          if (subRule.test instanceof RegExp && subRule.test.test(".scss")) {
            return {
              ...subRule,
              use: [
                ...subRule.use,
                {
                  loader: require.resolve("sass-resources-loader"),
                  options: {
                    resources: [
                      path.resolve(__dirname, "../src/styles/master.scss"),
                    ],
                  },
                },
              ],
            };
          }
          return subRule;
        });
      }
      return rule;
    });
    return config;
  },
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
