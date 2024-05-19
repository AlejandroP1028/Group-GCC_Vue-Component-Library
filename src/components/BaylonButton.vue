<template>
  <button @click="handleClick" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: 'Click Me'
    }
  },
  methods: {
    handleClick() {
      alert('Button clicked!');
    }
  }
}
</script>

<style scoped>
/* Component-specific styles */
</style>
