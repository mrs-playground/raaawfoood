<script>
// import { gsap } from "gsap";

export default { 
  mounted() { 
    // const { box } = this.$refs
    // const timeline = gsap.timeline() 
    // gsap.set(box, {opacity: 0, y: -100});
    // timeline.to(box, 1, { y: 0, opacity: 1 }) 
  } 
} 
</script>


<template>
  <div class="hero flex items-center justify-center h-screen w-full text-center">
    <div class="hero-content h-[full]">
      <h2 ref="box" class="text-[20px] font-bold text-[#446F48] leading-[1.1] inline-block uppercase relative">
        <router-link :to="{ name: 'Articles' }">
          <div class="font-[500] font-archivo text-[30px] inline-block
                max-w-[316px] transition-all duration-2 transform hover:rotate-[90]">
              <svg width="104" height="273" viewBox="0 0 104 273" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M58.1389 79.2895C64.338 100.593 76.5433 153.262 81.3828 174.925L64.1042 179.124C64.8855 182.339 62.1292 171.348 59.2628 167.959C56.3965 164.571 44.3711 165.053 38.7166 165.718C35.8705 151.09 29.7462 120.406 28.0183 114.698C25.8586 107.562 20.6853 70.5188 20.5375 47.1487C20.4193 28.4525 30.1593 7.36039 34.8808 1.10605C40.0505 18.2907 51.9397 57.9859 58.1389 79.2895Z" fill="#D0D0D0"/>
                <path d="M77.894 248.118C75.7821 252.036 73.1473 253.102 72.4413 253.699C73.9649 255.882 77.5439 261.736 78.4994 262.866C79.6937 264.278 85.8717 270.437 93.6041 268.983C99.7901 267.82 101.511 261.245 101.599 258.103L81.0895 173.719C79.5548 173.241 75.5209 172.519 71.6633 173.457C67.8058 174.394 64.5532 176.887 63.4091 178.016C64.6462 183.106 67.1918 194.63 67.4775 200.008C67.7632 205.386 73.3261 225.823 76.0719 235.369C77.5592 237.986 80.0058 244.201 77.894 248.118Z" fill="#066A66" stroke="#265C5A"/>
                <path d="M81.3734 246.516C79.7842 250.292 75.7058 253.759 75.1455 254.319C76.4961 256.533 79.8139 261.27 81.9096 262.888C83.3187 263.977 88.8886 268.841 95.2324 267.723C100.308 266.828 101.465 260.417 101.41 257.323L80.9895 173.307C79.6992 172.773 76.3294 171.897 73.1732 172.664C70.017 173.431 67.4252 175.756 66.5237 176.823C67.7554 181.89 70.3327 193.354 70.7883 198.667C71.2439 203.979 76.6828 224.352 79.3453 233.874C80.6835 236.514 82.9626 242.74 81.3734 246.516Z" fill="#04837E" stroke="#04837E"/>
                <circle cx="76.4714" cy="189.736" r="3.30821" transform="rotate(-13.6608 76.4714 189.736)" fill="#DBFEDE"/>
                <circle cx="83.8939" cy="220.275" r="3.30821" transform="rotate(-13.6608 83.8939 220.275)" fill="#DBFEDE"/>
                <circle cx="90.5125" cy="251.009" r="3.30821" transform="rotate(-13.6608 90.5125 251.009)" fill="#DBFEDE"/>
              </svg>
        </div>
        </router-link>
      </h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero-content {
  width: 100%;
}

h2 {
  color: #DA7B93;
}
</style>