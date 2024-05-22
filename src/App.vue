<template>
  <div :class="['app-container', currentColor, { 'dark-mode': isDarkMode }]">
    <BaylonButton @button-click="changeBackgroundColor"></BaylonButton>
  </div>
</template>

<script>
import BaylonButton from './components/BaylonButton.vue';

export default {
  components: {
    BaylonButton
  },
  data() {
    return {
      currentColor: 'bg-gray-800', // Default background color
      isDarkMode: false // Initial dark mode state
    };
  },
  watch: {
    isDarkMode(newVal) {
      if (newVal) {
        this.currentColor = 'bg-dark-mode';
      } else {
        this.currentColor = 'bg-white'; // Change to white for light mode
      }
    }
  },
  methods: {
    changeBackgroundColor(color) {
      if (color === 'white' && !this.isDarkMode) {
        this.currentColor = 'bg-white';
      } else {
        this.currentColor = `bg-${color}`;
      }
    }
  }
}
</script>

<style>
.app-container {
  transition: background-color 0.3s ease;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  flex-direction: column;
}

.bg-blue-200 {
  background-color: #bfdbfe;
}

.bg-gray-800 {
  background-color: #1f2937;
}

.bg-dark-mode {
  background-color: #121212;
}

.bg-white {
  background-color: white;
}

.dark-mode {
  color: white;
}

.dark-mode .btn-primary {
  background-color: #3b82f6;
  color: #ffffff;
}

.dark-mode .btn-primary:hover {
  background-color: #2563eb;
}

.dark-mode .btn-secondary {
  background-color: #60a5fa;
  color: #ffffff;
}

.dark-mode .btn-secondary:hover {
  background-color: #3b82f6;
}

.dark-mode .btn-disabled {
  background-color: #a3bffa;
  color: #ffffff;
}

.dark-mode .dark-mode-toggle {
  background-color: #60a5fa;
}

.dark-mode .dark-mode-toggle:hover {
  background-color: #3b82f6;
}

.dark-mode .badge {
  background-color: #1e40af;
  color: #bfdbfe;
}

.dark-mode .icon {
  fill: #ffffff;
}
</style>
