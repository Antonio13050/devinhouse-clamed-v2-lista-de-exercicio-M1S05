function classificaIdade() {

    let idade = parseInt(document.getElementById('idade').value);

    if (isNaN(idade) || (idade < 0) || (idade > 150)) {
        return alert("Preencha uma idade valida");
    }

    let classificacao = "";
    if ((idade => 0) && (idade <= 12)) {
        classificacao = "Criança";
    } else if ((idade => 13) && (idade <= 17)) {
        classificacao = "Adolescente";
    } else if ((idade => 18) && (idade <= 59)) {
        classificacao = "Adulto";
    } else {
        classificacao = "Idoso";
    }
        
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = classificacao;
}