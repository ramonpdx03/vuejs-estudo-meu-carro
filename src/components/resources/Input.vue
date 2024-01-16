<script setup>
  let model = defineModel();

  let props = defineProps({
    type: String,
    placeholder: String
  });
</script>

<template>
  <input type="text" :class="type" :placeholder="placeholder" v-model="model">
</template>

<style scoped>
  input {
    @apply py-2 px-4 rounded-lg bg-stone-700 outline-none;
  }
  input.icon {
    @apply w-full pl-10;
  }
</style>