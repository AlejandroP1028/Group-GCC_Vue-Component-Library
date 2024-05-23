<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900 p-4">
    <div class="flex justify-center mb-8">
      <Button
        @click="toggleDarkMode"
        color="blue"
        customClasses="w-48"
      >
        {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
      </Button>
    </div>
    <ButtonGroup class="mx-auto">
      <button type="button" :class="profileButtonClasses" class="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-800 bg-blue-200 border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
        <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
        Profile
      </button>
      <button type="button" :class="settingsButtonClasses" class="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-800 bg-blue-200 border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
        <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
        </svg>
        Settings
      </button>
      <button type="button" :class="downloadsButtonClasses" class="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-800 bg-blue-200 border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
        <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
          <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
        </svg>
        Downloads
      </button>
    </ButtonGroup>
    <div class="space-y-4">
      <div class="flex flex-wrap gap-4 justify-center">
        <Button color="blue" size="small" @click="showMessages">
          Small Button
          <template #icon>
            <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">2</span>
          </template>
        </Button>
        <Button color="blue" size="normal" @click="showNotifications">
          Normal Button
          <template #icon>
            <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">3</span>
          </template>
        </Button>
        <Button color="blue" size="large" @click="showAlerts">
          Large Button
          <template #icon>
            <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">1</span>
          </template>
        </Button>
      </div>
      <div class="flex flex-wrap gap-4 justify-center">
        <Button color="sky">
          Sky Button
        </Button>
        <Button color="cyan">
          Cyan Button
        </Button>
        <Button color="teal">
          Teal Button
        </Button>
        <Button color="gray">
          Gray Button
        </Button>
      </div>
      <div class="flex flex-wrap gap-4 justify-center">
        <Button color="blue">
          <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
          </svg>
          Buy now
        </Button>
        <Button color="blue" customClasses="flex items-center space-x-2">
          Choose plan
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </Button>
      </div>
      <div class="flex justify-center">
        <Button color="sky" disabled>
          Disabled Button
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './components/Button.vue';
import ButtonGroup from './components/ButtonGroup.vue';

export default {
  name: 'App',
  components: {
    Button,
    ButtonGroup,
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  mounted() {
    this.checkDarkModePreference();
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.updateDarkModePreference();
    },
    checkDarkModePreference() {
      const darkModePreference = localStorage.getItem('darkMode');
      if (darkModePreference) {
        this.isDarkMode = JSON.parse(darkModePreference);
      }
    },
    updateDarkModePreference() {
      localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
    },
    showMessages() {
      const message = {
        sender: 'John',
        content: 'Hello there! How are you?',
        timestamp: new Date().toLocaleString(),
      };
      const messageString = `New message received:\nSender: ${message.sender}\nContent: ${message.content}\nTimestamp: ${message.timestamp}`;
      alert(messageString);
    },
    showNotifications() {
      const notification = {
        title: 'New Notification',
        content: 'You have a new notification! Click here to view.',
        timestamp: new Date().toLocaleString(),
      };
      const notificationString = `Title: ${notification.title}\nContent: ${notification.content}\nTimestamp: ${notification.timestamp}`;
      alert(notificationString);
    },
    showAlerts() {
      alert('You have a new alert!');
    },
  },
  computed: {
    profileButtonClasses() {
      return {
        'text-blue-800 bg-blue-200': !this.isDarkMode,
        'text-blue-100 bg-gray-800': this.isDarkMode,
      };
    },
    settingsButtonClasses() {
      return {
        'text-blue-800 bg-blue-200': !this.isDarkMode,
        'text-blue-100 bg-gray-800': this.isDarkMode,
      };
    },
    downloadsButtonClasses() {
      return {
        'text-blue-800 bg-blue-200': !this.isDarkMode,
        'text-blue-100 bg-gray-800': this.isDarkMode,
      };
    },
  },
};
</script>
<style scoped>
.dark {
  background-color: #121212;
  color: #ffffff;
}
.mx-auto {
  margin-top: -3%;
  margin-bottom: 3%;
  margin-right: -38%;
}
</style>