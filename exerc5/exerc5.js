document.getElementById("btnVerificar").addEventListener("click", function(event) {
    event.preventDefault();

    let palavras = document.querySelector("#palavras").value; 
    let arrayPalavras = palavras.split(",");
    let arrayPalavrasMaior5 = [];

    for (palavra of arrayPalavras) {

        let qtdPalavras = palavra.split("");
        
        if(qtdPalavras.length >= 5)
        arrayPalavrasMaior5.push(palavra)
    }
    let divResultado = document.querySelector("#resultado");
    
divResultado.innerHTML =`<h1>Lista de palavras com mais de 5 letras é: <p class="text-break">${arrayPalavrasMaior5}<p>`;

});

document.getElementById("btnLimpar").addEventListener("click", function(event) {
    event.preventDefault();
  
    document.querySelector("#palavras").value = "";
    document.querySelector("#resultado").innerHTML = "";
});