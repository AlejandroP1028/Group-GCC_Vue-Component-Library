<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-hidden h-screen w-screen bg-gray-100 dark:bg-gray-900">
    <button @click="toggleDarkMode" type="button" class="absolute top-1/2 left-1/2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
    <alert_component msg="ooga booga 123" type="default" position="tl" :isDark="isDarkMode" :bordered="true"></alert_component>
    <alert_component msg="ooga booga 123" type="sky" position="tr" :isDark="isDarkMode" :bordered="true"></alert_component>
    <alert_component msg="ooga booga 123" type="cyan" position="ll" :isDark="isDarkMode" :bordered="true"></alert_component>
    <alert_component msg="ooga booga 123" type="teal" position="lr" :isDark="isDarkMode" :bordered="true"></alert_component>
  </div>
</template>

<script>
import alert_component from './components/Alert.vue';

export default {
  name: 'AlertTest',
  components: {
    alert_component
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
