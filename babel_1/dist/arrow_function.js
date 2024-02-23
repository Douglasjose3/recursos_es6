"use strict";

var _this = void 0;
var minhaArrowFunction = function minhaArrowFunction() {
  console.log("Diga olá para a função Arrow Function!");
};
minhaArrowFunction(); //chamando a função

var minhaArrowFunction1 = function minhaArrowFunction1() {
  return "Diga olá para a função Arrow Function!";
};
console.log(minhaArrowFunction1());
var minhaArrowFunction2 = function minhaArrowFunction2() {
  return "Diga olá para a função Arrow Function!";
}; //a forma mais utilizada
console.log(minhaArrowFunction2());
var retornaCarro = function retornaCarro() {
  return {
    modelo: 'Novo Polo',
    fabricante: 'Volkswagem'
  };
};
console.log(retornaCarro());
var filtraAlunoBackend2 = function filtraAlunoBackend2(aluno) {
  return aluno.curso === 'Backend';
}; //um argumento não precisa dos parenteses 
var filtraAlunoBackend1 = function filtraAlunoBackend1(aluno, indice) {
  return aluno.curso === 'Backend';
}; //(ARGUMENTO nesse caso "aluno, indice")

var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    console.log(this);
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    console.log(_this);
    _this.velocidadeAtual -= 10;
  }
};
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);