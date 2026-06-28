/*=========================================
 MORTEX STUDIO
 SCRIPT.JS
 PARTE 1
=========================================*/

// Elementos

const home = document.getElementById("home");
const chat = document.getElementById("chat");

const messages = document.getElementById("messages");

const input = document.getElementById("userInput");

const sendButton = document.getElementById("sendButton");

// Abrir chat

function abrirChat(){

    home.classList.remove("active");

    chat.classList.add("active");

    input.focus();

}

// Voltar

function voltarHome(){

    chat.classList.remove("active");

    home.classList.add("active");

}

// Criar mensagem

function criarMensagem(texto, tipo){

    const container = document.createElement("div");

    if(tipo==="user"){

        container.className="user-message";

        container.innerHTML=`

        <div class="bubble">

            ${texto}

        </div>

        `;

    }else{

        container.className="ai-message";

        container.innerHTML=`

        <div class="avatar-mini">

            💀

        </div>

        <div class="bubble ai">

            ${texto}

        </div>

        `;

    }

    messages.appendChild(container);

    messages.scrollTop=messages.scrollHeight;

}

// Enviar

function enviarMensagem(){

    const texto=input.value.trim();

    if(texto==="") return;

    criarMensagem(texto,"user");

    input.value="";

    digitando();

}

// Enter

input.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        enviarMensagem();

    }

});

sendButton.addEventListener("click",enviarMensagem);

// IA digitando

function digitando(){

    const typing=document.createElement("div");

    typing.className="ai-message";

    typing.id="typing";

    typing.innerHTML=`

        <div class="avatar-mini">

            💀

        </div>

        <div class="bubble ai">

            <span class="dots">

                ● ● ●

            </span>

            digitando...

        </div>

    `;

    messages.appendChild(typing);

    messages.scrollTop=messages.scrollHeight;

    setTimeout(responderIA,1200);

}
