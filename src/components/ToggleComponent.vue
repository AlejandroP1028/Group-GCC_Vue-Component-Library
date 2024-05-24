<template>
  <div>
    <!-- First Row: Standard Toggles -->
    <div class="flex flex-wrap justify-center">
      <label v-for="toggle in standardToggles" :key="toggle.label" class="inline-flex items-center cursor-pointer mt-6 me-6">
        <input type="checkbox" class="sr-only peer" :disabled="toggle.disabled" :checked="toggle.checked" @change="toggleDarkMode">
        <div :class="standardToggleClass" class="relative w-11 h-6"></div>
        <span :class="spanClass">{{ toggle.label }}</span>
      </label>
    </div>

    <!-- Second Row: Colored Toggles -->
    <div class="mt-6 flex flex-wrap justify-center">
      <label v-for="(color, index) in colors" :key="index" class="inline-flex items-center cursor-pointer me-5">
        <input type="checkbox" class="sr-only peer" :checked="isDarkMode" @change="toggleDarkMode">
        <div :class="colorToggleClass(color)" class="relative w-11 h-6"></div>
        <span :class="spanClass">{{ color.charAt(0).toUpperCase() + color.slice(1) }}</span>
      </label>
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
    };
  },
  computed: {
    standardToggles() {
      return [
        { label: this.isDarkMode ? 'Dark Mode' : 'Light Mode', checked: this.isDarkMode },
        { label: 'Checked Toggle', checked: true },
        { label: 'Disabled Toggle', disabled: true },
        { label: 'Disabled Checked', checked: true, disabled: true }
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
        ml-3 
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
    toggleDarkMode(event) {
      this.$emit('toggle-dark-mode', event.target.checked);
    }
  },
  watch: {
    isDarkMode(newVal) {
      // Update standardToggles array when isDarkMode changes
      this.standardToggles[0].label = newVal ? 'Dark Mode' : 'Light Mode';
      this.standardToggles[0].checked = newVal;
    }
  }
}
</script>

<style scoped>
/* Your existing scoped styles */
</style>
