<template>
  <div :class="['app-container', currentColor]">
    <BaylonButton @button-click="changeBackgroundColor"></BaylonButton>
  </div>
</template>

<script>
import BaylonButton from './components/BaylonButton.vue'; // Assuming the path is correct

export default {
  components: {
    BaylonButton
  },
  data() {
    return {
      currentColor: 'bg-gray-800' // Default background color
    };
  },
  methods: {
    changeBackgroundColor(color) {
      this.currentColor = `bg-${color}`;
    }
  }
}
</script>

<style>
.top-buttons {
  margin-top: 0;
}
/* Define Tailwind CSS classes if not already included */
:root {
  --color-blue-200: #bfdbfe;
  --color-sky-200: #bae6fd;
  --color-cyan-200: #a5f3fc;
  --color-teal-200: #99f6e4;
  --color-gray-800: #1f2937;
  --color-blue-400: #60a5fa;
  --color-sky-400: #38bdf8;
  --color-cyan-400: #22d3ee;
  --color-teal-400: #2dd4bf;
  --color-blue-500: #3b82f6;
  --color-sky-500: #0ea5e9;
  --color-cyan-500: #06b6d4;
  --color-teal-500: #14b8a6;
  --color-blue-600: #2563eb;
  --color-sky-600: #0284c7;
  --color-cyan-600: #0891b2;
  --color-teal-600: #0d9488;
  --color-blue-800: #1e3a8a;
  --color-sky-800: #075985;
  --color-cyan-800: #155e75;
  --color-teal-800: #115e59;
}

/* Tailwind-like utility classes */
.bg-blue-200 { background-color: var(--color-blue-200); }
.bg-sky-200 { background-color: var(--color-sky-200); }
.bg-cyan-200 { background-color: var(--color-cyan-200); }
.bg-teal-200 { background-color: var(--color-teal-200); }
.bg-gray-800 { background-color: var(--color-gray-800); }
.bg-blue-400 { background-color: var(--color-blue-400); }
.bg-sky-400 { background-color: var(--color-sky-400); }
.bg-cyan-400 { background-color: var(--color-cyan-400); }
.bg-teal-400 { background-color: var(--color-teal-400); }
.bg-blue-500 { background-color: var(--color-blue-500); }
.bg-sky-500 { background-color: var(--color-sky-500); }
.bg-cyan-500 { background-color: var(--color-cyan-500); }
.bg-teal-500 { background-color: var(--color-teal-500); }
.bg-blue-600 { background-color: var(--color-blue-600); }
.bg-sky-600 { background-color: var(--color-sky-600); }
.bg-cyan-600 { background-color: var(--color-cyan-600); }
.bg-teal-600 { background-color: var(--color-teal-600); }

.app-container {
  transition: background-color 0.3s ease;
  min-height: 100vh; /* Ensure it covers the full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

button {
  margin-bottom: 2rem; /* Increased margin-bottom */
  margin-right: 2rem; /* Increased margin-right */
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 2rem; /* Increased border radius */
  border: 2px solid transparent; /* Increased border width */
  text-align: center;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

button:nth-child(1) {
  color: var(--color-blue-800);
  background-color: var(--color-blue-200);
  border-color: var(--color-blue-800); /* Optional: matching border color */
}
button:nth-child(1):hover {
  background-color: var(--color-blue-400);
}

button:nth-child(2) {
  color: var(--color-sky-800);
  background-color: var(--color-sky-200);
  border-color: var(--color-sky-800); /* Optional: matching border color */
}
button:nth-child(2):hover {
  background-color: var(--color-sky-400);
}

button:nth-child(3) {
  color: var(--color-cyan-800);
  background-color: var(--color-cyan-200);
  border-color: var(--color-cyan-800); /* Optional: matching border color */
}
button:nth-child(3):hover {
  background-color: var(--color-cyan-400);
}

button:nth-child(4) {
  color: var(--color-teal-800);
  background-color: var(--color-teal-200);
  border-color: var(--color-teal-800); /* Optional: matching border color */
}
button:nth-child(4):hover {
  background-color: var(--color-teal-400);
}

button:nth-child(5) {
  color: white;
  background-color: var(--color-gray-800);
  border-color: var(--color-gray-800); /* Optional: matching border color */
}
button:nth-child(5):hover {
  background-color: var(--color-gray-700);
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  button:nth-child(1) {
    color: var(--color-blue-400);
    background-color: var(--color-blue-600);
  }
  button:nth-child(1):hover {
    background-color: var(--color-blue-500);
  }
  button:nth-child(2) {
    color: var(--color-sky-400);
    background-color: var(--color-sky-600);
  }
  button:nth-child(2):hover {
    background-color: var(--color-sky-500);
  }
  button:nth-child(3) {
    color: var(--color-cyan-400);
    background-color: var(--color-cyan-600);
  }
  button:nth-child(3):hover {
    background-color: var(--color-cyan-500);
  }
  button:nth-child(4) {
    color: var(--color-teal-400);
    background-color: var(--color-teal-600);
  }
  button:nth-child(4):hover {
    background-color: var(--color-teal-500);
  }
}
</style>
