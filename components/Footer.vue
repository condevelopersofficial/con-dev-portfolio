<script setup>
const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com/condevelopers', icon: 'simple-icons-facebook' },
  { name: 'Instagram', url: 'https://instagram.com/condevelopersofficial', icon: 'simple-icons-instagram' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/con-developers', icon: 'simple-icons-linkedin' },
  { name: 'WhatsApp', url: 'https://wa.me/923144461293', icon: 'simple-icons-whatsapp' }
]

const contactInfo = [
  { icon: 'simple-icons-mail', label: 'Email', value: 'condevelopersofficial@gmail.com', href: 'mailto:condevelopersofficial@gmail.com' },
  { icon: 'simple-icons-phone', label: 'Phone', value: '+92 314 4461293', href: 'tel:+923144461293' },
  { icon: 'simple-icons-mappin', label: 'Location', value: 'Pakistan', href: '#' }
]
</script>

<template>
  <footer class="bg-gray-900 text-white py-12 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <img src="/images/Logo.png" alt="Logo" class="w-10 h-10" />
            <span class="text-xl font-semibold">CON Developers</span>
          </div>
          <p class="text-gray-400 text-sm">
            Creating exceptional digital experiences through innovative software solutions.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#home" class="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" class="hover:text-white transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" class="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#contact" class="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-semibold mb-4">Services</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li>Web Development</li>
            <li>Enterprise Solutions</li>
            <li>UI/UX Design</li>
            <li>Technical Consulting</li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-semibold mb-4">Contact</h4>
          <ul class="space-y-3 text-sm">
            <li v-for="info in contactInfo" :key="info.label">
              <a :href="info.href" class="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <Icon :name="info.icon" class="w-4 h-4" />
                <span>{{ info.value }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Social Links -->
      <div class="border-t border-gray-800 pt-8 mb-8">
        <h4 class="font-semibold mb-4">Follow Us</h4>
        <div class="flex gap-4">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-white transition-colors"
            :title="social.name"
          >
            <Icon :name="social.icon" class="w-6 h-6" />
          </a>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-gray-800 pt-8 text-center">
        <p class="text-gray-400 text-sm">
          © {{ new Date().getFullYear() }} CON Developers. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
