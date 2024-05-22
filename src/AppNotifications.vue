<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-hidden h-screen w-screen bg-blue-100 dark:bg-gray-900">
    <button @click="toggleDarkMode" type="button" class="absolute top-1/2 left-1/2 bg-gray-800 hover:bg-blue-800 text-blue-200 font-bold py-2 px-4 rounded">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
  <Notifications type="success" notification_message ="This is a success notification." position="top-right"></Notifications>
  <Notifications type="error" notification_message ="This is an error notification." position="top-right1"></Notifications>
  <Notifications type="warning" notification_message ="This is a warning notification." position="top-right2"></Notifications>
  <Notifications type="default" notification_message ="This is a default notification." position="center"></Notifications>
  <Notifications type="message" notification_message ="This is a message notification." position="bottom-right"></Notifications>
  </div>
</template>

<script>
import Notifications from './components/NotificationsGroup.vue';

export default {
name: 'AppNotifications',
components: {
  Notifications
},
data() {
    return {
      isDarkMode: false 
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  }
}
</script>

<style scoped>
/* Dark mode styles */
.dark {
  background-color: #091224;
  color: #38BDF8;
}
</style>
