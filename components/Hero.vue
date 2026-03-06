<script setup>
import { computed } from 'vue';

const props = defineProps({
  image: String,
  imageAlt: String,
  buttons: Array
});

const resolvedImage = computed(() => {
  if (!props.image) return '';
  return props.image.startsWith('/') ? props.image : `/${props.image}`;
});
</script>

<template>
  <div class="w-full overflow-hidden">
    <!-- Hero Image with overlay -->
    <div class="relative w-full h-auto rounded-2xl overflow-hidden shadow-2xl">
      <img 
        :src="resolvedImage" 
        :alt="imageAlt" 
        class="w-full h-auto display-block object-cover"
      />
      <!-- Subtle overlay for better text contrast if needed -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
    </div>
    
    <!-- CTA Buttons with modern styling -->
    <div v-if="buttons && buttons.length > 0" class="container mx-auto mt-12 flex justify-center pb-12">
      <div class="flex flex-wrap gap-4 justify-center">
        <div v-for="button of buttons" :key="button.label">
          <NuxtLink 
            v-if="button.label && button.url" 
            :href="button.url"
            class="inline-flex px-8 py-3.5 text-white font-semibold rounded-lg transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg"
          >
            {{ button.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>