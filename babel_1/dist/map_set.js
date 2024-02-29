"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var meuMap = new Map();
meuMap.set("Nome", "Douglas"); //SET para adicionar um item ao MAP //("CHAVE", "VALOR")
meuMap.set("Skills", "designer, fotógrafo, front-end");
console.log(meuMap);
//resposta
//'nome' => 'Douglas',
//'skills' => 'designer, fotógrafo, front-end'

//GET recuperar o valor de uma determinada chave
var nome = meuMap.get("nome");
console.log(nome);

//SIZE recupera a quantidade de itens
console.log(meuMap.size);

//HAS verificar determinada chave existe dentro do MAP
console.log(meuMap.has("nome")); //true
console.log(meuMap.has("sobrenome")); //false

//CLEAR para limpar o MAP
// meuMap.clear();
// console.log(meuMap.size);

//FOR recupera as chaves e os valores
var _iterator = _createForOfIteratorHelper(meuMap.keys()),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var chave = _step.value;
    //recupera as CHAVES
    console.log(chave);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
var _iterator2 = _createForOfIteratorHelper(meuMap.values()),
  _step2;
try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var valor = _step2.value;
    //recupera os VALORES
    console.log(valor);
  }

  //entrada é um item, composto por uma CHAVE e um VALOR
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
var _iterator3 = _createForOfIteratorHelper(meuMap.entries()),
  _step3;
try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var entrada = _step3.value;
    console.log(entrada);
    //resposta
    //[ 'nome', 'Douglas' ]
    //[ 'skills', 'designer, fotógrafo, front-end' ]
  }

  //FOR para melhorar a interação e a reposta
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}
var _iterator4 = _createForOfIteratorHelper(meuMap.entries()),
  _step4;
try {
  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
    var _step4$value = _slicedToArray(_step4.value, 2),
      _chave = _step4$value[0],
      _valor = _step4$value[1];
    console.log("".concat(_chave, ": ").concat(_valor));
    //resposta
    // Nome: Douglas
    // Skills: designer, fotógrafo, front-end
  }

  //DELETE remove um intem dentro da chave
} catch (err) {
  _iterator4.e(err);
} finally {
  _iterator4.f();
}
meuMap.delete("Skills");
console.log(meuMap);
//reposta
//{ 'Nome' => 'Douglas' }

//SET --- CHAVES é o VALOR
var cpfs = new Set();
cpfs.add('54398734100');
cpfs.add('54318734100');
cpfs.add('54398734300');
console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());
cpfs.forEach(function (valor) {
  console.log(valor);
});

//para remover um item duplicado em uma array/string
var nomeDuplicado = ['Douglas', 'Murilo', 'Gustavo', 'Douglas', 'Murilo'];
console.log(nomeDuplicado);

//converter o ARRAY em SET
var nomeDuplicadoComSet = new Set([].concat(nomeDuplicado));
console.log(nomeDuplicadoComSet);

//SET para ARRAY
var nomeNaoDuplicados = _toConsumableArray(nomeDuplicadoComSet);
console.log(nomeNaoDuplicados);