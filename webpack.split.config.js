const path = require("path");
const baseConfig = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(baseConfig, {
  entry: {
    entry1: "./spilit-chunks/src/entry1",
    entry2: "./spilit-chunks/src/entry2",
  },
  output: {
    path: path.resolve(__dirname, "./spilit-chunks/build"),
    filename: "[name].[chunkhash:6].js",
  },
  optimization: {
    splitChunks: {
      /**
       * 分包的第一种策：设置分包条件
       * 1. 设置分包范围 ~ chunks: 'all' | 'async' | 'initial'
       * all: 对 Initial Chunk 与 Async Chunk 都生效，建议优先使用该值
       * initial: 只对 Initial Chunk 生效
       * async: 只对 Async Chunk 生效
       */
        chunks: "all",
      /**
       * 2. 限制分包数量 ~ minChunks, maxInitialRequest, maxAsyncRequests
       * minChunks: 根据 Module 使用频率分包, 它并不直接等价于被 import 的次数, 而是取决于上游调用者是否被视作 Initial Chunk 或 Async Chunk 处理
       * maxInitialRequest：设置 Initial Chunk 最大并行请求数（“请求数”是指加载一个 Chunk 时所需要加载的所有分包数）
       * maxAsyncRequests：用于设置 Async Chunk 最大并行请求数
       */
        minChunks: 2,
        maxInitialRequests: 5,
        maxAsyncRequests: 3,
      /**
       * 3. 限制分包体积（当包体过小时直接取消分包，防止产物过"碎"）~ minSize, maxSize, maxInitialSize, maxAsyncSize, enforceSizeThreshold
       * minSize： 超过这个尺寸的 Chunk 才会正式被分包
       * maxSize： 超过这个尺寸的 Chunk 会尝试进一步拆分出更小的 Chunk
       * maxInitialSize： 与 maxSize 类似，但只对 entry 配置的入口模块生效
       * maxAsyncSize： 与 maxSize 功能类似，但只对异步引入的模块生效
       * enforceSizeThreshold： 超过这个尺寸的 Chunk 会被强制分包，忽略上述其它 Size 限制
       */
      /**
       * 分包的第二种策略：设置缓存组
       */
      cacheGroups: {
        lodash: {
          test: /lodash/,
          name: "lodash",
          minChunks: 1,
        },
        react: {
          test: /react|react-dom/,
          name: "react",
          minChunks: 1,
        },
        vue: {
          test: /vue/,
          name: "vue",
          minChunks: 1,
        },
      },
    },
  },
});

// 一、chunks
// 1. Webpack 首先根据 entry 配置创建若干 Chunk 对象：
// 1.1 多少个 entry 就多少个 Chunk
// 1.2 一个 entry 若引用了多个 module, 这些 moudle 都会被分配到该 entry 对应的 chunk 中
// 2. 异步模块(通过 import('./xx') 等语句导入的异步模块)则创建新的 Chunk 对象:
// import(/* webpackChunkName: "asyncB" */ "./b").then((asyncB) => {
//     console.log(asyncB);
//   });
// 3. 根据 splitChunks 设定创建若干 Chunk 对象
// 4. 根据 Runtime 模块(取决于配置) 创建 Chunk 容器

// 二、分包的必要性
// 1. 模块重复打包：假如多个 Chunk 同时依赖同一个 Module，那么这个 Module 会被不受限制地重复打包进这些 Chunk
// 2. 资源冗余：客户端必须等待整个应用的代码包都加载完毕才能启动运行，但可能用户当下访问的内容只需要使用其中一部分代码
// 3. 缓存失效：将所有资源达成一个包后，所有改动 —— 即使只是修改了一个字符，客户端都需要重新下载整个代码包，缓存命中率极低

// 三、如何分包：使用webpack内置的SplitChunks
// 1. splitChunks 主要有两种类型的配置
// 1.1 minChunks/minSize/maxInitialRequest 等分包条件，满足这些条件的模块都会被执行分包
// 1.2 cacheGroup ：用于为特定资源声明特定分包条件，例如可以为 node_modules 包设定更宽松的分包条件

// 四、最佳分包策略
// 1. 针对 node_modules 资源
// 1.1 将 node_modules 模块打包成单独文件(通过 cacheGroups 实现)，防止业务代码的变更影响 NPM 包缓存，同时建议通过 maxSize 设定阈值，防止 vendor 包体过大
// 1.2 更激进的，如果生产环境已经部署 HTTP2/3 一类高性能网络协议，甚至可以考虑将每一个 NPM 包都打包成单独文件
// 2. 针对业务代码
// 2.1 设置 common 分组，通过 minChunks 配置项将使用率较高的资源合并为 Common 资源
// 2.2 首屏用不上的代码，尽量以异步方式引入
