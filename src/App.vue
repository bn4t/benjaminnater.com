<template>
  <div id="app">
    <ProfilePic/>
    <Navbar class="mt-8 mb-12 mb-3"/>
    <div class="max-w-full mx-3 md:max-w-6xl md:mx-auto my-16">
      <transition enter-active-class="animate__animated animate__fadeInUp">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<style>
.animate__animated.animate__fadeOutDown {
  --animate-duration: 0.4s;
}

.animate__animated.animate__fadeInUp {
  --animate-duration: 0.4s;
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
