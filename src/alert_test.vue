/* eslint-disable */

<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-blue-50">
    <button @click="toggleDarkMode" type="button" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
    <!-- <Alert msg="ooga booga 123" position="tr" dismiss-type="manual" :accent="true" :rounded="true">
    </Alert>
    <Alert msg="ooga booga 123" position="ll" type="warning"  dismiss-type="manual" :accent="true" :rounded="true">
    </Alert>
    <Alert msg="ooga booga 123" position="tl" type="danger"  dismiss-type="manual" :accent="true" :rounded="true">
    </Alert>
    <Alert msg="ooga booga 123" position="lr" type="success"  dismiss-type="manual" size="l" :accent="true" :rounded="true">
    </Alert> -->


      <Card
      :class="'m-4'"
        header="Noteworthy technology acquisitions 2021"
        body="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." 
        image="image-1.jpg"
        size="sm"
        type="teal">

      </Card>

    </div>
    
</template>

<script>
import Card from './components/Card.vue';
//  import Alert from './components/Alert.vue';

export default {
  name: 'App',
  components: {
    //  Alert,
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
