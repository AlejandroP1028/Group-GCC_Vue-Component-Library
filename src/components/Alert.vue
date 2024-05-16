<template>
  <div  v-if="out" class="p-4 m-4 text-sm rounded-lg shadow-lg absolute" :class="computedClasses" role="alert">
    <svg v-if="icon" class="inline-block"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
    fill="currentColor"
  />
  <path
    d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
    fill="currentColor"
  />
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
                     this.position === 'lc' ? 'bottom-0 left-1/2  transform -translate-x-1/2' :
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
},

}
</script>

<style scoped>
.tl-start {
  transition: transform 0.3s ease-in;
  transform: translateX(-150%);
}

.tc-start {
  transition: transform 0.3s ease-in;
  transform:translateY(-150%);
}

.tr-start {
  transition: transform 0.3s ease-in;
  transform: translateX(150%);
}

.ll-start {
  transition: transform 0.3s ease-in;
  transform: translateX(-150%);
}

.lc-start {
  transition: transform 0.3s ease-in;
  transform:translateY(150%);
}

.lr-start {
  transition: transform 0.3s ease-in;
  transform: translateX(150%);
}

.end {
  transition: transform 0.3s ease-out;
  transform: translate(0, 0);
}
</style>
