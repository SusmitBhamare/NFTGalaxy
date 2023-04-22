"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/secure";
exports.ids = ["pages/api/secure"];
exports.modules = {

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "(api)/./pages/api/secure.js":
/*!*****************************!*\
  !*** ./pages/api/secure.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! buffer */ \"buffer\");\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const projectId = process.env.IPFS_PROJECT_ID;\n    const projectSecret = process.env.API_KEY_SECRET;\n    const auth = `Basic ${buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(`${projectId}:${projectSecret}`).toString('base64')}`;\n    res.status(200).json({\n        data: auth\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VjdXJlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixpRUFBTSxPQUFnQkMsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNsQyxLQUFLLENBQUNDLFNBQVMsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGVBQWU7SUFDN0MsS0FBSyxDQUFDQyxhQUFhLEdBQUdILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxjQUFjO0lBQ2hELEtBQUssQ0FBQ0MsSUFBSSxJQUFJLE1BQU0sRUFBRVQsK0NBQVcsSUFBSUcsU0FBUyxDQUFDLENBQUMsRUFBRUksYUFBYSxJQUFJSSxRQUFRLENBQUMsQ0FBUTtJQUVwRlQsR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztRQUFDQyxJQUFJLEVBQUVMLElBQUk7SUFBQyxDQUFDO0FBQ3JDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnRtYXJrZXRwbGFjZS8uL3BhZ2VzL2FwaS9zZWN1cmUuanM/ZTc4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdWZmZXIgfSBmcm9tICdidWZmZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdElkID0gcHJvY2Vzcy5lbnYuSVBGU19QUk9KRUNUX0lEO1xyXG4gIGNvbnN0IHByb2plY3RTZWNyZXQgPSBwcm9jZXNzLmVudi5BUElfS0VZX1NFQ1JFVDtcclxuICBjb25zdCBhdXRoID0gYEJhc2ljICR7QnVmZmVyLmZyb20oYCR7cHJvamVjdElkfToke3Byb2plY3RTZWNyZXR9YCkudG9TdHJpbmcoJ2Jhc2U2NCcpfWA7XHJcblxyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogYXV0aCB9KTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkJ1ZmZlciIsInJlcSIsInJlcyIsInByb2plY3RJZCIsInByb2Nlc3MiLCJlbnYiLCJJUEZTX1BST0pFQ1RfSUQiLCJwcm9qZWN0U2VjcmV0IiwiQVBJX0tFWV9TRUNSRVQiLCJhdXRoIiwiZnJvbSIsInRvU3RyaW5nIiwic3RhdHVzIiwianNvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/secure.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/secure.js"));
module.exports = __webpack_exports__;

})();