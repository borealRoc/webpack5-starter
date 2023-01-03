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
      root: path.join(__dirname, "../"), // 用于指定根路径，与输出有关
    }),
  ],
};
```

### 2. 持久化缓存

- webpack4 持久化缓存方案：cache-loader || hard-source-webpack-plugin

```javascript
// 借助 `cache-loader`
// 1. 将 Loader 处理结果保存到硬盘，下次运行时若文件内容没有发生变化则直接返回缓存结果
// 2. 只缓存了 Loader 执行结果，缓存范围与精度不如 Webpack5 内置的缓存功能，所以性能效果相对较低（性能提升在 60% ~ 80% 之间）
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["cache-loader", "babel-loader", "eslint-loader"],
      },
    ],
  },
  //...
};
// 借助 `hard-source-webpack-plugin`
// 1. 不仅仅缓存了 Loader 运行结果，还保存了 Webpack 构建过程中许多中间数据
// 2. 底层逻辑与 Webpack5 的持久化缓存很相似，但优化效果稍微差一些（性能提升在 62% ~ 88% 之间）
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
module.exports = {
  // ...
  plugins: [new HardSourceWebpackPlugin()],
};
```

- webpack5 持久化缓存方案：内置 cache 方案，效果优于上面两种
  - webpack5 将首次构建出的 Module、Chunk、ModuleGraph 等对象序列化后保存到硬盘中
  - 在下次编译时对比每一个文件的内容哈希或时间戳，未发生变化的文件跳过编译操作，直接使用缓存副本，减少重复计算

```javascript
module.exports = {
  cache: {
    type: "filesystem", // 缓存类型，支持 'memory' | 'filesystem'，需要设置为 filesystem 才能开启持久缓存
    cacheDirectory: '', // 缓存文件路径，默认为 node_modules/.cache/webpack
    buildDependencies: { // 额外的依赖文件，当这些文件内容发生变化时，缓存会完全失效而执行完整的编译构建，通常可设置为各种配置文件
      config: [
        path.join(__dirname, 'webpack.dll_config.js'),
        path.join(__dirname, '.babelrc')
      ],
    }
    maxAge: '', // 缓存失效时间，默认值为 5184000000
  },
};
```

### 3. 并行构建：多进程打包

- Webpack4 之前的项目，可以使用 HappyPack 实现并行文件加载；
- Webpack4 之后则建议使用 Thread-loader
- 生产环境下还可配合 terser-webpack-plugin 的并行压缩功能，提升整体效率

### 4. SplitChunks

- chunks 的概念
  - 多少个 entry 就多少个 Chunk（一个 entry 若引用了多个 module, 这些 moudle 都会被分配到该 entry 对应的 chunk 中）
  - 异步模块(通过 import('./xx') 等语句导入的异步模块)则创建新的 Chunk 对象
  - 根据 Runtime 模块(通过 entry.runtime 配置) 创建 Chunk 容器
  - 根据 splitChunks 设定创建若干 Chunk 对象
- webpack 默认的分包模式

  - Initial Chunk：entry 模块及相应子模块打包成 Initial Chunk
  - Async Chunk：通过 import('./xx') 等语句导入的异步模块及相应子模块组成的 Async Chunk
  - Runtime Chunk：运行时代码抽离成 Runtime Chunk，可通过 entry.runtime 配置项实现

- 分包的必要性

  - 模块重复打包：假如多个 Chunk 同时依赖同一个 Module，那么这个 Module 会被不受限制地重复打包进这些 Chunk
  - 资源冗余：客户端必须等待整个应用的代码包都加载完毕才能启动运行，但可能用户当下访问的内容只需要使用其中一部分代码
  - 缓存失效：将所有资源达成一个包后，所有改动 —— 即使只是修改了一个字符，客户端都需要重新下载整个代码包，缓存命中率极低

- 如何分包：使用 webpack 内置的 SplitChunks（主要有两种类型的配置）
  - minChunks/minSize/maxInitialRequest 等分包条件，满足这些条件的模块都会被执行分包
  - cacheGroup ：用于为特定资源声明特定分包条件，例如可以为 node_modules 包设定更宽松的分包条件

- 最佳分包策略
  - 将 node_modules 模块打包成单独文件(通过 cacheGroups 实现)
  - 针对业务代码，通过 minChunks 配置项将频繁使用的资源合并为 common 资源，单独打包
  - 首屏用不上的代码，尽量以异步方式引入

### 其它

- 约束 Loader 执行范围：include/exclude
- 设置 resolve 缩小搜索范围: extension, modules
- 开发模式禁用产物优化：Webpack 提供了许多产物优化功能，例如：Tree-Shaking、SplitChunks、Minimizer 等，这些能力能够有效减少最终产物的尺寸，提升生产环境下的运行性能，但这些优化在开发环境中意义不大，反而会增加构建器的负担(都是性能大户)
  - optimization.minimize 保持默认值或 false，关闭代码压缩
  - optimization.splitChunks 保持默认值或 false，关闭代码分包
  - optimization.usedExports 保持默认值或 false，关闭 Tree-shaking 功能
