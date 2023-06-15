
function verificarPrimo(num) {
    let i = 2;
    let isPrimo = "é primo";

    do {
        if (num % i === 0) {
            return isPrimo = "não é primo";
        } 
        i++;

    } while (i < num);
    return isPrimo;
};


document.getElementById("btnVerificar").addEventListener("click", function(event) {
    event.preventDefault();

    let numero = document.querySelector("#numero").value; 

    let divResultado = document.querySelector("#resultado");

    if (isNaN(numero)) {
        return alert("Preencha um numero valido");
    } 

    if (numero <= 1) {
        return divResultado.innerHTML = `${numero} não é primo`;
    }

    if (numero == 2) {
        return divResultado.innerHTML = `${numero} é primo`;
    }

    let isPrimo = verificarPrimo(numero);

    divResultado.innerHTML =`${numero} ${isPrimo}`;
});

document.getElementById("btnLimpar").addEventListener("click", function(event) {
    event.preventDefault();
  
    document.querySelector("#numero").value = "";
    document.querySelector("#resultado").innerHTML = "";
});