<template>
  <div>
    <h1 class="text-5xl font-semibold text-center mb-2">Portfolio</h1>
    <p class="text-center mb-8">For projects I built see the <router-link class="font-semibold underline" to="/projects">Projects</router-link> page.</p>
    <h2 class="text-4xl font-semibold mb-2 text-center">Technologies I often work with</h2>
    <h4 class="text-lg italic text-center mb-12">Click on a technology to find out how I've used it in past
      projects.</h4>
    <h3 class="text-3xl font-semibold text-center mb-5">Frontend</h3>
    <div class="flex flex-wrap items-center justify-center">
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-24 cursor-pointer hover:bg-gray-300 select-none"
        style="height: 7.5rem" @click="showModalVue = true">
        <div class="h-16 mb-2">
          <img src="../assets/img/vuejs.svg" width="62px" class="mx-auto pt-2" alt="vuejs logo">
        </div>
        <h3 class="text-xl">Vuejs</h3>
      </div>
      <transition enter-active-class="animate__animated animate__fadeInUp"
                  leave-active-class="animate__animated animate__fadeOutDown">
        <Modal v-if="showModalVue" @close="showModalVue = false" title="VueJS" content="Lorem ipsum sit dolor amet"/>
      </transition>
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-24 cursor-pointer hover:bg-gray-300 select-none"
        style="height: 7.5rem" @click="showModalTailwind = true">
        <div class="h-16 mb-2">
          <img src="../assets/img/tailwind.svg" width="62px" class="mx-auto pt-2" alt="tailwind css logo">
        </div>
        <h3 class="text-xl">Tailwind</h3>
      </div>
      <transition enter-active-class="animate__animated animate__fadeInUp"
                  leave-active-class="animate__animated animate__fadeOutDown">
        <Modal v-if="showModalTailwind" @close="showModalTailwind = false" title="Tailwind CSS"
               content="Ever since I got introduced to Tailwind CSS by a friend back in 2019 it hasn't been missing from any of my frontend projects.
                The numerous utility classes that Tailwind offers made it an invaluable tool for building a user friendly frontend in no time.
                Having it used in many projects, typing tailwind classes is basically muscle memory now. Examples of projects that use Tailwind include benj.dev and easytrace.ch."/>
      </transition>
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-24 cursor-pointer hover:bg-gray-300 select-none"
        style="height: 7.5rem">
        <div class="h-16 mb-2">
          <img src="../assets/img/yarn.svg" width="62px" class="mx-auto pt-2" alt="yarn logo">
        </div>
        <h3 class="text-xl">Yarn</h3>
      </div>
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-24 cursor-pointer hover:bg-gray-300 select-none"
        style="height: 7.5rem">
        <div class="h-16 mb-2">
          <img src="../assets/img/jwt.svg" width="62px" class="mx-auto pt-2" alt="jwt logo">
        </div>
        <h3 class="text-xl">JWT</h3>
      </div>
    </div>
    <h3 class="text-3xl font-semibold text-center mb-3 mt-16">Backend</h3>
    <div class="flex flex-wrap items-center justify-center">
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-24 cursor-pointer hover:bg-gray-300 select-none"
        style="height: 7.5rem">
        <div class="h-16 mb-2">
          <img src="../assets/img/golang.svg" width="80px" class="mx-auto" alt="golang logo">
        </div>
        <h3 class="text-xl">Golang</h3>
      </div>
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-24 cursor-pointer hover:bg-gray-300 select-none"
        style="height: 7.5rem">
        <div class="h-16 mb-2">
          <img src="../assets/img/tux.svg" width="58px" class="mx-auto" alt="tux the linux mascot">
        </div>
        <h3 class="text-xl">Linux</h3>
      </div>
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-24 cursor-pointer hover:bg-gray-300 select-none"
        style="height: 7.5rem">
        <div class="h-16 mb-2">
          <img src="../assets/img/docker.svg" width="65px" class="mx-auto pt-1" alt="docker logo">
        </div>
        <h3 class="text-xl">Docker</h3>
      </div>
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-24 cursor-pointer hover:bg-gray-300 select-none"
        style="height: 7.5rem">
        <div class="h-16 mb-2">
          <img src="../assets/img/traefik.svg" width="60px" class="mx-auto pt-1" alt="traefik logo">
        </div>
        <h3 class="text-xl">Traefik</h3>
      </div>
    </div>
    <hr class="max-w-sm border-gray-600 mx-auto my-24">
    <h3 class="text-4xl font-semibold text-center mb-3 mt-20">Other Software I have experience in</h3>
    <h4 class="text-lg italic text-center mb-12">Software I have experience in operating.</h4>
    <div class="flex flex-wrap items-center justify-center">
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-40 select-none"
        style="height: 7.5rem">
        <div class="h-16 mb-2">
          <img src="../assets/img/docker.svg" width="65px" class="mx-auto pt-1" alt="docker logo">
        </div>
        <h3 class="text-xl">Docker Swarm</h3>
      </div>
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-40 select-none"
        style="height: 7.5rem">
        <div class="h-16 mb-2">
          <img src="../assets/img/gitlab.svg" width="65px" class="mx-auto pt-1" alt="gitlab logo">
        </div>
        <h3 class="text-xl">Gitlab</h3>
      </div>
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-40 select-none"
        style="height: 7.5rem">
        <div class="h-16 mb-2">
          <img src="../assets/img/nginx.svg" width="75px" class="mx-auto pt-1" alt="nginx logo">
        </div>
        <h3 class="text-xl">Nginx</h3>
      </div>
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-40 select-none"
        style="height: 7.5rem">
        <div class="h-16 mb-2 pt-3">
          <img src="../assets/img/knotdns.svg" width="120px" class="mx-auto" alt="knotdns logo">
        </div>
        <h3 class="text-xl">KnotDNS</h3>
      </div>
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-40 select-none"
        style="height: 7.5rem">
        <div class="h-16 mb-2 ">
          <img src="../assets/img/nextcloud.svg" width="85px" class="mx-auto pt-1" alt="nextcloud logo">
        </div>
        <h3 class="text-xl">Nextcloud</h3>
      </div>
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-40 select-none"
        style="height: 7.5rem">
        <div class="h-16 mb-2">
          <img src="../assets/img/caddy.png" width="90px" class="mx-auto pt-1" alt="caddy logo">
        </div>
        <h3 class="text-xl">Caddy</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal'

export default {
  name: 'Portfolio',
  components: { Modal },
  data: () => {
    return {
      showModalVue: false,
      showModalTailwind: false
    }
  },
  methods: {
    getImgUrl (technology) {
      return require('@/assets/img/' + technology + '.svg')
    }
  }
}
</script>

<style scoped>
.animate__animated.animate__fadeOutDown {
  --animate-duration: 0.4s;
}

.animate__animated.animate__fadeInUp {
  --animate-duration: 0.4s;
}
</style>
