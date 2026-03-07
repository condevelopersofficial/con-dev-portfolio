<script setup>
import { computed } from 'vue';
import projectData from '@/data/index.json'

// Find the specific project
const project = projectData.projects.items.find(item => item.title === "UniCore Business Suite")

const projectImage = computed(() => {
  if (!project?.image) return '';
  return project.image.startsWith('/') ? project.image : `/${project.image}`;
});

definePageMeta({
  layout: "default",
})

useHead({
  title: `${project.title} - CON Developers`,
  meta: [
    {
      name: "description",
      content: project.description
    }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 py-24">
      <!-- Back to Projects Link -->
      <div class="mb-8">
        <NuxtLink to="/" class="text-gray-700 hover:text-gray-900 flex items-center gap-2 font-medium transition-colors">
          <span>←</span> Back to Home
        </NuxtLink>
      </div>
      
      <!-- Project Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">{{ project.title }}</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{{ project.description }}</p>
      </div>
      
      <!-- Project Image -->
      <div class="mb-16">
        <div class="rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100">
          <img 
            :src="projectImage" 
            :alt="project.title"
            class="w-full h-auto object-contain"
          />
        </div>
      </div>
      
      <!-- Project Details -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <!-- Features -->
        <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
          <ul class="space-y-3">
            <li v-for="feature in project.features" :key="feature" class="flex items-start gap-3">
              <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
              <span class="text-gray-700">{{ feature }}</span>
            </li>
          </ul>
        </div>
        
        <!-- Technologies -->
        <div class="space-y-6">
          <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Technologies</h2>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
              >
                {{ tag }}
              </span>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-8 text-white">
            <h3 class="text-xl font-bold mb-4">Project Overview</h3>
            <p class="text-gray-300 mb-4 leading-relaxed">
              UniCore Business Suite is a comprehensive ERP system built with the MERN stack, providing complete business 
              management including inventory tracking with barcode support, comprehensive accounting with general ledger and 
              subsidiary ledgers, sales and purchase order management, and customer/vendor relationship management.
            </p>
            <p class="text-gray-300 leading-relaxed">
              The system features role-based access control, multi-user support, real-time analytics, and extensive reporting 
              capabilities with PDF and Excel export functionality. Built for scalability and enterprise-level operations.
            </p>
          </div>
          
          <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Technical Stack</h3>
            <div class="grid grid-cols-2 gap-6 text-sm">
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Frontend</h4>
                <ul class="text-gray-600 space-y-2">
                  <li>• React 18 with Material-UI</li>
                  <li>• Redux Toolkit</li>
                  <li>• React Router DOM</li>
                  <li>• jsPDF & Excel Export</li>
                  <li>• Barcode Generation</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Backend</h4>
                <ul class="text-gray-600 space-y-2">
                  <li>• Node.js with Express</li>
                  <li>• MongoDB with Mongoose</li>
                  <li>• JWT Authentication</li>
                  <li>• Multer File Upload</li>
                  <li>• Auto-incrementing Sequences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Contact CTA -->
      <div class="relative py-20 px-12 text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20" style="background: #22c55e" />
        <div class="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20" style="background: #6366f1" />
        
        <div class="relative z-10 max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Interested in this solution?</h2>
          <p class="text-lg text-gray-300 mb-10">Contact us to learn more about how {{ project.title }} can transform your operations.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:condevelopersofficial@gmail.com" class="px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all font-semibold">
              Email Us
            </a>
            <NuxtLink to="/" class="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-all font-semibold">
              View All Projects
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>