/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./es6/index.js":
/*!**********************!*\
  !*** ./es6/index.js ***!
  \**********************/
/***/ (() => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nvar _dec, _class;\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar a = 1;\nvar arr = [1, 2, 3];\narr.map(function (item) {\n  console.log(item);\n});\n// Promise\nvar p = new Promise(function (resolve, reject) {\n  setTimeout(function () {\n    resolve(\"OOOOOKKKKK\");\n  }, 1000);\n});\np.then(function (result) {\n  console.log(result);\n}, function (reason) {\n  console.log(reason);\n});\n// 装饰器\nvar MyClass = (_dec = log(\"Hello\"), _dec(_class = /*#__PURE__*/_createClass(function MyClass() {\n  _classCallCheck(this, MyClass);\n})) || _class);\nfunction log(text) {\n  return function (target) {\n    target.prototype.logger = function () {\n      return console.log(\"\".concat(text, \", \").concat(target.name));\n    };\n  };\n}\nvar mc = new MyClass();\nmc.logger();\n\n//# sourceURL=webpack://webpack5-starter/./es6/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./es6/index.js"]();
/******/ 	
/******/ })()
;