const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const baseConfig = {
  mode: "development",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
  ],
};

module.exports = baseConfig;
