<template>
    <div class="relative inline-block text-left">
      <div>
        <button @click="toggleDropdown" :class="buttonClasses" type="button">
          Dropdown
          <svg class="inline-block ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10l5 5 5-5H7z" fill="currentColor"/>
          </svg>
        </button>
      </div>
      <div v-if="show" :class="dropdownClasses" @click="closeDropdown">
        <a href="#" class="block px-4 py-2 text-sm" role="menuitem">Option 1</a>
        <a href="#" class="block px-4 py-2 text-sm" role="menuitem">Option 2</a>
        <a href="#" class="block px-4 py-2 text-sm" role="menuitem">Option 3</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
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
      isDark: {
        type: Boolean,
        default: false
      },
      bordered: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        show: false
      }
    },
    computed: {
      buttonClasses() {
        return [
          'inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none',
          this.bordered ? 'border' : '',
        ];
      },
      dropdownClasses() {
        const styleClasses = {
          default: {
            bgClass: this.isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800',
            borderClass: this.bordered ? 'border border-gray-300' : '',
          },
          sky: {
            bgClass: this.isDark ? 'bg-gray-800 text-sky-300' : 'bg-sky-100 text-sky-800',
            borderClass: this.bordered ? 'border border-sky-300' : '',
          },
          cyan: {
            bgClass: this.isDark ? 'bg-gray-800 text-cyan-300' : 'bg-cyan-100 text-cyan-800',
            borderClass: this.bordered ? 'border border-cyan-300' : '',
          },
          teal: {
            bgClass: this.isDark ? 'bg-gray-800 text-teal-300' : 'bg-teal-100 text-teal-800',
            borderClass: this.bordered ? 'border border-teal-300' : '',
          }
        };
  
        const { bgClass, borderClass } = styleClasses[this.type] || styleClasses['default'];
  
        return [
          'origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg z-10',
          bgClass, borderClass
        ];
      }
    },
    methods: {
      toggleDropdown() {
        this.show = !this.show;
      },
      closeDropdown() {
        this.show = false;
      }
    }
  }
  </script>
  