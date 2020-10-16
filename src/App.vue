<template>
  <div id="app">
    <Navbar class="mt-8 mb-12 mb-3"/>
    <div class="md:mx-auto my-16 px-5" style="max-width: 70ch;">
      <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="hidden">
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
