<template>
  <div v-if="isSelectedTab && showContainer" :style="{ height: containerHeight }" class="tab-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isSelectedTab: Boolean,
    showContainer: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      containerHeight: '0px' // Initial height is 0
    };
  },
  watch: {
    isSelectedTab(newVal) {
      if (newVal && this.showContainer) {
        this.updateContainerHeight();
      } else {
        this.containerHeight = '0px';
      }
    },
    showContainer(newVal) {
      if (newVal && this.isSelectedTab) {
        this.updateContainerHeight();
      } else {
        this.containerHeight = '0px';
      }
    }
  },
  methods: {
    updateContainerHeight() {
      // Wait for next tick to ensure DOM is updated
      this.$nextTick(() => {
        const contentHeight = this.$el.scrollHeight;
        this.containerHeight = `${contentHeight}px`;
      });
    }
  }
}
</script>

<style scoped>
.tab-content {
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 3px 5px 5px rgba(0, 0, 0, 0.5);
  transition: height 0.3s ease-in-out;
  overflow: hidden;
}

.dark .tab-content {
  background-color: #1f2937;
  color: #f3f4f6;
}
</style>
