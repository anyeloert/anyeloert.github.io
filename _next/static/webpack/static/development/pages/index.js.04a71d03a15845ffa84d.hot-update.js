webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _componentes_MasterPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componentes/MasterPage */ "./componentes/MasterPage.js");
/* harmony import */ var _componentes_Noticias__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componentes/Noticias */ "./componentes/Noticias.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _componentes_Precio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componentes/Precio */ "./componentes/Precio.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Usuario\\Documents\\programacion\\curso react\\practicas\\bitcoinapp\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Index = function Index(props) {
  return __jsx(_componentes_MasterPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx(_componentes_Precio__WEBPACK_IMPORTED_MODULE_5__["default"], {
    precioActual: props.precioActual,
    precio1Semana: props.precio1Semana,
    precio1Hora: props.precio1Hora,
    precio1Dia: props.precio1Dia,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-md-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx(_componentes_Noticias__WEBPACK_IMPORTED_MODULE_3__["default"], {
    noticias: props.noticias,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }), console.log(props.eventos)), __jsx("div", {
    className: "col-md-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "Precio del Bitcoin"))));
};

Index.getInitialProps = function _callee() {
  var consultaActual, consulta1Semana, consulta1Hora, consulta1Dia, token, urlEvento, resultadoEvento, apiKey, url, resultadoNoticias, resultadoActual, resultado1Semana, resultado1Hora, resultado1Dia, noticias, eventos;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT'));

        case 2:
          consultaActual = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1w&limit=2'));

        case 5:
          consulta1Semana = _context.sent;
          _context.next = 8;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h&limit=2'));

        case 8:
          consulta1Hora = _context.sent;
          _context.next = 11;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=2'));

        case 11:
          consulta1Dia = _context.sent;
          token = 'GSrBp6V778cPgSpv';
          urlEvento = "http://api.eventful.com/json/events/search?app_key=".concat(token, "&keyword=bitcoin");
          _context.next = 16;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(urlEvento));

        case 16:
          resultadoEvento = _context.sent;
          apiKey = '2d9648fe03874594aaf92bc2824ef0ee';
          url = "http://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=".concat(apiKey, "&language=es&location=peru");
          _context.next = 21;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(url));

        case 21:
          resultadoNoticias = _context.sent;
          _context.next = 24;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(consultaActual.json());

        case 24:
          resultadoActual = _context.sent;
          _context.next = 27;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(consulta1Semana.json());

        case 27:
          resultado1Semana = _context.sent;
          _context.next = 30;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(consulta1Hora.json());

        case 30:
          resultado1Hora = _context.sent;
          _context.next = 33;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(consulta1Dia.json());

        case 33:
          resultado1Dia = _context.sent;
          _context.next = 36;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(resultadoNoticias.json());

        case 36:
          noticias = _context.sent;
          _context.next = 39;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(resultadoEvento.json());

        case 39:
          eventos = _context.sent;
          return _context.abrupt("return", {
            precioActual: resultadoActual.price,
            precio1Semana: resultado1Semana[0][4],
            precio1Hora: resultado1Hora[0][4],
            precio1Dia: resultado1Dia[0][4],
            noticias: noticias.articles,
            eventos: eventos
          });

        case 41:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.04a71d03a15845ffa84d.hot-update.js.map