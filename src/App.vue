<script setup>
import { ref, computed } from 'vue';
import { TopBar } from '@/components/resources';
import Home from '@/components/pages/Home.vue';
import ListaCarros from '@/components/pages/ListaCarros.vue';

const routes = {
  '/': Home,
  '/lista-carros': ListaCarros,
  // '/sobre-mim': SobreMim
};
let currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
});

let currentView = computed(() => {
  // return routes[currentPath.value.slice(1) || '/'] || NotFound
  return routes[currentPath.value.slice(1) || '/'];
});
</script>

<template>
  <TopBar />
  <component :is="currentView" />
</template>