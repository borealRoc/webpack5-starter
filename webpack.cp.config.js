const path = require("path");
const baseConfig = require("./webpack.config");
const { merge } = require("webpack-merge");
const CopyrightWebpackPlugin = require("./custom-plugin/plugins/copyright-webpack-plugin");

module.exports = merge(baseConfig, {
  entry: "./custom-plugin/index",
  output: {
    path: path.resolve(__dirname, "./custom-plugin/dist"),
    filename: "[name].js",
  },
  plugins: [
    new CopyrightWebpackPlugin({
      name: "我是插件参数",
    }),
  ],
});
