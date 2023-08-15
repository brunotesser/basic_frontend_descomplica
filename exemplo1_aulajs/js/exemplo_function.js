function multiplicar(x,y){
return x * y

}

var a = multiplicar(4,2);
console.log(a)

var b = multiplicar(6,7)
console.log(b)

function somaValores(a,b = 2, c = 6){
  var total = a + b + c 
  return total

}

var f = somaValores (8);
console.log(f);

const numeros = [1,2,3,4,5];
const valores = numeros.map((num) => num * num)
console.log(valores)

var listProdutos = ["geladeira","fogao", "air"];
var listaEmMaiuscula = listProdutos.map(primeiraEmMaiuscula);

function primeiraEmMaiuscula(elemento){
  return elemento.charAt(0).toUpperCase() + elemento.slice(1)
}

console.log(listaEmMaiuscula)