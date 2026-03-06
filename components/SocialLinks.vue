<script setup>
const props = defineProps({
  title: String,
  links: Array
});
</script>

<template>
  <div class="py-20 bg-white border-t border-gray-100">
    <Container>
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight" v-if="title">{{ title }}</h2>
      </div>
      
      <div class="flex flex-wrap justify-center gap-6">
        <a
          v-for="link in links"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 border border-emerald-600 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <Icon v-if="link.icon" :name="link.icon" class="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
          <span class="font-semibold text-white group-hover:text-emerald-50 transition-colors duration-300">{{ link.name }}</span>
        </a>
      </div>
    </Container>
  </div>
</template>