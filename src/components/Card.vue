<template>
    <div :class="['m-4 p-6 border rounded-lg shadow', computedClassesMain]">
      <a href="#">
        <img v-if="image" :src="image" class="rounded-t-lg" alt="Card Image" />
      </a>
      <h5 v-if="header" class="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">{{ header }}</h5>
      <p v-if="body" class="mb-3 font-normal text-gray-700 dark:text-gray-200">{{ body }}</p>
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardComponent',
    props: {
      header: String,
      body: String,
      image: String,
      size: {
        type: String,
        validator: function (value) {
          return ['xs', 'sm', 'md', 'lg', 'xl'].includes(value);
        },
        default: 'sm',
      },
      type: {
        type: String,
        validator: function (value) {
          return ['default', 'sky', 'cyan', 'teal'].includes(value);
        },
        default: 'default',
      },
    },
    computed: {
      computedClassesMain() {
        const styleClasses = {
          default: {
            bgClass: 'border-blue-50 bg-blue-100 dark:bg-blue-800 dark:border-blue-700',
          },
          sky: {
            bgClass: 'border-sky-50 bg-sky-100 dark:bg-sky-800 dark:border-sky-700',
          },
          cyan: {
            bgClass: 'border-cyan-50 bg-cyan-100 dark:bg-cyan-800 dark:border-cyan-700',
          },
          teal: {
            bgClass: 'border-teal-50 bg-teal-100 dark:bg-teal-800 dark:border-teal-700',
          },
        };
  
        const { bgClass } = styleClasses[this.type] || styleClasses['default'];
  
        return [
          {
            'max-w-xs': this.size === 'xs',
            'max-w-sm': this.size === 'sm' || !['xs', 'sm', 'md', 'lg', 'xl'].includes(this.size),
            'max-w-md': this.size === 'md',
            'max-w-lg': this.size === 'lg',
            'max-w-xl': this.size === 'xl',
          },
          bgClass,
        ];
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  