<script setup>
import { ref } from 'vue'

const selectedCategory = ref('All')

const projects = [
  {
    id: 1,
    title: 'UniCore Business Suite',
    slug: 'unicore-business-suite',
    description: 'Comprehensive ERP system with inventory management, accounting, order processing, and real-time analytics for complete business operations management.',
    image: '/images/projects/unicore-business-suite.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Material-UI', 'Redux'],
    color: '#22c55e',
    category: 'ERP',
    date: 'March 2026'
  },
  {
    id: 2,
    title: 'UniCore HR Solutions',
    slug: 'unicore-hr-solutions',
    description: 'Complete HR management platform with employee management, payroll processing, attendance tracking with biometric integration, and AI-powered HR assistant.',
    image: '/images/projects/unicore-hr-solutions.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'AI/ML', 'Material-UI'],
    color: '#6366f1',
    category: 'HR',
    date: 'February 2026'
  },
  {
    id: 3,
    title: 'Income Tax Calculator',
    slug: 'income-tax-calculator',
    description: 'Advanced tax calculation engine with multi-year support (2014-2026), bulk Excel processing, and detailed financial reporting for individuals and businesses.',
    image: '/images/projects/income-tax-calculator.jpg',
    tags: ['Node.js', 'Express', 'Excel', 'REST API'],
    color: '#ef4444',
    category: 'Finance',
    date: 'January 2026'
  },
  {
    id: 4,
    title: 'Fannecto Messaging',
    slug: 'fannecto-messaging',
    description: 'Enterprise real-time messaging platform with Socket.io, end-to-end encryption, group chats, file sharing, and comprehensive notification system.',
    image: '/images/projects/fannecto-messaging.jpg',
    tags: ['React', 'TypeScript', 'Socket.io', 'Node.js', 'Material-UI'],
    color: '#fed600',
    category: 'Communication',
    date: 'December 2025'
  }
]

const categories = ['All', 'ERP', 'HR', 'Finance', 'Communication']

const filteredProjects = computed(() => {
  return selectedCategory.value === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory.value)
})
</script>

<template>
  <section id="projects" class="py-24 px-6 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Featured Projects
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Showcasing our latest work in software development and digital innovation
        </p>
      </div>

      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-6 py-2 rounded-full transition-all font-medium',
            selectedCategory === category
              ? 'bg-gray-900 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <NuxtLink
          v-for="project in filteredProjects"
          :key="project.id"
          :to="`/projects/${project.slug}`"
          class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer"
        >
          <!-- Image -->
          <div class="relative overflow-hidden bg-gray-100">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
              :style="{ background: project.color }"
            />
          </div>

          <!-- Content -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span
                class="px-3 py-1 text-xs font-semibold rounded-full text-white"
                :style="{ background: project.color }"
              >
                {{ project.category }}
              </span>
              <div class="flex items-center gap-1 text-sm text-gray-500">
                <Icon name="simple-icons-calendar" class="w-4 h-4" />
                <span>{{ project.date }}</span>
              </div>
            </div>

            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
              {{ project.title }}
            </h3>

            <p class="text-gray-600 mb-4 line-clamp-3">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
