<template>
  <div id="app">
    <Navbar class="mt-8 mb-12 mb-3"/>
    <div class="max-w-full mx-6 md:max-w-2xl lg:max-w-3xl md:mx-auto my-16">
      <transition enter-active-class="animate__animated animate__fadeIn">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<style>
.animate__animated.animate__fadeIn {
  --animate-duration: 1s;
}

* {
  font-family: 'Raleway', sans-serif;
}
</style>
<script>

import Navbar from '@/components/Navbar'

export default {
  components: { Navbar },
  updated () {
  }
}

</script>
