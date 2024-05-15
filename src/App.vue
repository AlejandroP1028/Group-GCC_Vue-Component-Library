<template>
  <div class="bg-gray-100 h-screen w-screen overflow-hidden">
    <alert_component msg="ooga booga 123" ></alert_component>
  </div>
</template>

<script>
import alert_component from './components/Alert.vue';

export default {
  name: 'App',
  components: {
    alert_component
  }
}
</script>

