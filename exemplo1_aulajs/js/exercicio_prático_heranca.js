class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }

    trabalhar() {
        console.log(`${this.nome} está trabalhando.`);
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(`${this.nome} está gerenciando o departamento ${this.departamento}.`);
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        console.log(`${this.nome} está programando na linguagem ${this.linguagem}.`);
    }
}


const gerenteBruno = new Gerente('Bruno', 35, 'Gerente', 'TI');
const devAlana = new Desenvolvedor('Alana', 28, 'Desenvolvedora', 'JavaScript');


gerenteBruno.seApresentar();
gerenteBruno.trabalhar();
gerenteBruno.gerenciar();

devAlana.seApresentar();
devAlana.trabalhar();
devAlana.programar();
