"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"f93174d364f5\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzhhZWQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJmOTMxNzRkMzY0ZjVcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/providers.tsx":
/*!***************************!*\
  !*** ./app/providers.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Providers; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi/chains */ \"(app-pages-browser)/./node_modules/viem/_esm/chains/definitions/base.js\");\n/* harmony import */ var _coinbase_onchainkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coinbase/onchainkit */ \"(app-pages-browser)/./node_modules/@coinbase/onchainkit/esm/index.js\");\n\n\n\nfunction Providers(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coinbase_onchainkit__WEBPACK_IMPORTED_MODULE_1__.OnchainKitProvider, {\n        apiKey: \"Ws0PSM5q4b0j9LYba2xPDnIaNmq7in24\",\n        chain: wagmi_chains__WEBPACK_IMPORTED_MODULE_2__.base,\n        config: {\n            appearance: {\n                theme: \"cyberpunk\"\n            }\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/tinahe/apple-pay/app/providers.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Providers;\nvar _c;\n$RefreshReg$(_c, \"Providers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm92aWRlcnMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9DO0FBQ3NCO0FBRzNDLFNBQVNFLFVBQVUsS0FBcUM7UUFBckMsRUFBRUMsUUFBUSxFQUEyQixHQUFyQztJQUNoQyxxQkFDRSw4REFBQ0Ysb0VBQWtCQTtRQUNqQkcsUUFBUUMsa0NBQTBDO1FBQ2xERyxPQUFPUiw4Q0FBSUE7UUFDWFMsUUFBUTtZQUNOQyxZQUFZO2dCQUNWQyxPQUFPO1lBQ1Q7UUFDRjtrQkFFQ1I7Ozs7OztBQUdQO0tBZHdCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcHJvdmlkZXJzLnRzeD9jZTQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJhc2UgfSBmcm9tICd3YWdtaS9jaGFpbnMnO1xuaW1wb3J0IHsgT25jaGFpbktpdFByb3ZpZGVyIH0gZnJvbSAnQGNvaW5iYXNlL29uY2hhaW5raXQnO1xuaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb3ZpZGVycyh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPE9uY2hhaW5LaXRQcm92aWRlclxuICAgICAgYXBpS2V5PXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PTkNIQUlOS0lUX0FQSV9LRVl9XG4gICAgICBjaGFpbj17YmFzZX1cbiAgICAgIGNvbmZpZz17e1xuICAgICAgICBhcHBlYXJhbmNlOiB7XG4gICAgICAgICAgdGhlbWU6ICdjeWJlcnB1bmsnLFxuICAgICAgICB9XG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L09uY2hhaW5LaXRQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJiYXNlIiwiT25jaGFpbktpdFByb3ZpZGVyIiwiUHJvdmlkZXJzIiwiY2hpbGRyZW4iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfT05DSEFJTktJVF9BUElfS0VZIiwiY2hhaW4iLCJjb25maWciLCJhcHBlYXJhbmNlIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/providers.tsx\n"));

/***/ })

});