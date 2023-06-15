document.getElementById("btnTraduzir").addEventListener("click", function(event) {
    event.preventDefault();

    let cor = document.querySelector("#cor").value; 

    let corFormatada = cor.toUpperCase();

    let corTraduzida = "";

    switch (corFormatada) {
        case "BLACK":
            corTraduzida = "Preto";
            break;
        case "WHITE":
            corTraduzida = "Branco";
            break;
        case "RED": 
            corTraduzida = "Vermelho";
            break;
        case "GREEN":
            corTraduzida = "Verde";
            break;
        case "BLUE":
            corTraduzida = "Azul";
            break;
        
        default:
            corTraduzida = "Cor invalida";
            break;
    }

    let divTraducao = document.querySelector("#traducao");
  
    divTraducao.innerHTML = corTraduzida;
});

document.getElementById("btnLimpar").addEventListener("click", function(event) {
    event.preventDefault();
  
    document.querySelector("#cor").value = "";
    document.querySelector("#traducao").innerHTML = "";
  });
 

 