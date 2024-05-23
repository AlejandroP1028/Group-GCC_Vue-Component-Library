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
        <Button color="blue" disabled>
          Disabled Button
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './components/Button.vue';

export default {
  name: 'App',
  components: {
    Button,
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
};
</script>

<style scoped>
.dark {
  background-color: #121212;
  color: #ffffff;
}
</style>
