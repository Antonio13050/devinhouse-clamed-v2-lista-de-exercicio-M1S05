lista = [];
//função adicionar elemento
function adicionarElemento(lista, elemento) {
    lista.push(elemento);
    return lista;
}

//função remover ultimo elemento
function removerUltimoElemento(lista) {
    elemento = lista.pop();
    return elemento;
}

//função remover elemento intervalo
function removerElementosIntervalo(lista, inicio, fim) {
    lista.splice(inicio, fim);
    return lista;
}

//função atualizar lista
function atualizarLista(lista) {
    lista.forEach((elemento) => {
        console.log(elemento);
    });
}

//btnCadastrar
document
    .getElementById("btnCadastrar")
    .addEventListener("click", function (event) {
        event.preventDefault();

        let elemento = document.querySelector("#elemento").value;
        adicionarElemento(lista, elemento);
    });

let tabela = document.getElementById("tabela-elementos");
let tabelaBody = tabela.querySelector("tbody");

//btnExibir
document
    .getElementById("btnExibir")
    .addEventListener("click", function (event) {
        event.preventDefault();

        tabelaBody.innerHTML = "";

        lista.forEach((elemento, index) => {
            let row = document.createElement("tr");

            let colunaId = document.createElement("td");
            let colunaElemento = document.createElement("td");

            colunaId.textContent = index + 1;
            colunaElemento.textContent = elemento;

            row.appendChild(colunaId);
            row.appendChild(colunaElemento);

            tabelaBody.appendChild(row);
        });
    });

document
    .getElementById("btnRemoverUltimoElemento")
    .addEventListener("click", function (event) {
        event.preventDefault();

        removerUltimoElemento(lista);
    });

document
    .getElementById("btnRemoverElementos")
    .addEventListener("click", function (event) {
        event.preventDefault();

        let inicio = document.querySelector("#inicio").value;
        let qtd = document.querySelector("#qtd").value;

        removerElementosIntervalo(lista, Number(inicio - 1), Number(qtd));
    });
