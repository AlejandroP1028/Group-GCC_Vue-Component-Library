<template>
  <label :class="['inline-flex items-center', pointerClass]">
    <input 
      type="checkbox" 
      class="sr-only peer" 
      :disabled="disabled" 
      :checked="cVal" 
      @change="changeFunc"
    >
    <div :class="[sizeClass, baseClass, computedClass,'transition-colors ease duration-300']" class="relative"></div>
    <span :class="[spanClass,'transition-colors ease duration-300']">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'ToggleComponent',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    changeFunc: Function,
    isChecked: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      validator: function(value) {
        return ['small', 'default', 'large'].includes(value);
      },
      default: 'default'
    },
    type: {
      type: String,
      validator: function(value) {
        return ['blue', 'sky', 'cyan', 'teal'].includes(value);
      },
      default: 'blue'
    }
  },
  data() {
    return {
      cVal: this.isChecked
    };
  },
  watch: {
    isChecked(newVal) {
      this.cVal = newVal;
    }
  },
  computed: {
    pointerClass() {
      return this.disabled ? 'cursor-not-allowed' : 'cursor-pointer';
    },
    sizeClass() {
      return {
        small: 'relative w-9 h-5',
        default: 'relative w-11 h-6',
        large: 'relative w-14 h-7'
      }[this.size || this.default];
    },
    baseClass() {
      return `bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer
        dark:bg-gray-700
        peer-checked:after:translate-x-full 
        rtl:peer-checked:after:-translate-x-full
        peer-checked:after:border-white 
        after:content-[''] 
        after:absolute 
        after:top-[2px]
        after:start-[2px] 
        after:bg-white 
        after:border-gray-300 
        after:border
        after:rounded-full 
        after:h-5 after:w-5 
        after:transition-all 
        dark:border-gray-600`;
    },
    computedClass() {
      return {
        blue: 'peer-checked:bg-blue-500 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800',
        sky: ' peer-checked:bg-sky-500 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800',
        cyan: 'peer-checked:bg-cyan-500 peer-focus:ring-cyan-300 dark:peer-focus:ring-cyan-800',
        teal: ' peer-checked:bg-teal-500 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800'
      }[this.type];
    },
    spanClass() {
      return 'ms-3 text-sm font-medium text-blue-800 dark:text-blue-200';
    }
  },
  methods: {
    handleChange(event) {
      this.cVal = event.target.checked;
      this.$emit('change', this.cVal);
    }
  }
};
</script>

<style scoped>
</style>
