"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
var _contasAReceber = /*#__PURE__*/new WeakMap();
var Contato = /*#__PURE__*/function () {
  //tem que criar o método com a função ---- //#privado

  function Contato(nomeDoContato, telefoneDoContato, cpfDoContato, enderecoDoContato) {
    _classCallCheck(this, Contato);
    //classe genérica
    // nome = ''; //quando usamos o constructor não precisamos das proprieadades vázia
    // telefone = '';
    // cpf = '';
    // endereco = '';
    _classPrivateFieldInitSpec(this, _contasAReceber, {
      writable: true,
      value: 100
    });
    //função construtora //(argumentos)
    this.nome = nomeDoContato; //atributos
    this.telefone = telefoneDoContato;
    this.cpf = cpfDoContato;
    this.endereco = enderecoDoContato;
  }
  _createClass(Contato, [{
    key: "orcamento",
    value: function orcamento(valorDoOrcamento) {
      //classe específica - método e (função) 
      console.log("".concat(this.nome, " pediu or\xE7amento ").concat(valorDoOrcamento, "."));
    }
  }, {
    key: "contasAPagar",
    value: function contasAPagar() {
      _classPrivateFieldSet(this, _contasAReceber, _classPrivateFieldGet(this, _contasAReceber) - 50);
    }
  }, {
    key: "exibeContasApagar",
    value: function exibeContasApagar() {
      //recupera o valor privado (não esquecer de evocar essa função)
      console.log(_classPrivateFieldGet(this, _contasAReceber));
    }
  }]);
  return Contato;
}();
var Empresa = /*#__PURE__*/function (_Contato2) {
  _inherits(Empresa, _Contato2);
  function Empresa(cnpjDaEmpresa, razaoSocialDaEmpresa, capitalSocialDaEmpresa) {
    var _this;
    _classCallCheck(this, Empresa);
    _this = _callSuper(this, Empresa, ['Fulano', "00000-000", '000.000.000-00', 'Rua Não Sei, XX - Bairro - Cidade - Estado']); //quando usamos o SUPER usamos os argumentos aqui e não na const mãe
    _this.cnpj = cnpjDaEmpresa;
    _this.razaoSocial = razaoSocialDaEmpresa;
    _this.capitalSocial = capitalSocialDaEmpresa;
    return _this;
  }
  _createClass(Empresa, [{
    key: "orcamento",
    value: function orcamento() {
      //não precisa necessáriamente da função //polimorfismo
      console.log("".concat(this.nome, " pediu or\xE7amento para 50 contratos."));
    }
  }]);
  return Empresa;
}(Contato);
var contatoMark = new Contato('Fulano', "00000-000", '000.000.000-00', 'Rua Não Sei, XX - Bairro - Cidade - Estado');
contatoMark.contasAPagar();
contatoMark.orcamento('para 100 contratos.');
contatoMark.exibeContasApagar();
var empresaMark = new Empresa('00.000.0001-00', 'Mark', 100000);
empresaMark.orcamento();

// contatoMark.orcamento('para 50 contratos'); //classe específica

console.log(contatoMark);
console.log(empresaMark);
console.log(empresaMark instanceof Contato); //mãe é uma instância da filha - true
console.log(empresaMark instanceof Empresa); //filha é uma instância da mãe - true