"use strict";

var alunos1 = ['Murilo', 'André', 'Luciana', 'Gustavo'];
var alunos5ano = alunos1.map(function (nomesENotas) {
  nomesENotas = {
    nome: nomesENotas,
    nota: 5
  };
  return nomesENotas;
});
console.log(alunos5ano);
alunos5ano.push({
  nome: 'Douglas',
  nota: 8
});
var notaMaiorQ6 = alunos5ano.find(function (nota) {
  return nota.nota == 8;
});
console.log(notaMaiorQ6);
var nota8 = alunos5ano.filter(function (achandoNota8) {
  return achandoNota8.nota === 8;
});
console.log(nota8);