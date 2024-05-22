/* eslint-disable */

<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-gray-100 dark:bg-gray-900">
    <button @click="toggleDarkMode" type="button" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
    <!-- <Alert msg="ooga booga 123" position="tr" dismiss-type="manual">
    </Alert>
    <Alert msg="ooga booga 123" position="ll" type="warning"  dismiss-type="manual">
    </Alert>
    <Alert msg="ooga booga 123" position="tl" type="danger"  dismiss-type="manual">
    </Alert>
    <Alert msg="ooga booga 123" position="lr" type="success"  dismiss-type="manual" size="l">
    </Alert> -->

    <div class="ml-4 flex flex-col space-y-4">
      <Card
        header="Noteworthy technology acquisitions 2021"
        body="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." 
        image="image-1.jpg"
        size="xl"
        :horizontal="true">

      </Card>
      <Card
        header="Noteworthy technology acquisitions 2021"
        body="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." 
        image="image-1.jpg"
        size="xl"
        type="sky"
        :horizontal="true">

      </Card>
      <Card
        header="Noteworthy technology acquisitions 2021"
        body="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." 
        image="image-1.jpg"
        size="xl"
        type="cyan"
        :horizontal="true">

      </Card>
      <Card
        header="Noteworthy technology acquisitions 2021"
        body="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." 
        image="image-1.jpg"
        size="xl"
        type="teal"
        :horizontal="true">

      </Card>
    </div>
    
  </div>
</template>

<script>
import Card from './components/Card.vue';
// import Alert from './components/Alert.vue';

export default {
  name: 'App',
  components: {
    // Alert,
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
  background-color: #121212;
  color: #ffffff;
}
</style>
