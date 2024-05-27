//para lang makita ko sa browser changes nung 2 components
import { createApp } from 'vue'
//import App from "./App.vue";
import './index.css'
//createApp(App).mount('#app')

//import ListTest from "./List_test.vue";
//createApp(ListTest).mount('#app')

import AppNotifications from './AppNotifications.vue'; 
createApp(AppNotifications).mount('#app');

// createApp(AlertTest).mount('#app')
//createApp(CardTest).mount('#app')