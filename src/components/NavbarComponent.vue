<template>
  <component :is="currentVariationComponent" v-bind="$props"></component>
</template>

<script>
import NavbarVariation0 from "./navbarVariation0.vue";
import NavbarVariation1 from "./navbarVariation1.vue";

export default {
  props: {
    variationIndex: {
      type: Number,
      required: true,
    },
  },
  computed: {
    currentVariationComponent() {
      const variations = [NavbarVariation0, NavbarVariation1];
      return variations[this.variationIndex] || variations[0];
    },
  },
};
</script>
