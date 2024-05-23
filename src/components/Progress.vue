<template>
    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        :class="progressClasses"
        :style="{ width: computedWidth }"
      ></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Progress',
    props: {
      progress: {
        type: Number,
        required: true,
        validator: value => value >= 0 && value <= 100,
      },
      color: {
        type: String,
        default: 'blue',
        validator: value => ['blue', 'sky', 'cyan', 'teal', 'gray'].includes(value),
      },
    },
    computed: {
      computedWidth() {
        return `${this.progress}%`;
      },
      progressClasses() {
        const colorClasses = {
          blue: 'bg-blue-600',
          sky: 'bg-sky-600',
          cyan: 'bg-cyan-600',
          teal: 'bg-teal-600',
          gray: 'bg-gray-600',
        };
        return [colorClasses[this.color], 'h-2.5', 'rounded-full'].join(' ');
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  
