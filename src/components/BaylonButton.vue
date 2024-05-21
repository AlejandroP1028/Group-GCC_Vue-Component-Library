<template>
  <button @click="handleClick" :class="[buttonClass, modeClass]">
    <svg v-if="showIcon" class="w-3 h-3 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
    </svg>
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: 'Click Me'
    },
    type: {
      type: String,
      default: 'default'
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClass() {
      // Define Tailwind CSS classes based on button type
      switch (this.type) {
        case 'extra-small':
          return 'px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-600';
        case 'small':
          return 'px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-600';
        case 'base':
          return 'px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-600';
        case 'large':
          return 'px-5 py-3 text-base font-medium text-center inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-600';
        case 'extra-large':
          return 'px-6 py-3.5 text-base font-medium text-center inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-600';
        default:
          return '';
      }
    },
    modeClass() {
      // Define Tailwind CSS classes based on mode
      return this.$parent.isDarkMode ? 'dark-mode' : 'light-mode';
    }
  },
  methods: {
    handleClick() {
      // Emit an event with the type of button clicked
      this.$emit('background-change', this.type);
    }
  }
}
</script>

<style scoped>
/* Component-specific styles */
.light-mode {
  --bg-color: #E0E7FF; /* Light mode background color */
  --text-color: #1A202C; /* Light mode text color */
  --blue-color: #4299E1; /* Blue color for light mode */
  --sky-color: #90CDF4; /* Sky color for light mode */
  --cyan-color: #81E6D9; /* Cyan color for light mode */
  --teal-color: #4FD1C5; /* Teal color for light mode */
  --gray-color: #2D3748; /* Gray color for light mode */
}

.dark-mode {
  --bg-color: #1A202C; /* Dark mode background color */
  --text-color: #E0E7FF; /* Dark mode text color */
  --blue-color: #3182CE; /* Blue color for dark mode */
  --sky-color: #4299E1; /* Sky color for dark mode */
  --cyan-color: #38B2AC; /* Cyan color for dark mode */
  --teal-color: #319795; /* Teal color for dark mode */
}

/* For more prominent features */
.blue-500 {
  --prominent-color: #4299E1; /* Blue color */
}

.sky-500 {
  --prominent-color: #90CDF4; /* Sky color */
}

.cyan-500 {
  --prominent-color: #81E6D9; /* Cyan color */
}

.teal-500 {
  --prominent-color: #4FD1C5; /* Teal color */
}

.text-blue {
  --text-color: #4299E1; /* Blue text color */
}

.text-sky {
  --text-color: #90CDF4; /* Sky text color */
}

.text-cyan {
  --text-color: #81E6D9; /* Cyan text color */
}

.text-teal {
  --text-color: #4FD1C5; /* Teal text color */
}
</style>
