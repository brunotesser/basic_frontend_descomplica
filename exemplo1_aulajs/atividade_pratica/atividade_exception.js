class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
  }

  trabalhar() {
    return `${this.nome} está trabalhando.`;
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  gerenciar() {
    return `${this.nome} está gerenciando o departamento ${this.departamento}.`;
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    return `${this.nome} está programando na linguagem ${this.linguagem}.`;
  }
}

function exibirErro(mensagem) {
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `<p style="color: red;">Erro: ${mensagem}</p>`;
}

document.getElementById('formulario').addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const idade = parseInt(document.getElementById('idade').value);
  const cargo = document.getElementById('cargo').value;
  const departamento = document.getElementById('depto').value;
  const linguagem = document.getElementById('ling').value;

  try {
    let funcionario;

    if (cargo === 'Gerente') {
      funcionario = new Gerente(nome, idade, cargo, departamento);
    } else if (cargo === 'Desenvolvedor') {
      funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
    } else {
      throw new Error('Cargo inválido.');
    }

    exibirFuncionario(funcionario);
  } catch (error) {
    exibirErro(error.message);
  }
});

function exibirFuncionario(funcionario) {
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `
      <p>${funcionario.seApresentar()}</p>
      <p>${funcionario.trabalhar()}</p>
      ${funcionario instanceof Gerente ? `<p>${funcionario.gerenciar()}</p>` : ''}
      ${funcionario instanceof Desenvolvedor ? `<p>${funcionario.programar()}</p>` : ''}
  `;
}








