//1- forma de criar objetos
const pessoa = {
  nome: 'Lucas',
  sobrenome: 'Silva'

}
console.log(pessoa['sobrenome'])

//2- Forma de criar objeto
const funcionario = new Object ();
funcionario.nome = "Karen"
funcionario.sobrenome = "Joana"

console.log (funcionario.nome)

//3- forma de criar objeto
function criarPessoa(nome, sobrenome){
return {nome, sobrenome}

}

const p1 = criarPessoa ("Arthur", "Silva")
const p2 = criarPessoa ("João", "Silva")
console.log (p1)
console.log (p2)

//4- forma de criar um objeto
function criarPessoa(nome, sobrenome, i){
  return {
    nome,
    sobrenome,
    idade: i,
    get nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`  
    }
  }
}
  
  const pp1 = criarPessoa ("Arthur", "Silva", 20)
  const pp2 = criarPessoa ("João", "Silva", 34)
  console.log (pp1.nomeCompleto)
  console.log (pp2)