<template>
  <div class="flex flex-col items-center h-full">
    <div v-if="type === 'unorderedlist'" class="rounded-lg shadow p-4 bg-blue-200 dark:bg-gray-800 mb-8">
      <h2 class="mb-2 text-lg font-semibold text-blue-900 dark:text-sky-400">Unordered List:</h2>
      <ul class="max-w-md space-y-1 text-blue-800 list-disc list-inside dark:text-sky-400">
        <li v-for="(item, index) in items" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>

    <div v-else-if="type === 'orderedlist'" class="rounded-lg shadow p-4 bg-blue-200 dark:bg-gray-800 mb-8">
      <h2 class="mb-2 text-lg font-semibold text-blue-900 dark:text-sky-400">Ordered List:</h2>
      <ol class="max-w-md space-y-1 text-blue-800 list-decimal list-inside dark:text-sky-400">
        <li v-for="(item, index) in items" :key="index">
          {{ item }}
        </li>
      </ol>
    </div>

    <div v-else-if="type === 'descriptionlist'" class="rounded-lg shadow-lg p-4 bg-blue-200 dark:bg-gray-800 mb-8">
      <div class="max-w-md text-blue-900 divide-y divide-blue-300 dark:text-sky-400 dark:divide-gray-700">
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
  },
};
</script>
