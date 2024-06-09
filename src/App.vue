<template>
  <div class="bg-gray-100 h-screen w-screen overflow-hidden">
    <dropdown_component type="default" size="w" :isDark="false" bordered="true"></dropdown_component>
  </div>
</template>

<script>
import dropdown_component from './components/Dropdown.vue';

export default {
  name: 'App',
  components: {
    dropdown_component
  }
}
</script>