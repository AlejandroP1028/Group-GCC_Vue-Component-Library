// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import vuetify from './plugins/vuetify' // Ensure this path is correct

createApp(App).use(vuetify).mount('#app')
