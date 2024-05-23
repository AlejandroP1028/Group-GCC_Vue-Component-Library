<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-gray-50 dark:bg-white dark:text-white">
    <ToggleComponent :isDarkMode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />
  </div>
</template>

<script>
import ToggleComponent from './components/ToggleComponent.vue';

export default {
  components: {
    ToggleComponent
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
  background-color: #121212;
  color: #ffffff;
}
</style>
