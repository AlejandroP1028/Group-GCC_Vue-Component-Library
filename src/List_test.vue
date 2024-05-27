<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-hidden w-screen dark:bg-gray-900">
    <button @click="toggleDarkMode" type="button" class="absolute bottom-1 right-1 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
    <div class="flex flex-col justify-center items-center h-full p-4 overflow-y-auto">
      <div class="mb-8 flex">
        <ItemList :items="List" type="unorderedlist" layout="horizontal" />
      </div>
      <div class="mb-8 flex">
        <ItemList :items="List" type="unorderedlist" layout="vertical" />
      </div>
      <div class="mb-8 flex">
        <ItemList :items="List" type="orderedlist" layout="horizontal" />
      </div>
      <div class="mb-8 flex">
        <ItemList :items="List" type="orderedlist" layout="vertical" />
      </div>
      <div class="flex">
        <ItemList :items="descriptionList" type="descriptionlist" layout="vertical" />
      </div>
    </div>
  </div>
</template>

<script>
import ItemList from './components/ItemList.vue';

export default {
  name: 'ListTest',
  components: {
    ItemList,
  },
  data() {
    return {
      isDarkMode: false,
      List: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
      ],
      descriptionList: [
        { term: 'Name', description: 'Juan Cutie' },
        { term: 'Address', description: 'Metro Manila, Philippines' },
        { term: 'Phone number', description: '+639781238891' }
      ],
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  }
}
</script>

<style>
.dark {
  background-color: #091224;
  color: #ffffff;
}
</style>
