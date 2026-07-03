let chatHistory = [];

const input = document.getElementById("input");
const chat = document.getElementById("chat");

function add(text, type) {
  const div = document.createElement("div");
  div.className = "msg " + type;
  div.innerText = text;

  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

async function send() {
  const text = input.value.trim();

  if (!text) return;

  add(text, "user");

  input.value = "";

  chatHistory.push({
    role: "user",
    content: text
  });

  try {

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages: chatHistory
      })
    });

    const data = await res.json();

    if (!res.ok) {
      add("Erro: " + (data.error || "Erro desconhecido"), "bot");
      return;
    }

    add(data.reply, "bot");

    chatHistory.push({
      role: "assistant",
      content: data.reply
    });

  } catch (err) {

    console.error(err);

    add("Erro ao conectar com a IA.", "bot");

  }
}

// ENTER
input.addEventListener("keydown", function (e) {

  if (e.key === "Enter") {
    send();
  }

});

// NOVO CHAT
function novoChat() {

  chatHistory = [];

  chat.innerHTML = "";

  add("Novo chat iniciado. Como posso ajudar?", "bot");

}
