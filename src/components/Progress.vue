<template>
    <div class="relative w-80 bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
        <span v-if="labelInside" class="absolute top-0 left-5 -mt-0.6 text-white px-1" style="font-size: 10px">{{ labelInside }}</span>

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
        validator: value => ['blue', 'sky', 'cyan', 'teal', 'gray', 'gradientblue'].includes(value),
      },
      labelInside: {
        type: String,
        default: '',
      },
      gradient: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      computedWidth() {
        return `${this.progress}%`;
      },
      progressClasses() {
        const baseClass = ['h-3.5', 'rounded-full'];
        if (this.gradient) {
          return [
           ...baseClass,
            'bg-gradient-to-r',
            'from-blue-500',
            'via-sky-500',
            'to-cyan-200',
          ];
        }
        const colorClasses = {
          blue: 'bg-blue-600',
          sky: 'bg-sky-600',
          cyan: 'bg-cyan-600',
          teal: 'bg-teal-600',
          gray: 'bg-gray-600',
          gradientblue: 'bg-blue-600',
        };
        return [colorClasses[this.color],...baseClass].join(' ');
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  
