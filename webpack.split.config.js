const path = require("path");
const baseConfig = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(baseConfig, {
  entry: {
    entry1: { import: "./spilit-chunks/entry1", runtime: "solid-runtime" },
    entry2: { import: "./spilit-chunks/entry2", runtime: "solid-runtime" },
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
        // react: {
        //   test: /react|react-dom/,
        //   name: "react",
        //   minChunks: 1,
        // },
        // vue: {
        //   test: /vue/,
        //   name: "vue",
        //   minChunks: 1,
        // },
      },
      // cacheGroups: {
      //   vendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     minChunks: 1,
      //   },
      // },
    },
  },
  profile: true,
});
