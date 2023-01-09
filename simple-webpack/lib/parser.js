const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const { transformFromAst } = require("@babel/core");

// 模块分析：读取入口文件，分析代码
// index -> a/b
// b -> c
module.exports = {
  // 1. 返回入口文件的一个ast抽象语法树
  getAst(filename) {
    const content = fs.readFileSync(filename, "utf-8");
    // console.log("源代码", content);
    // 源代码
    // import add from "./a.js";
    // console.log("index.js - add(1, 2)", add(1, 2));
    // import { msg } from "./b.js";
    // console.log(`Hello, ${msg}`);

    const ast = parser.parse(content, {
      sourceType: "module",
    });
    // console.log("ast", ast.program.body);
    // ast [
    //     Node {
    //       type: 'ImportDeclaration',
    //       start: 0,
    //       end: 25,
    //       loc: SourceLocation {
    //         start: [Position],
    //         end: [Position],
    //         filename: undefined,
    //         identifierName: undefined
    //       },
    //       specifiers: [ [Node] ],
    //       source: Node {
    //         type: 'StringLiteral',
    //         start: 16,
    //         end: 24,
    //         loc: [SourceLocation],
    //         extra: [Object],
    //         value: './a.js'
    //       }
    //     },
    //     Node {
    //       type: 'ExpressionStatement',
    //       start: 27,
    //       end: 74,
    //       loc: SourceLocation {
    //         start: [Position],
    //         end: [Position],
    //         filename: undefined,
    //         identifierName: undefined
    //       },
    //       expression: Node {
    //         type: 'CallExpression',
    //         start: 27,
    //         end: 73,
    //         loc: [SourceLocation],
    //         callee: [Node],
    //         arguments: [Array]
    //       }
    //     },
    //     Node {
    //       type: 'ImportDeclaration',
    //       start: 76,
    //       end: 105,
    //       loc: SourceLocation {
    //         start: [Position],
    //         end: [Position],
    //         filename: undefined,
    //         identifierName: undefined
    //       },
    //       specifiers: [ [Node] ],
    //       source: Node {
    //         type: 'StringLiteral',
    //         start: 96,
    //         end: 104,
    //         loc: [SourceLocation],
    //         extra: [Object],
    //         value: './b.js'
    //       }
    //     },
    //     Node {
    //       type: 'ExpressionStatement',
    //       start: 107,
    //       end: 136,
    //       loc: SourceLocation {
    //         start: [Position],
    //         end: [Position],
    //         filename: undefined,
    //         identifierName: undefined
    //       },
    //       expression: Node {
    //         type: 'CallExpression',
    //         start: 107,
    //         end: 135,
    //         loc: [SourceLocation],
    //         callee: [Node],
    //         arguments: [Array]
    //       }
    //     }
    //   ]

    return ast;
  },
  //   2. 从入口文件的ast抽象语法树分析它的依赖
  getDependcies(ast, filename) {
    const dependcies = {};
    traverse(ast, {
      ImportDeclaration({ node }) {
        let newPath =
          "./" + path.join(path.dirname(filename), node.source.value);
        // 在Windows下则会以反斜杠（\）分隔路径,统一为（/）
        newPath = newPath.replace("\\", "/");
        dependcies[node.source.value] = newPath;
      },
    });

    // console.log("dependcies", dependcies);
    // dependcies { './a.js': './src/a.js', './b.js': './src/b.js' }

    return dependcies;
  },
  // 3. 从入口文件的ast抽象语法树生成可在浏览器执行的代码
  // esmoudle => commonjs
  getCode(ast) {
    const { code } = transformFromAst(ast, null, {
      presets: ["@babel/preset-env"],
    });

    // console.log("code", code);
    // code "use strict";
    // var _a = _interopRequireDefault(require("./a.js"));
    // var _b = require("./b.js");
    // function _interopRequireDefault(obj) {
    //   return obj && obj.__esModule ? obj : { default: obj };
    // }
    // console.log("index.js - add(1, 2)", (0, _a["default"])(1, 2));
    // console.log("Hello, ".concat(_b.msg));

    return code;
  },
};
