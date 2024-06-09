<template>
  <footer :class="footerClass">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023 <a class="hover:underline">{{ header }}</a>. All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
          <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
          <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
          <a href="#" class="hover:underline">Contact</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  props: {
    header: {
      type: String,
      default: 'GCC™'
    },
    type: {
      type: String,
      default: 'blue',
      validator: value => ['blue', 'sky', 'cyan', 'teal'].includes(value)
    }
  },
  computed: {
    footerClass() {
      const baseClass = 'w-full rounded-lg shadow';
      const typeClasses = {
        blue: 'bg-blue-200 dark:bg-blue-800',
        sky: 'bg-sky-200 dark:bg-sky-800',
        cyan: 'bg-cyan-200 dark:bg-cyan-800',
        teal: 'bg-teal-200 dark:bg-teal-800'
      };
      return `${baseClass} ${typeClasses[this.type]}`;
    }
  }
};
</script>

<style scoped>
</style>
