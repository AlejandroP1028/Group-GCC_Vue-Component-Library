<template>
  <div class="TabComponent flex flex-col items-center justify-center h-screen">
    <ul class="tabs-header mb-10 flex text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" style="list-style: none; padding: 0;">
      <li 
        v-for="title in TabComponentTitles" 
        :key="title" 
        @click="selectedTitle = title" 
        :style="{ width: tabWidth }"
        :class="tabClass(title)"
      >
        <a href="#" :class="linkClass(title)">
          {{ title }}
        </a>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
import { ref, provide, computed } from 'vue';

export default {
  props: {
    TabComponent: {
      type: Array,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: 'default',
      validator(value) {
        return ['sky', 'cyan', 'teal', 'default'].includes(value);
      }
    },
    tabStyle: {
      type: String,
      default: 'background',
      validator(value) {
        return ['background', 'underline', 'default'].includes(value);
      }
    },
    borderRadius: {
      type: String,
      default: 'none',
      validator(value) {
        return ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(value);
      }
    }
  },
  setup(props, { slots }) {
    const TabComponentTitles = ref(
      slots.default().map((tab) => tab.props.title)
    );
    const selectedTitle = ref(TabComponentTitles.value[0]);

    provide("selectedTitle", selectedTitle);

    const tabWidth = computed(() => {
      return 100 / TabComponentTitles.value.length + '%';
    });

    return { 
      TabComponentTitles,
      selectedTitle,
      tabWidth,
    };
  },
  computed: {
    baseTabClass() {
      return this.tabStyle === 'default' ? 'me-2' : 'cursor-pointer flex items-center justify-center px-5 py-2 mr-2';
    },
    selectedTabClass() {
      if (this.tabStyle === 'default') {
        return 'inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500';
      }
      return this.tabStyle === 'underline' ? 'text-black' : 'text-white';
    },
    unselectedTabClass() {
      if (this.tabStyle === 'default') {
        return 'inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300';
      }
      return 'text-black';
    },
    backgroundClass() {
      return {
        sky: 'bg-sky-500',
        cyan: 'bg-cyan-500',
        teal: 'bg-teal-500',
        default: 'bg-gray-300',
      }[this.backgroundColor];
    },
    selectedBackgroundClass() {
      return {
        sky: 'bg-sky-700',
        cyan: 'bg-cyan-700',
        teal: 'bg-teal-700',
        default: 'bg-gray-500',
      }[this.backgroundColor];
    },
    underlineClass() {
      return {
        sky: 'border-b-4 border-sky-500',
        cyan: 'border-b-4 border-cyan-500',
        teal: 'border-b-4 border-teal-500',
        default: 'border-b-4 border-gray-300',
      }[this.backgroundColor];
    },
    selectedUnderlineClass() {
      return {
        sky: 'border-b-4 border-sky-700',
        cyan: 'border-b-4 border-cyan-700',
        teal: 'border-b-4 border-teal-700',
        default: 'border-b-4 border-gray-500',
      }[this.backgroundColor];
    },
    hoverClass() {
      return {
        sky: 'hover:bg-sky-500 hover:text-white',
        cyan: 'hover:bg-cyan-500 hover:text-white',
        teal: 'hover:bg-teal-500 hover:text-white',
        default: 'hover:bg-gray-300 hover:text-black',
      }[this.backgroundColor];
    },
    hoverUnderlineClass() {
      return {
       sky: 'hover:border-b-4 hover:border-sky-500',
        cyan: 'hover:border-b-4 hover:border-cyan-500',
        teal: 'hover:border-b-4 hover:border-teal-500',
        default: 'hover:border-b-4 hover:border-gray-300',
      }[this.backgroundColor];
    },
    borderRadiusClass() {
      if (this.tabStyle !== 'background') {
        return '';
      }
      return {
        none: '',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg
: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
      }[this.borderRadius];
    },
    selectedTextColor() {
      return this.tabStyle === 'underline' ? 'text-black' : 'text-white';
    },
    unselectedTextColor() {
      return 'text-black';
    },
    selectedHoverTextColor() {
      return this.tabStyle === 'underline' ? 'hover:text-black' : 'hover:text-white';
    },
    unselectedHoverTextColor() {
      return 'hover:text-black';
    }
  },
  methods: {
  tabClass(title) {
    if (this.tabStyle === 'underline') {
      return [
        this.baseTabClass,
        title === this.selectedTitle ? (this.isDarkMode ? 'text-white' : 'text-black') : 'text-teal-700',
        title === this.selectedTitle ? this.selectedUnderlineClass : this.underlineClass,
        title !== this.selectedTitle ? this.selectedHoverTextColor : ''
      ];
    } else if (this.tabStyle === 'default') {
      return [
        this.baseTabClass,
        title === this.selectedTitle ? '' : ''
      ];
    } else {
      return [
        this.baseTabClass,
        title === this.selectedTitle ? this.selectedTextColor : this.unselectedTextColor,
        title === this.selectedTitle ? this.selectedBackgroundClass : this.backgroundClass,
        title !== this.selectedTitle ? this.selectedHoverTextColor : '',
        this.borderRadiusClass
      ];
    }
  },
  linkClass(title) {
    if (this.tabStyle === 'default') {
      return [
        title === this.selectedTitle ? this.selectedTabClass : this.unselectedTabClass
      ];
    } else {
      return [];
    }
  },
}
}
</script>

<style scoped>
/* Add styles for selected and unselected text colors */
.dark .text-white {
  color: #ffffff; /* White text color in dark mode */
}

.dark .text-teal-700 {
  color: #4fd1c5; /* Teal text color in dark mode */
}
</style>
