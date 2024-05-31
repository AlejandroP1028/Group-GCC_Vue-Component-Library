<template>
  <div :class="wrapperClasses">
    <span v-if="labelInside" class="absolute top-0 left-5 -mt-0.6 text-white px-1" style="font-size: 10px">{{ labelInside }}</span>
    <div :class="progressClasses" :style="{ width: computedWidth, animationDuration: computedAnimationDuration }"></div>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    progress: {
      type: Number,
      required: true,
      validator: value => value >= 0 && value <= 100,
    },
    color: {
      type: String,
      default: 'blue',
      validator: value => ['blue', 'sky', 'cyan', 'teal', 'gray', 'gradientblue', 'orange'].includes(value),
    },
    labelInside: {
      type: String,
      default: '',
    },
    gradient: {
      type: Boolean,
      default: false,
    },
    animated: {
      type: Boolean,
      default: false,
    },
    animationDuration: {
      type: Number,
      default: 2,
    },
    rounded: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    computedWidth() {
      return `${this.progress}%`;
    },
    computedAnimationDuration() {
      return `${this.animationDuration}s`;
    },
    progressClasses() {
      const baseClass = ['h-3.5'];
      if (this.rounded) {
        baseClass.push('rounded-full');
      }
      if (this.gradient) {
        return [
          ...baseClass,
          'bg-gradient-to-r',
          'from-blue-500',
          'via-sky-500',
          'to-cyan-200',
        ];
      }
      const colorClasses = {
        blue: 'bg-blue-600',
        sky: 'bg-sky-600',
        cyan: 'bg-cyan-600',
        teal: 'bg-teal-600',
        gray: 'bg-gray-600',
        gradientblue: 'bg-blue-600',
      };
      if (this.animated) {
        return [...baseClass, colorClasses[this.color], 'animate-progress'];
      }
      return [colorClasses[this.color], ...baseClass].join(' ');
    },
    wrapperClasses() {
      const baseClass = ['relative', 'w-80', 'bg-gray-200', 'dark:bg-gray-700'];
      if (this.rounded) {
        baseClass.push('rounded-full');
      }
      return baseClass.join(' ');
    },
  },
};
</script>

<style scoped>
@keyframes progress {
  0% { width: 0; }
  100% { width: 100%; }
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.animate-progress {
  animation: progress linear infinite, pulse 2s ease-in-out infinite;
}
</style>
