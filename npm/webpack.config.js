const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[name].js",
    library: {
      name: "superSaiyaAdd",
      type: "umd", // 兼容AMD和CommonJS
    },
  },
  mode: "development",
  devtool: "source-map",
  // webpack 打包的时候排除所有 node_modules 模块
  externals: [nodeExternals()],
};
