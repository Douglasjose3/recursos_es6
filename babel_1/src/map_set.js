let meuMap = new Map();
meuMap.set("Nome", "Douglas"); //SET para adicionar um item ao MAP //("CHAVE", "VALOR")
meuMap.set("Skills", "designer, fotógrafo, front-end");
console.log(meuMap);
//resposta
//'nome' => 'Douglas',
//'skills' => 'designer, fotógrafo, front-end'

//GET recuperar o valor de uma determinada chave
const nome = meuMap.get("nome");
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
for (let chave of meuMap.keys()) { //recupera as CHAVES
    console.log(chave);
}
for (let valor of meuMap.values()) { //recupera os VALORES
    console.log(valor);
}

//entrada é um item, composto por uma CHAVE e um VALOR
for (let entrada of meuMap.entries()) {
    console.log(entrada);
    //resposta
    //[ 'nome', 'Douglas' ]
    //[ 'skills', 'designer, fotógrafo, front-end' ]
}

//FOR para melhorar a interação e a reposta
for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
    //resposta
    // Nome: Douglas
    // Skills: designer, fotógrafo, front-end
}

//DELETE remove um intem dentro da chave
meuMap.delete("Skills");
console.log(meuMap);
//reposta
//{ 'Nome' => 'Douglas' }




//SET --- CHAVES é o VALOR
const cpfs = new Set();
cpfs.add('54398734100')
cpfs.add('54318734100')
cpfs.add('54398734300')
console.log(cpfs);

console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
    console.log(valor);
})

//para remover um item duplicado em uma array/string
const nomeDuplicado = ['Douglas', 'Murilo', 'Gustavo', 'Douglas', 'Murilo']
console.log(nomeDuplicado);

//converter o ARRAY em SET
const nomeDuplicadoComSet = new Set([...nomeDuplicado])
console.log(nomeDuplicadoComSet);

//SET para ARRAY
const nomeNaoDuplicados = [...nomeDuplicadoComSet]
console.log(nomeNaoDuplicados);