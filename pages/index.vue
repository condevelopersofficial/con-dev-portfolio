<script setup>
definePageMeta({
  layout: "default",
});

useHead({
  htmlAttrs: { lang: "en-US" },
  title: "CON Developers - Software Solutions",
  meta: [
    {
      name: "description",
      content:
        "CON Developers - Innovative software solutions for modern businesses. Specializing in web applications, business management systems, and custom software development.",
    },
  ],
});
</script>

<template>
  <div>
    <Hero />
    <Projects />
    <About />
    <Contact />
  </div>
</template>