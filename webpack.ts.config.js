const path = require("path");
const baseConfig = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(baseConfig, {
  entry: "./ts/index",
  output: {
    path: path.resolve(__dirname, "./ts/build"),
    filename: "[name].[chunkhash:6].js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        // use: ["ts-loader"],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
});
