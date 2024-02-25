"use strict";

function funcaoMuitoPesada() {
  var execucoes = 0;
  for (var i = 0; i < 1000000000; i++) {
    execucoes++;
  }
  return execucoes;
}

// console.log("Início");
// console.log(funcaoMuitoPesada());
// console.log("fim");

var funcaMuitoPesadaPromise = new Promise(function (resolve, rejetc) {
  try {
    var execucoes = 0;
    for (var i = 0; i < 1000000000; i++) {
      execucoes++;
    }
    resolve(execucoes);
  } catch (e) {
    rejetc('Deu erro na interação dos números');
  }
});

// console.log("Início");
// funcaMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
// console.log("Fim");

function execucaoPrincipal() {
  console.log("Início");
  // await funcaMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));

  console.log("Fim");
}
execucaoPrincipal();