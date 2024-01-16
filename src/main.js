import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import PhosphorIcons from "@phosphor-icons/vue";
import 'vue3-select/dist/vue3-select.css';

let app = createApp(App);

app.use(PhosphorIcons);

app.mount('#app');
