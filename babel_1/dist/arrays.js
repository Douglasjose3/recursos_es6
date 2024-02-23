"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
//FOR IT so intera, não retorna nada.
for (var i = 0; i < redesSociais.length; i++) {
  //"i" siginifica ínicio //"lenghth" conta o tamanho do array //0 é o Facebook; 1 é o Instagram; 2 é o twitter 
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i])); //antes do es6
}
redesSociais.forEach(function (nomeDasRedesSociais) {
  console.log("Eu tenho perfil na rede social: ".concat(nomeDasRedesSociais));
});
redesSociais.forEach(function (nomeDasRedesSociais, indice) {
  console.log("".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDasRedesSociais));
});
var alunos = ['Murilo', 'Douglas', 'Luciana', 'Gustavo'];
var alunos5ano = alunos.map(function (nomeAlunos) {
  nomeAlunos = {
    nome: nomeAlunos,
    curso: 'Frontend'
  };
  return nomeAlunos;
});
console.log(alunos5ano);

//encontra um item dentro do array
var quemEOAluno = alunos5ano.find(function (nomeDoAluno) {
  return nomeDoAluno.nome == 'Douglas'; //bolleano
});
console.log(quemEOAluno);

//retorna o index dentro do array
var indiceQuemEOAluno = alunos5ano.findIndex(function (nomeDoAluno) {
  return nomeDoAluno.nome == 'Douglas'; //recebe bolleano //tb conhecido como predicado
});
console.log(indiceQuemEOAluno);

//acrescenta um item ao array
alunos5ano.push({
  nome: 'Yuri',
  curso: 'Backend'
});

//EVERY retorna se todos os itens do array são satisfatória, fazem parte
var cursoAlunos5Ano = alunos5ano.every(function (valorDentroDoArray) {
  //todo return bolleano tem que armazenar na memória uma variável
  return valorDentroDoArray.curso === 'Frontend';
});
console.log(cursoAlunos5Ano);

//SOME é mais tolerante, precisa somente de um item que satisfaça a condição
var existeAlgumAlunoBackend = alunos5ano.some(function (valorDentroDoArray) {
  return valorDentroDoArray.curso === 'backend' && valorDentroDoArray.curso === 'Frontend'; //&& procura mais de um elemento dentro do array
});
console.log(existeAlgumAlunoBackend);

//FILTER para filtra os intes dentro do array
var alunoBackend = alunos5ano.filter(function (valorDentroDoArray) {
  //function é uma função anônima
  return valorDentroDoArray.curso === 'Backend';
});
console.log(alunoBackend);

//Passa uma função diretamente como call back
function filtraAlunoBackend(aluno) {
  return aluno.curso === 'Backend';
}
var alunoBackend2 = alunos5ano.filter(filtraAlunoBackend);
console.log(alunoBackend2);

//REDUCE com números: faz a agregação dos valores
var valoresDaCompra = [10, 20, 50, 30];
var totalDaCompra = valoresDaCompra.reduce(function (carrinho, valorFinal) {
  //carrinho igual a ACUMULADOR
  carrinho += valorFinal;
  return carrinho;
}, 0);
console.log(totalDaCompra);

//REDUCE com string: reduz tudo para uma variável
var nomesDosAlunos = alunos5ano.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);
var numeros = [1, 2, 3, 4, 5];
var dobroDosNumeros = numeros.map(function (meuNumeroEmDobro) {
  meuNumeroEmDobro = meuNumeroEmDobro * 2;
  return meuNumeroEmDobro;
}, '');
console.log(dobroDosNumeros);
var numeros2 = [1, 2, 3, 4, 5];
var dobroDosNumeros2 = numeros2.map(function (meuNumeroEmDobro) {
  return meuNumeroEmDobro * 2; //return no lugar do parametr0
});
console.log(dobroDosNumeros2);