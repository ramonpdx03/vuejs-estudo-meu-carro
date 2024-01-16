<script setup>
  import { ref } from 'vue';

  import Filtro from '@/components/pages/ListaCarros/Filtro.vue';
  import Pesquisa from '@/components/pages/ListaCarros/Pesquisa.vue';
  import Lista from '@/components/pages/ListaCarros/Lista.vue';

  import { EmDesenvolvimento } from '@/components/resources';
  let blur = ref(true);
  let revealScreen = () => {
    blur.value = false;
  }

  //# 'list' | 'grid'
  let view = ref('list');

  let example = [
    { ano: 2023, marca: 'Ford', modelo: 'Explorer', km: 100000, marcha: 'Manual', cor: 'Verde', placa: 'ASD123'},
    { ano: 2023, marca: 'Cadillac', modelo: 'ATS', km: 400000, marcha: 'Manual', cor: 'Branco', placa: 'ASD126'},
    { ano: 2022, marca: 'Ford', modelo: 'Bronco', km: 200000, marcha: 'Automatica', cor: 'Preto', placa: 'ASD124'},
    { ano: 2021, marca: 'BMW', modelo: 'M3', km: 300000, marcha: 'Automatica', cor: 'Branco', placa: 'ASD125'}
  ];
</script>

<template>
  <EmDesenvolvimento :revealScreen="revealScreen" />
  <div :class="'flex gap-3 mx-20 ' + (blur ? 'blur' : '')">
    <Filtro />
    <div class="flex flex-col gap-3 w-full">
      <Pesquisa />
      <Lista :view="view" :carros="example" />
    </div>
  </div>
</template>
