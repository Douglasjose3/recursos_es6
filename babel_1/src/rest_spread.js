function somar(a, b) {
    let soma1 = 0;
    for (let i = 0; i < arguments.length; i++) {
        soma1 += arguments[i];
    }
    return soma1;
}
console.log(somar(10, 20, 50));


//REST
function somarComRest(...numeros) { //não aceita dois arugmentos, somente fixos que entram antes ...numeros
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}
console.log(somarComRest(10, 30, 50));


//SPREADS
const numeros = [10, 40, 60]
console.log(...numeros);

const timesDeSP = ['Corinthians', 'Bragantino', 'São Paulo', 'Santos'];
const timesDoRJ = ['Vasco', 'Flamengo', 'Fluminense', 'America'];
const timesDeFutebol = timesDeSP.concat(timesDoRJ);
console.log(timesDeFutebol);

const timesDeFutebol2 = [...timesDeSP, ...timesDoRJ];
console.log(timesDeFutebol2);



const carroTeste1 = {
    modelo: 'Polo',
    marca: 'VW',
    motor: 1.6
}

const carroTeste2 = {
    ...carroTeste1,
    motor: 1.8
}
console.log(carroTeste1);
console.log(carroTeste2);


//DESETRUTURAÇÃO
// const motorCarroTeste2 = carroTeste2.motor; //motor é a propriedade
// console.log(motorCarroTeste2);
const {motor: motorCarroTeste1} = carroTeste1;
const {motor: motorCarroTeste2} = carroTeste2;
console.log(motorCarroTeste1, motorCarroTeste2);



const [time1, time2, time3, ...restantesDosTimes] = timesDeFutebol; //... significa restante
console.log(time1, time2, time3, restantesDosTimes);