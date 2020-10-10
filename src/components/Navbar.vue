<template>
  <nav class="mx-auto max-w-xl flex flex-wrap justify-between">
    <router-link class="text-2xl text-gray-300 font-semibold underline-effect focus:outline-none" to="/">Home</router-link>
    <router-link class="text-2xl text-gray-300 font-semibold underline-effect focus:outline-none" to="/portfolio">Portfolio</router-link>
    <router-link class="text-2xl text-gray-300 font-semibold underline-effect focus:outline-none" to="/projects">Projects</router-link>
    <router-link class="text-2xl text-gray-300 font-semibold underline-effect focus:outline-none" to="/about">About Me</router-link>
    <router-link class="text-2xl text-gray-300 font-semibold underline-effect focus:outline-none" to="/contact">Contact</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.underline-effect {
  position: relative;
}

.underline-effect::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #3cefff;
  transform-origin: bottom right;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.underline-effect:hover::before {
  transform-origin: bottom left;
  transform: scaleX(1);
}
</style>
