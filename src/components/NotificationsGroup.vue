<template>
  <Transition name="fade">
    <div v-if="visible" :id="`toast-${type}`" class="flex items-center w-full max-w-xs p-4 mb-4 rounded-full shadow z-10" :class="[computedClass, notificationStyles.bg, notificationStyles.text]" role="alert">
      <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full" :class="notificationStyles.icon">
        <svg class="w-5 h-5 rounded-lg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path v-if="type === 'success'" d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          <path v-if="type === 'error'" d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
          <path v-if="type === 'warning'" d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
        </svg>
        <svg v-if="type === 'message'" class="w-5 h-5 rounded-lg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20" transform="rotate(45)">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9" fill="none"/>
        </svg>
      </div>
      <div class="ms-3 text-sm font-normal">
        {{ notification_message }}
      </div>
      <button v-if="showCloseButton" type="button" :class="closeButtonStyles" :data-dismiss-target="`#toast-${type}`" aria-label="Close" @click="hideNotification">
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" aria-hidden="true">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"/>
        </svg>
      </button>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "NotificationComponent",
  props: {
    type: {
      type: String,
      required: true,
      validator: (value) => ["success", "error", "warning", "default", "message", "BlueBorder", "CyanBorder", "SkyBorder", "TealBorder", "dismiss"].includes(value),
    },
    notification_message: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      default: 'bottom-right',
      validator: (value) => ['top-left', 'top-right', 'bottom-right', 'bottom-left', 'center', 'pTop-left', 'pTop-right', 'pBottom-right', 'pBottom-left', 'pCenter','centered'].includes(value),
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  computed: {
    computedClass() {
      const positionClass = {
        'top-right': 'top-4 right-4',
        'top-left': 'top-4 left-4',
        'bottom-right': 'bottom-4 right-4',
        'bottom-left': 'bottom-4 left-4',
        'center': 'top- left-1/2 transform -translate-x-1/2',
        'centered': 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
        'pTop-left': 'top-2 left-2',
        'pCenter': 'top-2 left-1/2 transform -translate-x-1/2',
        'pTop-right': 'top-2 right-2',
        'pBottom-left': 'bottom-0 left-2',
        'pBottom-right': 'bottom-0 right-2'
      };

      const positioningClass = this.position.startsWith('p') ? 'absolute' : 'fixed';
      return `${positioningClass} ${positionClass[this.position]}`;
    },
    notificationStyles() {
      const styles = {
        success: {
          bg: "bg-green-200 dark:bg-green-700",
          text: "text-green-800 dark:text-green-200",
          icon: "bg-green-100 dark:bg-green-800",
          close: "hover:bg-green-300 dark:hover:bg-green-600 focus:ring-green-300",
        },
        error: {
          bg: "bg-red-200 dark:bg-red-700",
          text: "text-red-800 dark:text-red-200",
          icon: "bg-red-100 dark:bg-red-800",
          close: "hover:bg-red-300 dark:hover:bg-red-600 focus:ring-red-300",
        },
        warning: {
          bg: "bg-yellow-200 dark:bg-yellow-700",
          text: "text-yellow-800 dark:text-yellow-200",
          icon: "bg-yellow-100 dark:bg-yellow-800",
          close: "hover:bg-yellow-300 dark:hover:bg-yellow-600 focus:ring-yellow-300",
        },
        default: {
          bg: "bg-blue-200 dark:bg-blue-800",
          text: "text-blue-800 dark:text-blue-200",
          icon: "",
          close: "hover:bg-blue-300 dark:hover:bg-blue-600 focus:ring-blue-300",
        },
        dismiss: {
          bg: "bg-blue-200 dark:bg-blue-800",
          text: "text-blue-800 dark:text-blue-200",
          icon: "",
          close: "hover:bg-blue-300 dark:hover:bg-blue-600 focus:ring-blue-300",
        },
        message: {
          bg: "bg-blue-200 dark:bg-blue-800",
          text: "text-blue-800 dark:text-blue-200",
          icon: "",
          close: "hover:bg-blue-300 dark:hover:bg-blue-600 focus:ring-blue-300",
        },
        BlueBorder: {
          bg: "bg-blue-200 dark:bg-blue-700 dark:border-blue-300 border border-blue-800",
          text: "text-blue-800 dark:text-blue-200",
          icon: "",
        },
        CyanBorder: {
          bg: "bg-cyan-100 dark:bg-cyan-700 dark:border-cyan-300 border border-cyan-800",
          text: "text-cyan-800 dark:text-cyan-200",
          icon: "",
        },
        SkyBorder: {
          bg: "bg-sky-100 dark:bg-sky-700 dark:border-sky-300 border border-sky-800",
          text: "text-sky-800 dark:text-sky-200",
          icon: "",
        },
        TealBorder: {
          bg: "bg-teal-100 dark:bg-teal-700 dark:border-teal-300 border border-teal-800",
          text: "text-teal-800 dark:text-teal-200",
          icon: "",
        }
      };
      return styles[this.type];
    },
    closeButtonStyles() {
      return [
        "ms-auto",
        "-mx-1.5",
        "-my-1.5",
        "rounded-lg",
        "focus:ring-2",
        "p-1.5",
        "inline-flex",
        "items-center",
        "justify-center",
        "h-8",
        "w-8",
        this.notificationStyles.close,
      ];
    },
    showCloseButton() {
      return !["default", "BlueBorder", "CyanBorder", "SkyBorder", "TealBorder"].includes(this.type);
    }
  },
  methods: {
    hideNotification() {
      this.visible = false;
    },
  },
  mounted() {
    if (["default", "BlueBorder", "CyanBorder", "TealBorder", "SkyBorder"].includes(this.type)) {
      setTimeout(() => {
        this.visible = false;
      }, 5000);
    }
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
