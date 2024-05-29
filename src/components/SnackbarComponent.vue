<!--SNACKBAR COMPONENT STRUCTURE-->
<template>
  <div v-if="showSnackbar" :class="['snackbar', type, { 'dark': isDarkMode }]">
    {{ message }}
    <button id="btn_dismiss" @click.stop="dismiss">Remove</button>
  </div>
</template>

<script>
export default {
  name: 'SnackbarComponent',
  props: {
    isDarkMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showSnackbar: false,
      message: '',
      type: ''
    };
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

<style scoped>
/* SIZE & POSITIONING */
.snackbar {
  position: fixed;
  bottom: 20px;
  left: 10%;
  transform: translateX(-50%);
  padding: 15px 20px;
  border-radius: 3px;
  z-index: 9999;
}

/* LIGHT MODE STYLE */
.snackbar.default {
  background-color: #C3DDFD;
}
.snackbar.style1 {
  background-color: #bae6fd;
}
.snackbar.style2 {
  background-color: #3b82f6;
}
.snackbar.style3 {
  background-color: #06b6d4;
}

/* DARK MODE STYLE */
.dark .snackbar.default {
  background-color: #2563eb;
}
.dark .snackbar.style1 {
  background-color: #0284c7;
}
.dark .snackbar.style2 {
  background-color: #0891b2;
}
.dark .snackbar.style3 {
  background-color: #0d9488;
}

/* DISMISS BUTTON STYLE */
#btn_dismiss{
  margin-left: 10px;
  cursor: pointer;
  text-decoration:underline;
}
</style>
