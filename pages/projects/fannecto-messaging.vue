<script setup>
import { computed } from 'vue';
import projectData from '@/data/index.json'

// Find the specific project
const project = projectData.projects.items.find(item => item.title === "Fannecto Messaging")

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
  <Container>
    <div class="py-20">
      <!-- Back to Projects Link -->
      <div class="mb-8">
        <NuxtLink to="/" class="text-blue-600 hover:text-blue-800 flex items-center gap-2">
          <span>←</span> Back to Projects
        </NuxtLink>
      </div>
      
      <!-- Project Header -->
      <div class="text-center mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-800 mb-6">{{ project.title }}</h1>
        <p class="text-xl text-zinc-600 max-w-3xl mx-auto">{{ project.description }}</p>
      </div>
      
      <!-- Project Image -->
      <div class="mb-16">
        <div class="rounded-xl overflow-hidden shadow-lg bg-gray-100">
          <img 
            :src="projectImage" 
            :alt="project.title"
            class="w-full h-auto object-contain max-h-[500px]"
          />
        </div>
      </div>
      
      <!-- Project Details -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <!-- Features -->
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
          <ul class="space-y-3">
            <li v-for="feature in project.features" :key="feature" class="flex items-start gap-3">
              <span class="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
              <span class="text-gray-700 font-medium">{{ feature }}</span>
            </li>
          </ul>
        </div>
        
        <!-- Tags -->
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Technologies</h2>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tag in project.tags" 
              :key="tag"
              class="px-4 py-2 bg-emerald-100 text-emerald-800 text-sm rounded-full font-medium"
            >
              {{ tag }}
            </span>
          </div>
          
          <div class="mt-8 p-6 bg-gray-100 rounded-lg">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Project Overview</h3>
            <p class="text-gray-700 mb-4">
              Fannecto Messaging is a secure, enterprise-grade real-time communication platform built with React 19, TypeScript, and Socket.io. 
              It features real-time bidirectional messaging, group chat functionality, file sharing with preview capabilities, and comprehensive 
              user management with role-based access control.
            </p>
            <p class="text-gray-700">
              The system includes an admin dashboard, email notifications via Nodemailer, advanced logging with Winston, rate limiting for 
              security, and a modern Material-UI interface with emoji support and message formatting. Built with enterprise scalability 
              and security in mind.
            </p>
          </div>
          
          <div class="mt-6 p-6 bg-blue-50 rounded-lg">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Technical Stack</h3>
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 class="font-semibold text-gray-800 mb-2">Frontend</h4>
                <ul class="text-gray-600 space-y-1">
                  <li>• React 19 with TypeScript</li>
                  <li>• Material-UI Components</li>
                  <li>• Zustand State Management</li>
                  <li>• Socket.io Client</li>
                  <li>• React Hook Form</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800 mb-2">Backend</h4>
                <ul class="text-gray-600 space-y-1">
                  <li>• Node.js with Express</li>
                  <li>• Socket.io Server</li>
                  <li>• MongoDB with Mongoose</li>
                  <li>• JWT Authentication</li>
                  <li>• Winston Logging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Contact CTA -->
      <div class="relative py-20 px-6 md:px-10 text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden">
        <!-- Decorative elements -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full -mr-48 -mt-48"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full -ml-40 -mb-40"></div>
        
        <!-- Content -->
        <div class="relative z-10">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Ready to improve team communication?</h2>
          <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Contact us to learn how Fannecto Messaging can transform your workplace collaboration.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:condevelopersofficial@gmail.com" class="inline-flex px-8 py-3.5 font-semibold rounded-lg transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600">
              Email Us
            </a>
            <NuxtLink to="/" class="inline-flex px-8 py-3.5 font-semibold rounded-lg transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 bg-gray-800 text-white hover:bg-gray-700">
              View All Projects
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>