<template>
  <div class="flex justify-between px-6 items-center">
    <p class="text-xl" v-if="!homepage">Benjamin Nater</p>
    <nav class="max-w-lg w-full flex flex-wrap justify-between ">
      <router-link class="text-2xl underline-effect focus:outline-none" to="/">Home</router-link>
      <router-link class="text-2xl underline-effect focus:outline-none" to="/portfolio">Portfolio</router-link>
      <router-link class="text-2xl underline-effect focus:outline-none" to="/about">About Me</router-link>
      <router-link class="text-2xl underline-effect focus:outline-none" to="/contact">Contact</router-link>
    </nav>
    <div class="flex items-center" >
      <div class="flex flex-wrap items-center justify-center max-w-xs mx-auto mr-3" v-if="!homepage">
        <a href="https://github.com/bn4t" target="_blank" class="rounded-full p-2 hover:bg-gray-200 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a href="https://twitter.com/benjamin_nater" target="_blank" class="rounded-full p-2 hover:bg-gray-200 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
        </a>
        <a href="mailto:benjamin@nater.net" target="_blank" class="rounded-full p-2 hover:bg-gray-200 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>      </a>
      </div>
      <img src="../assets/img/portrait.jpg" width="50px"
           class=" rounded-full shadow"
           alt="Hi, this is me"
           v-if="!homepage"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    homepage: function () {
      return this.$route.path === '/'
    }
  }
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
