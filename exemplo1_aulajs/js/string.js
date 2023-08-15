var nome = "Bruno Vinicius Santos";
var x = nome.lenght
console.log(x);

resultado = x > 15 ? "Obrigado" : "Por favor coloque seu nome completo";

console.log(resultado);

var res = nome.toLocaleUpperCase();
console.log(res);

var jogo = "Barcelona vs Real melhor time";
var posicao = jogo.indexOf("Real");
console.log(posicao);

var cortado = jogo.slice(0,9);
console.log(cortado);

var val = jogo.includes("Real");
console.log(val);

var str1 = "Hello";
var str2 = " Turma";
var str3 = str1.concat(str2);
console.log(str3);

var frase = "   Olá você está aprendendo JS";
console.log(frase.trim());

var num = "1,2,3,4,5,6,7,8";
var arr = num.split(",");
console.log(arr[0]);