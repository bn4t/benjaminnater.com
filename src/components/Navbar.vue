<template>
  <div class="flex justify-between px-6 items-center mt-10 md:mt-16">
    <nav class="max-w-sm mx-auto w-full flex flex-wrap justify-between ">
      <router-link class="text-xl underline-effect focus:outline-none" to="/">Home</router-link>
      <router-link class="text-xl underline-effect focus:outline-none" to="/portfolio">Portfolio</router-link>
      <router-link class="text-xl underline-effect focus:outline-none" to="/contact">Contact</router-link>
    </nav>
  </div>
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
  height: 0.1219ch;
  background-color: rgba(45, 55, 72, 0.8);
  transform-origin: bottom right;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.underline-effect:hover::before {
  transform-origin: bottom left;
  transform: scaleX(1);
}
</style>
