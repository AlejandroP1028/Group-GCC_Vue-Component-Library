// src/router.js
import Dropdown from './dropdown_page.vue'
import alert_page from './alert_page.vue'
import AvatarPage from './AvatarPage.vue'
import badge_page from './badge_page.vue'
import card_page from './card_page.vue'
import collapse_page from './collapse_page.vue'
import list_page from './list_page.vue'
import navbar_page from './navbar_page.vue'
import notif_page from './notif_page.vue'
import popover_page from './popover_page.vue'
import snackbar_page from './snackbar_page.vue'
import TabPage from './TabPage.vue'
import template from './template.vue'
import toggle_page from './toggle_page.vue'
import HomePage from './components/HomePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/alert', component: alert_page },
  { path: '/avatar', component: AvatarPage },
  { path: '/badge', component: badge_page },
  { path: '/card', component: card_page },
  { path: '/collapse', component: collapse_page },
  { path: '/dropdown', component: Dropdown },
  { path: '/list', component: list_page },
  { path: '/navbar', component: navbar_page },
  { path: '/notif', component: notif_page },
  { path: '/popover', component: popover_page },
  { path: '/snackbar', component: snackbar_page },
  { path: '/tab', component: TabPage },
  { path: '/template', component: template },
  { path: '/toggle', component: toggle_page },


]


export default routes