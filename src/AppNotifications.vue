<template>
    <div class="flex">
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
