webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./componentes/Noticia.js":
/*!********************************!*\
  !*** ./componentes/Noticia.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\Usuario\\Documents\\programacion\\curso react\\practicas\\bitcoinapp\\componentes\\Noticia.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Noticia = function Noticia(_ref) {
  var noticia = _ref.noticia;
  var source = noticia.source,
      title = noticia.title,
      description = noticia.description,
      urlToImage = noticia.urlToImage,
      url = noticia.url;

  var verifiarImagen = function verifiarImagen(url) {
    var solicitud;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function verifiarImagen$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(url));

          case 2:
            solicitud = _context.sent;
            return _context.abrupt("return", solicitud);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var imagen = verifiarImagen(urlToImage).then(function (Response) {
    return Response.url;
  })["catch"](function () {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 30
      }
    }, "hola");
  });
  console.log(imagen);
  return __jsx("div", {
    className: "jsx-4005040257" + " " + 'col-md-6 col-12',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-4005040257" + " " + "card mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: imagen,
    alt: "Card image",
    className: "jsx-4005040257",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-4005040257" + " " + "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("h5", {
    className: "jsx-4005040257" + " " + "card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, title)), __jsx("div", {
    className: "jsx-4005040257" + " " + "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "jsx-4005040257" + " " + "card-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, description), __jsx("p", {
    className: "jsx-4005040257" + " " + "card-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, source.name)), __jsx("div", {
    className: "jsx-4005040257" + " " + "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx("button", {
    href: url,
    target: "_blank",
    type: "button",
    className: "jsx-4005040257" + " " + "btn btn-primary btn-lg btn-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, "Leer Noticia"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4005040257",
    __self: _this
  }, "img.jsx-4005040257{height:200px;width:100%;display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXN1YXJpb1xcRG9jdW1lbnRzXFxwcm9ncmFtYWNpb25cXGN1cnNvIHJlYWN0XFxwcmFjdGljYXNcXGJpdGNvaW5hcHBcXGNvbXBvbmVudGVzXFxOb3RpY2lhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Dd0IsQUFHa0MsYUFDRixXQUNHLGNBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXN1YXJpb1xcRG9jdW1lbnRzXFxwcm9ncmFtYWNpb25cXGN1cnNvIHJlYWN0XFxwcmFjdGljYXNcXGJpdGNvaW5hcHBcXGNvbXBvbmVudGVzXFxOb3RpY2lhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuXHJcblxyXG5jb25zdCBOb3RpY2lhID0gKHtub3RpY2lhfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtzb3VyY2UsIHRpdGxlLCBkZXNjcmlwdGlvbiwgdXJsVG9JbWFnZSwgdXJsfSA9IG5vdGljaWFcclxuXHJcbiAgICBjb25zdCB2ZXJpZmlhckltYWdlbiA9IGFzeW5jIHVybCA9PiB7ICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgc29saWNpdHVkID0gYXdhaXQgZmV0Y2godXJsKVxyXG4gICAgICAgICAgICAvL2NvbnN0IGltYWdlbiA9IGF3YWl0IHNvbGljaXR1ZC5qc29uKClcclxuICAgICAgICAgICAgcmV0dXJuIHNvbGljaXR1ZCAgICAgICAgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGNvbnN0IGltYWdlbiA9IHZlcmlmaWFySW1hZ2VuKHVybFRvSW1hZ2UpXHJcbiAgICAgICAgLnRoZW4oUmVzcG9uc2UgPT4ge3JldHVybiBSZXNwb25zZS51cmx9KVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7cmV0dXJuIDxwPmhvbGE8L3A+fSlcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coaW1hZ2VuKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnY29sLW1kLTYgY29sLTEyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1iLTNcIj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aW1nICBzcmM9e2ltYWdlbn0gYWx0PVwiQ2FyZCBpbWFnZVwiLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57dGl0bGV9PC9oNT4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3NvdXJjZS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBocmVmPXt1cmx9IHRhcmdldD0nX2JsYW5rJyB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZyBidG4tYmxvY2tcIj5MZWVyIE5vdGljaWE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDsgXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PiAgICAgICAgXHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGljaWE7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Usuario\\\\Documents\\\\programacion\\\\curso react\\\\practicas\\\\bitcoinapp\\\\componentes\\\\Noticia.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Noticia);

/***/ })

})
//# sourceMappingURL=index.js.57a4517d833799c24f93.hot-update.js.map