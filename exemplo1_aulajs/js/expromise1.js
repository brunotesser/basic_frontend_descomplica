const minhaPromise = new Promise((resolve, reject) => {

  //Trocando o true pelo false vai forçar dar ERRO
  const sucesso = true;

  if (sucesso) {
    resolve("Deu bom!!");
  } else {
    reject("Ocorreu um problema!");
  }
});

minhaPromise.then((resultado) => {
  console.log("Foi sucesso: " + resultado);
}).catch((erro) => {
  console.log("Deu ruim: " + erro);
});

