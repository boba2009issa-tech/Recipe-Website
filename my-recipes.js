box = document.getElementById("box");
function showData() {
    const data = JSON.parse(localStorage.getItem("recipes")) || [];
    
    for (let i = 0; i < data.length; i++) {
        box.innerHTML += `
            <div class="border-4  border-orange-400  rounded-2xl m-5 w-full max-w-72">
            <div class="flex flex-col mt-2 mb-2 mr-2 ml-2 gap-3">
                <p class="inline-block text-orange-400 border-dotted p-2 rounded-2xl border-2 text-2xl capitalize self-center font-extrabold font-serif text-center">${data[i].recipe_name}</p>
                Ingredients:
                <p class=" text-lg font-medium leading-8 whitespace-pre-line break-words">${data[i].recipe_ingredients}</p>
                Method:
                <p class=" text-lg font-medium leading-8 whitespace-pre-line break-words">${data[i].recipe_method}</p>
                <button class="text-white font-extrabold bg-amber-400 hover:text-yellow-200 rounded-tl-3xl rounded-br-3xl p-1.5" onclick="deleteProduct(${i})">delete</button>

                </div>
        </div>
        `
    }

}
function deleteProduct(index) {
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipes.splice(index, 1);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    showData();
}
showData();