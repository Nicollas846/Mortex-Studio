function abrirChat() {
  document.getElementById("home").style.display = "none";
  document.getElementById("chat").style.display = "block";
}

function voltar() {
  document.getElementById("chat").style.display = "none";
  document.getElementById("home").style.display = "block";
}

function enviar() {
  let input = document.getElementById("input");
  let mensagens = document.getElementById("mensagens");

  let texto = input.value;
  if (!texto) return;

  mensagens.innerHTML += `<p><b>Você:</b> ${texto}</p>`;

  let resposta = gerarResposta(texto);

  mensagens.innerHTML += `<p><b>IA:</b> ${resposta}</p>`;

  input.value = "";
  mensagens.scrollTop = mensagens.scrollHeight;
}

function gerarResposta(texto) {
  texto = texto.toLowerCase();

  // bloqueio de conteúdo fora do tema
  if (
    texto.includes("sexo") ||
    texto.includes("nsfw") ||
    texto.includes("18+")
  ) {
    return "Não posso responder esse tipo de pergunta.";
  }

  // respostas JJS
  if (texto.includes("combo")) {
    return "Treina timing e prática no modo treino 👍";
  }

  if (texto.includes("skill")) {
    return "Observe padrões dos jogadores e treine reação.";
  }

  return "Ainda estou aprendendo sobre JJS 👍";
}
