<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <div>
      <span class="text-blue-200">
        <slot></slot>
      </span>
      <slot name="icon"></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    color: {
      type: String,
      default: 'blue',
      validator: (value) => ['blue', 'sky', 'cyan', 'teal', 'gray'].includes(value)
    },
    size: {
      type: String,
      default: 'normal',
      validator: (value) => ['small', 'normal', 'large'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    customClasses: {
      type: String,
      default: ''
    },
    onClick: {
      type: Function,
      default: null
    }
  },
  computed: {
    buttonClasses() {
      const colorClasses = {
        blue: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-300 dark:hover:bg-blue-600 dark:focus:ring-blue-800',
        sky: 'bg-sky-500 hover:bg-sky-600 focus:ring-sky-300  dark:hover:bg-sky-600 dark:focus:ring-sky-800',
        cyan: 'bg-cyan-500 hover:bg-cyan-600 focus:ring-cyan-300  dark:hover:bg-cyan-600 dark:focus:ring-cyan-800',
        teal: 'bg-teal-500 hover:bg-teal-600 focus:ring-teal-300  dark:hover:bg-teal-600 dark:focus:ring-teal-800',
        gray: 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-300  dark:hover:bg-gray-600 dark:focus:ring-gray-800'
      };

      const sizeClasses = {
        small: 'px-4 py-2 text-sm',
        normal: 'px-5 py-2.5 text-sm',
        large: 'px-6 py-3 text-lg'
      };

      return [
        'inline-flex items-center font-medium rounded-lg focus:outline-none focus:ring-4',
        colorClasses[this.color],
        sizeClasses[this.size],
        this.disabled ? 'cursor-not-allowed bg-blue-400 dark:bg-blue-500' : '',
        this.customClasses
      ].join(' ');
    }
  },
  methods: {
    handleClick(event) {
      if (!this.disabled && this.onClick) {
        this.onClick(event);
      } else if (!this.disabled) {
        this.$emit('click', event);
      }
    },
  }
};
</script>

<style scoped>
button {
  border: 2px solid transparent;
  text-align: center;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}
</style>