<template>
    <div class="overflow-hidden h-screen w-screen bg-gray-100">
      <ItemList />
    </div>
  </template>
  
  <script>
  import ItemList from './components/ItemList.vue';
  
  export default {
    name: 'App',
    components: {
      ItemList
    }
  }
  </script>
  
  <style scoped>
  /* Add any global styles here */
  </style>
  