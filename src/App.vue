<template>
  <div :class="{'dark': isDarkMode}" class="overflow-auto h-screen w-screen bg-gray-50 dark:bg-gray-900 dark:text-white transition-colors duration-300">
    <div class="flex items-center justify-center min-h-screen">
      <div class="flex flex-col items-center">
        <div class="flex flex-col my-4 items-center">
          <h1 class="text-gray-900 dark:text-gray-200 mb-4 font-medium">Checked and Disabled</h1>
          <div class="flex flex-wrap justify-center space-x-6 mb-6">
            <ToggleComponent
              label="Dark Mode"
              :changeFunc="toggleDarkMode"
              size="default"
              :isChecked="isDarkMode"
              type="blue"
            />
            <ToggleComponent
              label="Another Toggle"
              size="default"
              type="blue"
              :isChecked="false"
            />
            <ToggleComponent
              label="Disabled Toggle"
              size="default"
              type="blue"
              :disabled="true"
              :isChecked="false"
            />
            <ToggleComponent
              label="Disabled Toggle"
              size="default"
              type="blue"
              :disabled="true"
              :isChecked="true"
            />
          </div>
        </div>

        <div class="flex flex-col my-4 items-center">
          <h1 class="text-gray-900 dark:text-gray-200 mb-4 font-medium">Colors</h1>
          <div class="flex flex-wrap justify-center space-x-6 mb-6">
            <ToggleComponent
              label="Blue (default)"
              size="default"
              type="blue"
            />
            <ToggleComponent
              label="Sky"
              size="default"
              type="sky"
            />
            <ToggleComponent
              label="Cyan"
              size="default"
              type="cyan"
            />
            <ToggleComponent
              label="Teal"
              size="default"
              type="teal"
            />
          </div>
        </div>

        <div class="flex flex-col my-4 items-center">
          <h1 class="text-gray-900 dark:text-gray-200 mb-4 font-medium">Sizes</h1>
          <div class="flex flex-wrap justify-center space-x-6 mb-6">
            <ToggleComponent
              label="Small"
              size="small"
              type="blue"
            />
            <ToggleComponent
              label="Default"
              size="default"
              type="blue"
            />
            <ToggleComponent
              label="Large"
              size="large"
              type="blue"
            />
          </div>
        </div>
      </div>
    </div>
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
  },
};
</script>

<style scoped>
.dark {
  background-color: #121212;
  color: #ffffff;
}
</style>