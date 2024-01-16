<script setup>
  let links = [
    { text: 'Home', route: '#/' },
    { text: 'Lista de Carros', route: '#/lista-carros' },
    { text: 'Quem somos', route: '#/quem-somos' },
  ];
</script>

<template>
  <div class="flex justify-between items-center px-20 py-6 z-50">
    <h1 class="text-4xl font-black">meuCarro<span class="text-blue-500">.com</span></h1>
    <div class="flex justify-between gap-10">
      <a v-for="item in links" :href="item.route" class="p-3 font-semibold">{{ item.text }}</a>
    </div>
  </div>
</template>
