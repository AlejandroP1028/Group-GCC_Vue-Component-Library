<template>
  <Notifications type="success" notification_message ="This is a success notification." position="top-right"></Notifications>
  <Notifications type="error" notification_message ="This is an error notification." position="bottom-right"></Notifications>
  <Notifications type="warning" notification_message ="This is a warning notification" position="bottom-left"></Notifications>
  <Notifications type="default" notification_message ="This is a default notification" position="center"></Notifications>
</template>

<script>
import Notifications from './components/NotificationsGroup.vue';

export default {
name: 'AppNotifications',
components: {
  Notifications
}
}
</script>