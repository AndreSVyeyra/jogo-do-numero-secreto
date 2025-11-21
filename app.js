let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;
exibirTextoNaTela("h1","Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");


function exibirTextoNaTela(tag,texto) {
    let conteudo = document.querySelector(tag);
    conteudo.innerHTML = texto; 
}

 function verificarChute() {
    const chute = document.querySelector("input").value;
    if(chute == numeroSecreto){
        let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela("h1", "Acertou!");
        exibirTextoNaTela("p", mensagemTentativa);
    }else {
        if (chute > numeroSecreto){
            exibirTextoNaTela("p","O número secreto é menor");
        }else {
            exibirTextoNaTela("p","O número secreto é maior");
        }
        tentativa++
    }
 }

function gerarNumeroAleatorio(){
    const numeroAleatorio = parseInt(Math.random() * 10 + 1);
    return numeroAleatorio;
}