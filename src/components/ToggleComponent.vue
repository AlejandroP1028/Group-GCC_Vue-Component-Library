<template>
  <h1 class="text-5xl pt-10 pl-10 font-medium text-blue-400">Toggle</h1>
  <label class="inline-flex items-center cursor-pointer">
    <input type="checkbox" v-model="isChecked" class="sr-only peer" @change="toggleDarkMode">
    <div class="relative mt-10 ml-20 w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-blue-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    <span class="relative mt-10 ml-3 text-sm font-medium text-blue-200 dark:text-blue-400">{{ isDarkMode ? 'Dark Mode' : 'Light Mode' }}</span>
  </label>
</template>

<script>
export default {
  props: {
    isDarkMode: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isChecked: this.isDarkMode
    };
  },
  methods: {
    toggleDarkMode() {
      this.$emit('toggle-dark-mode');
    }
  },
  watch: {
    isDarkMode(newVal) {
      this.isChecked = newVal;
    }
  }
}
</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>
