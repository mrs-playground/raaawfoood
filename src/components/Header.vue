<script>
export default {
  name: 'Header',
  data() {
  },
  methods: {
  },
  mounted() {

  },
}
</script>

<template>
  <div v-if="this.$route.path != '/'">
    <header class="pt-[2rem] pb-[2rem]">
      <!-- <div class="container mx-auto pl-[2rem] pr-[2rem] flex items-center gap-[1rem]">
        <router-link :to="{ name: 'Home'  }"><h2 class="leading-[1.1] text-center uppercase text-[18px]">Raaaw Foood</h2></router-link> <br>
      </div> -->
    </header>
  </div>
</template>

<style lang="scss" scoped>

</style>
