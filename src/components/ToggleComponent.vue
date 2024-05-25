<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="flex flex-col items-center">
      <!-- First Row -->
      <div class="flex flex-wrap justify-center space-x-6 mb-6">
        <label v-for="toggle in standardToggles" :key="toggle.label" class="inline-flex items-center cursor-pointer">
          <input type="checkbox" class="sr-only peer" :disabled="toggle.disabled" :checked="toggle.checked" @change="toggleDarkMode($event, toggle.label)">
          <div :class="standardToggleClass" class="relative w-11 h-6"></div>
          <span :class="spanClass">{{ toggle.label }}</span>
        </label>
      </div>

      <!-- Second Row -->
      <div class="flex flex-wrap justify-center space-x-6 mb-6">
        <label v-for="(color, index) in colors" :key="index" class="inline-flex items-center cursor-pointer">
          <input type="checkbox" class="sr-only peer" :checked="coloredToggleStates[index]" @change="toggleColoredToggle(index)">
          <div :class="colorToggleClass(color)" class="relative w-11 h-6"></div>
          <span :class="spanClass">{{ color.charAt(0).toUpperCase() + color.slice(1) }}</span>
        </label>
      </div>

      <!-- Third Row -->
      <div class="flex flex-wrap justify-center space-x-6">
        <label v-for="toggle in newToggles" :key="toggle.label" class="inline-flex items-center mb-5 cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer">
          <div :class="toggle.class" class="relative"></div>
          <span :class="spanClass">{{ toggle.label }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isDarkMode: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      colors: ['blue', 'sky', 'cyan', 'teal'],
      coloredToggleStates: [true, true, true, true] 
    };
  },
  computed: {
    standardToggles() {
      return [
        { label: 'Dark Mode', checked: this.isDarkMode },
        { label: 'Checked Toggle', checked: true },
        { label: 'Disabled Toggle', disabled: true },
        { label: 'Disabled Checked', checked: true, disabled: true }
      ];
    },
    newToggles() {
      return [
        { label: 'Small toggle', class: 'relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600' },
        { label: 'Default toggle', class: 'relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600' },
        { label: 'Large toggle', class: 'relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600' }
      ];
    },
    standardToggleClass() {
      return `
        bg-gray-200 
        peer-focus:outline-none 
        peer-focus:ring-4 
        peer-focus:ring-blue-300
        dark:peer-focus:ring-blue-800 
        rounded-full 
        peer
        dark:bg-gray-700
        peer-checked:after:translate-x-full 
        rtl:peer-checked:after:-translate-x-full
        peer-checked:after:border-white 
        after:content-[''] 
        after:absolute 
        after:top-[2px]
        after:start-[2px] 
        after:bg-white 
        after:border-gray-300 
        after:border
        after:rounded-full 
        after:h-5 after:w-5 
        after:transition-all 
        dark:border-gray-600
        peer-checked:bg-blue-600
      `;
    },
    spanClass() {
      return `
        ms-3
        text-sm 
        font-medium 
        dark:text-blue-400
      `;
    }
  },
  methods: {
    colorToggleClass(color) {
      const colorClassMap = {
        blue: 'bg-blue-500 peer-checked:bg-blue-500',
        sky: 'bg-sky-500 peer-checked:bg-sky-500',
        cyan: 'bg-cyan-500 peer-checked:bg-cyan-500',
        teal: 'bg-teal-500 peer-checked:bg-teal-500'
      };
      return `
        bg-gray-200 
        peer-focus:outline-none 
        peer-focus:ring-4 
        peer-focus:ring-${color}-300
        dark:peer-focus:ring-${color}-800 
        rounded-full 
        peer
        dark:bg-gray-700
        peer-checked:after:translate-x-full 
        rtl:peer-checked:after:-translate-x-full
        peer-checked:after:border-white 
        after:content-[''] 
        after:absolute 
        after:top-[2px]
        after:start-[2px] 
        after:bg-white 
        after:border-gray-300 
        after:border
        after:rounded-full 
        after:h-5 after:w-5 
        after:transition-all 
        dark:border-gray-600
        ${colorClassMap[color]}
      `;
    },
    toggleDarkMode(event, label) {
      if (label === 'Dark Mode') {
        this.$emit('toggle-dark-mode', event.target.checked);
      }
    },
    toggleColoredToggle(index) {
      this.coloredToggleStates[index] = !this.coloredToggleStates[index];
    }
  }
}
</script>

<style scoped>

</style>
