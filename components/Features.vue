<script setup>
const props = defineProps({
  title: String,
  description: String,
  items: Array,
});
</script>

<template>
  <div class="py-20">
    <h2
      class="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-tight"
      v-if="title"
    >
      {{ title }}
    </h2>
    <p
      class="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-600 leading-relaxed"
      v-if="description"
    >
      {{ description }}
    </p>
    <div class="grid gap-8 mt-16 mb-20 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="p-8 bg-gradient-to-br from-white to-blue-50 rounded-xl border border-blue-100 shadow-md hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 group hover:border-blue-300"
      >
        <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-6 group-hover:shadow-lg transition-all duration-300 flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-3" v-if="item.title">
          {{ item.title }}
        </h3>
        <p class="leading-relaxed text-gray-600 text-sm" v-if="item.description">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
