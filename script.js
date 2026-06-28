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

/*=========================================
 SCRIPT.JS
 PARTE 2
=========================================*/

function responderIA(){

    const typing = document.getElementById("typing");

    if(typing){

        typing.remove();

    }

    const pergunta = document.querySelectorAll(".user-message .bubble");

    const ultima = pergunta[pergunta.length-1].textContent.toLowerCase();

    let resposta = "";

    // Respostas

    if(ultima.includes("oi") || ultima.includes("olá")){

        resposta = "Olá! Sou a Mortex AI. Pergunte qualquer coisa sobre Jujutsu Shenanigans.";

    }

    else if(ultima.includes("combo")){

        resposta = "Treine os cancelamentos de habilidade e pratique o tempo dos golpes. Isso melhora muito os combos.";

    }

    else if(ultima.includes("gojo")){

        resposta = "Gojo possui golpes de longo alcance e grande controle de espaço.";

    }

    else if(ultima.includes("sukuna")){

        resposta = "Sukuna é muito forte no combate corpo a corpo e possui ataques devastadores.";

    }

    else if(ultima.includes("hakari")){

        resposta = "Hakari depende bastante da sorte do Jackpot para alcançar seu potencial máximo.";

    }

    else if(ultima.includes("mahito")){

        resposta = "Mahito possui ataques rápidos e habilidades que confundem os adversários.";

    }

    else if(ultima.includes("megumi")){

        resposta = "Megumi utiliza seus shikigamis para controlar o campo de batalha.";

    }

    else if(ultima.includes("yuji")){

        resposta = "Yuji é um personagem equilibrado e ótimo para quem gosta de combos rápidos.";

    }

    else if(

        ultima.includes("sexo") ||

        ultima.includes("porn") ||

        ultima.includes("18+") ||

        ultima.includes("nude") ||

        ultima.includes("beijo")

    ){

        resposta = "Desculpe. Eu respondo apenas perguntas relacionadas ao Jujutsu Shenanigans.";

    }

    else{

        resposta = "Ainda não conheço essa resposta. Tente perguntar algo relacionado ao Jujutsu Shenanigans.";

    }

    criarMensagem(resposta,"ai");

}

/* Mensagem inicial */

window.onload = () => {

    home.classList.add("active");

    chat.classList.remove("active");

};
