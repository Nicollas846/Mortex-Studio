function enviar() {
  let input = document.getElementById("pergunta");
  let mensagens = document.getElementById("mensagens");

  let texto = input.value;
  if (!texto) return;

  // mostra pergunta do usuário
  mensagens.innerHTML += "<p><b>Você:</b> " + texto + "</p>";

  // resposta simples (IA fake por enquanto)
  let resposta = "";

  if (texto.toLowerCase().includes("combo")) {
    resposta = "Treina timing e pratica no modo treino 👍";
  } else if (texto.toLowerCase().includes("skill")) {
    resposta = "Observa padrões dos jogadores e treina reação.";
  } else {
    resposta = "Ainda estou aprendendo isso, tenta perguntar diferente.";
  }

  mensagens.innerHTML += "<p><b>IA:</b> " + resposta + "</p>";

  input.value = "";
}
