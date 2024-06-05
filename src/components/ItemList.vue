<template>
  <div :class="computedClass">
    <div v-if="type === 'unorderedlist' && layout === 'horizontal'" :class="{ ...containerClasses, ...colorClasses }">
  <ul v-if="items && items.length" :class="listClasses">
    <li v-for="(item, index) in items" :key="index">
      {{ item }}
    </li>
  </ul>
  <ul v-else class="space-x-9 font-bold text-lg text-blue-800 dark:text-blue-200 flex flex-wrap justify-center">
    <slot></slot>
  </ul>
</div>
<div v-else-if="type === 'unorderedlist' && layout === 'vertical'" :class="{ ...containerClasses, ...colorClasses }">
    <ul v-if="items && items.length" :class="listClasses">
      <li v-for="(item, index) in items" :key="index" class="py-1 m-1">
        {{ item }}
      </li>
    </ul>
    <ul v-else class="list-disc space-y-3 text-blue-800 dark:text-sky-400">
      <slot></slot>
    </ul>
  </div>
  <div v-else-if="type === 'orderedlist' && layout === 'vertical'" :class="{ ...containerClasses, ...colorClasses }">
      <ol v-if="items && items.length" :class="listClasses">
        <li v-for="(item, index) in items" :key="index" class="py-1 m-1 px-3">
          {{ item }}
        </li>
      </ol>
      <ol v-else class="list-decimal space-y-2 text-blue-800 dark:text-sky-400">
        <slot></slot>
      </ol>
  </div>
  <div v-else-if="type === 'descriptionlist' && layout === 'vertical'" :class="{ ...containerClasses, ...colorClasses }">
    <div v-if="items && items.length" :class="listClasses">
      <div class="flex flex-col pb-3" v-for="(item, index) in items" :key="index">
        <dt class="mb-1 text-blue-900 font-semibold md:text-lg dark:text-blue-200">{{ item.term }}</dt>
        <dd class="text-lg font-bold">{{ item.description }}</dd>
      </div>
    </div>
    <div v-else class="text-blue-900 divide-y divide-blue-300 dark:text-sky-400 dark:divide-gray-700">
      <slot></slot>
    </div>
  </div>
  <div v-if="type === 'unorderedicon'" class="border border-blue-700 bg-blue-100 rounded-sm px-4 py-3 sm:px-6 sm:py-4 md:p-8 w-64 dark:bg-gray-900 dark:border-sky-400">
    <ul v-if="items && items.length" class="max-w-md space-y-1 text-blue-800 list-inside text-lg dark:text-sky-400">
      <li v-for="(item, index) in items" :key="index" class="flex items-center">
        <svg class="w-3.5 h-3.5 me-2 text-blue-800 dark:text-blue-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        {{ item }}
      </li>
    </ul>
    <ul v-else class="max-w-md space-y-1 text-blue-800 list-inside dark:text-sky-400">
      <li v-for="(_, index) in $slots.default()" :key="index" class="flex items-center">
        <svg class="w-3.5 h-3.5 me-2 text-blue-800 dark:text-blue-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <slot></slot>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
export default {
  name: 'ItemList',
  props: {
    items: {
      type: Array,
      required: false,
      default: () => []
    },
    iconItems: {
      type: Array,
      required: false,
      default: () => []
    },
    type: {
      type: String,
      required: true,
      validator: value => ["unorderedlist", "orderedlist", "descriptionlist", "unorderedicon"].includes(value),
    },
    layout: {
      type: String,
      default: 'vertical',
      validator: value => ['horizontal', 'vertical'].includes(value),
    },
    position: {
      type: String,
      default: 'centered',
      validator: (value) => value === 'centered',
    },
    color: {
      type: String,
      default: 'blue',
      validator: value => ['blue', 'sky', 'teal', 'cyan'].includes(value),
    },
  },
  computed: {
    computedClass() {
      return 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
    },
    containerClasses() {
      let baseClasses = {
        'rounded-2xl': true
      };

      if (this.type === 'unorderedlist' && this.layout === 'horizontal') {
        return {
          ...baseClasses,
          'md:px-5': true,
          'md:py-4': true,
          'w-full': true,
        };
      } else if (this.type === 'unorderedlist' && this.layout === 'vertical') {
        return {
          ...baseClasses,
          'py-4': true,
          'sm:px-6': true,
          'sm:py-2': true,
          'md:px-8': true,
          'w-64': true
        };
      } else if (this.type === 'orderedlist' && this.layout === 'vertical') {
        return {
          ...baseClasses,
          'py-4': true,
          'sm:px-6': true,
          'sm:py-2': true,
          'md:px-8': true,
          'w-64': true,
        };
      } else if (this.type === 'descriptionlist' && this.layout === 'vertical') {
        return {
          ...baseClasses,
          'py-4': true,
          'sm:px-6': true,
          'sm:py-2': true,
          'md:p-8': true,
          'w-full': true,
        };
      } else if (this.type === 'unorderedicon') {
        return {
          ...baseClasses,
          'px-4': true,
          'py-3': true,
          'sm:px-6': true,
          'sm:py-4': true,
          'md:p-8': true,
          'w-64': true,
        };
      }
      return baseClasses;
    },
    listClasses() {
  let baseClasses = {
    'text-lg': true,
  };
  let classes = {
    ...baseClasses,
    ...this.colorClasses
  };

  if (this.type === 'unorderedlist' && this.layout === 'horizontal') {
    return {
      ...classes,
      'space-x-5': true,
      'flex': true,
      'flex-wrap': true,
      'justify-center': true
    };
  } else if (this.type === 'unorderedlist' && this.layout === 'vertical') {
    return {
      ...classes,
      'list-disc': true,
      'divide-y': true,
      'divide-opacity-5': true,
      'divide-blue-900': true,
      'divide-sky-400': true
    };
  } else if (this.type === 'orderedlist' && this.layout === 'vertical') {
    return {
      ...classes,
      'list-decimal': true,
      'divide-y': true,
      'divide-opacity-5': true,
      'divide-blue-900': true,
      'divide-sky-400': true
    };
  } else if (this.type === 'descriptionlist' && this.layout === 'vertical') {
    return {
      ...classes,
      'text-blue-900': true,
      'divide-y': true,
      'divide-blue-300': true,
      'dark:divide-blue-300': true
    };
  } else if (this.type === 'unorderedicon') {
    return {
      ...classes,
      'max-w-md': true,
      'space-y-1': true,
      'list-inside': true
    };
  }
  return classes;
},
    colorClasses() {
      switch (this.color) {
        case 'sky':
          return {
            'text-sky-800': true,
            'dark:text-sky-200': true,
            'bg-sky-100': true,
            'dark:bg-sky-700': true
          };
        case 'blue':
          return {
            'text-blue-800': true,
            'dark:text-blue-200': true,
            'bg-blue-100': true,
            'dark:bg-blue-700': true
          };
        case 'teal':
          return {
            'text-teal-800': true,
            'dark:text-teal-200': true,
            'bg-teal-100': true,
            'dark:bg-teal-700': true
          };
        case 'cyan':
          return {
            'text-cyan-800': true,
            'dark:text-cyan-200': true,
            'bg-cyan-100': true,
            'dark:bg-cyan-700': true
          };
        default:
          return {
            'text-blue-800': true,
            'dark:text-sky-200': true,
            'bg-blue-100': true,
            'dark:bg-sky-700': true
          };
      }
    }
  }
};
</script>
<style scoped>

</style>