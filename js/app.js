
let currentRecipe = null;

// ----------- 1) اختيار وجبة عشوائية من الـ Array -----------
function getRandomRecipe() {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  return recipes[randomIndex];
}

// ----------- 2) عرض بيانات الوجبة في الصفحة -----------
function renderRecipe(recipe) {
  currentRecipe = recipe;


  document.getElementById("recipeImage").src = recipe.image;
  document.getElementById("recipeImage").alt = recipe.name;
  document.getElementById("recipeRating").textContent = recipe.rating;
  document.getElementById(
    "recipeReviews"
  ).textContent = `(${recipe.reviewsCount} reviews)`;


  document.getElementById("prepTime").textContent = `${recipe.prepTime} min`;
  document.getElementById("cookTime").textContent = `${recipe.cookTime} min`;
  document.getElementById("servings").textContent = `${recipe.servings} people`;


  document.getElementById("difficultyBadge").textContent = recipe.difficulty;
  document.getElementById("cuisineBadge").textContent = recipe.cuisine;

  document.getElementById("recipeName").textContent = recipe.name;
  document.getElementById("recipeDescription").textContent = recipe.description;

  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document.querySelector('[data-tab="ingredients"]').classList.add("active");
  renderTabContent("ingredients");
}

function renderTabContent(tab) {
  const box = document.getElementById("tabContentBox");
  const recipe = currentRecipe;

  if (tab === "ingredients") {
    box.innerHTML = recipe.ingredients
      .map(
        (item, index) => `
        <div class="ingredient-row">
          <span class="ingredient-num">${index + 1}</span>
          <span>${item}</span>
        </div>`
      )
      .join("");
  }

  if (tab === "instructions") {
    box.innerHTML = recipe.instructions
      .map(
        (step, index) => `
        <div class="ingredient-row">
          <span class="ingredient-num">${index + 1}</span>
          <span>${step}</span>
        </div>`
      )
      .join("");
  }

  if (tab === "nutrition") {
    box.innerHTML = `
      <div class="nutrition-grid">
        <div class="nutrition-item">
          <strong>${recipe.nutrition.calories}</strong>
          <span>Calories</span>
        </div>
        <div class="nutrition-item">
          <strong>${recipe.nutrition.protein}g</strong>
          <span>Protein</span>
        </div>
        <div class="nutrition-item">
          <strong>${recipe.nutrition.carbs}g</strong>
          <span>Carbs</span>
        </div>
        <div class="nutrition-item">
          <strong>${recipe.nutrition.fat}g</strong>
          <span>Fat</span>
        </div>
      </div>`;
  }

  if (tab === "tips") {
    box.innerHTML = recipe.tips
      .map(
        (tip) => `
        <div class="ingredient-row">
          <i class="bi bi-lightbulb-fill tip-icon"></i>
          <span>${tip}</span>
        </div>`
      )
      .join("");
  }
}




document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderTabContent(btn.dataset.tab);
  });
});


document.getElementById("tryAnotherBtn").addEventListener("click", () => {
  renderRecipe(getRandomRecipe());
});

renderRecipe(getRandomRecipe());