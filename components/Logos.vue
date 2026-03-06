<script setup>
const props = defineProps({
  title: String,
  icons: Array
});
</script>

<template>
  <div class="py-20 bg-gradient-to-b from-blue-50 to-white rounded-2xl px-6">
    <h2 class="text-center text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4" v-if="title">{{ title }}</h2>
    <p class="text-center text-gray-600 mb-12 text-sm">Trusted by leading organizations worldwide</p>
    <div class="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
      <div v-for="(icon, idx) in icons" :key="idx" class="group hover:scale-110 transition-transform duration-300">
        <div class="flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <Icon class="h-16 md:h-20 text-blue-600 group-hover:text-blue-700" v-if="icon.name" :name="icon.name" />
        </div>
      </div>
    </div>
  </div>
</template>
