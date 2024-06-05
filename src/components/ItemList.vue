<template>
  <div :class="computedClass">
    <div v-if="type === 'unorderedlist' && layout === 'horizontal'" :class="{ ...containerClasses, ...colorClasses }">

  <ul v-if="items && items.length" :class="listClasses">
    <li v-for="(item, index) in items" :key="index">
      {{ item }}
    </li>
  </ul>
  <ul v-else class="space-x-9 font-bold text-lg text-blue-800 dark:text-sky-400 flex flex-wrap justify-center">
    <slot></slot>
  </ul>
</div>
<div v-else-if="type === 'unorderedicon-horizontal'" class="border border-opacity-5 border-blue-700 bg-blue-100 rounded-sm md:px-5 md:py-4 w-full dark:bg-gray-900">
  <ul v-if="iconItems && iconItems.length" class="space-x-5 text-lg text-blue-800 dark:text-sky-400 flex flex-wrap justify-center">
    <li v-for="(item, index) in iconItems" :key="index" class="flex items-center space-x-2">
        <a v-if="item === 'facebook'" href="https://facebook.com" class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#1E40AF" width="24" height="24" viewBox="0 0 32 32">
            <path d="M30.996 16.091c-0.001-8.281-6.714-14.994-14.996-14.994s-14.996 6.714-14.996 14.996c0 7.455 5.44 13.639 12.566 14.8l0.086 0.012v-10.478h-3.808v-4.336h3.808v-3.302c-0.019-0.167-0.029-0.361-0.029-0.557 0-2.923 2.37-5.293 5.293-5.293 0.141 0 0.281 0.006 0.42 0.016l-0.018-0.001c1.199 0.017 2.359 0.123 3.491 0.312l-0.134-0.019v3.69h-1.892c-0.086-0.012-0.185-0.019-0.285-0.019-1.197 0-2.168 0.97-2.168 2.168 0 0.068 0.003 0.135 0.009 0.202l-0.001-0.009v2.812h4.159l-0.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814v-0z"/>
          </svg>
          <span class="px-2"> {{ item }} </span>
        </a>
        <a v-else-if="item === 'instagram'" href="https://instagram.com" class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#1E40AF" viewBox="0 0 24 24" width="24" height="24">
            <path fill="#1E40AF" fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path>
            <path fill="#1E40AF" d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"></path>
            <path fill="#1E40AF" fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"></path>
          </svg>
          <span class="px-2"> {{ item }} </span>
        </a>
        <a v-if="item === 'pinterest'" href="https://pinterest.com" class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#1E40AF" height="24" width="24" version="1.1" id="Layer_1" viewBox="-271 273 256 256" xml:space="preserve">
            <path d="M-143,273c-70.7,0-128,57.3-128,128c0,52.4,31.5,97.4,76.6,117.2c-0.4-8.9-0.1-19.7,2.2-29.4c2.5-10.4,16.5-69.7,16.5-69.7  s-4.1-8.2-4.1-20.2c0-19,11-33.1,24.7-33.1c11.6,0,17.3,8.7,17.3,19.2c0,11.7-7.5,29.2-11.3,45.4c-3.2,13.6,6.8,24.6,20.2,24.6  c24.3,0,40.6-31.1,40.6-68c0-28-18.9-49-53.3-49c-38.8,0-63,28.9-63,61.3c0,11.2,3.3,19,8.4,25.1c2.4,2.8,2.7,3.9,1.8,7.1  c-0.6,2.3-2,8-2.6,10.3c-0.9,3.2-3.5,4.4-6.4,3.2c-17.9-7.3-26.2-26.9-26.2-48.9c0-36.4,30.7-80,91.5-80c48.9,0,81,35.4,81,73.3  c0,50.2-27.9,87.7-69.1,87.7c-13.8,0-26.8-7.5-31.3-15.9c0,0-7.4,29.5-9,35.2c-2.7,9.9-8,19.7-12.9,27.4c11.5,3.4,23.7,5.3,36.3,5.3  c70.7,0,128-57.3,128-128C-15,330.3-72.3,273-143,273z"/>
          </svg>
          <span class="px-2"> {{ item }} </span>
        </a>
    </li>
  </ul>
  <ul v-else class="space-x-9 font-bold text-lg text-blue-800 dark:text-sky-400 flex flex-wrap justify-center">
    <slot name="icons"></slot>
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
        <li v-for="(item, index) in items" :key="index" class="py-1 m-1">
          {{ item }}
        </li>
      </ol>
      <ol v-else class="list-decimal space-y-2 text-blue-800 dark:text-sky-400">
        <slot></slot>
      </ol>
  </div>
  <div v-else-if="type === 'descriptionlist' && layout === 'vertical'" class="border border-blue-700 bg-blue-100 rounded-sm px-4 py-3 sm:px-6 sm:py-4 md:p-8 w-full dark:bg-gray-900 dark:border-sky-400">
    <div v-if="items && items.length" class="text-blue-900 divide-y divide-blue-300 dark:text-sky-400 dark:divide-gray-700">
      <div class="flex flex-col pb-3" v-for="(item, index) in items" :key="index">
        <dt class="mb-1 text-blue-900 font-semibold md:text-lg dark:text-sky-300">{{ item.term }}</dt>
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
          'px-4': true,
          'py-3': true,
          'sm:px-6': true,
          'sm:py-4': true,
          'md:p-8': true,
          'w-64': true,
        };
      } else if (this.type === 'descriptionlist' && this.layout === 'vertical') {
        return {
          ...baseClasses,
          'px-4': true,
          'py-3': true,
          'sm:px-6': true,
          'sm:py-4': true,
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
      'dark:divide-gray-700': true
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
        case 'teal':
          return {
            'dark:text-teal-400': true,
            'bg-teal-100': true
          };
        case 'cyan':
          return {
            'dark:text-cyan-400': true,
            'bg-cyan-100': true
          };
        default:
          return {
            'dark:text-sky-400': true,
            'bg-blue-100': true
          };
      }
    }
  }
};
</script>
<style scoped>

</style>