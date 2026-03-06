<script setup>
const props = defineProps({
  title: String,
  description: String,
  items: Array
});
</script>

<template>
  <div class="py-20">
    <Container>
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight" v-if="title">{{ title }}</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed" v-if="description">{{ description }}</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(project, index) in items" 
          :key="index"
          class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ease-out group"
        >
          <!-- Project Image Container -->
          <div class="project-image-container overflow-hidden bg-gray-100 h-56 md:h-64">
            <img 
              v-if="project.image" 
              :src="project.image.startsWith('/') ? project.image : '/' + project.image" 
              :alt="project.title"
              class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div v-else class="w-full h-full flex items-center justify-center">
              <span class="text-gray-400">Project Image</span>
            </div>
          </div>
          
          <!-- Project Content -->
          <div class="p-6 md:p-8">
            <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
              <NuxtLink 
                :to="`/projects/${project.title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`"
                class="hover:text-emerald-600 transition-colors"
              >
                {{ project.title }}
              </NuxtLink>
            </h3>
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">{{ project.description }}</p>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full"
              >
                {{ tag }}
              </span>
            </div>
            
            <!-- Features -->
            <div class="pt-6 border-t border-gray-100">
              <ul class="text-sm text-gray-600 space-y-2">
                <li v-for="feature in project.features.slice(0, 3)" :key="feature" class="flex items-start gap-3">
                  <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>