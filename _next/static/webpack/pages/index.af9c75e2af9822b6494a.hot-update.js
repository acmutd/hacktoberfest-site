webpackHotUpdate_N_E("pages/index",{

/***/ "./components/hero.tsx":
/*!*****************************!*\
  !*** ./components/hero.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/firebase */ \"./services/firebase.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/aditya/Developer/github/hacktoberfest-site/components/hero.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Hero = function Hero() {\n  var registerBtnClick = function registerBtnClick() {\n    _services_firebase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].analytics().logEvent('sign_up', {\n      method: 'register_btn'\n    });\n    window.location.href = '//apply.acmutd.co/hack';\n  };\n\n  return __jsx(\"div\", {\n    className: \"mt-32 flex flex-row items-center justify-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row items-center justify-between w-screen px-6\",\n    style: {\n      maxWidth: '1300px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"p-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-bold\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }, \"ACM Hacktoberfest\"), __jsx(\"h3\", {\n    className: \"py-1 text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-medium\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, \"October 17th, 9AM - 9PM CST\"), __jsx(\"img\", {\n    src: \"/img/sponsors-light.svg\",\n    alt: \"\",\n    style: {\n      maxHeight: '25px',\n      width: 'auto'\n    },\n    className: \"mt-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: \"w-full flex-row items-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    onClick: registerBtnClick,\n    className: \"mt-6 rounded-full py-2 px-8 text-lg bg-pond hover:bg-blue-300 hover:text-black text-ocean font-bold\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, \"Register now\"), __jsx(\"button\", {\n    onClick: registerBtnClick,\n    className: \"ml-4 mt-6 rounded-full py-2 px-8 text-lg bg-fuschia hover:bg-pink-800 text-gray-300 hover:text-gray-400 font-bold\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, \"Register now\"))), __jsx(\"div\", {\n    className: \"lg:pr-20 xl:pr-20\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"/img/acm-htf.png\",\n    style: {\n      maxHeight: '400px',\n      width: 'auto'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hero\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZXJvLnRzeD9mMjUwIl0sIm5hbWVzIjpbIkhlcm8iLCJyZWdpc3RlckJ0bkNsaWNrIiwiZmlyZWJhc2UiLCJhbmFseXRpY3MiLCJsb2dFdmVudCIsIm1ldGhvZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm1heFdpZHRoIiwibWF4SGVpZ2h0Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQW1CO0FBQzlCLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QkMsOERBQVEsQ0FBQ0MsU0FBVCxHQUFxQkMsUUFBckIsQ0FBOEIsU0FBOUIsRUFBeUM7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBekM7QUFDQUMsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1Qix3QkFBdkI7QUFDRCxHQUhEOztBQUtBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsaURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLGtJQURaO0FBRUUsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLG9FQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFJRTtBQUFJLGFBQVMsRUFBQyx1RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUpGLEVBT0U7QUFDRSxPQUFHLEVBQUMseUJBRE47QUFFRSxPQUFHLEVBQUMsRUFGTjtBQUdFLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUUsTUFBYjtBQUFxQkMsV0FBSyxFQUFFO0FBQTVCLEtBSFQ7QUFJRSxhQUFTLEVBQUMsTUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFhRTtBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxXQUFPLEVBQUVWLGdCQURYO0FBRUUsYUFBUyxFQUFDLHFHQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFNRTtBQUNFLFdBQU8sRUFBRUEsZ0JBRFg7QUFFRSxhQUFTLEVBQUMsbUhBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORixDQWJGLENBSEYsRUE2QkU7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLGtCQUFUO0FBQTRCLFNBQUssRUFBRTtBQUFFUyxlQUFTLEVBQUUsT0FBYjtBQUFzQkMsV0FBSyxFQUFFO0FBQTdCLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTdCRixDQURGLENBREY7QUFxQ0QsQ0EzQ0Q7O0tBQU1YLEk7QUE2Q1NBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9oZXJvLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICcuLi9zZXJ2aWNlcy9maXJlYmFzZSdcblxuY29uc3QgSGVybyA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IHJlZ2lzdGVyQnRuQ2xpY2sgPSAoKSA9PiB7XG4gICAgZmlyZWJhc2UuYW5hbHl0aWNzKCkubG9nRXZlbnQoJ3NpZ25fdXAnLCB7IG1ldGhvZDogJ3JlZ2lzdGVyX2J0bicgfSlcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvL2FwcGx5LmFjbXV0ZC5jby9oYWNrJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtMzIgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wtcmV2ZXJzZSBzbTpmbGV4LWNvbC1yZXZlcnNlIG1kOmZsZXgtY29sLXJldmVyc2UgbGc6ZmxleC1yb3cgeGw6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LXNjcmVlbiBweC02J1xuICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzEzMDBweCcgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTQnPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtNHhsIHNtOnRleHQtNXhsIG1kOnRleHQtNXhsIGxnOnRleHQtNXhsIHhsOnRleHQtNnhsIGZvbnQtYm9sZCc+XG4gICAgICAgICAgICBBQ00gSGFja3RvYmVyZmVzdFxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT0ncHktMSB0ZXh0LWxnIHNtOnRleHQteGwgbWQ6dGV4dC14bCBsZzp0ZXh0LXhsIHhsOnRleHQtMnhsIGZvbnQtbWVkaXVtJz5cbiAgICAgICAgICAgIE9jdG9iZXIgMTd0aCwgOUFNIC0gOVBNIENTVFxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPScvaW1nL3Nwb25zb3JzLWxpZ2h0LnN2ZydcbiAgICAgICAgICAgIGFsdD0nJ1xuICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiAnMjVweCcsIHdpZHRoOiAnYXV0bycgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbXQtMidcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgZmxleC1yb3cgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17cmVnaXN0ZXJCdG5DbGlja31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtdC02IHJvdW5kZWQtZnVsbCBweS0yIHB4LTggdGV4dC1sZyBiZy1wb25kIGhvdmVyOmJnLWJsdWUtMzAwIGhvdmVyOnRleHQtYmxhY2sgdGV4dC1vY2VhbiBmb250LWJvbGQnPlxuICAgICAgICAgICAgICBSZWdpc3RlciBub3dcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtyZWdpc3RlckJ0bkNsaWNrfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9J21sLTQgbXQtNiByb3VuZGVkLWZ1bGwgcHktMiBweC04IHRleHQtbGcgYmctZnVzY2hpYSBob3ZlcjpiZy1waW5rLTgwMCB0ZXh0LWdyYXktMzAwIGhvdmVyOnRleHQtZ3JheS00MDAgZm9udC1ib2xkJz5cbiAgICAgICAgICAgICAgUmVnaXN0ZXIgbm93XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZzpwci0yMCB4bDpwci0yMCc+XG4gICAgICAgICAgPGltZyBzcmM9Jy9pbWcvYWNtLWh0Zi5wbmcnIHN0eWxlPXt7IG1heEhlaWdodDogJzQwMHB4Jywgd2lkdGg6ICdhdXRvJyB9fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/hero.tsx\n");

/***/ })

})