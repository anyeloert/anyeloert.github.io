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
  var imagen;

  if (urlToImage !== '') {
    imagen = __jsx("img", {
      src: urlToImage,
      alt: "Card image",
      className: "card-img-top",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 18
      }
    });
  } else {
    imagen = __jsx("p", {
      className: "text-center my-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 18
      }
    }, "Imagen no Disponible");
  }

  Index.getInitialProps = function _callee() {
    var consultaActual;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(urlToImage));

          case 2:
            consultaActual = _context.sent;
            console.log(consultaActual);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx("div", {
    className: "jsx-4005040257" + " " + 'col-md-6 col-12',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-4005040257" + " " + "card mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, imagen, __jsx("div", {
    className: "jsx-4005040257" + " " + "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("h5", {
    className: "jsx-4005040257" + " " + "card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, title)), __jsx("div", {
    className: "jsx-4005040257" + " " + "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "jsx-4005040257" + " " + "card-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, description), __jsx("p", {
    className: "jsx-4005040257" + " " + "card-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, source.name)), __jsx("div", {
    className: "jsx-4005040257" + " " + "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 34,
      columnNumber: 21
    }
  }, "Leer Noticia"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4005040257",
    __self: _this
  }, "img.jsx-4005040257{height:200px;width:100%;display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXN1YXJpb1xcRG9jdW1lbnRzXFxwcm9ncmFtYWNpb25cXGN1cnNvIHJlYWN0XFxwcmFjdGljYXNcXGJpdGNvaW5hcHBcXGNvbXBvbmVudGVzXFxOb3RpY2lhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Dd0IsQUFHa0MsYUFDRixXQUNHLGNBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXN1YXJpb1xcRG9jdW1lbnRzXFxwcm9ncmFtYWNpb25cXGN1cnNvIHJlYWN0XFxwcmFjdGljYXNcXGJpdGNvaW5hcHBcXGNvbXBvbmVudGVzXFxOb3RpY2lhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuXHJcblxyXG5jb25zdCBOb3RpY2lhID0gKHtub3RpY2lhfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtzb3VyY2UsIHRpdGxlLCBkZXNjcmlwdGlvbiwgdXJsVG9JbWFnZSwgdXJsfSA9IG5vdGljaWFcclxuICAgIGxldCBpbWFnZW5cclxuXHJcbiAgICBpZih1cmxUb0ltYWdlICE9PSAnJyl7XHJcbiAgICAgICAgaW1hZ2VuID0gPGltZyAgc3JjPXt1cmxUb0ltYWdlfSBhbHQ9XCJDYXJkIGltYWdlXCIgY2xhc3NOYW1lPSdjYXJkLWltZy10b3AnLz5cclxuICAgIH1lbHNle1xyXG4gICAgICAgIGltYWdlbiA9IDxwIGNsYXNzTmFtZSA9ICd0ZXh0LWNlbnRlciBteS01Jz5JbWFnZW4gbm8gRGlzcG9uaWJsZTwvcD5cclxuICAgIH1cclxuXHJcbiAgICBJbmRleC5nZXRJbml0aWFsUHJvcHM9IGFzeW5jICgpPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhQWN0dWFsID0gYXdhaXQgZmV0Y2godXJsVG9JbWFnZSkgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnN1bHRhQWN0dWFsKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2NvbC1tZC02IGNvbC0xMic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtYi0zXCI+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge2ltYWdlbn1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57dGl0bGV9PC9oNT4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3NvdXJjZS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBocmVmPXt1cmx9IHRhcmdldD0nX2JsYW5rJyB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZyBidG4tYmxvY2tcIj5MZWVyIE5vdGljaWE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDsgXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PiAgICAgICAgXHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGljaWE7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Usuario\\\\Documents\\\\programacion\\\\curso react\\\\practicas\\\\bitcoinapp\\\\componentes\\\\Noticia.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Noticia);

/***/ })

})
//# sourceMappingURL=index.js.acf3cc6d77370032f37b.hot-update.js.map