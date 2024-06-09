// src/router.js
import Dropdown from './dropdown_page.vue'
import alert_page from './alert_page.vue'

const routes = [
  { path: '/', component: alert_page },
  { path: '/dropdown', component: Dropdown }
]


export default routes