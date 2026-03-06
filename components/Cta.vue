<script setup>
const props = defineProps({
  title: String,
  description: String,
  buttons: Array
});
</script>

<template>
  <div class="relative py-20 px-6 md:px-10 mx-auto mb-0 text-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl overflow-hidden shadow-2xl">
    <!-- Decorative elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full -mr-48 -mt-48 blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-blue-300/20 rounded-full -ml-40 -mb-40 blur-3xl"></div>
    
    <!-- Content -->
    <div class="relative z-10">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight" v-if="title">{{ title }}</h2>
      <p class="text-lg text-blue-100 max-w-2xl mx-auto mb-10" v-if="description">
        {{ description }}
      </p>
      <div class="flex flex-wrap gap-4 mt-10 justify-center">
        <div v-for="button of buttons" :key="button.label">
          <NuxtLink 
            v-if="button.label && button.url" 
            :href="button.url"
            class="inline-flex px-8 py-3.5 font-semibold rounded-lg transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-1 bg-white text-blue-700 hover:bg-blue-50 shadow-lg"
          >
            {{ button.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
