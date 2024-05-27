<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-hidden h-screen w-screen bg-blue-100 dark:bg-gray-900">
    <button @click="toggleDarkMode" type="button" class="absolute top-1/2 left-1/2 bg-gray-800 hover:bg-blue-800 text-blue-200 font-bold py-2 px-4 rounded">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
    <transition-group name="notification" tag="div">
      <Notifications v-for="(notification, index) in notifications" :key="index" :type="notification.type" :notification_message="notification.message" :position="notification.position" @close="removeNotification(index)" />
    </transition-group>
  </div>
</template>

<script>
import Notifications from './components/NotificationsGroup.vue';

export default {
  name: 'AppNotifications',
  components: {
    Notifications
  },
  data() {
    return {
      isDarkMode: false,
      notifications: [
        { type: 'success', message: 'This is a success notification.', position: 'top-right' },
        { type: 'error', message: 'This is an error notification.', position: 'top-left' },
        { type: 'warning', message: 'This is a warning notification.', position: 'bottom-left' },
        { type: 'default', message: 'This is a default notification.', position: 'center' },
        { type: 'message', message: 'This is a message notification.', position: 'bottom-right' }
      ]
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    removeNotification(index) {
      this.notifications.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.dark {
  background-color: #091224;
  color: #ffffff;
}

.notification-enter-active, .notification-leave-active {
  transition: opacity 0.5s;
}
.notification-enter, .notification-leave-to {
  opacity: 0;
}
</style>
