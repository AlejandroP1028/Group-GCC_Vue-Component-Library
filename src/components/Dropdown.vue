<template>
    <div class="relative inline-block text-left mt-4 ml-4">
      <div>
        <button @click="toggleDropdown" :class="buttonClasses" type="button">
          Dropdown
          <svg class="inline-block ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10l5 5 5-5H7z" fill="currentColor"/>
          </svg>
        </button>
      </div>
      <div v-if="show" :class="dropdownClasses">
        <a href="#" :class="itemClasses" role="menuitem">ackkkkkk</a>
        <a href="#" :class="itemClasses" role="menuitem">whaaaaaaaa</a>
        <a href="#" :class="itemClasses" role="menuitem">hmphhhhhh</a>
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
          'origin-top-right mt-2 w-full rounded-md shadow-lg z-10 max-h-60 overflow-auto py-2',
          bgClass, borderClass
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
      },
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