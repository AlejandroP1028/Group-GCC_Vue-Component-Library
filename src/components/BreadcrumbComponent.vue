<template>
  <nav :class="breadcrumbClass" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
      <li v-for="(item, index) in items" :key="index" class="inline-flex items-center">
        <a v-if="item.href" :href="item.href" class="inline-flex items-center text-sm font-medium text-black hover:text-blue-600 dark:text-white dark:hover:text-sky-200">
          {{ item.text }}
        </a>
        <span v-else class="inline-flex items-center text-sm font-medium text-black hover:text-blue-600 dark:text-white dark:hover:text-sky-200">
          {{ item.text }}
        </span>
        <span v-if="index < items.length - 1" class="inline-flex items-center text-m font-bold text-black dark:text-white mr-1 ml-4">
          {{ computedDivider }}
        </span>
      </li>
    </ol>
  </nav>
</template>
  
<script>
export default {
  name: 'BreadcrumbComponent',
  props: {
    items: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      default: '' 
    },
    divider: {
      type: String,
      default: '>' 
    },
    bgColor: {
      type: String,
      default: 'sky' 
    }
  },
  computed: {
    breadcrumbClass() {
      const colorClassMap = {
        'blue': 'bg-blue-200 dark:bg-blue-600',
        'cyan': 'bg-cyan-200 dark:bg-cyan-600',
        'sky': 'bg-sky-200 dark:bg-sky-600',
        'teal': 'bg-teal-200 dark:bg-teal-600'
      };
      return {
        [colorClassMap[this.bgColor]]: this.type === 'solidbg',
        'border border-black dark:border-white px-4 py-2 rounded': this.type === 'solidbg'
      };
    },
    computedDivider() {
      const dividerMap = {
        'backslash': '\\',
        'forwardslash': '/',
        'dot': '.',
        'arrow': '→',
        'greaterthan': '>',
        'hyphen': '-',
        'line': '|'
      }
      return dividerMap[this.divider] || this.divider;
    }
  }
}
</script>
