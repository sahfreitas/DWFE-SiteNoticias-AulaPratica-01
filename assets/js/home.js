import { dados_das_noticias } from "./bd.js";

let vetor_das_noticias = [];
const container_das_noticias = document.getElementById("noticias");
const opcao_noticia = document.getElementById("opcao-noticia");

opcao_noticia.addEventListener("click", (e) => {
    alternarApresentacaoDasNoticias();
});

function alternarApresentacaoDasNoticias() {
    if (vetor_das_noticias.length == 0) {
        carregarNoticias();
        apresentarNoticias();
    } else {
        container_das_noticias.innerHTML = "";
        vetor_das_noticias = [];
    }
}

const carregarNoticias = async () => {
    vetor_das_noticias = dados_das_noticias;
}

function apresentarNoticias() {
    vetor_das_noticias.forEach(noticia => {
        const cartao = document.createElement("div");
        cartao.className = "cartao";
    })
}