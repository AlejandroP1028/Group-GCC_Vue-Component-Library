<!--<template>
  <div :class="[pageBackground, textColor]">
    <div class="flex flex-col items-center justify-start h-screen w-screen mt-7">
      <div :class="['w-full', 'max-w-xl', 'p-4', 'rounded-3xl', 'shadow-xl', containerBackground]">
        <div class="flex justify-center flex-wrap">
          <button class="border mt-4 mb-4 px-4 py-2 mr-2 rounded-3xl hover:bg-blue-300 border-blue-800" @click="showNotification('Notification Light', 'This is a notification in light mode.', 'light')">Notification Light</button>
          <button class="mt-4 mb-4 px-4 py-2 mr-2 rounded-3xl hover:bg-blue-900 bg-gray-800 text-sky-400" @click="showNotification1('Notification Dark', 'This is a notification in dark mode.', 'dark')">Notification Dark</button>
          <button class="border mt-2 mb-2 px-4 py-2 mr-2 rounded-3xl hover:bg-blue-300 border-blue-800" @click="showPositionNotification('Notification', 'This is a top right notification.', 'tr')">Top Right</button>
          <button class="border mt-2 mb-2 px-4 py-2 mr-2 rounded-3xl hover:bg-blue-300 border-blue-800" @click="showPositionNotification('Notification', 'This is a top left notification.', 'tl')">Top Left</button>
          <button class="border mt-2 mb-2 px-4 py-2 mr-2 rounded-3xl hover:bg-blue-300 border-blue-800" @click="showPositionNotification('Notification', 'This is a bottom right notification.', 'lr')">Bottom Right</button>
          <button class="border mt-2 mb-2 px-4 py-2 mr-2 rounded-3xl hover:bg-blue-300 border-blue-800" @click="showPositionNotification('Notification', 'This is a bottom left notification.', 'll')">Bottom Left</button>
          <button class="border mt-2 mb-2 px-4 py-2 mr-2 rounded-3xl hover:bg-blue-300 border-blue-800" @click="showPositionNotification('Notification', 'This is a center notification.', 'tc')">Center</button>
          <button class="border mt-2 mb-2 px-4 py-2 mr-2 rounded-3xl hover:bg-blue-300 border-blue-800" @click="showPositionNotification('Notification Icon Mail', 'This is a mail notification.', 'tr')">Notification Icon Mail</button>
          <button class="border mt-2 mb-2 px-4 py-2 mr-2 rounded-3xl hover:bg-blue-300 border-blue-800" @click="showPositionNotification('Notification Icon Error', 'This is an error notification.', 'tl')">Notification Icon Error</button>
          <button class="border mt-2 mb-2 px-4 py-2 mr-2 rounded-3xl hover:bg-blue-300 border-blue-800" @click="showPositionNotification('Notification Icon Chat', 'This is a chat notification', 'lr')">Notification Icon Chat</button>
        </div>
      </div>
      <div class="notification-container">
        <div v-for="notification in notifications" :key="notification.id" 
             :class="['notification', notification.type]" 
             v-show="notification.visible" 
             :style="notificationStyle(notification.position)" 
             @transitionend="removeNotification(notification.id)">
          <strong>{{ notification.title }}</strong>: {{ notification.text }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      notifications: [],
      notificationId: 0,
      darkMode: false,
      pageBackground: 'bg-blue-200',
      textColor: 'text-blue-800',
      headingColor: 'text-blue-800',
      paragraphColor: 'text-blue-800',
      containerBackground: 'bg-blue-100',
    };
  },
  methods: {
    showNotification(title, text, type = null) {
      const notification = {
        id: this.notificationId++,
        title,
        text,
        type,
        position: 'tl',
        visible: true,
      };

      this.notifications.push(notification);
      this.updateStyles(type);

      setTimeout(() => {
        this.fadeOutNotification(notification.id);
      }, 2000);
    },
    showNotification1(title, text) {
      const notification = {
        id: this.notificationId++,
        title,
        text,
        type: 'dark',
        position: 'tr',
        visible: true,
      };

      this.notifications.push(notification);
      this.updateStyles('dark');
      this.darkMode = true;

      setTimeout(() => {
        this.fadeOutNotification(notification.id);
      }, 2000);
    },
    showPositionNotification(title, text, position) {
      const notificationType = this.darkMode ? 'dark' : 'light';
      const notification = {
        id: this.notificationId++,
        title,
        text,
        type: notificationType,
        position,
        visible: true,
      };

      this.notifications.push(notification);

      setTimeout(() => {
        this.fadeOutNotification(notification.id);
      }, 2000);
    },
    updateStyles(type) {
      if (type === 'dark') {
        this.pageBackground = 'bg-gray-800';
        this.textColor = 'text-sky-400';
        this.headingColor = 'text-sky-400';
        this.paragraphColor = 'text-sky-400';
        this.containerBackground = 'bg-gray-700';
        this.darkMode = true;
      } else if (type === 'light') {
        this.pageBackground = 'bg-blue-200';
        this.textColor = 'text-blue-800';
        this.headingColor = 'text-blue-800';
        this.paragraphColor = 'text-blue-800';
        this.containerBackground = 'bg-blue-100';
        this.darkMode = false;
      }
    },
    fadeOutNotification(id) {
      const notification = this.notifications.find(notification => notification.id === id);
      if (notification) {
        notification.visible = false;
        setTimeout(() => {
          this.removeNotification(id);
        }, 1500);
      }
    },
    removeNotification(id) {
      this.notifications = this.notifications.filter(notification => notification.id !== id);
    },
    notificationStyle(position) {
      const positionClasses = {
        tl: { top: '4px', left: '4px' },
        tc: { top: '4px', left: '50%', transform: 'translateX(-50%)' },
        tr: { top: '4px', right: '4px' },
        ll: { bottom: '4px', left: '4px' },
        lc: { bottom: '4px', left: '50%', transform: 'translateX(-50%)' },
        lr: { bottom: '4px', right: '4px' }
      };

      const baseStyle = {
        position: 'fixed',
        transition: 'opacity 0.5s ease-in-out',
        opacity: 1
      };

      return { ...baseStyle, ...positionClasses[position] };
    }
  }
};
</script>
<style>
.notification-container {
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 9999;
}
.notification {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid;
  border-radius: 5px;
  transition: opacity 0.5s;
}
.notification.dark {
  background-color: #1f2937;
  border-color: #38BDF8;
  border-radius: 35px;
  padding: 20px;
  margin-top: 10px;
  margin: 10px;
  color: #38BDF8;
}
.notification.light {
  border-color: #1e3a8a;
  border-radius: 35px;
  color: #1e3a8a;
  padding: 20px;
  margin-top: 10px;
  margin: 10px;
}
</style>
-->
<template>
  <div
    :id="`toast-${type}`"
    class="fixed flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
    :class="positionClass"
    role="alert"
  >
    <div
      :class="[
        'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg',
        iconBgClass,
        iconTextClass,
      ]"
    >
      <component :is="iconComponent" class="w-5 h-5" aria-hidden="true" />
      <span class="sr-only">{{ iconLabel }}</span>
    </div>
    <div class="ms-3 text-sm font-normal">{{ message }}</div>
    <button
      type="button"
      class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      :data-dismiss-target="`#toast-${type}`"
      aria-label="Close"
    >
      <span class="sr-only">Close</span>
      <svg
        class="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "ToastNotification",
  props: {
    type: {
      type: String,
      required: true,
      validator: (value) => ["success", "danger", "warning"].includes(value),
    },
    message: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      default: "bottom-right",
      validator: (value) => ["top-left", "top-right", "bottom-left", "bottom-right"].includes(value),
    },
  },
  computed: {
    iconComponent() {
      const icons = {
        success: "SuccessIcon",
        danger: "DangerIcon",
        warning: "WarningIcon",
      };
      return icons[this.type];
    },
    iconLabel() {
      const labels = {
        success: "Check icon",
        danger: "Error icon",
        warning: "Warning icon",
      };
      return labels[this.type];
    },
    iconBgClass() {
      const bgClasses = {
        success: "bg-green-100 dark:bg-green-800",
        danger: "bg-red-100 dark:bg-red-800",
        warning: "bg-orange-100 dark:bg-orange-700",
      };
      return bgClasses[this.type];
    },
    iconTextClass() {
      const textClasses = {
        success: "text-green-500 dark:text-green-200",
        danger: "text-red-500 dark:text-red-200",
        warning: "text-orange-500 dark:text-orange-200",
      };
      return textClasses[this.type];
    },
    positionClass() {
      const positions = {
        "top-left": "top-4 left-4",
        "top-right": "top-4 right-4",
        "bottom-left": "bottom-4 left-4",
        "bottom-right": "bottom-4 right-4",
      };
      return positions[this.position];
    },
  },
};
</script>

<style scoped>
</style>
