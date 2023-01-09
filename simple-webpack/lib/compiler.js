const { getAst, getDependcies, getCode } = require("./parser");
const path = require("path");
const fs = require("fs");

module.exports = class Compiler {
  constructor(opts) {
    const { entry, output } = opts;
    this.entry = entry;
    this.output = output;
    this.moduleInfoArr = [];
  }
  build(filename) {
    let ast = getAst(filename);
    let dependcies = getDependcies(ast, filename);
    let code = getCode(ast);
    return {
      filename,
      dependcies,
      code,
    };
  }
  // 执行编译
  run() {
    // 1.  拿到webpack.config参数，分析入口文件: 文件名，依赖， 代码
    const info = this.build(this.entry);
    // console.log("info", info);
    // info {
    //     filename: './src/index.js',
    //     dependcies: { './a.js': './src/a.js', './b.js': './src/b.js' },
    //     code: '"use strict";\n' +
    //       '\n' +
    //       'var _a = _interopRequireDefault(require("./a.js"));\n' +
    //       'var _b = require("./b.js");\n' +
    //       'function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n' +
    //       'console.log("index.js - add(1, 2)", (0, _a["default"])(1, 2));\n' +
    //       'console.log("Hello, ".concat(_b.msg));'
    //   }

    // 2. 遍历入口文件的依赖文件有无依赖
    this.moduleInfoArr.push(info);
    for (let i = 0; i < this.moduleInfoArr.length; i++) {
      const item = this.moduleInfoArr[i];
      const { dependcies } = item;
      // if (dependcies && JSON.stringify(dependcies) !== "{}") {
      if (dependcies) {
        for (let j in dependcies) {
          this.moduleInfoArr.push(this.build(dependcies[j]));
        }
      }
    }

    // 3. 格式转化，数组转对象
    const moduleInfoObj = {};
    this.moduleInfoArr.forEach((item) => {
      moduleInfoObj[item.filename] = {
        dependcies: item.dependcies,
        code: item.code,
      };
    });
    // console.log('moduleInfoObj', moduleInfoObj)
    // moduleInfoObj {
    //     './src/index.js': {
    //       dependcies: { './a.js': './src/a.js', './b.js': './src/b.js' },
    //       code: '"use strict";\n' +
    //         '\n' +
    //         'var _a = _interopRequireDefault(require("./a.js"));\n' +
    //         'var _b = require("./b.js");\n' +
    //         'function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n' +
    //         'console.log("index.js - add(1, 2)", (0, _a["default"])(1, 2));\n' +
    //         'console.log("Hello, ".concat(_b.msg));'
    //     },
    //     './src/a.js': {
    //       dependcies: {},
    //       code: '"use strict";\n' +
    //         '\n' +
    //         'Object.defineProperty(exports, "__esModule", {\n' +
    //         '  value: true\n' +
    //         '});\n' +
    //         'exports["default"] = void 0;\n' +
    //         'var _default = function _default(a, b) {\n' +
    //         '  return a + b;\n' +
    //         '};\n' +
    //         'exports["default"] = _default;'
    //     },
    //     './src/b.js': {
    //       dependcies: { './c.js': './src/c.js' },
    //       code: '"use strict";\n' +
    //         '\n' +
    //         'Object.defineProperty(exports, "__esModule", {\n' +
    //         '  value: true\n' +
    //         '});\n' +
    //         'exports.msg = void 0;\n' +
    //         'var _c = _interopRequireDefault(require("./c.js"));\n' +
    //         'function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n' +
    //         'var msg = (0, _c["default"])("webpack");\n' +
    //         'exports.msg = msg;'
    //     },
    //     './src/c.js': {
    //       dependcies: {},
    //       code: '"use strict";\n' +
    //         '\n' +
    //         'Object.defineProperty(exports, "__esModule", {\n' +
    //         '  value: true\n' +
    //         '});\n' +
    //         'exports["default"] = void 0;\n' +
    //         'var _default = function _default(name) {\n' +
    //         '  return name.toUpperCase();\n' +
    //         '};\n' +
    //         'exports["default"] = _default;'
    //     }
    //   }

    // 4. 生成打包文件
    this.file(moduleInfoObj);
  }
  // 生成打包文件
  file(code) {
    // step1: 得到输出目录
    const outputPath = path.join(this.output.path, this.output.filename);
    // console.log("outputPath", outputPath);
    // outputPath E:\study\webpack5-starter\simple-webpack\dist\main.js

    //step2: 生成打包代码
    // 2.1 代码转成字符串，以便 eval 执行
    const codeStr = JSON.stringify(code);
    
    // 2.2 生成打包后的代码：是一个自执行函数，解析代码中的require方法和exports对象, 并用eval执行代码
    const bundle = `(function(graph){
      function require(module){
          function localrequire(relativePath){
             return require(graph[module].dependcies[relativePath])
          }
          var exports = {};
          (function(require,exports,code){
              eval(code)
          })(localrequire,exports,graph[module].code);
          return exports;
      }
      require('${this.entry}')
    })(${codeStr})`;

    // step3: 生成打包文件
    fs.writeFileSync(outputPath, bundle, "utf-8");
  }
};
