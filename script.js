function enviar() {
  let input = document.getElementById("pergunta");
  let mensagens = document.getElementById("mensagens");

  let texto = input.value;
  if (!texto) return;

  mensagens.innerHTML += `
    <div style="margin:10px 0;">
      <b style="color:#00ffcc">Você:</b> ${texto}
    </div>
  `;

  let resposta = "Ainda estou aprendendo sobre JJS 👍";

  mensagens.innerHTML += `
    <div style="margin:10px 0;">
      <b style="color:#00aaff">IA:</b> ${resposta}
    </div>
  `;

  input.value = "";
  mensagens.scrollTop = mensagens.scrollHeight;
}
