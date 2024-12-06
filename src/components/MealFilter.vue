<template>
  <ul class="flex flex-wrap gap-[1rem] mt-[1rem] mb-[1rem]">
    <li v-for="meal in meals" :key="meal.id">
      <button
        @click="$emit('update-meal-filter', meal.title)"
        :class="selectedMeals.includes(meal.title) ? 'text-white bg-black' : 'text-white'"
        class="leading-[1] uppercase hover:bg-white/40 transition-all border-white/20 bg-[#04837E] hover:text-black pt-[0.2rem] pb-[0.2rem] pl-[1rem] pr-[1rem] h-[150px] w-[150px] border-[1px] rounded-[6px]"
      >
        {{ meal.title }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    meals: Array,
    selectedMeals: Array,
  },
};
</script>