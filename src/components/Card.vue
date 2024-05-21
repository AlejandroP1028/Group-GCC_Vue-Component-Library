<template>
  <div :class="['border rounded-lg shadow max-h-fit', computedClassesMain]">
    <div class="flex justify-center">
      <img v-if="image" :src="imageSrc" class="rounded-t-lg" alt="Card Image" />
    </div>
    <div class="p-4">
      <h5 v-if="header" :class="['mb-2 text-2xl font-bold tracking-tight', computedClassesHeader]">{{ header }}</h5>
      <p v-if="body" :class="['mb-3 font-normal', computedClassesBody]">{{ body }}</p>
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
          bgClass: 'border-blue-200/[.80] bg-blue-100 dark:bg-gray-700 dark:border-blue-300',
        },
        sky: {
          bgClass: 'border-sky-200/[.80] bg-sky-100 dark:bg-gray-700 dark:border-sky-300',
        },
        cyan: {
          bgClass: 'border-cyan-200/[.80] bg-cyan-100 dark:bg-gray-700 dark:border-cyan-300',
        },
        teal: {
          bgClass: 'border-teal-200/[.80] bg-teal-100 dark:bg-gray-700 dark:border-teal-300',
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
    computedClassesHeader() {
      const styleClasses = {
        default: {
          textClass: 'text-blue-900/[.87] dark:text-blue-100/[.87]',
        },
        sky: {
          textClass: 'text-sky-900/[.87] dark:text-sky-100/[.87]',
        },
        cyan: {
          textClass: 'text-cyan-900/[.87] dark:text-cyan-100/[.87]',
        },
        teal: {
          textClass: 'text-teal-900/[.87] dark:text-teal-100/[.87]',
        },
      };

      const { textClass } = styleClasses[this.type] || styleClasses['default'];
      return [
        textClass
      ];
    },
    computedClassesBody() {
      const styleClasses = {
        default: {
          textClass: 'text-blue-900/[.60]  dark:text-blue-200/[.60]',
        },
        sky: {
          textClass: 'text-sky-900/[.60] dark:text-sky-200/[.60]',
        },
        cyan: {
          textClass: 'text-cyan-900/[.60] dark:text-cyan-200/[.60]',
        },
        teal: {
          textClass: 'text-teal-900/[.60] dark:text-teal-200/[.60]',
        },
      };

      const { textClass } = styleClasses[this.type] || styleClasses['default'];
      return [
        textClass
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
