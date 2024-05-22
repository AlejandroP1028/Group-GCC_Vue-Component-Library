<template>
  <div :class="['border rounded-lg shadow', computedClassesMain, mainHorizontal]">
    <img v-if="image" :src="imageSrc" :class="imageHorizontal" alt="Card Image" />
    <div :class="['p-4', isHorizontal]">
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
    horizontal: Boolean,
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
        default: 'border-blue-200/[.80] bg-blue-100 dark:bg-gray-700 dark:border-blue-300',
        sky: 'border-sky-200/[.80] bg-sky-100 dark:bg-gray-700 dark:border-sky-300',
        cyan: 'border-cyan-200/[.80] bg-cyan-100 dark:bg-gray-700 dark:border-cyan-300',
        teal: 'border-teal-200/[.80] bg-teal-100 dark:bg-gray-700 dark:border-teal-300',
      };

      const bgClass = styleClasses[this.type] || styleClasses['default'];
      
      const sizeClasses = {
        xs: 'max-w-xs',
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
      };

      return [bgClass, sizeClasses[this.size]];
    },
    mainHorizontal() {
      return this.horizontal ? 'flex flex-row' : 'flex flex-col';
    },
    imageHorizontal() {

      return this.horizontal ? 'w-2/5 object-cover rounded-l-lg' : 'w-full rounded-t-lg';
    },
    isHorizontal() {
      return this.horizontal ? 'w-3/5 p-4' : 'w-full p-4';
    },
    computedClassesHeader() {
      const styleClasses = {
        default: 'text-blue-900/[.87] dark:text-blue-200',
        sky: 'text-sky-900/[.87] dark:text-sky-200',
        cyan: 'text-cyan-900/[.87] dark:text-cyan-200',
        teal: 'text-teal-900/[.87] dark:text-teal-200',
      };

      return styleClasses[this.type] || styleClasses['default'];
    },
    computedClassesBody() {
      const styleClasses = {
        default: 'text-blue-900/[.87] dark:text-blue-200/[.87]',
        sky: 'text-sky-900/[.87] dark:text-sky-200/[.87]',
        cyan: 'text-cyan-900/[.87] dark:text-cyan-200/[.87]',
        teal: 'text-teal-900/[.87] dark:text-teal-200/[.87]',
      };

      return styleClasses[this.type] || styleClasses['default'];
    },
    imageSrc() {
      return this.image ? require(`@/assets/${this.image}`) : '';
    },
  },
};
</script>

<style scoped>
</style>
