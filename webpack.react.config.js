const path = require("path");
const baseConfig = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(baseConfig, {
  entry: "./react/index",
  output: {
    path: path.resolve(__dirname, "./react/build"),
    filename: "[name].[chunkhash:6].js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
});
