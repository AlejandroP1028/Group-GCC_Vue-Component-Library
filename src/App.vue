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
      <Progress :progress="45" color="blue" />
      <Progress :progress="60" color="sky" />
      <Progress :progress="75" color="cyan" />
      <Progress :progress="30" color="teal" />
      <Progress :progress="90" color="gray" />
    </div>
  </div>
</template>

<script>
import Progress from './components/Progress.vue';

export default {
  name: 'App',
  components: {
    // Button,
    Progress,
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
  },
};
</script>

<style scoped>
.dark {
  background-color: #121212;
  color: #ffffff;
}
</style>
