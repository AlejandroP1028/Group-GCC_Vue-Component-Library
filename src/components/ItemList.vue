<template>
  <div class="h-full w-screen bg-blue-100">
    <div class="flex flex-col items-center justify-start h-full w-screen mt-7">
      <div class="text-justify mb-4 max-w-4xl">
        <h1 class="text-4xl mb-2 font-bold">List Group</h1>
        <p class="mb-4">
          The List Group Component is a versatile and crucial UI element for any web application, enabling developers to display a collection of items in an organized and attractive manner. Here are the various designs or formats a list can take:
        </p>
        <h1 class="text-2xl mb-2 font-bold">Basic</h1>
      </div>
      <div class="max-w-3xl w-full p-4 bg-white rounded-3xl shadow-lg">
        <ul class="border border-blue-300 rounded max-w-sm" :style="{ borderColor: colors[currentColorIndex] }" style="margin: 0 auto;">
          <li v-for="(item, index) in items" :key="item" class="p-4" :style="{ borderColor: colors[currentColorIndex], textAlign: textAlign }" :class="{ 'border-b': index !== items.length - 1 }">
            {{ item }}
          </li>
        </ul>
        <div class="flex justify-center mt-3">
          <button class="bg-blue-500 text-white px-4 py-2 mr-2 rounded hover:bg-blue-700" @click="changeColor">Change Color</button>
          <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" @click="changeAlignment">Change Alignment</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
      colors: ['#3498db', '#1d4ed8', '#1e3a8a'],
      currentColorIndex: 0,
      alignments: ['left', 'center', 'right'],
      currentAlignmentIndex: 0,
      textAlign: 'left'
    };
  },
  methods: {
    changeColor() {
      this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
    },
    changeAlignment() {
      this.currentAlignmentIndex = (this.currentAlignmentIndex + 1) % this.alignments.length;
      this.textAlign = this.alignments[this.currentAlignmentIndex];
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Roboto', sans-serif;
}
</style>
