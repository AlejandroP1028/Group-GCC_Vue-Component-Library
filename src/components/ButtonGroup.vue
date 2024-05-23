<template>
  <div :class="{ 'flex flex-row justify-center mx-auto': centered, 'flex-col items-center': vertical, 'space-x-0': !vertical }" class="items-center w-full">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
    centered: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
</style>