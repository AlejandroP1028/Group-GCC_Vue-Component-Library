<template>
  <div>
    <!-- Dark/Light Mode Toggle -->
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" v-model="isChecked" class="sr-only peer" @change="toggleDarkMode">
      <div :class="toggleClass" class="relative mt-10 ml-20 w-11 h-6"></div>
      <span :class="spanClass">{{ isDarkMode ? 'Dark Mode' : 'Light Mode' }}</span>
    </label>

    <!-- Checked Toggle -->
    <label class="inline-flex items-center cursor-pointer mt-6">
      <input type="checkbox" value="" class="sr-only peer" checked>
      <div :class="toggleClass" class="relative mt-10 ml-20 w-11 h-6"></div>
      <span :class="spanClass">Checked Toggle</span>
    </label>

    <!-- Disabled Toggle -->
    <label class="inline-flex items-center cursor-pointer mt-6">
      <input type="checkbox" value="" class="sr-only peer" disabled>
      <div :class="toggleClass" class="relative mt-10 ml-20 w-11 h-6"></div>
      <span :class="spanClass">Disabled Toggle</span>
    </label>

    <!-- Disabled Checked Toggle -->
    <label class="inline-flex items-center cursor-pointer mt-6">
      <input type="checkbox" value="" class="sr-only peer" checked disabled>
      <div :class="toggleClass" class="relative mt-10 ml-20 w-11 h-6"></div>
      <span :class="spanClass">Disabled Checked</span>
    </label>
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
      isChecked: this.isDarkMode
    };
  },
  computed: {
    toggleClass() {
      return `
        bg-gray-200 
        peer-focus:outline-none 
        peer-focus:ring-4 
        peer-focus:ring-blue-300
        dark:peer-focus:ring-blue-800 
        rounded-full 
        peer
        dark:bg-blue-200
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
        relative 
        mt-10 
        ml-3 
        text-sm 
        font-medium 
        text-blue-200 
        dark:text-blue-400
      `;
    },
  },
  methods: {
    toggleDarkMode() {
      this.$emit('toggle-dark-mode');
    }
  },
  watch: {
    isDarkMode(newVal) {
      this.isChecked = newVal;
    }
  }
}
</script>

<style scoped>

</style>
