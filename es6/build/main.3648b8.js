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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var super_saiya_add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! super-saiya-add */ \"./node_modules/super-saiya-add/src/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nvar _dec, _class;\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar a = 1;\nvar arr = [1, 2, 3];\narr.map(function (item) {\n  console.log(item);\n});\n// Promise\nvar p = new Promise(function (resolve, reject) {\n  setTimeout(function () {\n    resolve(\"OOOOOKKKKK\");\n  }, 1000);\n});\np.then(function (result) {\n  console.log(result);\n}, function (reason) {\n  console.log(reason);\n});\n// 装饰器\nvar MyClass = (_dec = log(\"Hello\"), _dec(_class = /*#__PURE__*/_createClass(function MyClass() {\n  _classCallCheck(this, MyClass);\n})) || _class);\nfunction log(text) {\n  return function (target) {\n    target.prototype.logger = function () {\n      return console.log(\"\".concat(text, \", \").concat(target.name));\n    };\n  };\n}\nvar mc = new MyClass();\nmc.logger();\n\n// 测试自己发布的npm包\n\nconsole.log(\"测试自己发布的npm包_syAdd(10, 20)\", (0,super_saiya_add__WEBPACK_IMPORTED_MODULE_0__.syAdd)(10, 20));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lczYvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrNS1zdGFydGVyLy4vZXM2L2luZGV4LmpzPzlhZmIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYSA9IDE7XHJcbmNvbnN0IGFyciA9IFsxLCAyLCAzXTtcclxuYXJyLm1hcCgoaXRlbSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG59KTtcclxuLy8gUHJvbWlzZVxyXG5jb25zdCBwID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgcmVzb2x2ZShcIk9PT09PS0tLS0tcIik7XHJcbiAgfSwgMTAwMCk7XHJcbn0pO1xyXG5wLnRoZW4oXHJcbiAgKHJlc3VsdCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICB9LFxyXG4gIChyZWFzb24pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlYXNvbik7XHJcbiAgfVxyXG4pO1xyXG4vLyDoo4XppbDlmahcclxuQGxvZyhcIkhlbGxvXCIpXHJcbmNsYXNzIE15Q2xhc3Mge31cclxuZnVuY3Rpb24gbG9nKHRleHQpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgdGFyZ2V0LnByb3RvdHlwZS5sb2dnZXIgPSAoKSA9PiBjb25zb2xlLmxvZyhgJHt0ZXh0fSwgJHt0YXJnZXQubmFtZX1gKTtcclxuICB9O1xyXG59XHJcbmNvbnN0IG1jID0gbmV3IE15Q2xhc3MoKTtcclxubWMubG9nZ2VyKCk7XHJcblxyXG4vLyDmtYvor5Xoh6rlt7Hlj5HluIPnmoRucG3ljIVcclxuaW1wb3J0IHsgc3lBZGQgfSBmcm9tIFwic3VwZXItc2FpeWEtYWRkXCI7XHJcbmNvbnNvbGUubG9nKFwi5rWL6K+V6Ieq5bex5Y+R5biD55qEbnBt5YyFX3N5QWRkKDEwLCAyMClcIiwgc3lBZGQoMTAsIDIwKSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./es6/index.js\n");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./node_modules/super-saiya-add/src/index.js":
/*!***************************************************!*\
  !*** ./node_modules/super-saiya-add/src/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"syAdd\": () => (/* binding */ syAdd)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\nvar syAdd = (lodash__WEBPACK_IMPORTED_MODULE_0___default().add);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3VwZXItc2FpeWEtYWRkL3NyYy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjazUtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9zdXBlci1zYWl5YS1hZGQvc3JjL2luZGV4LmpzPzg0NDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5leHBvcnQgY29uc3Qgc3lBZGQgPSBfLmFkZDtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/super-saiya-add/src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./es6/index.js");
/******/ 	
/******/ })()
;