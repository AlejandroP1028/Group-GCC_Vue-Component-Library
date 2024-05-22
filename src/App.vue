<template>
  <div class="min-h-screen flex justify-center items-center">
    <div :class="bgClasses">
      <ToggleComponent />
      <button @click="resetMode" class="mt-3 px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-md hover:bg-gray-400 hover:text-gray-900 focus:outline-none focus:bg-gray-400 focus:text-gray-900">Reset</button>
    </div>
  </div>
</template>

<script>
import ToggleComponent from "./components/ToggleComponent.vue";

export default {
  components: {
    ToggleComponent
  },
  data() {
    return {
      isDefaultMode: true
    };
  },
  computed: {
    bgClasses() {
      return {
        'bg-blue-200': !this.isDefaultMode && !this.isChecked,
        'bg-blue-400': !this.isDefaultMode && this.isChecked,
        'bg-white': this.isDefaultMode,
        'text-blue-400': !this.isDefaultMode && !this.isChecked,
        'text-blue-200': !this.isDefaultMode && this.isChecked,
        'text-gray-800': this.isDefaultMode,
        'dark:text-gray-800': this.isDefaultMode,
        'dark:bg-blue-400': this.isDefaultMode && this.isChecked,
        'dark:bg-blue-200': this.isDefaultMode && !this.isChecked,
        'dark:text-blue-200': this.isDefaultMode && this.isChecked,
        'dark:text-blue-400': this.isDefaultMode && !this.isChecked
      }
    }
  },
  methods: {
    resetMode() {
      this.isDefaultMode = true;
    }
  }
};
</script>
