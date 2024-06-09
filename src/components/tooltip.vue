<template>
    <div class="relative inline-block">
      <button @mouseenter="showTooltip" @mouseleave="hideTooltip" 
        :class="[buttonClasses, { 'cursor-not-allowed opacity-50': disabled }]" 
        :disabled="disabled" 
        type="button">
        {{ buttonText }}
      </button>
      <transition name="fade">
        <div v-if="show" class="absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-100 dark:bg-gray-700"
          :class="[tooltipAlignmentClass]" role="tooltip">
          {{ tooltipText }}
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TooltipComponent',
    props: {
      type: {
        type: String,
        validator: function (value) {
          return ['default', 'sky', 'cyan', 'teal'].includes(value);
        },
        default: 'default'
      },
      buttonText: {
        type: String,
        default: 'Hover me',
      },
      tooltipText: {
        type: String,
        default: 'Tooltip content',
      },
      size: {
        type: String,
        validator: function (value) {
          return ['w', 's', 'm', 'l'].includes(value);
        },
        default: 'w',
      },
      tooltipAlignment: {
        type: String,
        default: 'top',
        validator: function (value) {
          return ['top', 'bottom', 'left', 'right'].includes(value);
        }
      },
      bordered: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        show: false
      }
    },
    computed: {
      sizeClass() {
        switch (this.size) {
          case 'w':
            return 'text-xs';
          case 's':
            return 'text-sm';
          case 'm':
            return 'text-base';
          case 'l':
            return 'text-lg';
          default:
            return 'text-xs';
        }
      },
      buttonClasses() {
        const styleClasses = {
          default: {
            bgClass: 'dark:bg-blue-600 dark:text-blue-100 dark:hover:bg-blue-700 bg-blue-500 text-blue-100 hover:bg-blue-600',
            borderClass: this.bordered ? 'border border-blue-100' : '',
          },
          sky: {
            bgClass: 'dark:bg-sky-600 dark:text-sky-100 dark:hover:bg-sky-700 bg-sky-500 text-sky-100 hover:bg-sky-600',
            borderClass: this.bordered ? 'border border-sky-100' : '',
          },
          cyan: {
            bgClass: 'dark:bg-cyan-600 dark:text-cyan-100 dark:hover:bg-cyan-700 bg-cyan-500 text-cyan-100 hover:bg-cyan-600',
            borderClass: this.bordered ? 'border border-cyan-100' : '',
          },
          teal: {
            bgClass: 'dark:bg-teal-600 dark:text-teal-100 dark:hover:bg-teal-700 bg-teal-500 text-teal-100 hover:bg-teal-600',
            borderClass: this.bordered ? 'border border-teal-100' : '',
          }
        };
  
        const { bgClass, borderClass } = styleClasses[this.type] || styleClasses['default'];
  
        return [
          'inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 font-medium focus:outline-none',
          bgClass,
          borderClass,
          this.sizeClass
        ];
      },
      tooltipAlignmentClass() {
        switch (this.tooltipAlignment) {
          case 'top':
            return 'bottom-full mb-2';
          case 'bottom':
            return 'top-full mt-2';
          case 'left':
            return 'right-full mr-2';
          case 'right':
            return 'left-full ml-2';
          default:
            return 'bottom-full mb-2';
        }
      }
    },
    methods: {
      showTooltip() {
        if (!this.disabled) {
          this.show = true;
        }
      },
      hideTooltip() {
        this.show = false;
      }
    },
    watch: {
      disabled(newVal){
        if(newVal){
          this.show = false;
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter, 
  .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>
  