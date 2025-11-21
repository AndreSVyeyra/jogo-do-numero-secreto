
function exibirTextoNaTela(tag,texto) {
    let conteudo = document.querySelector(tag);
    conteudo.innerHTML = texto; 
}

 function verificarChute() {
    const chute = document.querySelector("input").value;
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!");
        exibirTextoNaTela("p","Você descobriu o número secreto");
    }else {
        if (chute > numeroSecreto){
            exibirTextoNaTela("p","O número secreto é menor");
        }else {
            exibirTextoNaTela("p","O número secreto é maior");
        }
    }
 };


exibirTextoNaTela("h1","Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");


function gerarNumeroAleatorio(){
    const numeroAleatorio = parseInt(Math.random() * 10 + 1);
    return numeroAleatorio;
}

let numeroSecreto = gerarNumeroAleatorio();