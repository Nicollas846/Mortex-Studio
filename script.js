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

  add(data.reply, "bot");

  chatHistory.push({
    role: "assistant",
    content: data.reply
  });
}

// ENTER
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") send();
});

// NOVO CHAT
function novoChat() {
  chatHistory = [];
  chat.innerHTML = "";
}
