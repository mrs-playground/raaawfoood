<script>
import json from '../json/recipes.json'

export default {
  name: 'Object',
  data() {
    return {
      id: this.$route.params.id,
      object: {},
    };
  },
  mounted() {
    this.object = json.objects.find(item => item.id == this.$route.params.id);
  },
};
</script>


<template>
  <div class="container mx-auto pl-[2rem] pr-[2rem] pb-[5rem]" id="object">
    <div>
      <div class="pb-[5rem] pt-[2rem]">
        <div class="text-center uppercase mb-[0.5rem]">
          <router-link class="transition-all inline-flex items-center hover:bg-[#04837E]/0 hover:text-[#04837E] border-[#04837E] border-[1px] gap-2 bg-[#04837E] text-white pl-[1rem] pr-[1rem] pt-[0.3rem] pb-[0.3rem]" :to="{ name: 'Articles'  }">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </div>
            Retour aux recettes</router-link> <br>
        </div>
        <h1 class="mt-[2rem] font-bold leading-[1] text-[70px] uppercase pb-[2rem] text-center max-w-[900px] mx-auto max-lg:text-[10vw] text-[#04837E]">{{ object.title }}</h1>  
      </div>

      <div class="max-w-[1200px] mx-auto flex max-lg:flex-col max-lg:gap-[1rem] gap-[5rem] pt-[2rem]">

        <div class="w-[60%] max-lg:w-full mb-4 pb-[2rem]">
          <div>
              <h2 class="text-[32px] uppercase pb-[2rem] text-[#04837E]">Préparation</h2>
              <ul>
                <li class="pb-[1.5rem] flex gap-3" v-for="(step, index) in object.steps" :key="index">
                  <div>
                    <span class="inline-flex justify-center items-center bg-[#04837E] text-white w-[40px] h-[40px] rounded-full text-center">
                      {{ index + 1 }}
                    </span>
                  </div>
                  <p class="pt-[0.5rem]">{{ step }}</p>
                </li>
              </ul>
          </div>
        </div>

        <div class="w-[40%] max-lg:w-full mb-4 pb-[1rem]">
        <div>
            <h2 class="text-[32px] uppercase pb-[2rem] text-[#04837E]">Ingrédients</h2>
            <ul>
              <li class="pb-[0.5rem]" v-for="(ingredient, index) in object.ingredients" :key="index">
                <div v-if="ingredient.proportion" class="bg-[#04837E] text-white inline-block pl-[0.5rem] pr-[0.5rem]">{{ ingredient.proportion }} </div> 

                {{ ingredient.name }}
              </li>
            </ul>
        </div>
        </div>
      </div>

    </div>
  </div>
</template>


<style lang="scss" scoped>
</style>


