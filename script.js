function irInicio() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("chatPage").style.display = "block";
}

function voltarMenu() {
  document.getElementById("chatPage").style.display = "none";
  document.getElementById("menu").style.display = "block";
}

function enviar() {
  let input = document.getElementById("pergunta");
  let mensagens = document.getElementById("mensagens");

  let texto = input.value;
  if (!texto) return;

  // mensagem do usuário
  mensagens.innerHTML += `<p><b>Você:</b> ${texto}</p>`;

  // resposta simples da IA
  let resposta = "Ainda estou aprendendo sobre JJS 👍";

  mensagens.innerHTML += `<p><b>IA:</b> ${resposta}</p>`;

  input.value = "";

  // scroll automático
  mensagens.scrollTop = mensagens.scrollHeight;
}
