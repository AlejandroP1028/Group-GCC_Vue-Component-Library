<template>
  <div :class="['border rounded-lg shadow', computedClassesMain]">
    <div class="flex justify-center">
      <img v-if="image" :src="imageSrc" class="rounded-t-lg" alt="Card Image" />
    </div>

    <div class="p-4">
      <h5 v-if="header" class="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">{{ header }}</h5>
    <p v-if="body" class="mb-3 font-normal text-gray-700 dark:text-gray-200">{{ body }}</p>
    <slot></slot>
    </div>
    
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
          bgClass: 'border-blue-100 bg-blue-200/80 dark:bg-blue-800/80 dark:border-blue-700',
        },
        sky: {
          bgClass: 'border-sky-100 bg-sky-200/80 dark:bg-sky-800/80 dark:border-sky-700',
        },
        cyan: {
          bgClass: 'border-cyan-100 bg-cyan-200/80 dark:bg-cyan-800/80 dark:border-cyan-700',
        },
        teal: {
          bgClass: 'border-teal-100 bg-teal-200/80 dark:bg-teal-800/80 dark:border-teal-700',
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
    imageSrc() {
      return this.image ? require(`@/assets/${this.image}`) : '';
    },
  },
};
</script>

<style scoped>
</style>
