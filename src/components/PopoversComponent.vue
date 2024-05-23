<template>
  <div>
    <button
      class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded w-32"
      @mouseover="popoverMouseOver"
      @mouseleave="popoverMouseLeave"
      @click="popoverClick"
      ref="button"
    >
      {{ buttonText }}
    </button>

    <div
      v-show="isPopoverVisible"
      ref="popover"
      @mouseover="popoverMouseOver"
      @mouseleave="popoverMouseLeav"
      :class="[
        positionClass,
        'absolute bg-blue-100 border-none rounded-lg shadow-lg p-4',
      ]"
    >
      <h3 class="text-lg font-semibold mb-2">{{ popoverTitle }}</h3>
      <p class="text-gray-600">
        {{ popoverContent }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].includes(value);
      },
    },
    trigger: {
      type: String,
      default: "mouseover",
      validator(value) {
        return ["click", "mouseover"].includes(value);
      },
    },
    buttonText: {
      type: String,
    },
    popoverTitle: {
      type: String,
    },
    popoverContent: {
      type: String,
    },
  },
  data() {
    return {
      isPopoverVisible: false,
    };
  },
  methods: {
    popoverMouseOver() {
      if (this.trigger === "mouseover") {
        this.isPopoverVisible = true;
      }
    },
    popoverMouseLeave() {
      if (this.trigger === "mouseover") {
        this.isPopoverVisible = false;
      }
    },
    popoverClick() {
      if (this.trigger === "click") {
        this.isPopoverVisible = !this.isPopoverVisible;
      }
    },
  },
  computed: {
    positionClass() {
      const positions = {
        top: "translate-x-32 -translate-y-52 max-w-sm",
        bottom: "-translate-x-24 translate-y-2 max-w-sm",
        left: "-translate-x-48 -translate-y-16 max-w-xs",
        right: "translate-x-32 -translate-y-44 max-w-xs",
      };
      return positions[this.position];
    },
  },
};
</script>
