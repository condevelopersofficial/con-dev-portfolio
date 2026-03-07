<script setup>
const skills = [
  { name: 'Full-Stack Development', level: 95, color: '#6366f1' },
  { name: 'Backend Development', level: 90, color: '#22c55e' },
  { name: 'UI/UX Design', level: 85, color: '#fed600' },
  { name: 'Database Design', level: 88, color: '#ef4444' }
]

const expertise = [
  {
    icon: 'simple-icons-code',
    title: 'Full-Stack Development',
    description: 'Expert in building scalable web applications using modern frameworks and technologies.',
    color: '#6366f1'
  },
  {
    icon: 'simple-icons-palette',
    title: 'Enterprise Solutions',
    description: 'Creating robust, integrated systems that deliver exceptional business value.',
    color: '#22c55e'
  },
  {
    icon: 'simple-icons-zap',
    title: 'Performance Optimization',
    description: 'Ensuring applications run smoothly with optimal speed and efficiency.',
    color: '#fed600'
  },
  {
    icon: 'simple-icons-users',
    title: 'Team Collaboration',
    description: 'Working seamlessly with cross-functional teams to deliver outstanding results.',
    color: '#ef4444'
  }
]

const achievements = [
  { icon: 'simple-icons-award', value: '4', label: 'Enterprise Projects' },
  { icon: 'simple-icons-target', value: '4', label: 'Years Experience' },
  { icon: 'simple-icons-code', value: '100K+', label: 'Lines of Code' }
]
</script>

<template>
  <section id="about" class="py-24 px-6 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About Us
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Passionate software developers dedicated to creating innovative solutions
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 mb-16">
        <!-- Left Column -->
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Our Journey</h3>
          <p class="text-gray-600 mb-4 leading-relaxed">
            With over 4 years of experience in software development, we've had the privilege of working on diverse projects ranging from startup MVPs to enterprise-level applications. Our passion lies in transforming complex problems into elegant, user-friendly solutions.
          </p>
          <p class="text-gray-600 mb-6 leading-relaxed">
            We specialize in full-stack development with a keen eye for design and user experience. Every project is an opportunity to push boundaries and create something exceptional.
          </p>

          <!-- Skills -->
          <div class="space-y-4">
            <div v-for="(skill, index) in skills" :key="skill.name">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-semibold text-gray-700">{{ skill.name }}</span>
                <span class="text-sm text-gray-500">{{ skill.level }}%</span>
              </div>
              <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-1000"
                  :style="{ background: skill.color, width: skill.level + '%' }"
                />
              </div>
            </div>
          </div>

          <!-- Achievements -->
          <div class="grid grid-cols-3 gap-6 mt-8">
            <div v-for="achievement in achievements" :key="achievement.label" class="text-center">
              <Icon :name="achievement.icon" class="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <div class="text-2xl font-bold text-gray-900">{{ achievement.value }}</div>
              <div class="text-xs text-gray-600">{{ achievement.label }}</div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Areas of Expertise</h3>

          <div v-for="item in expertise" :key="item.title" class="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                :style="{ background: item.color + '20' }"
              >
                <Icon :name="item.icon" class="w-6 h-6" :style="{ color: item.color }" />
              </div>
              <div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">{{ item.title }}</h4>
                <p class="text-gray-600">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
