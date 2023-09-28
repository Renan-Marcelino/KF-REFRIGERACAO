// Elementos do menu
const produto1Link = document.getElementById("produto1");
const produto2Link = document.getElementById("produto2");
const produto3Link = document.getElementById("produto3");

// Área de conteúdo
const conteudo = document.getElementById("conteudo");

// Funções para exibir o conteúdo do produto
function exibirProduto1() {
    conteudo.innerHTML = "<h2>Produto 1</h2><p>Descrição do Produto 1.</p>";
}

function exibirProduto2() {
    conteudo.innerHTML = "<h2>Produto 2</h2><p>Descrição do Produto 2.</p>";
}

function exibirProduto3() {
    conteudo.innerHTML = "<h2>Produto 3</h2><p>Descrição do Produto 3.</p>";
}

// Adicionar ouvintes de eventos para cada link
produto1Link.addEventListener("click", exibirProduto1);
produto2Link.addEventListener("click", exibirProduto2);
produto3Link.addEventListener("click", exibirProduto3);
