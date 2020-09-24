<template>
  <div id="app">
    <ProfilePic/>
    <Navbar class="mt-8 mb-12 mb-3"/>
    <div class="max-w-full md:max-w-3xl md:mx-auto my-16">
      <transition enter-active-class="animate__animated animate__fadeInUp">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<style>
.animate__animated.animate__fadeInUp {
  --animate-duration: 0.8s;
}
</style>
<script>

import Navbar from '@/components/Navbar'
import ProfilePic from '@/components/ProfilePic'

export default {
  components: { ProfilePic, Navbar },
  updated () {
  }
}

</script>
