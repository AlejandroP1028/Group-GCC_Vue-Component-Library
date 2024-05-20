<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-hidden h-screen w-screen bg-gray-100 dark:bg-gray-900">
    <button @click="toggleDarkMode" type="button" class="absolute top-1/2 left-1/2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
    <Alert msg="ooga booga 123" dismissType="manual"></Alert>
    <Alert msg="ooga booga 123" position="tr" dismissType="manual" type="cyan" ></Alert>
    <Alert msg="ooga booga 123" position="lr" dismissType="manual" type="sky" ></Alert>
    <Alert msg="ooga booga 123" position="ll" type="teal" ></Alert>
    <Card header="Head" body="asdasdas" size="xs"></Card>
  </div>
</template>

<script>
import Alert from './components/Alert.vue';
import Card from './components/Card.vue';

export default {
  name: 'AlertTest',
  components: {
    Alert,
    Card
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
