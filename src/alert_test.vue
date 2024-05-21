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



    <div class="flex flex-row space-x-4">
      <Card
        header="Card Title"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et sem malesuada, sollicitudin magna a, commodo leo. Suspendisse dapibus sodales risus, ut varius mi imperdiet." 
        image="image-1.jpg"
        size="lg">
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>

      </Card>
      <Card
        header="Card Title"
        body="This is a card body"
        image="image-1.jpg"
        size="xl"
        type="sky">

      </Card>
      <Card
        header="Card Title"
        body="This is a card body"
        image="image-1.jpg"
        size="md"
        type="cyan">

      </Card>
      <Card
        header="Card Title"
        body="This is a card body"
        image="image-1.jpg"
        size="sm"
        type="teal">

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
