const container = document.getElementById("lista-receitas");

let receitas = [];

async function carregarReceitas() 
{
    const resposta = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    receitas = await resposta.json();
    receitas = receitas.meals;
    mostrarReceitas(receitas);
}

function mostrarReceitas(lista) 
{
    container.innerHTML = "";
    lista.forEach(receita => {
        const card = document.createElement("article");
        card.classList.add("card-receita");
        card.innerHTML = `
        <img src="${receita.strMealThumb}" width="150">
        <h2>${receita.strMeal}</h2>
        <p>Categoria: ${receita.strCategory}</p> 
        <p>Origem: ${receita.strArea}</p>
        `;
        container.appendChild(card);
    });
}

const pesquisa = document.getElementById("pesquisa");

pesquisa.addEventListener("input", () => {
    const texto = pesquisa.value.toLowerCase();
    const resultado = receitas.filter(receita => receita.strMeal.toLowerCase().includes(texto));
    mostrarReceitas(resultado);
}
);
carregarReceitas();