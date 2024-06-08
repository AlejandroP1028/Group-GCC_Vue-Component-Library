<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-hidden h-screen w-screen bg-gray-100 dark:bg-gray-900">
    <card_component :horizontal=true image="image-1.jpg" header="Ulo" body="Katawan Katawan Katawan Katawan Katawan Katawan Katawan Katawan"></card_component>
    <button @click="toggleDarkMode" type="button" class="absolute top-1/2 left-1/2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
  </div>
</template>

<script>
import card_component from './components/Card.vue';

export default {
  name: 'CardTest',
  components: {
    card_component
  },
  data() {
    return {
      isDarkMode: false // Initial state is light mode
    };
  },
  methods: {
    toggleDarkMode() {
      // Toggle dark mode
      this.isDarkMode = !this.isDarkMode;
    }
  }
}
</script>

<style scoped>
/* Dark mode styles */
.dark {
  background-color: #1a202c;
  color: #ffffff;
}
</style>
