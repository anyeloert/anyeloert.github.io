webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./componentes/Precio.js":
/*!*******************************!*\
  !*** ./componentes/Precio.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Usuario\\Documents\\programacion\\curso react\\practicas\\bitcoinapp\\componentes\\Precio.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Precio = function Precio(props) {
  var precioActual = props.precioActual,
      precio1Semana = props.precio1Semana,
      precio1Hora = props.precio1Hora,
      precio1Dia = props.precio1Dia;
  var porcentaje1Semana = ((precioActual - precio1Semana) * 100 / precioActual).toFixed(2);
  var porcentaje1Hora = ((precioActual - precio1Hora) * 100 / precioActual).toFixed(2);
  var porcentaje1Dia = ((precioActual - precio1Dia) * 100 / precioActual).toFixed(2);
  var precioActualRedondeado = precioActual.toFixed(2);
  return __jsx("div", {
    className: "card text-white bg-success my-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "Precio del Bitcoin"), __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: "card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "Precio Actual: ", precioActualRedondeado), __jsx("ul", {
    className: "list-group-flush d-flex justify-content-between align-items-center pt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "card-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, "\xDAltima Hora: ", porcentaje1Hora, "%"), __jsx("p", {
    className: "card-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, "\xDAltimas 24 Horas: ", porcentaje1Dia, "%"), __jsx("p", {
    className: "card-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, "\xDAltimos 7 d\xEDas: ", porcentaje1Semana, "%"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Precio);

/***/ })

})
//# sourceMappingURL=index.js.bb5ee6033d8f015fe6dc.hot-update.js.map