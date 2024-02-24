"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _console;
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function somar(a, b) {
  var soma1 = 0;
  for (var i = 0; i < arguments.length; i++) {
    soma1 += arguments[i];
  }
  return soma1;
}
console.log(somar(10, 20, 50));

//REST
function somarComRest() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  //não aceita dois arugmentos, somente fixos que entram antes ...numeros
  var soma = numeros.reduce(function (total, numeroAtual) {
    total += numeroAtual;
    return total;
  }, 0);
  return soma;
}
console.log(somarComRest(10, 30, 50));

//SPREADS
var numeros = [100000, 40, 60];
(_console = console).log.apply(_console, numeros);
var timesDeSP = ['Corinthians', 'Bragantino', 'São Paulo', 'Santos'];
var timesDoRJ = ['Vasco', 'Flamengo', 'Fluminense', 'America'];
var timesDeFutebol = timesDeSP.concat(timesDoRJ);
console.log(timesDeFutebol);
var timesDeFutebol2 = [].concat(timesDeSP, timesDoRJ);
console.log(timesDeFutebol2);
var carroTeste1 = {
  modelo: 'Polo',
  marca: 'VW',
  motor: 1.6
};
var carroTeste2 = _objectSpread(_objectSpread({}, carroTeste1), {}, {
  motor: 1.8
});
console.log(carroTeste1);
console.log(carroTeste2);

//DESESTRUTURAÇÃO
// const motorCarroTeste2 = carroTeste2.motor; //motor é a propriedade
// console.log(motorCarroTeste2);
var motorCarroTeste1 = carroTeste1.motor;
var motorCarroTeste2 = carroTeste2.motor;
console.log(motorCarroTeste1, motorCarroTeste2);
var _timesDeFutebol = _toArray(timesDeFutebol),
  time1 = _timesDeFutebol[0],
  time2 = _timesDeFutebol[1],
  time3 = _timesDeFutebol[2],
  restantesDosTimes = _timesDeFutebol.slice(3); //... significa restante
console.log(time1, time2, time3, restantesDosTimes);