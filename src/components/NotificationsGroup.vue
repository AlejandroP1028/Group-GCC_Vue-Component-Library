<template>
  <div :class="[pageBackground, textColor]">
    <div class="flex flex-col items-center justify-start h-screen w-screen mt-7">
      <div class="text-justify mb-4 max-w-4xl">
        <h1 :class="['text-4xl', 'mb-2', 'font-bold', headingColor]">Notifications</h1>
        <p :class="['mb-4', paragraphColor]">
          The notification component supports different types of notifications such as success, error, warning, and info messages, making it versatile and essential for user communication. Here are the various designs or formats a notification can take:
        </p>
        <h1 :class="['text-2xl', 'mb-2', 'mt-4', 'font-bold', 'text-center', headingColor]">Default Notifications</h1>
      </div>
      <div :class="['w-full', 'max-w-xl', 'p-4', 'rounded-3xl', 'shadow-xl', containerBackground]">
        <div class="flex justify-center flex-wrap">
          <button class="border mt-4 mb-4 border-blue-800 text-blue-800 px-4 py-2 mr-2 rounded hover:bg-blue-300" @click="showNotification('Notification Light', 'This is a notification in light mode.', 'light')">Notification Light</button>
          <button class="bg-gray-800 mt-4 mb-4 text-sky-400 px-4 py-2 mr-2 rounded hover:bg-blue-900" @click="showNotification('Notification Dark', 'This is a notification in dark mode.', 'dark')">Notification Dark</button>
        </div>
      </div>
      <div class="notification-container">
        <div v-for="notification in notifications" :key="notification.id" :class="['notification', notification.type]" v-show="notification.visible" :style="notification.style" @transitionend="removeNotification(notification.id)">
          <strong>{{ notification.title }}</strong>: {{ notification.text }}
        </div>
      </div>
      <div class="text-justify mb-4 max-w-4xl">
        <h1 :class="['text-2xl', 'mb-2', 'mt-4', 'font-bold', headingColor]">Notification Positions</h1>
      </div>
      <div :class="['w-full', 'max-w-xl', 'p-4', 'rounded-3xl', 'shadow-xl', containerBackground]">
        <div class="flex justify-center flex-wrap">
          <button class="border mt-2 mb-2 border-blue-800 text-blue-800 px-4 py-2 mr-2 rounded hover:bg-blue-300" @click="showPositionNotification('Notification', 'This is a top right notification.', 'light', 'top-right')">Top Right</button>
          <button class="border mt-2 mb-2 border-blue-800 text-blue-800 px-4 py-2 mr-2 rounded hover:bg-blue-300" @click="showPositionNotification('Notification', 'This is a top left notification.', 'light', 'top-left')">Top Left</button>
          <button class="border mt-2 mb-2 border-blue-800 text-blue-800 px-4 py-2 mr-2 rounded hover:bg-blue-300" @click="showPositionNotification('Notification', 'This is a bottom right notification.', 'light', 'bottom-right')">Bottom Right</button>
          <button class="border mt-2 mb-2 border-blue-800 text-blue-800 px-4 py-2 mr-2 rounded hover:bg-blue-300" @click="showPositionNotification('Notification', 'This is a bottom left notification.', 'light', 'bottom-left')">Bottom Left</button>
          <button class="border mt-2 mb-2 border-blue-800 text-blue-800 px-4 py-2 mr-2 rounded hover:bg-blue-300" @click="showPositionNotification('Notification', 'This is a center notification.', 'light', 'center')">Center</button>
        </div>
      </div>
      <div class="text-justify mb-4 max-w-4xl">
        <h1 :class="['text-2xl', 'mb-2', 'mt-4', 'font-bold', headingColor]">Notification Icons</h1>
      </div>
      <div :class="['w-full', 'max-w-xl', 'p-4', 'rounded-3xl', 'shadow-xl', containerBackground]">
        <div class="flex justify-center flex-wrap">
          <button class="border mt-2 mb-2 border-blue-800 text-blue-800 px-4 py-2 mr-2 rounded hover:bg-blue-300" @click="showPositionNotification('Notification', 'This is a top right notification.', 'light', 'top-right')">Notification Icon Mail</button>
          <button class="border mt-2 mb-2 border-blue-800 text-blue-800 px-4 py-2 mr-2 rounded hover:bg-blue-300" @click="showPositionNotification('Notification', 'This is a top left notification.', 'light', 'top-left')">Notification Icon Error</button>
          <button class="border mt-2 mb-2 border-blue-800 text-blue-800 px-4 py-2 mr-2 rounded hover:bg-blue-300" @click="showPositionNotification('Notification', 'This is a bottom right notification.', 'light', 'bottom-right')">Notification Icon Chat</button>
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
      timeoutId: null,
      pageBackground: 'bg-blue-200',
      headingColor: 'text-blue-800',
      paragraphColor: 'text-blue-800',
      containerBackground: 'bg-blue-100'
    };
  },
  methods: {
    showNotification(title, text, type = null) {
      const notification = {
        id: this.notificationId++,
        title,
        text,
        type,
        visible: true
      };

      this.notifications.unshift(notification);

      if (type === 'dark') {
        this.pageBackground = 'bg-gray-800';
        this.headingColor = 'text-sky-400';
        this.paragraphColor = 'text-sky-400';
        this.containerBackground = 'bg-gray-700';
      } else if (type === 'light') {
        this.pageBackground = 'bg-blue-200';
        this.headingColor = 'text-blue-800';
        this.paragraphColor = 'text-blue-800';
        this.containerBackground = 'bg-blue-100';
      }

      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      this.timeoutId = setTimeout(() => {
        this.removeOldestNotification();
      }, 2000);
    },
    showPositionNotification(title, text, type = null, position = 'top-left') {
      const notification = {
        id: this.notificationId++,
        title,
        text,
        type,
        position,
        visible: true
      };
      this.notifications.unshift(notification);

      if (type === 'dark') {
        this.pageBackground = 'bg-gray-800';
        this.headingColor = 'text-sky-400';
        this.paragraphColor = 'text-sky-400';
        this.containerBackground = 'bg-gray-700';
      } else if (type === 'light') {
        this.pageBackground = 'bg-blue-200';
        this.headingColor = 'text-blue-800';
        this.paragraphColor = 'text-blue-800';
        this.containerBackground = 'bg-blue-100';
      }

      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      this.timeoutId = setTimeout(() => {
        this.removeOldestNotification();
      }, 2000);
    },
    removeNotification(id) {
      this.notifications = this.notifications.filter(n => n.id !== id);
    },
    removeOldestNotification() {
      if (this.notifications.length > 0) {
        const oldestNotificationId = this.notifications[this.notifications.length - 1].id;
        this.removeNotification(oldestNotificationId);
        this.timeoutId = setTimeout(() => {
          this.removeOldestNotification();
        }, 1000);
      }
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
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: opacity 1s;
}
.notification.dark {
  background-color: #1f2937;
  border-color: #38BDF8;
  color: #38BDF8;
}
.notification.light {
  border-color: #1e3a8a;
  color: #1e3a8a;
}
</style>