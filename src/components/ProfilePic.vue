<template>
  <img src="../assets/img/bn4t.jpg" data-tippy-content="Tooltip" v-if="!homepage" width="50px"
       @click="spin"
       v-bind:class="{ 'animate-spin': isSpinning }"
       class="mr-8 absolute right-0 top-0 mt-6 rounded-full shadow"
       alt="Hi, this is me"
  >
</template>

<script>
export default {
  name: 'ProfilePic',
  data: () => {
    return {
      isSpinning: false
    }
  },
  computed: {
    homepage: function () {
      return this.$route.path === '/'
    }
  },
  methods: {
    spin: function () {
      if (this.isSpinning) {
        return
      }

      this.isSpinning = true
      setTimeout(() => {
        this.isSpinning = false
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
