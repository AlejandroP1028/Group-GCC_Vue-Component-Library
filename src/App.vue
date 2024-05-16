<template>
  <div class=" overflow-hidden bg-gray-100 h-screen w-screen">
    <alert_component msg="ooga booga 123" textColor="white" type="secondary" position="tc"></alert_component>
    <alert_component msg="ooga booga 123" textColor="white" type="secondary" position="lc"></alert_component>
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

