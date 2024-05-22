<template>
  <button
    class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded w-32"
    @mouseover="showPopover"
    @mouseleave="hidePopover"
    ref="button"
  >
    Top
  </button>

  <div
    v-show="isPopoverVisible"
    ref="popover"
    @mouseover="showPopover"
    @mouseleave="hidePopover"
    class="absolute bg-blue-100 border-none rounded-lg shadow-lg mt-2 p-4 max-w-xs -translate-x-24 -translate-y-32"
  >
    <h3 class="text-lg font-semibold mb-2">Top popover</h3>
    <p class="text-gray-600">
      This is the content of the popover. You can place any information here.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPopoverVisible: false,
    };
  },
  methods: {
    showPopover() {
      this.isPopoverVisible = true;
    },
    hidePopover() {
      this.isPopoverVisible = false;
    },
  },
};
</script>
