let produtos = [];
let tabela = document.getElementById("tabela-produtos");
let tabelaBody = tabela.querySelector("tbody");

let tabelaTotal = document.getElementById("tabela-totais");
let tabelaBodyTotal = tabelaTotal.querySelector("tbody");
    

function adicionarProduto(nome, preco) {
      
    produtos.push({
            nome: nome,
            preco: preco
        });
}

function exibirProduto () {
    

    tabelaBody.innerHTML = '';
    tabelaBodyTotal.innerHTML = '';


    //tabela produtos
    produtos.forEach(function(produto) {

        //cria a linha da tabela
        let row = document.createElement('tr');
        //cria a coluna do nome
        let nomeColuna = document.createElement('td');
        //adiciona o conteudo do nome a coluna
        nomeColuna.textContent = produto.nome;
        //adiciona o conteudo do nome a linha
        row.appendChild(nomeColuna);

        //cria a coluna do preço
        let precoColuna = document.createElement('td');
        //adiciona o conteudo do preço a coluna
        precoColuna.textContent = produto.preco;
        //adiciona o conteudo do preço a linha
        row.appendChild(precoColuna);

        tabelaBody.appendChild(row);
        
    });

    let qtdProdutos = produtos.length;
    
    let somaPrecos = 0;
    produtos.forEach(function(produto) {
        somaPrecos += Number(produto.preco);
    })
    //tabela totais
    produtos.forEach(function(produto) {

        tabelaBodyTotal.innerHTML = '';

        //cria a linha da tabela
        let rowTotais = document.createElement('tr');

        //cria a coluna do total de produtos
        let colunaTotalProdutos = document.createElement('td');

        //adiciona o conteudo do nome a coluna
        colunaTotalProdutos.textContent = qtdProdutos;

        //adiciona o conteudo do nome a linha
        rowTotais.appendChild(colunaTotalProdutos);

        //cria a coluna do preço total dos produtos
        let colunaPrecoTotal = document.createElement('td');

        //adiciona o conteudo do preço a coluna
        colunaPrecoTotal.textContent =somaPrecos;

        //adiciona o conteudo do total do preço a linha
        rowTotais.appendChild(colunaPrecoTotal);

        tabelaBodyTotal.appendChild(rowTotais);
        
    });
   
}



document.getElementById("btnCadastrar").addEventListener("click", function(event) {
    event.preventDefault();

    let nome = document.querySelector("#nome").value;
    let preco = parseFloat(document.querySelector("#preco").value).toFixed(2);

    

    if (nome === "") {
        alert("Digite um nome");
        return
    }
    if (preco === "") {
        alert("Digite um preço");
        return
    }
    if (isNaN(preco)) {
        alert("Digite um preço válido");
        return
    }

    

    adicionarProduto(nome, preco);

});

//Botão Exibir
document.getElementById("btnExibir").addEventListener("click", function(event) {
    event.preventDefault();

    let divResultado = document.querySelector("#resultado");

    //divResultado.innerHTML = '';

    exibirProduto();

  

    

});







//Botão Limpar
document.getElementById("btnLimpar").addEventListener("click", function(event) {
    event.preventDefault();
  
    document.querySelector("#nome").value = "";
    document.querySelector("#preco").value = "";
    document.querySelector("#resultado").innerHTML = "";
});