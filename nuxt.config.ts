// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss() as any,
    ],
  },
  experimental: { appManifest: false },
  modules: ["@nuxt/icon", "@nuxt/image"],
  compatibilityDate: "2024-12-18",
  nitro: {
    prerender: {
      routes: [
        '/',
        '/projects/unicore-business-suite',
        '/projects/unicore-hr-solutions',
        '/projects/income-tax-calculator',
        '/projects/funnecto-messaging'
      ],
      crawlLinks: true,
      failOnError: false
    }
  }
});
