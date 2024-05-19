<template>
    <div class="flex space-x-4">
      <button v-for="(button, index) in buttons" :key="index" @click="handleClick(button)" :class="{ 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded': button.active, 'bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded': !button.active }">
        {{ button.text }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      buttons: {
        type: Array,
        required: true
      }
    },
    methods: {
      handleClick(button) {
        // Toggle button's active state
        button.active = !button.active;
        // Emit an event with the clicked button data
        this.$emit('button-click', button);
      }
    }
  }
  </script>
  