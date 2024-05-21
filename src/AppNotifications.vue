<!--<template>
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
-->
<template>
  <Notifications type="danger" message="danger" position="top-right"></Notifications>
  <Notifications type="success" message="success" position="top-left"></Notifications>
  <Notifications type="warning" message="warning" position="bottom-right"></Notifications>

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