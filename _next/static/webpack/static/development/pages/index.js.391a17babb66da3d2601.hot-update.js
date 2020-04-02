webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./componentes/Noticia.js":
/*!********************************!*\
  !*** ./componentes/Noticia.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Usuario\\Documents\\programacion\\curso react\\practicas\\bitcoinapp\\componentes\\Noticia.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



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

  return __jsx("div", {
    className: "jsx-4005040257" + " " + 'col-md-6 col-12',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-4005040257" + " " + "card mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, imagen, __jsx("div", {
    className: "jsx-4005040257" + " " + "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("h5", {
    className: "jsx-4005040257" + " " + "card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, title)), __jsx("div", {
    className: "jsx-4005040257" + " " + "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "jsx-4005040257" + " " + "card-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, description), __jsx("p", {
    className: "jsx-4005040257" + " " + "card-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, source.name)), __jsx("div", {
    className: "jsx-4005040257" + " " + "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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
      lineNumber: 31,
      columnNumber: 21
    }
  }, "Leer Noticia"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4005040257",
    __self: _this
  }, "img.jsx-4005040257{height:200px;width:100%;display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXN1YXJpb1xcRG9jdW1lbnRzXFxwcm9ncmFtYWNpb25cXGN1cnNvIHJlYWN0XFxwcmFjdGljYXNcXGJpdGNvaW5hcHBcXGNvbXBvbmVudGVzXFxOb3RpY2lhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDd0IsQUFHa0MsYUFDRixXQUNHLGNBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXN1YXJpb1xcRG9jdW1lbnRzXFxwcm9ncmFtYWNpb25cXGN1cnNvIHJlYWN0XFxwcmFjdGljYXNcXGJpdGNvaW5hcHBcXGNvbXBvbmVudGVzXFxOb3RpY2lhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuXHJcblxyXG5jb25zdCBOb3RpY2lhID0gKHtub3RpY2lhfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtzb3VyY2UsIHRpdGxlLCBkZXNjcmlwdGlvbiwgdXJsVG9JbWFnZSwgdXJsfSA9IG5vdGljaWFcclxuICAgIGxldCBpbWFnZW5cclxuXHJcbiAgICBpZih1cmxUb0ltYWdlICE9PSAnJyl7XHJcbiAgICAgICAgaW1hZ2VuID0gPGltZyAgc3JjPXt1cmxUb0ltYWdlfSBhbHQ9XCJDYXJkIGltYWdlXCIvPlxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgaW1hZ2VuID0gPHAgY2xhc3NOYW1lID0gJ3RleHQtY2VudGVyIG15LTUnPkltYWdlbiBubyBEaXNwb25pYmxlPC9wPlxyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdjb2wtbWQtNiBjb2wtMTInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWItM1wiPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtpbWFnZW59XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3RpdGxlfTwvaDU+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntzb3VyY2UubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaHJlZj17dXJsfSB0YXJnZXQ9J19ibGFuaycgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGcgYnRuLWJsb2NrXCI+TGVlciBOb3RpY2lhPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7IFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj4gICAgICAgIFxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpY2lhOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Usuario\\\\Documents\\\\programacion\\\\curso react\\\\practicas\\\\bitcoinapp\\\\componentes\\\\Noticia.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Noticia);

/***/ })

})
//# sourceMappingURL=index.js.391a17babb66da3d2601.hot-update.js.map