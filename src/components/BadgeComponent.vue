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
        default: 'default'
      },
      color: {
        type: String,
        default: ''
      },
      position: {
        type: Boolean,
        default: false
      },
      bordered: { 
        type: Boolean,
        default: false
      }
    },
    computed: {
      badgeClasses() {
        const baseClasses = 'inline-block px-2 py-1 text-xs font-bold text-center whitespace-nowrap align-baseline rounded';
        const typeClasses = {
          default: 'ml-3',
          dot: 'w-6 h-6 inline-flex items-center justify-center rounded-full',
          pill: 'px-4 rounded-full'
        };

        let colorClass = '';

        if (this.type === 'dot') {
          colorClass = this.getColorClasses('dot');
        } else if (this.type === 'default') {
          colorClass = this.getColorClasses('badge');
        } else {
          colorClass = this.getColorClasses('badge');
        }

        const borderClass = this.bordered ? 'border' : '';

        const badgeType = this.type ? this.type : 'bordered';

        let classList = `${baseClasses} ${typeClasses[badgeType]} ${colorClass} ${borderClass}`;

        return classList;
      },
      positionStyles() {
        return this.position //floating badge
          ? {
            position: 'absolute',
            top: '-8px',
            right: '-8px'
            }
          : {};
      }
    },
    methods: {
      getColorClasses(type) {
        const borderedColors = {
          'blue': 'border-blue-800 dark:border-blue-200',
          'cyan': 'border-cyan-800 dark:border-cyan-200',
          'sky': 'border-sky-800 dark:border-sky-200',
          'teal': 'border-teal-800 dark:border-teal-200',
          'red': 'border-white' 
        };
        const badgeColors = {
          'blue': 'bg-blue-200 text-blue-800 dark:bg-blue-700 dark:text-blue-200',
          'cyan': 'bg-cyan-200 text-cyan-800 dark:bg-cyan-700 dark:text-cyan-200',
          'sky': 'bg-sky-300 text-sky-800 dark:bg-sky-700 dark:text-sky-200',
          'teal': 'bg-teal-200 text-teal-800 dark:bg-teal-700 dark:text-teal-200',
          'red': 'bg-red-600 text-white'
        };

        const borderColor = this.color ? this.color : 'white'; 
        const borderClass = this.bordered ? borderedColors[borderColor] : ''; 

        if (type === 'dot') {
          return `${borderClass} ${badgeColors[this.color] || ''}`;
        } else {
          return `${borderClass} ${badgeColors[this.color] || ''}`;
        }
      }
    }
  }
</script>

