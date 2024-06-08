<template>
  <component :is="currentVariationComponent" v-bind="$props"></component>
</template>

<script>
import PopoverVariation0 from "./popoverVariation0.vue";
import PopoverVariation1 from "./popoverVariation1.vue";

export default {
  props: {
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
