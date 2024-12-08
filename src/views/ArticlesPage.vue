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
      isIngredientPopupVisible: false,
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
  mounted() {
    this.forceResize();
  },
  updated() {
    this.forceResize();
  },
  methods: {
    forceResize() {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 0.5);
    },
    toggleIngredientPopup() {
      this.isIngredientPopupVisible = !this.isIngredientPopupVisible;
    },
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
        this.filters.selectedIngredients = this.filters.selectedIngredients.filter((i) => i !== ingredient);
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
  <div class="container mx-auto max-lg:pl-[2rem] max-lg:pr-[2rem] flex max-lg:block gap-[5rem] pb-[10rem]">

    <div class="w-[70%] max-lg:w-full">
      <!-- Liste des recettes -->

      <div class="mb-[2rem] flex max-lg:block justify-between items-end">
        <router-link :to="{ name: 'Home'  }">
          <h1 class="text-black leading-[1.1] uppercase text-[45px] relative inline-block">
            Let's cook!<sup class="absolute top-0 text-[20px] right-[-30px] font-medium text-white">
          </sup></h1>
        </router-link>
        <p>{{ filteredRecipes.length }} recettes</p>
      </div>
      
      <!-- Recherche -->
      <div class="flex gap-8 items-center mb-6">
        <div class="flex-grow relative">
          <div class="absolute top-[1rem] left-[1rem]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <input
            type="text"
            v-model="filters.query"
            placeholder="On cuisine quoi aujourd'hui?"
            class="w-full px-4 pl-[3rem] pt-[0.2rem] text-white bg-[#04837E] border rounded-lg focus:pl-[3rem] h-[60px]"
            />
        </div>
      </div>

      <div class="pt-10">
      <div v-if="filteredRecipes.length === 0" class="text-center text-gray-500 font-semibold">
        Pas encore de recettes pour cette recherche
      </div>

      <ul v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

    <div class="w-[30%] max-lg:w-full">
      <!--Empty-->
    </div>

  </div>
    <div class="max-lg:hidden fixed top-0 right-0 w-[30%] h-screen bg-[#04837E] pt-[2rem] pl-[4rem] pr-[4rem] pb-[2rem] flex flex-col justify-between">

      <!-- Filtres par repas -->
      <MealFilter
        :meals="meals"
        :selectedMeals="filters.selectedMeals"
        @update-meal-filter="setMealFilter"
      />

      <button @click="toggleIngredientPopup" class="flex-inline pt-[0.6rem] pb-[0.6rem] rounded-[10px] items-center gap-2 mt-[4rem] bg-white">
          <!-- <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#04837E" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
          </div> -->
          <p class="text-[#04837E]">Choisissez vos ingrédients</p>
      </button>

    </div>

    <IngredientFilter
    :ingredients="ingredients"
    :selectedIngredients="filters.selectedIngredients"
    :isPopupVisible="isIngredientPopupVisible"
    @update-ingredient-filter="setIngredientFilter"
    @close-popup="toggleIngredientPopup"
    />

</template>

<style scoped>
input::placeholder {
  font-size: 22px;
  color: white;
}
input:focus {
  font-size: 22px;
}
</style>

