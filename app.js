function exibirTextoNaTela(tag,texto) {
    let conteudo = document.querySelector(tag);
    conteudo.innerHTML = texto; 
}

 function verificarChute() {
    console.log("cliquei no botao")
 };



exibirTextoNaTela("h1","Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");


