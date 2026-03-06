<script setup>
const props = defineProps({
  title: String,
  description: String,
  buttons: Array
});
</script>

<template>
  <div class="relative py-20 px-6 md:px-10 mx-auto mb-0 text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full -mr-48 -mt-48"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full -ml-40 -mb-40"></div>
    
    <!-- Content -->
    <div class="relative z-10">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight" v-if="title">{{ title }}</h2>
      <p class="text-lg text-gray-300 max-w-2xl mx-auto mb-10" v-if="description">
        {{ description }}
      </p>
      <div class="flex flex-wrap gap-4 mt-10 justify-center">
        <div v-for="button of buttons" :key="button.label">
          <NuxtLink 
            v-if="button.label && button.url" 
            :href="button.url"
            class="inline-flex px-8 py-3.5 font-semibold rounded-lg transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600"
          >
            {{ button.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
