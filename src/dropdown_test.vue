<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-hidden h-screen w-screen bg-gray-100 dark:bg-gray-900">
    <button @click="toggleDarkMode" type="button" class="absolute top-1/2 left-1/2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
    <dropdown_component :isDark="isDarkMode"></dropdown_component>
  </div>
</template>
  
<script>
import dropdown_component from './components/Dropdown.vue';

export default {
  name: 'DropdownTest',
  components: {
    dropdown_component
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
  background-color: #091224;
  color: #ffffff;
}
</style>
  