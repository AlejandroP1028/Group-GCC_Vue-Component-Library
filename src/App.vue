<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-white text-gray-800">
    <div class="flex justify-center items-center h-full">
      <ToggleComponent @toggle-mode="toggleDarkMode" />
    </div>
  </div>
</template>

<script>
import ToggleComponent from "./components/ToggleComponent.vue";

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
    toggleDarkMode(isChecked) {
      this.isDarkMode = isChecked;
    },
    resetMode() {
      this.isDarkMode = false;
    }
  }
};
</script>

<style scoped>
/* Light mode styles */
.bg-white {
  background-color: white;
}
.text-gray-800 {
  color: #2d3748;
}

/* Dark mode styles */
.dark .bg-white {
  background-color: #121212;
}
.dark .text-gray-800 {
  color: #ffffff;
}
</style>
