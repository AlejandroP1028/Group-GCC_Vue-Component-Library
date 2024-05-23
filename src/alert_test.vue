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
        header="Header"
        body="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." 
        image="image-1.jpg"
        size="xl"
        type="teal"
        :horizontal="true">
        <template #hs>
          <svg class="max-h-8"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
            fill="currentColor"/>
      <path d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z"
            fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
            fill="currentColor"/>
    </svg>
        </template>
      </Card>

      <Card
      :class="'m-4'"
        header="Noteworthy technology acquisitions 2021"
        body="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." 
        image="image-1.jpg"
        size="xl"
        type="teal">
        <template #hs></template>
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
