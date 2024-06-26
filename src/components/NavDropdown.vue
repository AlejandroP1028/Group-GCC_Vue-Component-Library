<template>
    <div class="relative inline-block text-left">
      <div>
        <button @click="toggleDropdown" 
        :class="[buttonClasses, { 'cursor-not-allowed opacity-50': disabled }, { 'dark': isDarkMode }]" 
        :disabled="disabled" 
        type="button">
          GCC Components
          <svg class="inline-block ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10l5 5 5-5H7z" fill="currentColor"/>
          </svg>
        </button>
      </div>
      <transition :name="[this.menuAlignment === 'center' ? 'center' : 'v']">
        <div v-if="show" :class="dropdownClasses">
          <template v-for="(item, index) in menuItems" :key="index">
            <router-link :to="item.to" :class="itemClasses" @click="this.show = !this.show">
                <slot>{{ item.label }}</slot>
            </router-link>
            <div v-if="item && item.divider" :class="setDivider(item.customMargin)"></div>
            <div v-if="divider && index < menuItems.length - 1" :class="setDivider(item.customMargin)"></div>
          </template>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavDropdown',
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
        default: 's',
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
      to: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        show: false,
        menuItems: [
            { label: 'Alert', disabled: false, to: '/alert' },
            { label: 'Avatar', disabled: false, to: '/avatar' },
            { label: 'Badge', disabled: false, to: '/badge' },
            { label: 'Card', disabled: false, to: '/card' },
            { label: 'Collapse', disabled: false, to: '/collapse' },
            { label: 'Dropdown', disabled: false, to: '/dropdown' },
            { label: 'List', disabled: false, to: '/list' },
            { label: 'Navigation Bar', disabled: false, to: '/navbar' },
            { label: 'Notifications', disabled: false, to: '/notif' },
            { label: 'Popover', disabled: false, to: '/popover' },
            { label: 'Snackbar', disabled: false, to: '/snackbar' },
            { label: 'Tab', disabled: false, to: '/tab' },
            { label: 'Carousel and Progress', disabled: false, to: '/template' },
            { label: 'Toggle', disabled: false, to: '/toggle' },
            { label: 'BreadCrumb', disabled: false, to: '/breadcrumb' },
            { label: 'Button and Button Group', disabled: false, to: '/button' }
            //{ label: '', disabled: false, to: '/' },

        ],
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
      dropdownClasses() {
        const styleClasses = {
          default: {
            bgClass: 'dark:bg-gray-700 dark:text-blue-100 bg-blue-100 text-blue-800',
            borderClass: this.bordered ? 'border border-blue-300' : '',
          },
          sky: {
            bgClass: 'dark:bg-gray-700 dark:text-sky-100 bg-sky-100 text-sky-800',
            borderClass: this.bordered ? 'border border-sky-300' : '',
          },
          cyan: {
            bgClass: 'dark:bg-gray-700 dark:text-cyan-100 bg-cyan-100 text-cyan-800',
            borderClass: this.bordered ? 'border border-cyan-300' : '',
          },
          teal: {
            bgClass: 'dark:bg-gray-700 dark:text-teal-100 bg-teal-100 text-teal-800',
            borderClass: this.bordered ? 'border border-teal-300' : '',
          }
        };
  
        const { bgClass, borderClass } = styleClasses[this.type] || styleClasses['default'];
  
        return [
          'absolute origin-top-right mt-2 rounded-md shadow-lg z-50 max-h-60 overflow-auto py-2',
          bgClass, borderClass, this.alignmentClass,
          this.menuWidth === 'full' ? 'w-full' : this.menuWidth,
          'dropdown-menu',
        ];
      },
      itemClasses() {
        return [
          'block px-4 py-2',
          this.sizeClass,
          this.type === 'default' ? 'hover:bg-blue-200 dark:hover:bg-gray-600' :
          this.type === 'sky' ? 'hover:bg-sky-200 dark:hover:bg-gray-600' :
          this.type === 'cyan' ? 'hover:bg-cyan-200 dark:hover:bg-gray-600' :
          this.type === 'teal' ? 'hover:bg-teal-200 dark:hover:bg-gray-600' :
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
            borderClass: 'dark:border-blue-300/[.87] border-blue-300/[.87]',
          },
          sky: {
            borderClass: 'dark:border-sky-300/[.87] border-sky-300/[.87]',
          },
          cyan: {
            borderClass: 'dark:border-cyan-300/[.87] border-cyan-300/[.87]',
          },
          teal: {
            borderClass: 'dark:border-teal-300/[.87] border-teal-300/[.87]',
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
      },
      handleListItemClick(item) {
        if(!item.disabled){
          this.$emit('list-item-click', item);
        }
      },
      handleToggleChange(item) {
        if(!item.disabled){
          this.$emit('toggle-change', item);
        }
      },
      handleCheckboxChange(item) {
        if(!item.disabled){
          this.$emit('checkbox-change', item);
        }
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-5%);
}
.center-enter-active,
.center-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.center-enter-from,
.center-leave-to {
  opacity: 0;
  transform: translateY(-50%,-5%);
}
/* Hide scrollbar for Chrome, Safari and Opera */
.dropdown-menu::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.dropdown-menu {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* Custom scrollbar for Chrome, Safari and Opera */
.dropdown-menu::-webkit-scrollbar {
  width: 8px;  /* Width of the scrollbar */
}

.dropdown-menu::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);  /* Color of the scrollbar */
  border-radius: 10px;  /* Rounded edges */
}

.dropdown-menu::-webkit-scrollbar-track {
  background: transparent;  /* Background of the scrollbar track */
}

/* Custom scrollbar for Firefox */
.dropdown-menu {
  scrollbar-width: thin;  /* Width of the scrollbar */
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;  /* Color of the scrollbar thumb and track */
}
</style>