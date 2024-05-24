<template>
  <span :class="badgeClasses" :style="positionStyles">
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
      },
      color: {
        type: String,
        default: ''
      },
      position: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      badgeClasses() {
        const baseClasses = 'inline-block px-2 py-1 text-xs font-bold text-center whitespace-nowrap align-baseline rounded';
        const typeClasses = { //inline badge
          secondary: 'bg-blue-600 text-white ml-3',
          dot: 'w-5 h-5 rounded-full bg-red-500',
          number: 'w-8 h-6 bg-blue-600 text-white rounded-full text-xs',
          icon: 'w-7 h-6 bg-cyan-500 text-white rounded-full',
          bordered: 'text-m font-medium px-4 py-1 rounded border',
          pill: 'text-xs font-medium px-4 py-1 rounded-full'
        };
        const colorClasses = this.getColorClasses();
        return `${baseClasses} ${typeClasses[this.type]} ${colorClasses}`;
      },
      positionStyles() {
        return this.position //floating badge
          ? {
              position: 'absolute',
              top: '0',
              right: '0',
              transform: 'translateX(50%) translateY(-50%)',
              marginRight: '0.25rem'
            }
          : {};
      }
    },
    methods: {
      getColorClasses() {
        const borderedColors = {
          'blue': 'bg-blue-200 text-blue-800 dark:bg-blue-700 dark:text-blue-200 border border-blue-800 dark:border-blue-200',
          'cyan': 'bg-cyan-200 text-cyan-800 dark:bg-cyan-700 dark:text-cyan-200 border border-cyan-800 dark:border-cyan-200',
          'sky': 'bg-sky-300 text-sky-800 dark:bg-sky-700 dark:text-sky-200 border border-sky-800 dark:border-sky-200',
          'teal': 'bg-teal-200 text-teal-800 dark:bg-teal-700 dark:text-teal-200 border border-teal-800 dark:border-teal-200'
        };
        const pillColors = {
          'blue': 'bg-blue-200 text-blue-800 dark:bg-blue-700 dark:text-blue-200',
          'cyan': 'bg-cyan-200 text-cyan-800 dark:bg-cyan-700 dark:text-cyan-200',
          'sky': 'bg-sky-300 text-sky-800 dark:bg-sky-700 dark:text-sky-200',
          'teal': 'bg-teal-200 text-teal-800 dark:bg-teal-700 dark:text-teal-200'
        };
        
        if (this.type === 'bordered') {
          return borderedColors[this.color] || '';
        } else if (this.type === 'pill') {
          return pillColors[this.color] || '';
        }
        
        return '';
      },
    }
  }
</script>

