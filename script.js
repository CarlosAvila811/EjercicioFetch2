
const apiURL = "https://api.escuelajs.co/api/v1/categories";


async function fetchCategories() {
    try {
        const response = await fetch(apiURL);
        const categories = await response.json();
        displayCategories(categories);
    } catch (error) {
        console.error("Error al obtener las categorías:", error);
        alert("Hubo un problema al cargar las categorías. Intenta nuevamente.");
    }
}


function displayCategories(categories) {
    const categoriesList = document.getElementById("categories-list");
    categoriesList.innerHTML = ""; 
    categories.forEach(category => {
        const categoryCard = document.createElement("div");
        categoryCard.classList.add("col-md-4", "category-card");

        
        categoryCard.innerHTML = `
            <div class="card">
                <img src="${category.image}" class="card-img-top" alt="${category.name}">
                <div class="card-body">
                    <h5 class="card-title">${category.name}</h5>
                </div>
            </div>
        `;

        categoriesList.appendChild(categoryCard);
    });
}


window.onload = fetchCategories;
