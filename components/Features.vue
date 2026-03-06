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
      class="text-4xl md:text-5xl font-bold text-center text-gray-900 leading-tight"
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
        class="p-8 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 ease-out hover:-translate-y-1 group"
      >
        <div class="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg mb-6 group-hover:shadow-md transition-shadow duration-300"></div>
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
