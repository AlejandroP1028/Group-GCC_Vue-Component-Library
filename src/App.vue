<template>
  <div class="flex items-center justify-center h-screen w-screen">
    <ItemList />
  </div>
</template>

<script>
import ItemList from './components/ItemList.vue';

export default {
  name: 'App',
  components: {
    ItemList
  }
}
</script>