// Função para exibir notícias em uma barra de rolagem
function exibirNoticias() {
    // Aqui você pode adicionar código para buscar notícias de uma fonte externa
    // Neste exemplo, estamos apenas exibindo notícias fictícias
    const noticias = [
        "Primeira notícia",
        "Segunda notícia",
        "Terceira notícia",
        "Quarta notícia",
        "Quinta notícia"
    ];

    const barraDeRolagem = document.getElementById("barraDeRolagem");

    noticias.forEach(noticia => {
        const item = document.createElement("div");
        item.textContent = noticia;
        barraDeRolagem.appendChild(item);
    });
}

// Função para pesquisar notícias
function pesquisarNoticias() {
    const termoDeBusca = document.getElementById("termoDeBusca").value;
    // Aqui você pode adicionar código para buscar notícias com base no termo de busca
    alert("Você pesquisou por: " + termoDeBusca);
}

// Evento para carregar as notícias quando a página carrega
window.addEventListener("load", exibirNoticias);

// Evento para pesquisar notícias quando o botão de pesquisa é clicado
document.getElementById("botaoPesquisar").addEventListener("click", pesquisarNoticias);

