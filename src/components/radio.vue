<template>
    <ul class=" items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <li v-for="(i, index) in items" :key="index" class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center ps-3 p-4">
          <input v-model="picked" :id="'radio-' + index" type="radio" :value="i.value" name="list-radio" class="hover:cursor-pointer w-4 h-4 text-blue-600 bg-blue-200 border-gray-300 dark:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500">
          <label :for="'radio-' + index" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ i.label }}</label>
        </div>
      </li>
    </ul>
  </template>
  

  <script>
  export default {
    name: 'RadioComponent',
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        picked: null
      };
    },
    watch: {
      picked(newVal) {
        this.$emit('input', newVal);
      }
    }
  };
  </script>
  

<style>
</style>