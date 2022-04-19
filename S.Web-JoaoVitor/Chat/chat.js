const srcImg = ["style/img/Perfil-1.jpg"];
const input = document.getElementById("mensagem");

function gotoBottom(id) {
    var element = document.getElementById(id);
    element.scrollTop = element.scrollHeight - element.clientHeight;
}
  
window.addEventListener("load", function (event) {
    gotoBottom("Mensag");
    input.focus();
})
  
function EnviaMensagem() {
    const inputMensagem = document.getElementById("mensagem");
    const div = document.createElement("div");
    div.className = "Client";
    const divText = document.createElement("div");
    divText.innerText = inputMensagem.value;
    divText.className = "Texto";

    const img = document.createElement("img");
    img.src = srcImg[0];
    img.className = "ImgVc";

    
    div.appendChild(img);
    div.appendChild(divText);

    const mensagens = document.getElementById("Mensag");
    mensagens.appendChild(div);

    inputMensagem.value = "";
}

const btnEnviar = document.getElementById("Envio");
btnEnviar.addEventListener("submit", function(event) {
    event.preventDefault();

    EnviaMensagem();
    gotoBottom("Mensag");
    input.focus();
});