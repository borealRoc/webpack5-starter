const path = require("path");
const baseConfig = require("./webpack.config");
const { merge } = require("webpack-merge");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
  entry: "./es6/index",
  output: {
    path: path.resolve(__dirname, "./es6/build"),
    filename: "[name].[chunkhash:6].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                // 编译 Promise 等高级特性
                {
                  /**
                   * false 默认值，无视浏览器兼容配置，引入所有 polyfill
                   * entry 根据配置的浏览器兼容，引入浏览器不兼容的 polyfill
                   * usage 会根据配置的浏览器兼容，以及你代码中用到的 API 来进行 polyfill，实现了按需添加
                   */
                  useBuiltIns: "entry",
                  corejs: "3.26.1",
                  targets: {
                    chrome: "58",
                    ie: "11",
                  },
                },
              ],
            ],
            // 编译 class 装饰器
            plugins: [
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }],
              ["@babel/plugin-proposal-private-methods", { loose: true }],
              [
                "@babel/plugin-proposal-private-property-in-object",
                { loose: true },
              ],
            ],
          },
        },
      },
    ],
  },
  // plugins: [new BundleAnalyzerPlugin()],
});
