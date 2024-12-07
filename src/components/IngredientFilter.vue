<template>
  <div v-if="isPopupVisible" class="popup-overlay">
    <div class="popup-content">
      <div class="flex justify-end">
        <button @click="$emit('close-popup')" class="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <ul class="flex flex-wrap gap-[0.5rem] mt-[2rem]">
        <li v-for="ingredient in ingredients" :key="ingredient.id">
          <button
            @click="$emit('update-ingredient-filter', ingredient.title)"
            :class="selectedIngredients.includes(ingredient.title) ? 'text-blue-500 font-bold' : 'text-white'"
            class="hover:bg-white/40 transition-all border-white/20 bg-[#04837E] hover:text-black pt-[0.2rem] pb-[0.2rem] pl-[1rem] pr-[1rem] border-[1px] rounded-[10px]"
          >
            {{ ingredient.title }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ingredients: Array,
    selectedIngredients: Array,
    isPopupVisible: Boolean,
  },
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
}

.popup-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #04837E;
  height: 70%;
  border-radius: 8px;
  width: 70%;
  padding: 2rem;
}
</style>