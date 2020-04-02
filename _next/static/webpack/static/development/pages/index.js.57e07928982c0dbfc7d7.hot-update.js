webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./componentes/Noticias.js":
/*!*********************************!*\
  !*** ./componentes/Noticias.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Noticia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Noticia */ "./componentes/Noticia.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Usuario\\Documents\\programacion\\curso react\\practicas\\bitcoinapp\\componentes\\Noticias.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Noticias = function Noticias(_ref) {
  var noticias = _ref.noticias;
  return __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, noticias.map(function (noticia) {
    return __jsx(_Noticia__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: noticia.url,
      noticia: noticia,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Noticias);

/***/ })

})
//# sourceMappingURL=index.js.57e07928982c0dbfc7d7.hot-update.js.map