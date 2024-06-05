<template>
  <div :class="['rounded-lg shadow', computedClassesMain, mainHorizontal]">
    <img v-if="image" :src="imageSrc" :class="imageHorizontal" alt="Card Image" />
    <div :class="['p-4', isHorizontal]">
      <slot name="ts"></slot>
      <div v-if="header" :class="['flex mb-2 text-2xl font-bold tracking-tight', computedClassesHeader]">{{ header }} <slot name="hs" class="max-h-8"></slot></div>
      <span v-if="body" :class="['mb-3 font-normal block', computedClassesBody]">{{ body }}</span>
      <slot name="bs"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    header: String,
    justifyHeader: {
      type: String,
      validator: function (value) {
        ['start','end','center','between','around','evenly'].includes(value)
      },
      default: 'start'
    },
    body: String,
    image: String,
    horizontal: Boolean,
    bordered: Boolean, 
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
        default: 'bg-blue-100 dark:bg-gray-700 ',
        sky: 'bg-sky-100 dark:bg-gray-700 ',
        cyan: 'bg-cyan-100 dark:bg-gray-700 ',
        teal: 'bg-teal-100 dark:bg-gray-700 ',
      };

      const borderClasses = {
        default: 'border border-blue-200/[.80] dark:border-blue-300',
        sky: 'border border-sky-200/[.80] dark:border-sky-300',
        cyan: 'border border-cyan-200/[.80] dark:border-cyan-300',
        teal: 'border border-teal-200/[.80] dark:border-teal-300',
      };

      const borderClass = this.bordered ?  borderClasses[this.type] : ''
      const bgClass = styleClasses[this.type] || styleClasses['default'];
      
      const sizeClasses = {
        xs: 'max-w-xs',
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
      };

      return [borderClass,bgClass, sizeClasses[this.size]];
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

      const position = {
        start: 'justify-start',
        end: 'justify-end',
        center: 'justify-center',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-stretch',
        
      } 

      return [position[this.justifyHeader], styleClasses[this.type] || styleClasses['default']];
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
/* Add any scoped styles if needed */
</style>
