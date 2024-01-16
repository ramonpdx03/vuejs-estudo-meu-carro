<script setup>
  import ListaItem from '@/components/pages/ListaCarros/ListaItem.vue';

  let props = defineProps({
    view: String,
    carros: Array
  });
</script>

<template>
  <div class="flex flex-col gap-3">
    <ListaItem
      v-for="carro in carros"
      :carro="carro"
    />
  </div>
</template>