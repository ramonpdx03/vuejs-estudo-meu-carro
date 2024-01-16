<script setup>
  import VueSelect from 'vue3-select';

  let props = defineProps({
    options: Array
  });
</script>

<template>
  <VueSelect :options="['teste1', 'teste2']" />
</template>
