<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { RouterView } from "vue-router";

// import Lenis from '@studio-freight/lenis';

// const lenis = new Lenis({
//   duration: 1.2,
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//   orientation: 'vertical',
//   gestureOrientation: 'vertical',
//   smoothWheel: true,
//   wheelMultiplier: 1,
//   smoothTouch: false,
//   touchMultiplier: 2,
//   infinite: false,
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);
</script>

<template>
  <RouterView class="router-view" v-slot="{Component}"> 
    <Header />
      <component :is="Component" />
    </RouterView>
  <Footer />
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  @import 'styles/_global.scss';
</style>

