<script setup>
  import { ref } from 'vue';

  import { Button } from '@/components/resources';
  import { PhWarning } from '@phosphor-icons/vue';

  let props = defineProps({
    revealScreen: Function
  });

  let isVisible = ref(true);

  let reveal = () => {
    props.revealScreen();
    isVisible.value = false;
  }
</script>

<template>
  <div :class="isVisible ? 'fixed z-10 w-full h-full flex justify-center items-center' : 'hidden'">
    <div class="flex flex-col gap-4 items-center w-[600px] min-h-[300px] p-8 bg-stone-200 rounded-3xl !blur-none">
      <PhWarning :size="128" color="#ff0505" />
      <h2 class="text-stone-950 text-2xl font-extrabold">Área em Desenvolvimento.</h2>
      <Button :type="'primary'" :on-click="reveal" :text="'Clique para visualizar'" />
    </div>
  </div>
</template>
