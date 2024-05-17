<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-hidden h-screen w-screen bg-gray-100 dark:bg-gray-900">
    <card_component msg="tite"></card_component>
    
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
