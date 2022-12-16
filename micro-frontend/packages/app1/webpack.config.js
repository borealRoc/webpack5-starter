const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: path.resolve(__dirname, "./src/main.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    // 必须指定产物的完整路径，否则使用方无法正确加载产物资源
    publicPath: "http://localhost:8081/dist/",
  },
  mode: "development",
  devtool: false,
  plugins: [
    new ModuleFederationPlugin({
      // MF 应用名称
      name: "app1",
      // MF 模块入口，可以理解为该应用的资源清单
      filename: "app1.js",
      // 定义该应用导出哪一些模块
      exposes: {
        "./utils": "./src/utils",
        "./foo": "./src/foo",
      },
      shared: {
        lodash: {
          requiredVersion: "^4.17.0",
        },
      },
    }),
  ],
  // 应用资源必须以 http(s) 形式提供服务
  // 所以这里需要使用 devServer 提供 http(s) server 能力
  devServer: {
    port: 8081,
    hot: true,
  },
};
