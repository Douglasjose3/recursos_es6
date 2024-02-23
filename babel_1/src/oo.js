class Contato { //classe genérica
    // nome = ''; //quando usamos o constructor não precisamos das proprieadades vázia
    // telefone = '';
    // cpf = '';
    // endereco = '';

    #contasAReceber = 100; //tem que criar o método com a função ---- //#privado

    constructor(nomeDoContato, telefoneDoContato, cpfDoContato, enderecoDoContato) { //função construtora //(argumentos)
        this.nome = nomeDoContato; //atributos
        this.telefone = telefoneDoContato;
        this.cpf = cpfDoContato;
        this.endereco = enderecoDoContato;
    }
    orcamento(valorDoOrcamento) { //classe específica - método e (função) 
        console.log(`${this.nome} pediu orçamento ${valorDoOrcamento}.`);
    }

    contasAPagar() {
        this.#contasAReceber -= 50;
    }

    exibeContasApagar() { //recupera o valor privado (não esquecer de evocar essa função)
        console.log(this.#contasAReceber);
    }
}

class Empresa extends Contato {
    constructor(cnpjDaEmpresa, razaoSocialDaEmpresa, capitalSocialDaEmpresa) {
        super('Fulano', "00000-000", '000.000.000-00', 'Rua Não Sei, XX - Bairro - Cidade - Estado') //quando usamos o SUPER usamos os argumentos aqui e não na const mãe
        this.cnpj = cnpjDaEmpresa;
        this.razaoSocial = razaoSocialDaEmpresa;
        this.capitalSocial = capitalSocialDaEmpresa;
    }
    orcamento() { //não precisa necessáriamente da função //polimorfismo
        console.log(`${this.nome} pediu orçamento para 50 contratos.`);
    }
}

const contatoMark = new Contato('Fulano', "00000-000", '000.000.000-00', 'Rua Não Sei, XX - Bairro - Cidade - Estado');
contatoMark.contasAPagar();
contatoMark.orcamento('para 100 contratos.');
contatoMark.exibeContasApagar();

const empresaMark = new Empresa('00.000.0001-00', 'Mark', 100000);
empresaMark.orcamento();

// contatoMark.orcamento('para 50 contratos'); //classe específica

console.log(contatoMark);
console.log(empresaMark);
console.log(empresaMark instanceof Contato); //mãe é uma instância da filha - true
console.log(empresaMark instanceof Empresa); //filha é uma instância da mãe - true

