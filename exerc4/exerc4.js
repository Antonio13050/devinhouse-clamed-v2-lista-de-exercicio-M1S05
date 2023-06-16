
/*function imprimirSeq (num) {
    let nuns = [0, 1];
    let i = 1;
    while (i < num - 1) {
        let soma = nuns[i] + nuns[i - 1];
        nuns.push(soma);
        
        i++;
        
    }
    console.log(nuns);
    return nuns
}*/
function imprimirSeq (num) {
    let nuns = [0, 1];
    let i = 1;

    while (nuns[nuns.length - 1] <= num) {
       
        let soma = nuns[i] + nuns[i - 1];
        nuns.push(soma);     
        i++;
    }
    nuns.pop();
    return nuns
}


document.getElementById("btnVerificar").addEventListener("click", function(event) {
    event.preventDefault();

    let numero = Number(document.querySelector("#numero").value); 
    if (isNaN(numero)) {
        alert("Digite um número válido");
        return
    }

    let divResultado = document.querySelector("#resultado");
    



    let sequencia = imprimirSeq(numero);

    divResultado.innerHTML =`<h1>Sequencia até o número ${numero} é: <h1><p class="text-break">${sequencia}<p>`;

});

document.getElementById("btnLimpar").addEventListener("click", function(event) {
    event.preventDefault();
  
    document.querySelector("#numero").value = "";
    document.querySelector("#resultado").innerHTML = "";
});