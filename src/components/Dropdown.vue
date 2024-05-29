<template>
    <div class="relative inline-block text-left">
      <div>
        <button @click="toggleDropdown" 
        :class="[buttonClasses, { 'cursor-not-allowed opacity-50': disabled }]" 
        :disabled="disabled" 
        type="button">
          Dropdown
          <svg class="inline-block ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10l5 5 5-5H7z" fill="currentColor"/>
          </svg>
        </button>
      </div>
      <transition>
        <div v-if="show" :class="dropdownClasses">
          <template v-for="(item, index) in menuItems" :key="index">
            <a
              v-if="item && item.label !== undefined"
              :href="item.href || '#'"
              :class="[itemClasses, { 'cursor-not-allowed opacity-50': item.disabled }]"
              :aria-disabled="item.disabled"
              role="menuitem"
              @click.prevent="item.disabled ? null : item.action"
            >
              {{ item.label }}
            </a>
            <div v-if="item && item.divider" :class="setDivider(item.customMargin)"></div>
            <div v-if="divider && index < menuItems.length - 1" :class="setDivider(item.customMargin)"></div>
          </template>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    //no need na yung isDark since naka selector yung darkmode natin

    //pwede mo din gawin na component yung listitem for more versatility

    //change approach sa action shit, instead na irun yung function agad use emits
    name: 'DropdownComponent',
    props: {
      type: {
        type: String,
        validator: function (value) {
          return ['default', 'sky', 'cyan', 'teal'].includes(value);
        },
        default: 'default'
      },
      size: {
        type: String,
        validator: function (value) {
          return ['w', 's', 'm', 'l'].includes(value);
        },
        default: 'w',
      },
      menuWidth: {
        type: String,
        default: 'full',
        validator: function (value) {
          return ['auto', 'full', 'w-48', 'w-64'].includes(value);
        }
      },
      menuAlignment: {
        type: String,
        default: 'right',
        validator: function (value) {
          return ['left', 'center', 'right'].includes(value);
        }
      },
      isDark: {
        type: Boolean,
      },
      bordered: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false
      },
      divider: {
        type: Boolean,
        default: false
      },
      menuItems: {
        type: Array,
        default: () => []
      }
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
      alignmentClass() {
        switch (this.menuAlignment) {
          case 'left':
            return 'left-0';
          case 'center':
            return 'left-1/2 transform -translate-x-1/2';
          case 'right':
            return 'right-0';
          default:
            return 'right-0';
        }
      },
      buttonClasses() {
        const styleClasses = {
          default: {
            bgClass: this.isDark ? 'bg-blue-600 text-blue-100 hover:bg-blue-700' : 'bg-blue-500 text-blue-100 hover:bg-blue-600',
            borderClass: this.bordered ? 'border border-blue-100' : '',
          },
          sky: {
            bgClass: this.isDark ? 'bg-sky-600 text-sky-100 hover:bg-sky-700' : 'bg-sky-500 text-sky-100 hover:bg-sky-600',
            borderClass: this.bordered ? 'border border-sky-100' : '',
          },
          cyan: {
            bgClass: this.isDark ? 'bg-cyan-600 text-cyan-100 hover:bg-cyan-700' : 'bg-cyan-500 text-cyan-100 hover:bg-cyan-600',
            borderClass: this.bordered ? 'border border-cyan-100' : '',
          },
          teal: {
            bgClass: this.isDark ? 'bg-teal-600 text-teal-100 hover:bg-teal-700' : 'bg-teal-500 text-teal-100 hover:bg-teal-600',
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
      dropdownClasses() {
        const styleClasses = {
          default: {
            bgClass: this.isDark ? 'bg-gray-700 text-blue-100' : 'bg-blue-100 text-blue-800',
            borderClass: this.bordered ? 'border border-blue-300' : '',
          },
          sky: {
            bgClass: this.isDark ? 'bg-gray-700 text-sky-100' : 'bg-sky-100 text-sky-800',
            borderClass: this.bordered ? 'border border-sky-300' : '',
          },
          cyan: {
            bgClass: this.isDark ? 'bg-gray-700 text-cyan-100' : 'bg-cyan-100 text-cyan-800',
            borderClass: this.bordered ? 'border border-cyan-300' : '',
          },
          teal: {
            bgClass: this.isDark ? 'bg-gray-700 text-teal-100' : 'bg-teal-100 text-teal-800',
            borderClass: this.bordered ? 'border border-teal-300' : '',
          }
        };
  
        const { bgClass, borderClass } = styleClasses[this.type] || styleClasses['default'];
  
        return [
          'absolute origin-top-right mt-2 rounded-md shadow-lg z-10 max-h-60 overflow-auto py-2',
          bgClass, borderClass, this.alignmentClass,
          this.menuWidth === 'full' ? 'w-full' : this.menuWidth,
        ];
      },
      itemClasses() {
        return [
          'block px-4 py-2',
          this.sizeClass,
          this.isDark ? 'hover:bg-gray-600' : 
          this.type === 'default' ? 'hover:bg-blue-200' :
          this.type === 'sky' ? 'hover:bg-sky-200' :
          this.type === 'cyan' ? 'hover:bg-cyan-200' :
          this.type === 'teal' ? 'hover:bg-teal-200' :
          ''
        ];
      }
    },
    methods: {
      toggleDropdown() {
        this.show = !this.show;
      },
      closeDropdown() {
        this.show = false;
      },
      setDivider(a) {
        const styleClasses = {
          default: {
            borderClass: this.isDark ? 'border-blue-300/[.87]' : 'border-blue-300/[.87]',
          },
          sky: {
            borderClass: this.isDark ? 'border-sky-300/[.87]' : 'border-sky-300/[.87]',
          },
          cyan: {
            borderClass: this.isDark ? 'border-cyan-300/[.87]' : 'border-cyan-300/[.87]',
          },
          teal: {
            borderClass: this.isDark ? 'border-teal-300/[.87]' : 'border-teal-300/[.87]',
          }
        };

        const { borderClass } = styleClasses[this.type] || styleClasses['default'];

        return [
          'border-t-2',
          borderClass,
          a === '0.5' ? 'my-0.5' :
          a === '1' ? 'my-1' :
          a === '2' ? 'my-2' :
          'my-0.5'
        ];
      }
    }
  }
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-5%);
}
</style>