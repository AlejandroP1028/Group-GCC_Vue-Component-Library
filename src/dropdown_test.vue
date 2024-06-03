<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-hidden h-screen w-screen bg-blue-50 dark:bg-blue-900 flex flex-col items-center justify-start">
    <button @click="toggleDarkMode" type="button" class="fixed bottom-4 right-4 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
    <div class="text-justify mb-4 max-w-4xl mt-20 relative">
      <h1 :class="['text-4xl', 'mb-2', 'font-bold', headingColor]">Dropdown</h1>
      <p :class="['mb-4', paragraphColor]">
        The Dropdown Component is a versatile element designed for displaying a list of options or actions in a toggleable menu. It supports different types of notifications such as success, error, warning, and info messages, making it essential for user interaction.
      </p>
      <div class="absolute w-full">
        <dropdown_component 
        type="teal" 
        size="w" 
        :menuItems="menuItems" 
        menuWidth="w-48" 
        menuAlignment="center"
        @list-item-click="handleListItemClick"
        @toggle-change="handleToggleChange"
        @checkbox-change="handleCheckboxChange"
        :bordered="true"
        />
      </div>
      <h1 :class="['text-2xl', 'mb-2', 'mt-4', 'font-bold', 'text-center', headingColor]">Dropdown Customizations</h1>
    </div>
  </div>
</template>

<script>
import dropdown_component from './components/Dropdown.vue';

export default {
  name: 'DropdownTest',
  components: {
    dropdown_component
  },
  data() {
    return {
      isDarkMode: false,
      headingColor: 'text-gray-900 dark:text-gray-100',
      paragraphColor: 'text-gray-700 dark:text-gray-300',
      menuItems: [
        { label: 'ackkkkkk', disabled: false, type: 'checkbox' },
        { label: 'whaaaaaaaa', disabled: false, type: 'checkbox' },
        { label: 'hmphhhhhh', disabled: false, divider: true, customMargin: '0.5', type: 'checkbox', toggleHandler: 'toggleDarkMode' },
        { label: 'reeeeeeeee', disabled: false, type: 'toggle' }
      ]
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    handleListItemClick(item) {
      console.log('List item clicked:', item.label);
    },
    handleToggleChange(item) {
      if(item.toggleHandler === 'toggleDarkMode'){
        this.toggleDarkMode();
      }
    },
    handleCheckboxChange(item) {
      if(item.toggleHandler === 'toggleDarkMode'){
        this.toggleDarkMode();
      }
    }
  }
}
</script>

<style scoped>
/* Dark mode styles */
.dark {
  background-color: #091224;
  color: #ffffff;
}
</style>
