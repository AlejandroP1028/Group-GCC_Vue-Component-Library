<template>
  <div class="flex flex-col items-center h-full">
    <div v-if="type === 'unorderedlist' && layout === 'horizontal'" class="rounded-lg shadow p-4 bg-blue-200 dark:bg-gray-800 mb-8" :style="{ width: containerWidth }">
      <h2 class="mb-2 text-lg font-semibold text-blue-900 dark:text-sky-400">Unordered List (Horizontal):</h2>
      <ul class="list-disc space-x-2 text-blue-800 dark:text-sky-400 flex flex-wrap">
        <li v-for="(item, index) in items" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>

    <div v-else-if="type === 'unorderedlist' && layout === 'vertical'" class="rounded-lg shadow p-4 bg-blue-200 dark:bg-gray-800 mb-8" :style="{ width: containerWidth }">
      <h2 class="mb-2 text-lg font-semibold text-blue-900 dark:text-sky-400">Unordered List (Vertical):</h2>
      <ul class="list-disc space-y-2 text-blue-800 dark:text-sky-400">
        <li v-for="(item, index) in items" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>

    <div v-else-if="type === 'orderedlist' && layout === 'vertical'" class="rounded-lg shadow p-4 bg-blue-200 dark:bg-gray-800 mb-8" :style="{ width: containerWidth }">
      <h2 class="mb-2 text-lg font-semibold text-blue-900 dark:text-sky-400">Ordered List (Vertical):</h2>
      <div>
        <ol class="list-decimal space-y-2 text-blue-800 dark:text-sky-400">
          <li v-for="(item, index) in items" :key="index">
            {{ item }}
          </li>
        </ol>
      </div>
    </div>

    <div v-else-if="type === 'descriptionlist' && layout === 'vertical'" class="rounded-lg shadow-lg p-4 bg-blue-200 dark:bg-gray-800 mb-8" :style="{ width: containerWidth }">
      <h2 class="mb-2 text-lg font-semibold text-blue-900 dark:text-sky-400">Description List (Vertical):</h2>
      <div class="text-blue-900 divide-y divide-blue-300 dark:text-sky-400 dark:divide-gray-700">
        <div class="flex flex-col pb-3" v-for="(item, index) in items" :key="index">
          <dt class="mb-1 text-blue-900 font-semibold md:text-lg dark:text-sky-300">{{ item.term }}</dt>
          <dd class="text-lg font-bold">{{ item.description }}</dd>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    items: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      required: true,
      validator: value => ["unorderedlist", "orderedlist", "descriptionlist"].includes(value),
    },
    layout: {
      type: String,
      default: 'vertical',
      validator: value => ['horizontal', 'vertical'].includes(value),
    },
  },
  data() {
    return {
      containerWidth: '400px'
    };
  },
};
</script>

<style scoped>
</style>
