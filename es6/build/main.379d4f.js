/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
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

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nvar _dec, _class;\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar a = 1;\nvar arr = [1, 2, 3];\narr.map(function (item) {\n  console.log(item);\n});\n// Promise\nvar p = new Promise(function (resolve, reject) {\n  setTimeout(function () {\n    resolve(\"OOOOOKKKKK\");\n  }, 1000);\n});\np.then(function (result) {\n  console.log(result);\n}, function (reason) {\n  console.log(reason);\n});\n// 装饰器\nvar MyClass = (_dec = log(\"Hello\"), _dec(_class = /*#__PURE__*/_createClass(function MyClass() {\n  _classCallCheck(this, MyClass);\n})) || _class);\nfunction log(text) {\n  return function (target) {\n    target.prototype.logger = function () {\n      return console.log(\"\".concat(text, \", \").concat(target.name));\n    };\n  };\n}\nvar mc = new MyClass();\nmc.logger();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lczYvaW5kZXguanMuanMiLCJuYW1lcyI6WyJhIiwiYXJyIiwibWFwIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwidGhlbiIsInJlc3VsdCIsInJlYXNvbiIsIk15Q2xhc3MiLCJ0ZXh0IiwidGFyZ2V0IiwicHJvdG90eXBlIiwibG9nZ2VyIiwibmFtZSIsIm1jIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrNS1zdGFydGVyLy4vZXM2L2luZGV4LmpzPzlhZmIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYSA9IDE7XHJcbmNvbnN0IGFyciA9IFsxLCAyLCAzXTtcclxuYXJyLm1hcCgoaXRlbSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG59KTtcclxuLy8gUHJvbWlzZVxyXG5jb25zdCBwID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgcmVzb2x2ZShcIk9PT09PS0tLS0tcIik7XHJcbiAgfSwgMTAwMCk7XHJcbn0pO1xyXG5wLnRoZW4oXHJcbiAgKHJlc3VsdCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICB9LFxyXG4gIChyZWFzb24pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlYXNvbik7XHJcbiAgfVxyXG4pO1xyXG4vLyDoo4XppbDlmahcclxuQGxvZyhcIkhlbGxvXCIpXHJcbmNsYXNzIE15Q2xhc3Mge31cclxuZnVuY3Rpb24gbG9nKHRleHQpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgdGFyZ2V0LnByb3RvdHlwZS5sb2dnZXIgPSAoKSA9PiBjb25zb2xlLmxvZyhgJHt0ZXh0fSwgJHt0YXJnZXQubmFtZX1gKTtcclxuICB9O1xyXG59XHJcbmNvbnN0IG1jID0gbmV3IE15Q2xhc3MoKTtcclxubWMubG9nZ2VyKCk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQU1BLENBQUMsR0FBRyxDQUFDO0FBQ1gsSUFBTUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckJBLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDLFVBQUNDLElBQUksRUFBSztFQUNoQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztBQUNuQixDQUFDLENBQUM7QUFDRjtBQUNBLElBQU1HLENBQUMsR0FBRyxJQUFJQyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7RUFDekNDLFVBQVUsQ0FBQyxZQUFNO0lBQ2ZGLE9BQU8sQ0FBQyxZQUFZLENBQUM7RUFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQztBQUNWLENBQUMsQ0FBQztBQUNGRixDQUFDLENBQUNLLElBQUksQ0FDSixVQUFDQyxNQUFNLEVBQUs7RUFDVlIsT0FBTyxDQUFDQyxHQUFHLENBQUNPLE1BQU0sQ0FBQztBQUNyQixDQUFDLEVBQ0QsVUFBQ0MsTUFBTSxFQUFLO0VBQ1ZULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUSxNQUFNLENBQUM7QUFDckIsQ0FBQyxDQUNGO0FBQ0Q7QUFBQSxJQUVNQyxPQUFPLFdBRFpULEdBQUcsQ0FBQyxPQUFPLENBQUM7RUFBQTtBQUFBO0FBRWIsU0FBU0EsR0FBRyxDQUFDVSxJQUFJLEVBQUU7RUFDakIsT0FBTyxVQUFVQyxNQUFNLEVBQUU7SUFDdkJBLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLEdBQUc7TUFBQSxPQUFNZCxPQUFPLENBQUNDLEdBQUcsV0FBSVUsSUFBSSxlQUFLQyxNQUFNLENBQUNHLElBQUksRUFBRztJQUFBO0VBQ3hFLENBQUM7QUFDSDtBQUNBLElBQU1DLEVBQUUsR0FBRyxJQUFJTixPQUFPLEVBQUU7QUFDeEJNLEVBQUUsQ0FBQ0YsTUFBTSxFQUFFIn0=\n//# sourceURL=webpack-internal:///./es6/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./es6/index.js"]();
/******/ 	
/******/ })()
;