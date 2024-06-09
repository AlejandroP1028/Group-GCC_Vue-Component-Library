<template>
  <div :class="['collapse-container', containerTypeClass, darkModeClass]">
    <Button @click="toggle" color="blue">
      {{ isCollapsed ? 'SHOW' : 'HIDE' }}
    </Button>
    <transition name="collapse">
      <div v-show="!isCollapsed" :class="contentClasses">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  components: {
  Button,
  },
  props: {
    initialCollapsed: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'type1', 'type2', 'type3'].includes(value);
      }
    },
    isDarkMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isCollapsed: this.initialCollapsed
    };
  },
  computed: {
    containerTypeClass() {
      return `collapse-container-${this.type}`;
    },
    darkModeClass() {
      return this.isDarkMode ? 'dark' : '';
    },
    contentClasses() {
      const baseClasses = 'absolute mt-2 p-2 max-h-full max-w-72 overflow-hidden transition-all duration-300 ease';
      const typeClasses = {
        default: 'bg-blue-200 border border-blue-300 rounded',
        type1: 'bg-blue-100 border border-blue-500 rounded',
        type2: 'bg-cyan-100 border border-cyan-500 rounded-lg',
        type3: 'bg-teal-100 border border-teal-500 rounded-lg',
      };
      const darkModeClasses = {
        default: 'bg-blue-600 border border-blue-200 rounded',
        type1: 'bg-blue-500 border border-blue-100 rounded',
        type2: 'bg-cyan-500 border border-cyan-100 rounded-lg',
        type3: 'bg-teal-500 border border-teal-100 rounded-lg',
      };
      return this.isDarkMode
        ? `${baseClasses} ${darkModeClasses[this.type]}`
        : `${baseClasses} ${typeClasses[this.type]}`;
    }
  },
  methods: {
    toggle() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
};
</script>

<style>
/* TRANSITIONS */
.collapse-enter-active,
.collapse-leave-active {
  transition: max-height 0.3s ease;
}
.collapse-enter,
.collapse-leave-to {
  max-height: 0;
}
</style>
