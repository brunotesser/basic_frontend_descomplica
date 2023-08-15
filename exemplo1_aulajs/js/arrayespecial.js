var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var resultado = numeros.filter(item => item % 2 == 0);
console.log(resultado);

var numerosFiltrados = numeros.filter(
  function (valor) {
    return valor > 5;
  }

);

console.log(numerosFiltrados);

function buscarValores(valor) {
  return valor < 5;
}

var numerosEncontrados = numeros.filter(buscarValores);
console.log(numerosEncontrados);

var r1 = numeros.filter((valor) => {
  return valor > 5;

});

console.log(r1);

var r2 = numeros.filter(valor => valor > 5);

console.log(r2);

var funcionario = [
  { nome: "Luiz", idade: 62 },
  { nome: "Davi", idade: 40 },
  { nome: "Arthur", idade: 18 },
  { nome: "Lucas", idade: 22 },

]

var pessoasListagem = funcionario.filter(
  function (valor) {
    console.log(valor.nome);
  })

  var pessoasListagem1 = funcionario.filter(
    function (valor) {
      return valor.nome.lenght < 4
    })

  console.log(pessoasListagem1);