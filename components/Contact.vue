<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: ''
})
</script>

<template>
  <section id="contact" class="py-24 px-6 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Let's Work Together
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          Have a project in mind? Let's discuss how we can bring your ideas to life
        </p>
        <p class="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
          We're always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out! We're currently available for new projects and collaborations. Let's create something amazing together!
        </p>
      </div>

      <!-- Contact Form - Centered -->
      <div class="max-w-2xl mx-auto">
        <form 
          name="contact"
          method="POST"
          netlify
          class="bg-white rounded-2xl shadow-lg p-8"
        >
          <div class="mb-6">
            <label for="name" class="block text-gray-700 mb-2 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              v-model="formData.name"
              required
              class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
              placeholder="John Doe"
            />
          </div>

          <div class="mb-6">
            <label for="email" class="block text-gray-700 mb-2 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              v-model="formData.email"
              required
              class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div class="mb-6">
            <label for="message" class="block text-gray-700 mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              v-model="formData.message"
              required
              rows="6"
              class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <button
            type="submit"
            class="w-full px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group font-semibold"
          >
            Send Message
            <Icon name="simple-icons-send" class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
