<script>
import MealFilter from '../components/MealFilter.vue';
import IngredientFilter from '../components/IngredientFilter.vue';
import data from '../json/recipes.json';
import mealsData from '../json/meals.json';
import ingredientsData from '../json/ingredients.json';

export default {
  name: 'ArticlesPage',
  components: {
    MealFilter,
    IngredientFilter,
  },
  data() {
    return {
      recipes: data.objects,
      meals: mealsData.meals,
      ingredients: ingredientsData.ingredients,
      filters: {
        query: '',
        selectedMeals: [],
        selectedIngredients: [],
      },
    };
  },
  computed: {
    filteredRecipes() {
      return this.recipes
        .filter(this.filterSearch)
        .filter(this.filterByMeal)
        .filter(this.filterByIngredients);
    },
  },
  methods: {
    // Recherche par titre
    filterSearch(recipe) {
      return !this.filters.query
        ? true
        : recipe.title.toLowerCase().includes(this.filters.query.toLowerCase());
    },
    // Filtrer par repas
    filterByMeal(recipe) {
      if (!this.filters.selectedMeals.length) return true;

      // Vérifie si au moins un repas sélectionné est présent dans le tableau des repas de la recette
      return recipe.meals.some((meal) =>
        this.filters.selectedMeals.includes(meal)
      );
    },
    // Mise à jour des filtres de repas
    setMealFilter(meal) {
      if (this.filters.selectedMeals.includes(meal)) {
        this.filters.selectedMeals = this.filters.selectedMeals.filter((m) => m !== meal);
      } else {
        this.filters.selectedMeals.push(meal);
      }
    },
    // Mise à jour des filtres d'ingrédients
    setIngredientFilter(ingredient) {
      if (this.filters.selectedIngredients.includes(ingredient)) {
        this.filters.selectedIngredients = this.filters.selectedIngredients.filter(
          (i) => i !== ingredient
        );
      } else {
        this.filters.selectedIngredients.push(ingredient);
      }
    },
    // Filtrer par ingrédients
    filterByIngredients(recipe) {
      if (!this.filters.selectedIngredients.length) return true;

      const recipeIngredients = Array.isArray(recipe.ingredients)
        ? recipe.ingredients
        : recipe.ingredients.split(',').map((ing) => ing.trim());

      return this.filters.selectedIngredients.some((ingredient) =>
        recipeIngredients.some((recipeIngredient) => 
          recipeIngredient.name && recipeIngredient.name.toLowerCase() === ingredient.toLowerCase()
        )
      );
    }
  },
};
</script>

<template>
  <div class="container mx-auto flex gap-[5rem] pb-[10rem]">

    <div class="w-[70%]">
      <!-- Liste des recettes -->
      <div class="pt-10">
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <li
            v-for="recipe in filteredRecipes"
            :key="recipe.id"
            class="w-full">
            <router-link
              :to="'/' + recipe.id"
              class="group flex justify-center items-center bg-white p-4 hover:bg-[#04837E] transition rounded-lg border text-center h-[200px]">
              <h3 class="group-hover:text-white text-black font-bold text-xl">
                {{ recipe.title }}
              </h3>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="w-[30%]">
      <!--Empty-->
    </div>

  </div>
    <div class="fixed top-0 right-0 w-[30%] h-screen bg-[#04837E] p-[2rem] rounded-tl-[16px] rounded-bl-[16px]">

      <div class="mb-[2rem]">
        <router-link :to="{ name: 'Home'  }">
          <h1 class="text-white leading-[1.1] uppercase text-[45px] relative inline-block">
            RaaawFoood<sup class="absolute top-0 text-[20px] right-[-30px] font-medium text-white">{{ filteredRecipes.length }}
          </sup></h1>
        </router-link>
      </div>

      <!-- Recherche -->
      <div class="flex gap-8 items-center mb-6">
        <div class="flex-grow">
          <input
            type="text"
            v-model="filters.query"
            placeholder="What are you looking for?"
            class="w-full px-4 pt-[0.2rem] text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-[60px]"
            />
        </div>
      </div>

      <!-- Filtres par repas -->
      <MealFilter
        :meals="meals"
        :selectedMeals="filters.selectedMeals"
        @update-meal-filter="setMealFilter"
      />

      <!-- Filtres par ingrédients -->
      <IngredientFilter
        :ingredients="ingredients"
        :selectedIngredients="filters.selectedIngredients"
        @update-ingredient-filter="setIngredientFilter"
      />
    </div>
</template>

<style scoped>
input::placeholder {
  font-size: 22px;
}
input:focus {
  font-size: 22px;
}
</style>

