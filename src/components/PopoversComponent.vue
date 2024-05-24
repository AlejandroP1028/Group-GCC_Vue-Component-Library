<template>
  <component :is="currentVariationComponent" v-bind="$props"></component>
</template>

<script>
import PopoverVariation0 from "./popoverVariation0.vue";
import PopoverVariation1 from "./popoverVariation1.vue";

export default {
  props: {
    position: {
      type: String,
      default: "top",
    },
    popoverColor: {
      type: String,
      default: "blue",
    },
    popoverButtonColor: {
      type: String,
      default: "blue",
    },
    trigger: {
      type: String,
      default: "mouseover",
    },
    buttonText: {
      type: String,
      default: "Button",
    },
    popoverTitle: {
      type: String,
      default: "Popover Title",
    },
    popoverContent: {
      type: String,
      default:
        "This is the content of the popover. You can place any information here.",
    },
    variationIndex: {
      type: Number,
      required: true,
    },
  },
  computed: {
    currentVariationComponent() {
      const variations = [PopoverVariation0, PopoverVariation1];
      return variations[this.variationIndex] || variations[0];
    },
  },
};
</script>
