<template>
  <div>
    <h1 class="text-5xl font-semibold text-center mb-2">Portfolio</h1>
    <p class="text-center mb-20">For projects I maintain see the <router-link class="font-semibold underline" to="/projects">Projects</router-link> page.</p>
    <h2 class="text-4xl font-semibold mb-2 text-center mb-12">Technologies I often work with</h2>
    <div class="flex flex-wrap items-center">
      <div class="max-w-xl w-full">
        <h3 class="text-3xl text-center mb-5">Frontend</h3>
        <div class="flex flex-wrap items-center justify-center">
          <div
            class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-24 select-none"
            style="height: 7.5rem">
            <div class="h-16 mb-2">
              <img src="../assets/img/vuejs.svg" width="62px" class="mx-auto pt-2" alt="vuejs logo">
            </div>
            <h3 class="text-xl">Vuejs</h3>
          </div>
          <div
            class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-24 select-none"
            style="height: 7.5rem">
            <div class="h-16 mb-2">
              <img src="../assets/img/tailwind.svg" width="62px" class="mx-auto pt-2" alt="tailwind css logo">
            </div>
            <h3 class="text-xl">Tailwind</h3>
          </div>
          <div
            class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-24 select-none"
            style="height: 7.5rem">
            <div class="h-16 mb-2">
              <img src="../assets/img/yarn.svg" width="62px" class="mx-auto pt-2" alt="yarn logo">
            </div>
            <h3 class="text-xl">Yarn</h3>
          </div>
        </div>
      </div>

      <div class="max-w-xl w-full">
        <h3 class="text-3xl text-center mt-16 md:mt-0 mb-5">Backend</h3>
        <div class="flex flex-wrap items-center justify-center">
          <div
            class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-24 select-none"
            style="height: 7.5rem">
            <div class="h-16 mb-2">
              <img src="../assets/img/golang.svg" width="80px" class="mx-auto" alt="golang logo">
            </div>
            <h3 class="text-xl">Golang</h3>
          </div>
          <div
            class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-24 select-none"
            style="height: 7.5rem">
            <div class="h-16 mb-2">
              <img src="../assets/img/tux.svg" width="58px" class="mx-auto" alt="tux the linux mascot">
            </div>
            <h3 class="text-xl">Linux</h3>
          </div>
          <div
            class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-24 select-none"
            style="height: 7.5rem">
            <div class="h-16 mb-2">
              <img src="../assets/img/docker.svg" width="65px" class="mx-auto pt-1" alt="docker logo">
            </div>
            <h3 class="text-xl">Docker</h3>
          </div>
        </div>
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
      <div
        class="px-3 py-2 bg-white shadow-lg rounded-lg m-3 text-gray-800 text-center w-40 select-none"
        style="height: 7.5rem">
        <div class="h-16 mb-2">
          <img src="../assets/img/traefik.svg" width="58px" class="mx-auto pt-1" alt="traefik logo">
        </div>
        <h3 class="text-xl">Traefik</h3>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Portfolio'
}
</script>

<style scoped>
</style>
