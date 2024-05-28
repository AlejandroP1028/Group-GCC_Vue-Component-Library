<template>
  <div :class="{'dark': isDarkMode}" class="overflow-auto min-h-screen w-screen bg-gray-50 dark:bg-gray-900 dark:text-white transition-colors duration-300 flex flex-col">
    <div class="flex-grow flex items-center justify-center">
      <div class="flex flex-col items-center">
        <button @click="toggleDarkMode" class="mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300">
          {{ isDarkMode ? 'Dark Mode' : 'Light Mode' }}
        </button>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'FooterApp',
  components: {
    FooterComponent
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
  },
};
</script>

<style scoped>
.dark {
  background-color: #121212;
  color: #ffffff;
}
</style>
