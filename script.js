let inputLetra = document.querySelector("input");
let palpite = inputLetra.value.toLowerCase();

let button = document.querySelector("button");

let letrasPalavra = ['p', 'a', 'l', 'a', 'v', 'r', 'a'];

let errou = [];
let tentativas = 6;
let vetor = [];
let erro = document.querySelector(".erro");

let letraOculta = document.querySelector('#letraOculta');

for (let letra of letrasPalavra) {
    vetor.push("_");
}

let h2Vazio = document.createElement('h2');

const criaEspaco = function(){
    
    h2Vazio.innerHTML = vetor;
    letraOculta.appendChild(h2Vazio);
}

window.onload = criaEspaco;


button.onclick = function () {

    let palpite = inputLetra.value.toLowerCase();
    let wrong = document.createElement('p');
    let right = document.createElement('span');
    // apagar palpite aqui
        for (let i = 0; i < letrasPalavra.length; i++) {
            //receber palpite esse if está comparando o palpite com o vetor letrasPalavra
            if(palpite == letrasPalavra[i]){
                for (posicao of vetor){
                    posicao = letrasPalavra[i];
                }
                console.log(posicao);
            } else {
                wrong.innerHTML = palpite;
            }

        } //for
        right.innerHTML = posicao;
        h2Vazio.appendChild(right);
        erro.appendChild(wrong);
}//function