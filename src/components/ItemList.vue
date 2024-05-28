<template>
  <div class="flex flex-col items-center h-full">
    <div v-if="type === 'unorderedicon'" class="rounded-lg shadow p-4 bg-blue-200 dark:bg-gray-800 mb-8" :style="{ width: containerWidth }">
      <ul class="max-w-md space-y-1 text-blue-800 list-inside dark:text-sky-400">
        <li v-for="(item, index) in items" :key="index" class="flex items-center">
          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          {{ item }}
        </li>
      </ul>
    </div>
    <div v-if="type === 'unorderedlist' && layout === 'horizontal'" class="rounded-lg shadow p-8 bg-blue-200 dark:bg-gray-800 mb-8" :style="{ width: containerWidth }">
      <ul class="list-disc space-x-6 text-blue-800 dark:text-sky-400 flex flex-wrap">
        <li v-for="(item, index) in items" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>

    <div v-else-if="type === 'unorderedlist' && layout === 'vertical'" class="rounded-lg shadow p-8 bg-blue-200 dark:bg-gray-800 mb-8" :style="{ width: containerWidth }">
      <ul class="list-disc space-y-2 text-blue-800 dark:text-sky-400">
        <li v-for="(item, index) in items" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>

    <div v-else-if="type === 'orderedlist' && layout === 'vertical'" class="rounded-lg shadow p-8 bg-blue-200 dark:bg-gray-800 mb-8" :style="{ width: containerWidth }">
      <div>
        <ol class="list-decimal space-y-2 text-blue-800 dark:text-sky-400">
          <li v-for="(item, index) in items" :key="index">
            {{ item }}
          </li>
        </ol>
      </div>
    </div>

    <div v-else-if="type === 'descriptionlist' && layout === 'vertical'" class="rounded-lg shadow-lg p-8 bg-blue-200 dark:bg-gray-800 mb-8" :style="{ width: containerWidth }">
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
      validator: value => ["unorderedlist", "orderedlist", "descriptionlist", "unorderedicon"].includes(value),
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
/* Scoped styles for this component only */
</style>

