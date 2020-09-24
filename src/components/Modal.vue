<template>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="bg-white shadow-2xl px-6 pb-3 pt-6 rounded-lg text-gray-800 mx-2 md:mx-auto max-w-2xl">
          <h1 class="text-2xl font-semibold">{{ title }}</h1>

          <div class="my-4">
            {{ content }}
          </div>

          <div class="flex justify-end mb-1">
            <button class="hover:bg-gray-300 py-1 px-2 rounded-lg text-gray-700 font-semibold" @click="$emit('close')">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: String,
    content: String
  }
}
</script>

<style scoped>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}
</style>
