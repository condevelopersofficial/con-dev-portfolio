<script setup>
const props = defineProps({
  title: String,
  icons: Array
});
</script>

<template>
  <div class="py-16">
    <h2 class="text-center text-sm font-semibold text-gray-600 uppercase tracking-widest" v-if="title">{{ title }}</h2>
    <div class="flex flex-wrap items-center justify-center mt-12 gap-x-16 gap-y-10 md:gap-x-24 md:gap-y-16">
      <div v-for="(icon, idx) in icons" :key="idx" class="opacity-60 hover:opacity-100 transition-opacity duration-300">
        <Icon class="h-10 md:h-14 text-gray-400" v-if="icon.name" :name="icon.name" />
      </div>
    </div>
  </div>
</template>
