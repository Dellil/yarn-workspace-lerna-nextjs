module.exports = {
    "stories": [
      "../src/**/*.stories.mdx",
      "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
      "@storybook/addon-links",
      "@storybook/addon-essentials"
    ],
    "webpackFinal": async (config, { configType }) => {
      // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
      // You can change the configuration based on that.
      // 'PRODUCTION' is used when building the static version of storybook.

      // Make whatever fine-grained changes you need
      // config.module.rules.push({
      //   test: /\.(ts|tsx)$/,
      //   loader: require.resolve('babel-loader'),
      //   options: {
      //     presets: [
      //       ['@babel/preset-env', {
      //         modules: false,
      //         targets: {
      //           browsers: ['last 2 versions', 'ie >= 11']
      //         }
      //       }],
      //       '@babel/preset-typescript'
      //     ],
      //     plugins: [
      //       '@babel/plugin-proposal-class-properties',
      //       '@babel/plugin-proposal-object-rest-spread',
      //       '@babel/plugin-transform-runtime',
      //       '@babel/plugin-syntax-dynamic-import',
      //       '@babel/plugin-proposal-optional-chaining',
      //       '@babel/plugin-proposal-nullish-coalescing-operator'
      //     ]
      //   }
      // });

      // scss support
      config.module.rules.push({
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      });

      // Return the altered config
      return config
    }
}