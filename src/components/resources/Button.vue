<script setup>
  let props = defineProps({
    text: String,
    type: String,
    route: String,
    onClick: Function
  });
</script>

<template>
  <button v-if="!route" @click="onClick" :class="'btn '+type">{{ text }}</button>
  <a v-else :href="route" @click="onClick" :class="'btn '+type">{{ text }}</a>
</template>

<style scoped>
  .btn {
    @apply flex p-3 font-semibold bg-stone-700 rounded-md hover:bg-stone-600;
  }
  .btn.primary {
    @apply bg-blue-600;
  }
</style>