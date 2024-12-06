<template>

  <div class="mt-[4rem]">
    <div class="flex items-center gap-2">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
        </svg>
      </button>
    <p class="text-white">Choisissez vos ingrédients</p>
    </div>
    <ul class="flex flex-wrap gap-[1rem] mt-[1rem]">
      <li v-for="ingredient in ingredients" :key="ingredient.id">
        <button
          @click="$emit('update-ingredient-filter', ingredient.title)"
          :class="selectedIngredients.includes(ingredient.title) ? 'text-blue-500 font-bold' : 'text-white'"
          class="hover:bg-white/40 transition-all border-white/20 bg-[#04837E] hover:text-black pt-[0.2rem] pb-[0.2rem] pl-[1rem] pr-[1rem] border-[1px] rounded-[30px]"
        >
          {{ ingredient.title }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    ingredients: Array,
    selectedIngredients: Array,
  },
};
</script>