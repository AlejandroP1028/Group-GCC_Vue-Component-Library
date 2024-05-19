import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import BootstrapVue3 from 'bootstrap-vue-3'

const app = createApp(App);
app.use(PrimeVue);

app.component('Carousel', Carousel);
app.component('Button', Button);
app.component('Tag', Tag);
app.use(BootstrapVue3)

app.mount('#app');
