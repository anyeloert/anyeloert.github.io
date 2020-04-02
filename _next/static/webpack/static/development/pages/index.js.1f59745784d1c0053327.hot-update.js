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

  Noticia.getInitialProps = function _callee() {
    var consultaActual;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(urlToImage));

          case 2:
            consultaActual = _context.sent;
            return _context.abrupt("return", {
              imagenUrl: consultaActual
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  console.log(props.imagenUrl);
  return __jsx("div", {
    className: "jsx-4005040257" + " " + 'col-md-6 col-12',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-4005040257" + " " + "card mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, imagen, __jsx("div", {
    className: "jsx-4005040257" + " " + "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx("h5", {
    className: "jsx-4005040257" + " " + "card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, title)), __jsx("div", {
    className: "jsx-4005040257" + " " + "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "jsx-4005040257" + " " + "card-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, description), __jsx("p", {
    className: "jsx-4005040257" + " " + "card-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, source.name)), __jsx("div", {
    className: "jsx-4005040257" + " " + "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
      lineNumber: 36,
      columnNumber: 21
    }
  }, "Leer Noticia"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4005040257",
    __self: _this
  }, "img.jsx-4005040257{height:200px;width:100%;display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXN1YXJpb1xcRG9jdW1lbnRzXFxwcm9ncmFtYWNpb25cXGN1cnNvIHJlYWN0XFxwcmFjdGljYXNcXGJpdGNvaW5hcHBcXGNvbXBvbmVudGVzXFxOb3RpY2lhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDd0IsQUFHa0MsYUFDRixXQUNHLGNBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXN1YXJpb1xcRG9jdW1lbnRzXFxwcm9ncmFtYWNpb25cXGN1cnNvIHJlYWN0XFxwcmFjdGljYXNcXGJpdGNvaW5hcHBcXGNvbXBvbmVudGVzXFxOb3RpY2lhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuXHJcblxyXG5jb25zdCBOb3RpY2lhID0gKHtub3RpY2lhfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtzb3VyY2UsIHRpdGxlLCBkZXNjcmlwdGlvbiwgdXJsVG9JbWFnZSwgdXJsfSA9IG5vdGljaWFcclxuICAgIGxldCBpbWFnZW5cclxuXHJcbiAgICBpZih1cmxUb0ltYWdlICE9PSAnJyl7XHJcbiAgICAgICAgaW1hZ2VuID0gPGltZyAgc3JjPXt1cmxUb0ltYWdlfSBhbHQ9XCJDYXJkIGltYWdlXCIgY2xhc3NOYW1lPSdjYXJkLWltZy10b3AnLz5cclxuICAgIH1lbHNle1xyXG4gICAgICAgIGltYWdlbiA9IDxwIGNsYXNzTmFtZSA9ICd0ZXh0LWNlbnRlciBteS01Jz5JbWFnZW4gbm8gRGlzcG9uaWJsZTwvcD5cclxuICAgIH1cclxuXHJcbiAgICBOb3RpY2lhLmdldEluaXRpYWxQcm9wcz0gYXN5bmMgKCk9PiB7XHJcbiAgICAgICAgY29uc3QgY29uc3VsdGFBY3R1YWwgPSBhd2FpdCBmZXRjaCh1cmxUb0ltYWdlKSBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbWFnZW5VcmwgOiBjb25zdWx0YUFjdHVhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2cocHJvcHMuaW1hZ2VuVXJsKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnY29sLW1kLTYgY29sLTEyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1iLTNcIj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VufVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPnt0aXRsZX08L2g1PiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57c291cmNlLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGhyZWY9e3VybH0gdGFyZ2V0PSdfYmxhbmsnIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9ja1wiPkxlZXIgTm90aWNpYTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4OyBcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+ICAgICAgICBcclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWNpYTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Usuario\\\\Documents\\\\programacion\\\\curso react\\\\practicas\\\\bitcoinapp\\\\componentes\\\\Noticia.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Noticia);

/***/ })

})
//# sourceMappingURL=index.js.1f59745784d1c0053327.hot-update.js.map