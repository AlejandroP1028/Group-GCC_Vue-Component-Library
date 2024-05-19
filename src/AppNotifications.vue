<template>
    <div class="flex items-center justify-center h-screen w-screen">
      <Notifications />
    </div>
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
