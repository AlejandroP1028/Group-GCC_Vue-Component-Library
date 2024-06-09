<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <div id="app" class="relative overflow-hidden" :class="isDark ? 'dark' : ''">
    <button v-on:click="toggleDarkMode" class="z-10 fixed bottom-0 right-0 m-16 px-4 py-2 rounded-lg hover:cursor-pointer bg-blue-400 dark:bg-gray-800">
      <i :class="[isDark ? 'fas fa-sun text-md' : 'fas fa-moon text-md','text-blue-200']"></i>
    </button>
    <div class="p-4 w-full bg-blue-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 flex flex-row items-center justify-between">
      <router-link to="/">
      <div class="flex flex-row items-center">
        <img src="./assets/gcc-logo.png" class="ml-4 h-20" alt="">
        <h1 class="font-medium hover:cursor-pointer text-3xl"> 
        GCC
      </h1>
      </div>
    </router-link>

      <div class="px-5 py-2.5 text-center inline-flex items-center">
        <NavDropdown/>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavDropdown from './components/NavDropdown.vue'

export default {
  name: 'App',
  components: {
    NavDropdown
  },
  data() {
    return {
      isDark: true,
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDark = !this.isDark
    }
  }
};
</script>

<style scoped>
</style>
