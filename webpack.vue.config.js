const path = require("path");
const baseConfig = require("./webpack.config");
const { merge } = require("webpack-merge");

const { VueLoaderPlugin } = require("vue-loader");

module.exports = merge(baseConfig, {
  entry: "./vue/index",
  output: {
    path: path.resolve(__dirname, "./vue/build"),
    filename: "[name].[chunkhash:6].js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
});
