<template>
  <div class="button-container">
    <button 
      v-for="color in colors" 
      :key="color.name"
      @click="changeColor(color.background)"
      :class="['btn-primary', color.class]">
      {{ color.name }}
    </button>
    <button type="button" class="btn-primary" @click="showMessages">
      Messages
      <span class="badge">2</span>
    </button>
    <button type="button" class="btn-primary" @click="showNotifications">
      Notifications
      <span class="badge">3</span>
    </button>
    <button type="button" class="btn-primary" @click="showAlerts">
      Alerts
      <span class="badge">1</span>
    </button>
  
    <button type="button" class="btn-primary">
      <div class="button-content">
        <svg class="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
          <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
        </svg>
        Buy now
      </div>
    </button>
    <button type="button" class="btn-primary">
      <div class="button-content">
        Choose plan
        <svg class="icon rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </div>
    </button>
    
    <button type="button" class="btn-disabled" disabled>
      Disabled button
    </button>
    
    <button @click="toggleLightMode" :class="['btn-primary', isDarkMode ? 'btn-light-mode' : 'btn-dark-mode']">
      <span v-if="isDarkMode">🌞 Light Mode</span>
      <span v-else>🌙 Dark Mode</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        { name: 'Blue', class: 'bg-blue-200 text-blue-800', background: 'blue-200' }
      ]
    };
  },
  computed: {
    isDarkMode() {
      return this.$root.isDarkMode;
    }
  },
  methods: {
    changeColor(color) {
      this.$emit('button-click', color);
    },
    showMessages() {
      alert('You have a new message!');
    },
    showNotifications() {
      alert('You have a new notification!');
    },
    showAlerts() {
      alert('You have a new alert!');
    },
    toggleLightMode() {
      this.$root.isDarkMode = !this.$root.isDarkMode;
      if (!this.isDarkMode) {
        this.$emit('button-click', 'white'); // Emit 'white' when toggling to light mode
      } else {
        this.$emit('button-click', 'gray-800'); // Emit default dark mode color
      }
    }
  }
}
</script>

<style scoped>
.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  margin-bottom: 1rem;
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 2rem;
  border: 2px solid transparent;
  text-align: center;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-primary {
  background-color: #1d4ed8;
  color: #ffffff;
}

.btn-primary:hover {
  background-color: #1e40af;
}

.btn-secondary {
  background-color: #3b82f6;
  color: #ffffff;
}

.btn-secondary:hover {
  background-color: #2563eb;
}

.btn-disabled {
  background-color: #93c5fd;
  color: #ffffff;
  cursor: not-allowed;
}

.btn-dark-mode {
  background-color: #1d4ed8;
}

.btn-light-mode {
  background-color: #2563eb;
}

.badge {
  background-color: #bfdbfe;
  color: #1e3a8a;
  border-radius: 9999px;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  margin-left: 0.5rem;
}

.icon {
  width: 1rem;
  height: 1rem;
}

.button-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; 
}
</style>
