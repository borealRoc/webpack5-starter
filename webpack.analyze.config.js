const es6Config = require("./webpack.es6.config");
// const tsConfig = require("./webpack.ts.config");
// const vueConfig = require("./webpack.vue.config");
// const reactConfig = require("./webpack.react.config");
// const assetConfig = require("./webpack.asset.config");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

// 注意，这里是用 `smp.wrap` 函数包裹住 Webpack 配置
module.exports = smp.wrap(es6Config);
// module.exports = smp.wrap(tsConfig);
// module.exports = smp.wrap(vueConfig);
// module.exports = smp.wrap(reactConfig);
// module.exports = smp.wrap(assetConfig);
