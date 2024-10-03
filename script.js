// const ingredientInput = document.getElementById('ingredientInput');
// const findRecipeBtn = document.getElementById('findRecipeBtn');
// const recipeResults = document.getElementById('recipeResults');

// // Event listeners
// findRecipeBtn.addEventListener('click', findRecipes);
// ingredientInput.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         findRecipes();
//     }
// });

// async function findRecipes() {
//     const ingredients = ingredientInput.value.trim();

//     const appId = 'c4305ab1'; // Replace with your Edamam App ID
//     const appKey = '6884806a74a54a440c166e2619e5c75c'; // Replace with your Edamam App Key
//     const apiUrl = `https://api.edamam.com/search?q=${ingredients}&app_id=${appId}&app_key=${appKey}&from=0&to=5`;

//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) throw new Error('No recipes found');

//         const data = await response.json();
//         displayRecipes(data.hits);
//     } catch (error) {
//         recipeResults.textContent = error.message;
//         recipeResults.style.display = 'block';
//     }
// }

// function displayRecipes(recipes) {
//     recipeResults.innerHTML = '';

//     if (recipes.length === 0) {
//         recipeResults.textContent = 'No recipes found';
//         recipeResults.style.display = 'block';
//         return;
//     }

//     recipes.forEach(item => {
//         const recipe = item.recipe; // Accessing the recipe object
//         const recipeDiv = document.createElement('div');
//         recipeDiv.classList.add('recipe');

//         recipeDiv.innerHTML = `
//             <h3>${recipe.label}</h3>
//             <p>Ingredients: ${recipe.ingredientLines.join(', ')}</p>
//             <a href="${recipe.url}" target="_blank">View Recipe</a>
//         `;

//         recipeResults.appendChild(recipeDiv);
//     });
//     recipeResults.style.display = 'block'; // Show the recipe results
// }


const ingredientInput = document.getElementById('ingredientInput');
const findRecipeBtn = document.getElementById('findRecipeBtn');
const recipeResults = document.getElementById('recipeResults');

// Event listeners
findRecipeBtn.addEventListener('click', findRecipes);
ingredientInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        findRecipes();
    }
});

async function findRecipes() {
    const ingredients = ingredientInput.value.trim();

    const appId = 'c4305ab1'; // Replace with your Edamam App ID
    const appKey = '6884806a74a54a440c166e2619e5c75c'; // Replace with your Edamam App Key
    const apiUrl = `https://api.edamam.com/search?q=${ingredients}&app_id=${appId}&app_key=${appKey}&from=0&to=5`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('No recipes found');

        const data = await response.json();
        displayRecipes(data.hits);
    } catch (error) {
        recipeResults.textContent = error.message;
        recipeResults.style.display = 'block';
    }
}

function displayRecipes(recipes) {
    recipeResults.innerHTML = '';

    if (recipes.length === 0) {
        recipeResults.textContent = 'No recipes found';
        recipeResults.style.display = 'block';
        return;
    }

    recipes.forEach(item => {
        const recipe = item.recipe; // Accessing the recipe object
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');

        recipeDiv.innerHTML = `
            <h3>${recipe.label}</h3>
            <img src="${recipe.image}" alt="${recipe.label}" class="recipe-image" />
            <p>Ingredients: ${recipe.ingredientLines.join(', ')}</p>
            <a href="${recipe.url}" target="_blank">View Recipe</a>
        `;

        recipeResults.appendChild(recipeDiv);
    });
    recipeResults.style.display = 'block'; // Show the recipe results
}

