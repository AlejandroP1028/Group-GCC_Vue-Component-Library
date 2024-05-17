<!--HINDI ITO FINAL HUHE NAGTATRY TRY PA LANG ME-->
<template>
  <div class="p-4">
    <h1 class="text-2xl mb-4">List Group</h1>
    <h1 class="text-2xl mb-4">List of Items</h1>
    <ul class="list-disc pl-5 space-y-2">
      <li v-for="item in items" :key="item" class="bg-white p-2 rounded shadow">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
    };
  }
}
</script>

<style scoped>
li {
  transition: background-color 0.3s;
}

li:hover {
  background-color: #ebf8ff; 
}

li:focus {
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5); 
}
</style>
