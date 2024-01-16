<script setup>
  import { Input } from '@/components/resources';

  let model = defineModel();

  let props = defineProps({
    placeholder: String
  });
</script>

<template>
  <div class="relative h-min">
    <div class="absolute flex items-center h-full px-3"><slot></slot></div>
    <Input :type="'icon'" :placeholder="placeholder" v-model="model" />
  </div>
</template>
