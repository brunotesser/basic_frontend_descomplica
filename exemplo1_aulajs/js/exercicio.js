const pedido = 2;
var valor = [10, 20, 30];
const produto = ["Café", "Chá", "Leite"];

switch (pedido) {
  case 1:
    console.log(`O produto é Chá e o Valor é ser pago é R$${valor[0].toFixed(2)}`);
    break;

  case 2:
    console.log(`O produto é Café e o Valor é ser pago é R$${valor[1].toFixed(2)}`);
    break;

  case 3:
    console.log(`O produto é Leite e o Valor é ser pago é R$${valor[2].toFixed(2)}`);
    break;

  default:
    console.log("Você deve escollher entre Café, Leite e Chá")
    break;
}

