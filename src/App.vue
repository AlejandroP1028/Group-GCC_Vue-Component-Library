<template>
  <div id="app" class="overflow-x-hidden">
    <div class="p-4 w-full bg-blue-200 flex flex-row justify-between">
      <h1 class="ml-12 font-medium text-3xl"> GCC
      </h1>
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
  }
};
</script>

<style scoped>

</style>
