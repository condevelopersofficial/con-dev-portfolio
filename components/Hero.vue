<script setup>
const scrollToProjects = () => {
  const element = document.getElementById('projects')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="home" class="min-h-screen flex items-center justify-center px-6 pt-32">
    <div class="max-w-7xl mx-auto w-full">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
            <Icon name="simple-icons:sparkles" class="w-4 h-4 text-yellow-400" />
            <span class="text-sm text-gray-700">Available for new projects</span>
          </div>

          <!-- Heading -->
          <div>
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              Crafting Digital
              <span class="block mt-2" style="color: #6366f1">Solutions</span>
            </h1>
          </div>

          <!-- Description -->
          <p class="text-xl text-gray-600 leading-relaxed max-w-lg">
            Transforming ideas into powerful software applications. Specializing in modern web development with cutting-edge technologies.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4">
            <button
              @click="scrollToProjects"
              class="group px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all flex items-center gap-2 font-semibold"
            >
              View Projects
              <Icon name="simple-icons-arrowright" class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              @click="scrollToContact"
              class="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-50 transition-all font-semibold"
            >
              Get in Touch
            </button>
          </div>

          <!-- Stats -->
          <div class="flex items-center gap-8 pt-8">
            <div>
              <div class="text-3xl font-bold text-gray-900">4</div>
              <div class="text-sm text-gray-600">Enterprise Projects</div>
            </div>
            <div class="h-12 w-px bg-gray-200" />
            <div>
              <div class="text-3xl font-bold text-gray-900">4</div>
              <div class="text-sm text-gray-600">Years Experience</div>
            </div>
            <div class="h-12 w-px bg-gray-200" />
            <div>
              <div class="text-3xl font-bold text-gray-900">100K+</div>
              <div class="text-sm text-gray-600">Lines of Code</div>
            </div>
          </div>
        </div>

        <!-- Right Visual -->
        <div class="relative">
          <div class="relative">
            <!-- Blur Glows -->
            <div
              class="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-20"
              style="background: #6366f1"
            />
            <div
              class="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-20"
              style="background: #ef4444"
            />

            <!-- Card -->
            <div class="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div class="flex items-center justify-center mb-6">
                <img src="/images/Logo.png" alt="Logo" class="w-32 h-32" />
              </div>

              <div class="space-y-4">
                <div class="h-3 rounded-full" style="background: #22c55e; width: 80%" />
                <div class="h-3 rounded-full" style="background: #fed600; width: 60%" />
                <div class="h-3 rounded-full" style="background: #ef4444; width: 90%" />
                <div class="h-3 rounded-full" style="background: #6366f1; width: 70%" />
              </div>

              <div class="mt-8 flex items-center justify-center gap-3">
                <Icon name="simple-icons-code" class="w-6 h-6 text-gray-400" />
                <div class="text-sm text-gray-500">Building the future, one line at a time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
