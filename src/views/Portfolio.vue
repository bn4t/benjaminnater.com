<template>
  <div>
    <h1 class="text-5xl font-semibold text-center mb-6">Portfolio</h1>
    <h2 class="text-4xl font-semibold mb-2 text-center">Technologies I often work with</h2>
    <h4 class="text-lg italic text-center mb-12">Click on a technology to find out how I've used it in past projects.</h4>
    <h3 class="text-3xl font-semibold text-center mb-5">Frontend</h3>
    <div class="flex flex-wrap items-center">
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-24 cursor-pointer hover:bg-gray-300"
        style="height: 7.5rem" @click="showModalVue = true">
        <div class="h-16 mb-2">
          <img src="../assets/img/vuejs.svg" width="62px" class="mx-auto pt-2" alt="vuejs logo">
        </div>
        <h3 class="text-xl">Vuejs</h3>
      </div>
      <Modal v-if="showModalVue" @close="showModalVue = false" title="VueJS" content="Lorem ipsum sit dolor amet"/>
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-24 cursor-pointer hover:bg-gray-300"
        style="height: 7.5rem">
        <div class="h-16 mb-2">
          <img src="../assets/img/tailwind.svg" width="62px" class="mx-auto pt-2" alt="tailwind css logo">
        </div>
        <h3 class="text-xl">Tailwind</h3>
      </div>
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-24 cursor-pointer hover:bg-gray-300"
        style="height: 7.5rem">
        <div class="h-16 mb-2">
          <img src="../assets/img/yarn.svg" width="62px" class="mx-auto pt-2" alt="yarn logo">
        </div>
        <h3 class="text-xl">Yarn</h3>
      </div>
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-24 cursor-pointer hover:bg-gray-300"
        style="height: 7.5rem">
        <div class="h-16 mb-2">
          <img src="../assets/img/jwt.svg" width="62px" class="mx-auto pt-2" alt="jwt logo">
        </div>
        <h3 class="text-xl">JWT</h3>
      </div>
    </div>
    <h3 class="text-3xl font-semibold text-center mb-3 mt-16">Backend</h3>
    <div class="flex flex-wrap items-center">
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-24 cursor-pointer hover:bg-gray-300"
        style="height: 7.5rem">
        <div class="h-16 mb-2">
          <img src="../assets/img/golang.svg" width="80px" class="mx-auto" alt="golang logo">
        </div>
        <h3 class="text-xl">Golang</h3>
      </div>
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-24 cursor-pointer hover:bg-gray-300"
        style="height: 7.5rem">
        <div class="h-16 mb-2">
          <img src="../assets/img/tux.svg" width="58px" class="mx-auto" alt="tux the linux mascot">
        </div>
        <h3 class="text-xl">Linux</h3>
      </div>
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-24 cursor-pointer hover:bg-gray-300"
        style="height: 7.5rem">
        <div class="h-16 mb-2">
          <img src="../assets/img/docker.svg" width="65px" class="mx-auto pt-1" alt="docker logo">
        </div>
        <h3 class="text-xl">Docker</h3>
      </div>
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-24 cursor-pointer hover:bg-gray-300"
        style="height: 7.5rem">
        <div class="h-16 mb-2">
          <img src="../assets/img/traefik.svg" width="60px" class="mx-auto pt-1" alt="traefik logo">
        </div>
        <h3 class="text-xl">Traefik</h3>
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
      showModalVue: false
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

</style>
