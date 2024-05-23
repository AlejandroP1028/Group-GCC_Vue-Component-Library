<template>
  <span :class="badgeClasses">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'BadgeComponent',
  props: {
    type: {
      type: String,
      default: 'secondary'
    }
  },
  computed: {
    badgeClasses() {
      const baseClasses = 'inline-block px-2 py-1 text-xs font-bold text-center whitespace-nowrap align-baseline rounded';
      const typeClasses = {
        secondary: 'bg-blue-600 text-white ml-3',
        dot: 'w-5 h-5 rounded-full bg-red-500',
        number: 'w-8 h-6 bg-blue-600 text-white rounded-full text-xs',
        icon: 'w-7 h-6 bg-cyan-500 text-white rounded-full',
        bordered: 'text-m font-medium px-4 py-1 rounded border',
        pill: 'text-xs font-medium px-4 py-1 rounded-full'
      };
      return `${baseClasses} ${typeClasses[this.type]}`;
    }
  }
}
</script>

<style scoped>
</style>
