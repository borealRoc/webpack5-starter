# webpack5-starter

## 一、配置实战

### 1. 使用 Babel 处理 ES6

- 基本处理

```javascript
{
    test: /\.js$/,
    use: {
        loader: 'bable-loader',
        options: {
            preset: ['@babel/preset-env']
        }
    }
}
```

- 处理 Promise 等高级特性

```javascript
preset: [
  [
    "@babel/preset-env",
    {
      /**
       * false: 默认值，无视浏览器兼容配置，引入所有 polyfill
       * entry: 根据配置的浏览器兼容，引入浏览器不兼容的 polyfill
       * usage: 根据配置的浏览器兼容，以及你代码中用到的 API 来进行 polyfill，实现了按需添加
       */
      useBuiltIns: "false | entry | usage",
    },
  ],
];
```

- 支持 class 装饰器写法

```javascript
plugins: [
  ["@babel/plugin-proposal-decorators", { legacy: true }],
  ["@babel/plugin-proposal-class-properties", { loose: true }],
  ["@babel/plugin-proposal-private-methods", { loose: true }],
  ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
];
```

### 2. 处理 ts

- 借助 'ts-loader' 或 '@babel/preset-typescript'

### 3. vue 打包环境

- vue-loader：用于 Vue 单文件组件的 webpack 加载器
- vue-template-compiler：将 Vue 2.0 模板预编译为渲染函数（template => ast => render）

### 4. react 打包环境

- @babel/preset-react: JSX 被编译为 React.createElement 函数调用

### 5. NPM Library

```javascript
// webpack.config.js
const nodeExternals = require("webpack-node-externals");
module.exports = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
    // 1. 声明 webpack 的构建目标为 library
    library: {
      name: "npm-library-name",
      type: "umd",
    },
  },
  // 2. 引入第三方包时让 webpack 不要一起打包
  externals: [nodeExternals()],
  // 3. 生产 Sourcemap
  devtool: "source-map",
};
```

```javascript
// package.json
{
  // 4.1 声明 npm 包名
  "name": "npm-library-name",
  // 4.2 指定 ES Module 模式引入时的入口文件
  "module": "src/index.js",
  // 4.3 指定 ES 其它 模式引入时的入口文件
  "main": "dist/main.js",
  "scripts": {
    // 5. 在发布前自动执行编译命令
    "prepublishOnly": "webpack --mode=production"
  }
}
```

### 6. 微前端应用

- webpack5 模块联邦（MF）

  - 将单个巨大应用拆分成多个小应用形式
  - 各个应用能够独立开发（不同应用允许使用不同技术栈）、独立部署
  - 与其它微前端方案不同，MF 的应用之间关系平等，没有主应用/子应用之分

- Monorepo 单软件包

  - 多个 repo 里的代码现在就放在一个 repo，便于管理
  - Monorepo 中所有模块都共享, 公共依赖只要安装一次
  - 微前端应用适合 Monorepo 这种代码组织方式

- Webpack5 Module Federation + pnpm-workspace 实现微前端

  - pnpm-workspace

    - 初始化

    ```shell
    mkdir micro-frontend
    cd micro-frontend
    pnpm init
    ```

    - 初始化工作空间：在根目录下创建 pnpm-workspace.yaml 文件

    ```shell
    packages:
    - 'packages/**'

    ```

    - 安装依赖

    ```shell
    pnpm i webpack -D -W  // 所有packages共享
    pnpm i lodash -S -r --filter app1  // 只安装在 app1 下
    pnpm i lodash -S // 只安装在 app1 下，也可以直接在 app1 目录下安装

    ```

  - Webpack5 MF

    - 模块导出

    ```javascript
    // app1/webpack.config.js
    const { ModuleFederationPlugin } = require("webpack").container;
    module.exports = {
      plugins: [
        new ModuleFederationPlugin({
          name: "app1", // app1 应用名称
          fielname: "app1.js", // app1 模块入口
          expose: {
            // 定义app1导出哪些模块
            "./utils": "./src/utils",
            "./foo": "./src/foo",
          },
          // 依赖共享
          shared: ["lodash"],
        }),
      ],
      // MF 应用资源提供方必须以 http(s) 形式提供服务
      devServer: {
        port: 8081,
      },
    };
    ```

    - 模块导入

    ```javascript
    // app2/webpack.config.js
    const { ModuleFederationPlugin } = require("webpack").container;
    module.exports = {
      plugins: [
        new ModuleFederationPlugin({
          // 使用 remotes 属性引入远程模块列表
          remotes: {
            // 地址需要指向导出方生成的应用入口文件
            /**
             * app1和上面的name对应
             * http://localhost:8081和上面的devServer对应
             * app1.js和上面的fielname对应
             */
            RemoteApp1: "app1@http://localhost:8081/dist/app1.js",
          },
          // 依赖共享
          shared: ["lodash"],
        }),
      ],
    };

    // app2/src/index.js
    (async () => {
      /**
       * RemoteApp1和上面的remotes.RemoteApp1对应
       * utils和expose.utils对应
       */
      const { sayHello } = await import("RemoteApp1/utils");
      sayHello();
    })();
    ```

### 7. 图片处理与优化

- 处理：Asset Module 模型（指定 module.rules.type），无需 loader
  - `type = "asset/resource"`: 发送一个单独的文件并导出 URL。之前通过使用  file-loader  实现
  - `type = "asset/inline"`: 导出一个资源的 data URI。之前通过使用 url-loader 实现
  - `type = "asset/source"`: 导出资源的源代码。之前通过使用 raw-loader 实现
  - `type = "asset"`: 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现
- 优化
  - 图片压缩: 借助 image-webpack-loader
  - 雪碧图：借助 webpack-spritesmith
  - 响应式图片：借助 responsive-loader

## 二、性能优化

### 1. 性能分析

- Webpack 内置 stats 接口，专门用于统计模块构建耗时、模块依赖关系等信息

```javascript
// webpack.config.js
module.exports = {
  // ...
  // 添加 profile = true 配置
  profile: true,
};
```

```shell
npx webpack --json=stats.json
```

- SpeedMeasureWebpackPlugin: 统计出各个 Loader、插件的处理耗时

```javascript
// yarn add -D speed-measure-webpack-plugin
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const config = {};
module.exports = smp.wrap(config);
```

- UnusedWebpackPlugin: 查找出工程项目里哪些文件没有被用到

```javascript
// yarn add -D unused-webpack-plugin
const UnusedWebpackPlugin = require("unused-webpack-plugin");
module.exports = {
  plugins: [
    new UnusedWebpackPlugin({
      directories: [path.join(__dirname, "src")], // 指定需要分析的文件目录
      root: path.join(__dirname, "../"),  // 用于指定根路径，与输出有关
    }),
  ],
};
```
