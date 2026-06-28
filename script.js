function responder() {
  let pergunta = document.getElementById("pergunta").value;
  let resposta = document.getElementById("resposta");

  if (pergunta.toLowerCase().includes("combo")) {
    resposta.innerText = "Treina timing e pratica no modo treino 👍";
  } else if (pergunta.toLowerCase().includes("skill")) {
    resposta.innerText = "Observa padrões dos jogadores e treina reação.";
  } else {
    resposta.innerText = "Ainda não sei isso, tenta perguntar diferente.";
  }
}
