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

  let resposta = "Ainda estou aprendendo sobre JJS 👍";

  mensagens.innerHTML += `<p><b>IA:</b> ${resposta}</p>`;

  input.value = "";
  mensagens.scrollTop = mensagens.scrollHeight;
}
