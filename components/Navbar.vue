<script setup>
import { ref } from 'vue'

const menuitems = [
  {
    title: "Sign up",
    url: "https://app.netlify.com/signup",
  },
  {
    title: "Log in",
    url: "https://app.netlify.com/login",
  },
];

const mobileOpen = ref(false);

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value;
}
</script>

<template>
  <Container>
    <header class="flex flex-row flex-wrap items-center justify-between my-6 gap-x-6 gap-y-4">
      <div class="flex items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-gray-900 flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/images/Logo.png" alt="CON Developers Logo" class="nav-logo h-10" />
          <span class="inline">CON Developers</span>
        </NuxtLink>
      </div>
      <nav class="flex items-center gap-4">
        <!-- desktop links -->
        <ul class="hidden sm:flex flex-row gap-1 text-sm">
          <li v-for="item of menuitems" :key="item.title">
            <a 
              :href="item.url" 
              class="flex px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 font-medium"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
        <!-- mobile hamburger -->
        <button @click="toggleMobile" class="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none">
          <svg v-if="!mobileOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>
      <!-- mobile menu overlay -->
      <div v-if="mobileOpen" class="sm:hidden absolute top-full left-0 w-full bg-white shadow-lg z-20">
        <ul class="flex flex-col">
          <li v-for="item of menuitems" :key="item.title">
            <a
              :href="item.url"
              class="block px-4 py-3 text-gray-700 hover:bg-gray-100"
              @click="mobileOpen = false"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
      </div>
    </header>
  </Container>
</template>
