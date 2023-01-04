// const loaderUtils = require("loader-utils");
const { validate } = require("schema-utils");
const schema = require("./options.json");
// const { interpolateName } = require("loader-utils");

module.exports = function (source) {
  // 1. source：接收源码，entry入口文件的源码
  // console.log("source", source);

  // 2. 获取传给loader的参数：loader.options
  // 2.1 通过 query 获取
  // const { query } = this;
  // console.log("query", query);
  // 2.2 通过 getOptions() 获取
  const options = this.getOptions();
  console.log("options", options);

  // 3. 借助 'schema-utils' 校验用户传给 loader 的参数是否符合标准
  const valid = validate(schema, options);

  const { str = "" } = options;
  const { version, webpack } = this;
  let result = null;
  result = source.replace("world", str);
  result = `
  /**
   * Loader API Version: ${version}
   * Is this in "webpack mode": ${webpack}
   */
  /**
   * Original Source From Loader
   */
  ${result}`;
  console.log("result", result);

  // 4. 返回结果
  // 4.1 返回一个信息
  // return result;
  // 4.2. this.callback: 返回多个信息
  this.callback(null, result);
  // 4.3 this.async：处理loader里的异步事件
  // const callback = this.async();
  // setTimeout(() => {
  //   callback(null, result);
  // }, 2000);
};
