const pessoa = {
  nome: "Bruno",
  idade: 25,
  profissao: "Desenvolvedor"
}

const pessoajson = JSON.stringify(pessoa) 
console.log(pessoa)
console.log(pessoajson )

//transormar em um objeto com json:
const pessoaObj = JSON.parse(pessoajson)
console.log(pessoaObj)