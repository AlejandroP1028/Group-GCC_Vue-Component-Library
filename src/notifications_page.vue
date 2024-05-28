<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-hidden h-screen w-screen bg-gray-100 dark:bg-gray-900">
    <button @click="toggleDarkMode" class="absolute top-4 right-4 px-4 py-2 bg-white dark:bg-gray-800 rounded-md shadow-md text-gray-800 dark:text-gray-200">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
    <div :class="{ 'dark': isDarkMode }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-16 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">
      <Notifications type="message" notification_message="This is a notification message." position="bottom-right" />
      <Notifications type="message" notification_message="This is a notification message." position="pBottom-right" />
      <Notifications type="success" notification_message="this is a success notification." position="pTop-right" />
      <Notifications type="warning" notification_message="this is a warning notification." position="pBottom-left" />
      <Notifications type="error" notification_message="this is an error notification." position="pTop-left" />   
      <Notifications type="default" notification_message="this is a default notification." position="pCenter" />        
    </div>
  </div>
</template>

<script>
import Notifications from './components/NotificationsGroup.vue';

export default {
  name: 'App',
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
.dark {
  background-color: #091224;
  color: #ffffff;
}
</style>
