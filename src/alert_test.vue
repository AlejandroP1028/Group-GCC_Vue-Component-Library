/* eslint-disable */
<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-gray-100 dark:bg-gray-900">
    <button @click="toggleDarkMode" type="button" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
    <Alert msg="ooga booga 123" position="tr" dismiss-type="manual">
    </Alert>
    <Alert msg="ooga booga 123" position="ll" type="warning" :bordered="true" dismiss-type="manual">
    </Alert>
    <Alert msg="ooga booga 123" position="tl" type="danger" :bordered="true" dismiss-type="manual">
    </Alert>
    <Alert msg="ooga booga 123" position="lr" type="success" :bordered="true" dismiss-type="manual" size="l">
    </Alert>
    <!-- <div class="flex flex-row space-x-4">
      <Card
        header="Card Title"
        body="This is a card body"
        image="image-1.jpg"
        size="xs">

      </Card>
      <Card
        header="Card Title"
        body="This is a card body"
        image="image-1.jpg"
        size="xs"
        type="sky">

      </Card>
      <Card
        header="Card Title"
        body="This is a card body"
        image="image-1.jpg"
        size="xs"
        type="cyan">

      </Card>
      <Card
        header="Card Title"
        body="This is a card body"
        image="image-1.jpg"
        size="xs"
        type="teal">

      </Card>
    </div> -->
  </div>
</template>

<script>
// import Card from './components/Card.vue';
import Alert from './components/Alert.vue';

export default {
  name: 'App',
  components: {
    Alert,
    // Card
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
