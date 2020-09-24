<template>
  <div id="app">
    <img src="./assets/img/bn4t.jpg" v-if="!homepage" width="50px" class="mr-6 absolute right-0 rounded-full shadow" alt="Hi, this is me">
    <Navbar class="mt-8 mb-12 mb-3"/>
    <div class="max-w-full md:max-w-3xl md:mx-auto">
      <transition name="custom-classes-transition"
                      enter-active-class="animated tada"
                      leave-active-class="animated bounceOutRight">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<style>
</style>
<script>
import Navbar from '@/components/Navbar'

export default {
  components: { Navbar },
  computed: {
    homepage: function () {
      return this.$route.path === '/'
    }
  }
}
</script>
