<template>
  <div class="h-screen w-screen items-center cursor-pointer" @click="toggleMode">
    <input 
      type="checkbox" 
      value="" 
      class="sr-only peer"
      v-model="isChecked"
    >
    <div :class="toggleClasses"></div>
    <span class="ms-3 text-sm font-medium font-sans" :class="textClasses">{{ label }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
      label: "Toggle Mode"
    };
  },
  computed: {
    toggleClasses() {
      return {
        'relative': true,
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
        'peer-checked:after:border-white': true,
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
        'dark:border-gray-600': true,
        'peer-checked:bg-blue-600': this.isChecked
      }
    },
    textClasses() {
      return {
        'text-gray-300': !this.isChecked,
        'dark:text-gray-800': !this.isChecked,
        'text-blue-400': this.isChecked,
        'dark:text-blue-200': this.isChecked
      }
    }
  },
  methods: {
    toggleMode() {
      this.isChecked = !this.isChecked;
    }
  }
};
</script>
