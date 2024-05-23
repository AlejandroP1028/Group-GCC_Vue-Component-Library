<template>
  <div :class="{ 'dark': isDarkMode }">
    <ToggleComponent :isDarkMode="isDarkMode" @toggle-dark-mode="toggleDarkMode"/>
  </div>
</template>

<script>
import ToggleComponent from './components/ToggleComponent.vue';

export default {
  components: {
    ToggleComponent
  },
  data() {
    return {
      isDarkMode: false
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  }
}
</script>

<style>

</style>
