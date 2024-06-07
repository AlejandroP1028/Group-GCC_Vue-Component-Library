<template>
  <div>
    <span :title="name">
      <div class="relative">
        <div v-if="image" :class="sizeClass">
          <img 
            class="h-full w-full object-cover" 
            :class="roundedClass" 
            :src="image" 
            :alt="`${name} avatar`"
          />
        </div>
        <div v-else :class="defaultAvatarClasses">
          {{ name[0] }}
        </div>
        <div v-if="isOnline" :class="onlineClasses"></div>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      required: false,
      default: 'md',
      validator(value) {
        return ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].includes(value);
      },
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
      default: '',
    },
    rounded: {
      type: String,
      required: false,
      default: 'md',
      validator(value) {
        return ['sm', 'md', 'lg', 'xl', 'full'].includes(value);
      },
    },
    isOnline: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  computed: {
    sizeClass() {
      return {
        sm: 'w-6 h-6 text-xs',
        md: 'w-8 h-8 text-base',
        lg: 'w-10 h-10 text-lg',
        xl: 'w-12 h-12 text-xl',
        xxl: 'w-16 h-16 text-2xl',
        xxxl: 'w-20 h-20 text-3xl',
      }[this.size];
    },
    onlineSizeClass() {
      return {
        sm: 'w-1.5 h-1.5',
        md: 'w-2 h-2',
        lg: 'w-2.5 h-2.5',
        xl: 'w-3 h-3',
        xxl: 'w-4 h-4',
        xxxl: 'w-5 h-5',
      }[this.size];
    },
    roundedClass() {
      return {
        sm: 'rounded-sm',
        md: 'rounded',
        lg: 'rounded-lg',
        full: 'rounded-full',
      }[this.rounded];
    },
    backgroundColorClass() {
      const backgroundColorClasslist = [
        'bg-green-400',
        'bg-yellow-400',
        'bg-pink-400',
        'bg-blue-400',
        'bg-indigo-400',
        'bg-red-400',
      ];
      const darkBackgroundColorClasslist = [
        'dark:bg-green-700',
        'dark:bg-yellow-700',
        'dark:bg-pink-700',
        'dark:bg-blue-700',
        'dark:bg-indigo-700',
        'dark:bg-red-700',
      ];
      const charIndex = this.name.charCodeAt(0);
      const colorIndex = charIndex % backgroundColorClasslist.length;

      return {
        light: backgroundColorClasslist[colorIndex],
        dark: darkBackgroundColorClasslist[colorIndex],
      };
    },
    defaultAvatarClasses() {
      return {
        [this.sizeClass]: true,
        [this.roundedClass]: true,
        [this.backgroundColorClass.light]: !this.isDarkMode,
        [this.backgroundColorClass.dark]: this.isDarkMode,
        'inline-flex justify-center items-center text-black dark:text-white flex-shrink-0 select-none uppercase': true,
      };
    },
    onlineClasses() {
      return {
        [this.onlineSizeClass]: true,
        'rounded-full bg-green-500 border border-border absolute -top-0 -right-0': true,
      };
    },
    buttonClasses() {
      return this.isDarkMode
        ? 'bg-gray-800 text-white'
        : 'bg-gray-200 text-black';
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
  },
};
</script>

<style scoped>
:root {
  --border: #e5e7eb;
}
.dark :root {
  --border: #374151;
}
</style>

<style global>
/* Dark mode styles */
.dark .bg-green-400 {
  background-color: #065f46 !important;
}
.dark .bg-yellow-400 {
  background-color: #b45309 !important;
}
.dark .bg-pink-400 {
  background-color: #9d174d !important;
}
.dark .bg-blue-400 {
  background-color: #1e3a8a !important;
}
.dark .bg-indigo-400 {
  background-color: #4338ca !important;
}
.dark .bg-red-400 {
  background-color: #7f1d1d !important;
}
</style>
