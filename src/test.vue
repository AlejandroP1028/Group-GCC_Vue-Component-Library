<template>
    <div :class="{ 'dark': isDarkMode }" class="overflow-hidden h-screen w-screen bg-gray-100 dark:bg-gray-900">
        <div :class="{ 'dark': isDarkMode }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">
            <Notifications type="message" notification_message="br." position="bottom-right" />
            <Notifications type="message" notification_message="pbr" position="pBottom-right" />

            </div>

    </div>
  </template>
  
  <script>
  import Notifications from './components/NotificationsGroup.vue';
  
  export default {
    name: 'testPage',
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
    background-color: #1a202c;
    color: #ffffff;
  }
  </style>
  