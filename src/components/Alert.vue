<template>
  <div class="p-4 m-4 text-sm rounded-lg shadow-lg absolute overflow-hidden" :class="computedClasses" v-if="out" role="alert">
    <svg v-if="icon" class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'AlertComponent',
  props: {
    msg: String,
    type: {
      type: String,
      validator: function (value) {
        return ['default', 'secondary'].includes(value);
      },
      default: 'default'
    },
    size: {
      type: String,
      validator: function (value) {
        return ['w', 's','m','l'].includes(value);
      },
      default: 'w',
    },
    icon: {
      type: Boolean,
      default: true
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    textColor: {
      type: String,
      validator: function (value) {
        return ["red","white","yellow"].includes(value)
      },
      default: 'white',
    },
    position: {
      type: String,
      validator: function (value) {
        return ['tl', 'tc', 'tr', 'll', 'lc', 'lr'].includes(value);
      },
      default: 'tl',
    }
  },
  computed: {
    computedClasses() {
      let position = this.position === 'tl' ? 'top-0 left-0' :
                     this.position === 'tc' ? 'top-0 left-1/2 transform -translate-x-1/2' :
                     this.position === 'tr' ? 'top-0 right-0' :
                     this.position === 'll' ? 'bottom-0 left-0' :
                     this.position === 'lc' ? 'bottom-0 left-1/2 transform -translate-x-1/2' :
                     this.position === 'lr' ? 'bottom-0 right-0' :
                     ''
      return [
        this.type === 'secondary' ? 'bg-blue-400' : 'bg-blue-600',
        this.textColor === 'white' ? 'text-zinc-200' : this.textColor === 'red' ? 'text-red-400' : 'text-yellow-400',
        this.textColor === 'white' ? 'text-zinc-200' : this.textColor === 'red' ? 'text-red-400' : 'text-yellow-400',
        this.bordered ? this.textColor === 'white' ? 'border border-zinc-200' : this.textColor === 'red' ? 'border border-red-400' : 'border border-yellow-400' : '',
        this.size === 'w' ? 'inline-block' : this.size === 's' ? 'w-32' : this.size === 'm' ? 'w-48' : 'w-64',
        position,
        this.show ? 'end' : this.position + '-start' // Add starting class based on the position if show is true
      ];
    }
  },
  data() {
    return {
      out: true,
      show: false // Initially set show to false
    }
  },
  mounted() {
  // Use setTimeout to delay showing the component
  setTimeout(() => {
    this.show = true; // Set show to true after 0.05 seconds
  }, 50);
  
  setTimeout(() => {
    // Set show to false after 5 seconds
    this.show = false;
    // Wait for the transition to end before removing the component
    setTimeout(() => {
      this.out = false; // Remove the component from the DOM
    }, 300); // 300 milliseconds is the duration of the transition
  }, 5000);
}


}
</script>

<style scoped>
.tl-start {
  transition: transform 0.3s ease-in;
  transform: translate(-150%, 0%);
}

.tc-start {
  transition: transform 0.3s ease-in;
  transform: translateX(0) translateY(-150%);
}

.tr-start {
  transition: transform 0.3s ease-in;
  transform: translate(150%, 0%);
}

.ll-start {
  transition: transform 0.3s ease-in;
  transform: translate(-150%, 0%);
}

.lc-start {
  transition: transform 0.3s ease-in;
  transform: translateX(0%) translateY(150%);
}

.lr-start {
  transition: transform 0.3s ease-in;
  transform: translate(150%, 0%);
}

.end {
  transition: transform 0.3s ease-out;
  transform: translate(0, 0);
}
</style>
