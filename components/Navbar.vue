<script setup>
import { ref } from 'vue'

const mobileOpen = ref(false)

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    mobileOpen.value = false
  }
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <img src="/images/Logo.png" alt="Logo" class="w-10 h-10" />
        <span class="text-xl font-semibold text-gray-900">CON Developers</span>
      </div>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <button
          @click="scrollToSection('home')"
          class="text-gray-700 hover:text-gray-900 transition-colors font-medium"
        >
          Home
        </button>
        <button
          @click="scrollToSection('projects')"
          class="text-gray-700 hover:text-gray-900 transition-colors font-medium"
        >
          Projects
        </button>
        <button
          @click="scrollToSection('about')"
          class="text-gray-700 hover:text-gray-900 transition-colors font-medium"
        >
          About
        </button>
        <a
          href="https://wa.me/923144461293"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all font-medium text-sm"
        >
          <Icon name="simple-icons:whatsapp" class="h-5 w-5" />
          <span>+92 314 4461293</span>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="mobileOpen = !mobileOpen"
        class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
      >
        <svg v-if="!mobileOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileOpen" class="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-100">
      <div class="px-6 py-4 space-y-3">
        <button
          @click="scrollToSection('home')"
          class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          Home
        </button>
        <button
          @click="scrollToSection('projects')"
          class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          Projects
        </button>
        <button
          @click="scrollToSection('about')"
          class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          About
        </button>
        <a
          href="https://wa.me/923144461293"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg transition-colors font-medium"
          @click="mobileOpen = false"
        >
          <Icon name="simple-icons:whatsapp" class="h-5 w-5" />
          <span>+92 314 4461293</span>
        </a>
      </div>
    </div>
  </nav>
</template>
