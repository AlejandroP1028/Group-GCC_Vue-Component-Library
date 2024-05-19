<template>
  <div class="h-full w-screen bg-blue-100">
    <div class="flex flex-col items-center justify-start h-full w-screen mt-7">
      <div class="text-justify mb-4 max-w-4xl">
        <h1 class="text-4xl mb-2 font-bold">Notifications</h1>
        <p class="mb-4">
          The notification component supports different types of notifications such as success, error, warning, and info messages, making it versatile and essential for user communication. Here are the various designs or formats a notification can take:
        </p>
        <h1 class="text-2xl mb-2 font-bold">Default Notifications</h1>
      </div>
      <div class="max-w-3xl w-full p-4 bg-white rounded-3xl shadow-lg">
        <div class="flex justify-center">
          <button class="border border-blue-200 text-blue-900 px-4 py-2 mr-2 rounded hover:bg-blue-300 mb-2" @click="showNotification('Notification Light', 'This is a notification in light mode.')">Notification Light</button>
          <button class="bg-blue-900 text-white px-4 py-2 mr-2 rounded hover:bg-blue-400 mb-2" @click="showNotification('Notification Dark', 'This is a notification in dark mode.', 'dark')">Notification Dark</button>
          <button class="bg-blue-800 text-white px-4 py-2 mr-2 rounded hover:bg-blue-500 mb-2" @click="showNotification('Primary Notification', 'This is a primary notification.', 'success')">Notification Primary</button>
          <button class="bg-blue-700 text-white px-4 py-2 mr-2 rounded hover:bg-blue-600 mb-2" @click="showNotification('Success Notification', 'This is a success notification.', 'success')">Notification Success</button>
          <button class="bg-blue-600 text-white px-4 py-2 mr-2 rounded hover:bg-blue-700 mb-2" @click="showNotification('Danger Notification', 'This is a danger notification.', 'danger')">Notification Danger</button>
          <button class="bg-blue-500 text-white px-4 py-2 mr-2 rounded hover:bg-blue-800 mb-2" @click="showNotification('Warning Notification', 'This is a warning notification.', 'warning')">Notification Warning</button>
        </div>
      </div>
      <div class="notification-container">
        <div v-for="notification in notifications" :key="notification.id" :class="['notification', notification.type]" v-show="notification.visible" @transitionend="removeNotification(notification.id)">
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
      timeoutId: null
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
.notification.success {
  background-color: #d4edda;
  border-color: #c3e6cb;
  color: #155724;
}
.notification.danger {
  background-color: #f8d7da;
  border-color: #f5c6cb;
  color: #721c24;
}
.notification.warning {
  background-color: #fff3cd;
  border-color: #ffeeba;
  color: #856404;
}
.notification.dark {
  background-color: #343a40;
  border-color: #343a40;
  color: #fff;
}
</style>
