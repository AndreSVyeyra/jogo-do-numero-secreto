
function exibirTextoNaTela(tag,texto) {
    let conteudo = document.querySelector(tag);
    conteudo.innerHTML = texto; 
}

 function verificarChute() {
    console.log(numeroSecreto);
 };


exibirTextoNaTela("h1","Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");


function gerarNumeroAleatorio(){
    const numeroAleatorio = parseInt(Math.random() * 10 + 1);
    return numeroAleatorio;
}

let numeroSecreto = gerarNumeroAleatorio();