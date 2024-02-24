// const minhaArrowFunction = () => {
//     console.log("Diga olá para a função Arrow Function!");
// }
// minhaArrowFunction(); //chamando a função //()envoca a função

// const minhaArrowFunction1 = () => {
//     return "Diga olá para a função Arrow Function!"
// }
// console.log(minhaArrowFunction1());

const minhaArrowFunction2 = () => "Diga olá para a função Arrow Function!" //a forma mais utilizada
console.log(minhaArrowFunction2());

// const retornaCarro = () => ({
//     modelo: 'Novo Polo',
//     fabricante: 'Volkswagem'
// })
// console.log(retornaCarro());

// const filtraAlunoBackend2 = aluno => aluno.curso === 'Backend'; //um argumento não precisa dos parenteses 
// const filtraAlunoBackend1 = (aluno, indice) => aluno.curso === 'Backend'; //(ARGUMENTO nesse caso "aluno, indice")

const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        this.velocidadeAtual += 10;
    },
    frear: () => {
        this.velocidadeAtual -= 10;
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual);



const nomeAlunos = () => ({
        nome1: 'Murilo Henrique',
        nota: 10
})

console.log(nomeAlunos());