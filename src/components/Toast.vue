<!-- src/components/Toast.vue -->
<template>
    <div v-if="visible" class="toast" :class="type">
      {{ message }}
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: 'info',
      },
      duration: {
        type: Number,
        default: 3000,
      },
    },
    data() {
      return {
        visible: false,
      };
    },
    watch: {
      message: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            this.showToast();
          }
        },
      },
    },
    methods: {
      showToast() {
        this.visible = true;
        setTimeout(() => {
          this.visible = false;
        }, this.duration);
      },
    },
  };
  </script>
  
  <style scoped>
  .toast {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    background-color: #333;
    color: white;
    border-radius: 5px;
    opacity: 0.9;
  }
  .toast.info {
    background-color: #2196F3;
  }
  .toast.success {
    background-color: #4CAF50;
  }
  .toast.error {
    background-color: #F44336;
  }
  .toast.warning {
    background-color: #FF9800;
  }
  </style>