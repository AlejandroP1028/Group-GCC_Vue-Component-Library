<!-- SNACKBAR COMPONENT STRUCTURE -->
<template>
  <div v-if="showSnackbar" :class="snackbarClasses">
    {{ message }}
    <button id="btn_dismiss" @click.stop="dismiss" class="ml-2 cursor-pointer underline">Remove</button>
  </div>
</template>

<script>
export default {
  name: 'SnackbarComponent',
  props: {
    isDarkMode: {
      type: Boolean,
      default: false
    },
    style: {
      type: String,
      default: "style1",
      validator(value){
        return ['style1', 'style2', 'style3', 'style4'].includes(value);
      }
    }
  },
  data() {
    return {
      showSnackbar: false,
      message: '',
      type: ''
    };
  },
  computed: {
    snackbarClasses() {
      const baseClasses = 'fixed bottom-5 left-1/2 transform -translate-x-1/2 p-4 rounded z-50';
      const lightModeClasses = {
        default: 'bg-blue-200',
        style1: 'bg-blue-100',
        style2: 'bg-blue-600',
        style3: 'bg-cyan-500'
      };
      const darkModeClasses = {
        default: 'bg-blue-800',
        style1: 'bg-sky-700',
        style2: 'bg-cyan-700',
        style3: 'bg-teal-700'
      };

      const modeClasses = this.isDarkMode ? darkModeClasses : lightModeClasses;
      return `${baseClasses} ${modeClasses[this.type] || modeClasses.default}`;
    }
  },
  methods: {
    show(message, type = 'default', duration = 5000) {
      this.message = message;
      this.type = type;
      this.showSnackbar = true;
      setTimeout(() => {
        this.close();
      }, duration);
    },
    close() {
      this.showSnackbar = false;
    },
    dismiss() {
      this.showSnackbar = false;
    }
  }
};
</script>
