let produtos = [];

function adicionarProduto(nome, preco) {
      
    
        produtos.push({
                nome: nome,
                preco: preco
            });
}
document.getElementById("btnCadastrar").addEventListener("click", function(event) {
    event.preventDefault();

    let nome = document.querySelector("#nome").value
    let preco = document.querySelector("#preco").value

    adicionarProduto(nome, preco);

});
console.log(produtos);
document.getElementById("btnExibir").addEventListener("click", function(event) {
    event.preventDefault();

    let divResultado = document.querySelector("#resultado");

    divResultado.innerHTML = '';

    produtos.forEach(function(produto) {
        let id = produtos.indexOf(produto);
        divResultado.innerHTML += `<p>${id+1} Nome: ${produto.nome} - Valor: ${produto.preco}</p>`
        
    });

});

document.getElementById("btnLimpar").addEventListener("click", function(event) {
    event.preventDefault();
  
    document.querySelector("#nome").value = "";
    document.querySelector("#preco").value = "";
    document.querySelector("#resultado").innerHTML = "";
});