let inputLetra = document.querySelector("input");
let  h2Vazio = document.querySelector("#vazio");
let button = document.querySelector("button");
let palpite = inputLetra.value.toLowerCase();
let letras = ['p', 'a', 'l', 'a', 'v', 'r', 'a'];
let acertou = [];
let errou = [];
let tentativas = 6;
let vetor = [];
let erro = document.querySelector(".erro");




for (let letra of letras) {
    vetor.push("_");
    console.log(letra);


}



button.onclick = function () {
    let palpite = inputLetra.value.toLowerCase();
    // apagar palpite aquiconsole.log(palpite);


    // while esta servindo para contar as tentativas
    while (tentativas === 0) {
        for (let i = 0; i < letras.length; i++) {
            //receber palpite esse if está comparando o palpite com o vetor letras
        
            if (palpite === letras[i]) {
                vetor[i] = letras[i];
                h2Vazio.innerHTML = vetor[i];

            }

            //acertou.push(letras[i]);
            //console.log(acertou);

            //Exibir vetor aqui em H!
            // se não acertou a letra de cima "erro"
            else {
                errou.push(letras[i]);

                if (errou.length == 0) {
                    alert('Seu burro');
                    

                } //if


                console.log(errou);


            } //if
            
        } //for
        tentativas--;
    }//while
}//function