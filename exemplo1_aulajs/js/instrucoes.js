var pais = "Brasil";

if (pais != "Brasil") {
  console.log("Você é estrangeiro");

} else {
  console.log("Você é brasileiro");

}

var idade = 22;

if (idade < 16) {
  console.log("Não vota")
} else if (idade < 18 || idade > 65) {
  console.log("Voto opcional")
} else {
  console.log("Voto obrigatóro")
}

var diaSem = 1;

switch (diaSem) {
  case 1:
    console.log("Domingo");
    break;

  case 2:
    console.log("Segunda");
    break;

  case 3:
    console.log("Terça")
    break;

  default:
    console.log("Esse dia da semana não existe!")
}


let diaSemana = 4;
switch (diaSemana) {
  case 0:
    console.log("do")
    break;

  case 1:
    console.log("se")
    break;

  case 2:
    console.log("ter")
    break;

    default:
      console.log("nao existe")
}