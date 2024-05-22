<template>
  <div :class="{ 'dark': isDarkMode }" class="h-screen w-screen items-center cursor-pointer" @click="toggleMode">
    <input 
      type="checkbox" 
      value="" 
      class="sr-only peer"
      v-model="isChecked"
    >
    <div :class="toggleClasses"></div>
    <span class="ms-3 text-sm font-medium font-sans absolute top-1/2 left-1/2 ml-20 transform -translate-x-1/2 -translate-y-1/2" :class="textClasses">{{ isDarkMode ? 'Dark Mode' : 'Light Mode' }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
      isDarkMode: false, // Initial state is light mode
    };
  },
  computed: {
    toggleClasses() {
      return {
        'absolute': true,
        'top-1/2':true,
        'left-1/2':true,
        'transform -translate-x-1/2 -translate-y-1/2':true,
        'w-11': true,
        'h-6': true,
        'rounded-full': true,
        'peer': true,
        'peer-focus:outline-none': true,
        'peer-focus:ring-4': true,
        'peer-focus:ring-blue-300': true,
        'dark:peer-focus:ring-blue-800': true,
        'peer-checked:after:translate-x-full': true,
        'rtl:peer-checked:after:-translate-x-full': true,
        'peer-checked:after:border-gray': true,
        'after:content-[""]': true,
        'after:absolute': true,
        'after:top-[2px]': true,
        'after:start-[2px]': true,
        'after:bg-white': true,
        'after:border-gray-300': true,
        'after:border': true,
        'after:rounded-full': true,
        'after:h-5': true,
        'after:w-5': true,
        'after:transition-all': true,
        'dark:border-blue-400': true,
        'peer-checked:bg-blue-200': this.isChecked
      };
    },
    textClasses() {
      return {
        'text-gray-300': !this.isChecked,
        'dark:text-gray-800': !this.isChecked,
        'text-blue-400': this.isChecked,
        'dark:text-blue-200': this.isChecked
      };
    }
  },
  watch: {
    isChecked(newVal) {
      this.isDarkMode = newVal;
    }
  },
  methods: {
    toggleMode() {
      this.isChecked = !this.isChecked;
      this.isDarkMode = this.isChecked;
    }
  }
};
</script>

<style scoped>
/* Dark mode styles */
.dark {
  background-color: #121212;
  color: #ffffff;
}
</style>
