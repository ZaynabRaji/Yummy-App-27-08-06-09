const formRecette = document.querySelector("form");
const Plat = document.getElementById("titre");
const Détails = document.getElementById("Recette");
const recetteContainer = document.getElementById("recetteContainer");

let recettes = [];

formRecette.addEventListener("submit", function (event) {
    event.preventDefault();
    addRecette();
});

function addRecette() {
    const recetteTitre = Plat.value.trim();
    const recetteDétail = Détails.value.trim();
    if (recetteTitre === "" && recetteDétail === "") return;
    recettes.push({ titre: recetteTitre, détail: recetteDétail });
    displayRecettes();
    Plat.value = "";
    Détails.value = "";
}

function displayRecettes() {
    recetteContainer.innerHTML = "";
    recettes.forEach((recette, index) => {
        const recetteElement = document.createElement("div");
        recetteElement.className = "recetteElement";
        recetteElement.textContent = recette.text;

        const Recipe = document.createElement("h3");
        Recipe.textContent = recette.titre;
        recetteElement.appendChild(Recipe);

        const ingredients = document.createElement("p");
        ingredients.textContent = recette.détail;
        recetteElement.appendChild(ingredients);

        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fa-solid fa-pencil" style="color: #ffffff;"></i>';
        editButton.onclick = () => editRecette(index);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-regular fa-trash-can" style="color: #ffffff;"></i>';
        deleteButton.onclick = () => deleteRecette(index);

        recetteElement.appendChild(editButton);
        recetteElement.appendChild(deleteButton);
        recetteContainer.appendChild(recetteElement);
    });
}

function editRecette(index){
    // To edit the recipe's title
    const newtitleRecipe = prompt('Modifie le titre de la recette:', recettes[index].titre);
    if (newtitleRecipe !== null && newtitleRecipe !== '') {
        recettes[index].titre = newtitleRecipe;
        displayRecettes();
    }
    // To edit the recipe's details
    const newIngredients = prompt('Modifie votre recette:', recettes[index].détail);
    if (newIngredients !== null && newIngredients !== '') {
        recettes[index].détail = newIngredients;
        displayRecettes();
    } 
}

function deleteRecette(index) {
    recettes.splice(index, 1);
    displayRecettes();
}