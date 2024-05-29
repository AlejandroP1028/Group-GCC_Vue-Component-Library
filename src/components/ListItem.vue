<template>
    <div>
      <a
        :href="item.href || '#'"
        @click.prevent="handleItemClick"
        :class="{ 'cursor-not-allowed opacity-50': item.disabled }"
        :aria-disabled="item.disabled"
        role="listitem"
      >
        {{ item.label }}
      </a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ListItem',
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    methods: {
      handleItemClick() {
        this.$emit('item-click', this.item);
      }
    }
  }
  </script>
  