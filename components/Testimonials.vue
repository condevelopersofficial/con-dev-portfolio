<script setup>
  const props = defineProps({
    title: String,
    description: String,
    items: Array
  });
</script>

<template>
  <div class="py-20">
    <h2 class="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-tight" v-if="title">
      {{ title }}
    </h2>
    <p class="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-600 leading-relaxed" v-if="description">
      {{ description }}
    </p>
    <div class="mt-16 mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div 
        v-for="(item, idx) in items"
        :key="idx"
        class="p-8 bg-gradient-to-br from-white to-blue-50 rounded-xl border border-blue-100 shadow-md hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 group hover:border-blue-300"
      >
        <!-- Star Rating -->
        <div class="flex gap-1 mb-4">
          <span v-for="i in 5" :key="i" class="text-yellow-400 text-lg">★</span>
        </div>
        
        <p class="text-gray-700 leading-relaxed font-medium mb-6 text-sm" v-if="item.quote">"{{ item.quote }}"</p>
        
        <div class="flex items-center gap-4 pt-6 border-t border-blue-100" v-if="item.author">
          <img 
            v-if="item.author.avatar" 
            :src="item.author.avatar" 
            :alt="item.author.name"
            class="w-12 h-12 rounded-full object-cover shrink-0 border-2 border-blue-200" 
          />
          <div v-if="item.author.name || item.author.title">
            <p class="font-semibold text-gray-900 text-sm" v-if="item.author.name">{{ item.author.name }}</p>
            <p class="text-gray-500 text-xs" v-if="item.author.title">{{ item.author.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>