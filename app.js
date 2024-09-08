function pesquisar() {
    // Cria uma string vazia para armazenar o HTML dos resultados
    let resultados = "";

    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
let campoPesquisa = document.getElementById ("campo-pesquisa").value;
    // Itera sobre cada dado e constrói o HTML para cada resultado
    if (!campoPesquisa){section.innerHTML = "<p>Nenhum resultado encontrado :O </p>" 
        return}
        campoPescisa = campoPesquisa.toLowerCase();
let Titulo = "";
let Descrição = "";
let Tags = "";
    for (let dado of dados) {
        Titulo = dado.Titulo.toLowerCase();
        Descrição = dado.Descrição.toLowerCase();
        Tags = dado.Tags.toLowerCase();
        if (Titulo.includes (campoPesquisa)|| Descrição.includes (campoPesquisa)|| Tags.includes (campoPesquisa)){
            resultados += `<div class="item-resultado">
            <h2> ${dado.Titulo}</h2>
            <p class="descrição-meta">${dado.Descrição};
                <a href= ${dado.Link} target="_blank"> Mais informações.</a></div>`;
        }
    }
        if (!resultados) { resultados = "<p>Nenhum resultado encontrado :( </p>"}
    // Atribui o HTML construído à seção
    section.innerHTML = resultados;
}