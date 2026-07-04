let title = document.getElementById("name");
let ingredients = document.getElementById("ingredients");
let method = document.getElementById("method");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    let recipe = {
        recipe_name: title.value,
        recipe_ingredients: ingredients.value,
        recipe_method: method.value,
    };

    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    recipes.push(recipe);

    localStorage.setItem("recipes", JSON.stringify(recipes));

    clearInputs();
});

function clearInputs() {
    title.value = "";
    ingredients.value = "";
    method.value = "";
}