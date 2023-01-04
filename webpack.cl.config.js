const path = require("path");
const baseConfig = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(baseConfig, {
  entry: "./custom-loader/index",
  output: {
    path: path.resolve(__dirname, "./custom-loader/dist"),
    filename: "[name].js",
  },
  // 1. 配置loader查找路径
  resolveLoader: {
    // 下面的配置表明：如果要使用loarder,先找到node_modules找，找不到就去“./custom-loader/loader”文件夹找
    modules: ["node_modules", "./custom-loader/loader"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          // 6. 处理loader的路径问题
          {
            loader: "replace-string",
            options: {
              str: "webpack5",
            },
          },
        ],
      },
    ],
  },
});
