function somarArray(array) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(array)) {
      reject("O argumento passado não é um Array");
    }

    const soma = array.reduce((total, num) => total + num, 0);

    resolve(soma);
  });
}

//trocando os array para qualquer caracter e letra vai bater no erro dizendo que não é Array
const myArray = [1, 2, 3, 4, 5];
somarArray(myArray)
  .then((resultado) => {
    console.log("A soma dos elementos é: ", resultado);
  })
  .catch((erro) => {
    console.log("Ocorreu um erro: ", erro);
  });
