<template>
    <div :class="['m-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700', computedClasses]">
      <a v-if="header" href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ header }}</h5>
      </a>
      <p v-if="body" class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ body }}</p>
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardComponent',
    props: {
      header: String,
      body: String,
      size: {
        type: String,
        validator: function (value) {
          return ['xs', 'sm', 'md', 'lg', 'xl'].includes(value);
        },
        default: 'sm',
      },
    },
    computed: {
      computedClasses() {
        return {
          'max-w-xs': this.size === 'xs',
          'max-w-sm': this.size === 'sm' || !['xs', 'sm', 'md', 'lg', 'xl'].includes(this.size),
          'max-w-md': this.size === 'md',
          'max-w-lg': this.size === 'lg',
          'max-w-xl': this.size === 'xl',
        };
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  