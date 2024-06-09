/* eslint-disable */

import { createApp } from "vue";
//import alert_page from "./alert_page.vue";
//import badge_page from "./badge_page.vue";
//import breadcrumb_page from "./breadcrumb_page.vue";
//import card_page from "./card_page.vue";
import "./index.css";
import popover_page from "./popover_page.vue";
import navbar_page from "./navbar_page.vue";
import Dropdown_page from "./dropdown_page.vue";
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes'
import App from './App.vue'

//createApp(alert_page).mount("#app");
//createApp(popover_page).mount("#app");
//createApp(Dropdown_page).mount('#app')
//createApp(breadcrumb_page).mount("#app");
//createApp(dropdown_test).mount('#app')
const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes,
  });

app.use(router)
app.mount('#app')

//import test from './test.vue'
//createApp(App).mount("#app");
//import App from "./alert_page.vue";
//import App from "./notif_page.vue";
//import App from "./List_test.vue";
//import App from "./list_page.vue";
//createApp(ListTest).mount('#app')
//import App from './notifications_page.vue';
// createApp(AlertTest).mount('#app')
//createApp(CardTest).mount('#app')
