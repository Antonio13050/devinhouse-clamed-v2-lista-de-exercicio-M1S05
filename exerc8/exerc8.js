let resultado = 0.0;

function calculadora(a, b, operacao) {
    switch (operacao) {
        case "mais":
            return a + b;
        case "menos":
            return a - b;
        case "multiplicar":
            return a * b;
        case "dividir":
            return a / b;
    }
}
document
    .getElementById("btnCalcular")
    .addEventListener("click", function (event) {
        event.preventDefault();

        let num1 = Number(document.querySelector("#valor1").value);
        let num2 = Number(document.querySelector("#valor2").value);
        let operacao = document.querySelector("#operacao").value;

        let divResultado = document.querySelector("#resultado");

        if (!num1 || !num2) {
            alert("Preencha os campos corretamente");
            return;
        }

        resultado = calculadora(num1, num2, operacao);

        divResultado.innerHTML = "<h1>Resultado: " + resultado + "</h1>";
        console.log(resultado);
    });

document
    .getElementById("btnLimpar")
    .addEventListener("click", function (event) {
        event.preventDefault();

        document.querySelector("#valor1").value = "";
        document.querySelector("#valor2").value = "";
        document.querySelector("#resultado").innerHTML = "";
    });
