function processName(nome, callback) {
  if (typeof nome !== "string") {
    callback(new Error("O nome deve ser uma string"))
  }

  if (nome.lenght === 0) {
    callback(new Error("O nome não pode estar vazio"));
    return;
  }

  callback(null, "Nome proceessado com sucesso")

}

// Se trocar o nome "BRUNO" por número, vai dar erro
processName("Bruno", (error, result) => {

  if (error) {
    console.log("Ocorreu um problema:", error.message)
  } else {
    console.log(result)
  }
})