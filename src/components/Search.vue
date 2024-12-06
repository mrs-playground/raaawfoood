<template>
  <div class="flex gap-8 items-center mb-6">
    <div class="flex-grow">
      <input
        type="text"
        :value="query" 
        @input="$emit('update:query', $event.target.value)"
        placeholder="What are you looking for?"
        class="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    query: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Ajoutez vos styles ici si nécessaire */
</style>
