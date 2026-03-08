<script setup>
import { computed } from 'vue';
import projectData from '@/data/index.json'

// Find the specific project
const project = projectData.projects.items.find(item => item.title === "Income Tax Calculator")

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
              The Income Tax Calculator is a powerful Node.js-based tax computation system designed to simplify complex tax calculations. It supports 12 tax years (2014–2026) and enables users to perform both individual and bulk tax calculations through Excel file uploads.
            </p>
            <p class="text-gray-300 mb-4 leading-relaxed">
              The platform provides real-time tax computation with detailed monthly and annual breakdowns, along with cross-year tax comparisons for financial analysis and planning. It also includes a RESTful API for easy integration with other financial systems, making it suitable for accountants, finance professionals, and software integrations.
            </p>
            <p class="text-gray-300 leading-relaxed">
              With accurate financial calculations, detailed reporting, and a user-friendly web interface, the system helps users efficiently manage tax planning and compliance.
            </p>
          </div>
          
          <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Technical Stack</h3>
            <div class="grid grid-cols-2 gap-6 text-sm">
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Backend</h4>
                <ul class="text-gray-600 space-y-2">
                  <li>• Node.js with Express</li>
                  <li>• Multer File Processing</li>
                  <li>• XLSX Library</li>
                  <li>• CORS Support</li>
                  <li>• REST API Design</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Features</h4>
                <ul class="text-gray-600 space-y-2">
                  <li>• 12 Tax Year Support</li>
                  <li>• Bulk Excel Processing</li>
                  <li>• Real-time Calculations</li>
                  <li>• Cross-year Comparisons</li>
                  <li>• Detailed Reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Contact CTA -->
      <div class="relative py-20 px-6 md:px-12 text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20" style="background: #22c55e" />
        <div class="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20" style="background: #6366f1" />
        
        <div class="relative z-10 max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Need accurate tax calculations?</h2>
          <p class="text-lg text-gray-300 mb-10">Contact us to learn how our Income Tax Calculator can simplify your financial compliance.</p>
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