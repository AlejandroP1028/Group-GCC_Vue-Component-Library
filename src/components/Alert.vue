<template>
  <div v-if="out" class="p-4 m-4 text-sm rounded-lg shadow-lg fixed" :class="computedClasses" @click="dismiss" role="alert">
    <svg v-if="icon" class="inline-block"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
            fill="currentColor"/>
      <path d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z"
            fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
            fill="currentColor"/>
    </svg>
    <p class="inline-block ml-2" :class="fontClass">
      {{ msg }}
    </p>

    
  </div>
</template>

<script>
export default {
  name: 'AlertComponent',
  props: {
    msg: String,
    dismissType: {
      type: String,
      validator: function (value){
        return ['auto','manual'].includes(value);
      },
      default: 'auto',
    },
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
    icon: {
      type: Boolean,
      default: true
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    font:{
      type: String,
      validator: function (value) {
        return ['medium','bold','semibold','light','normal'].includes(value);
        
      },
      default: 'normal',
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
      let position = this.position === 'tl' ? 'top-4 left-4' :
                     this.position === 'tc' ? 'top-4 left-1/2 transform -translate-x-1/2' :
                     this.position === 'tr' ? 'top-4 right-4' :
                     this.position === 'll' ? 'bottom-4 left-4' :
                     this.position === 'lc' ? 'bottom-4 left-1/2  transform -translate-x-1/2' :
                     this.position === 'lr' ? 'bottom-4 right-4' :
                     '';

      const styleClasses = {
        default: {
        bgClass: 'dark:bg-gray-800 bg-blue-200',
        textClass: 'dark:text-blue-300 text-blue-800',
        borderClass: this.bordered ? 'border dark:border-blue-300 border-blue-800' : '',
        hoverClass: this.dismissType === 'manual' ? 'cursor-pointer dark:hover:bg-gray-600 hover:bg-blue-300' : ''
      },
      sky: {
        bgClass: 'dark:bg-gray-800 bg-sky-200',
        textClass: 'dark:text-sky-300 text-sky-800',
        borderClass: this.bordered ? 'border dark:border-sky-300 border-sky-800' : '',
        hoverClass: this.dismissType === 'manual' ? 'cursor-pointer dark:hover:bg-gray-600 hover:bg-sky-300' : ''
      },
      cyan: {
        bgClass: 'dark:bg-gray-800 bg-cyan-200',
        textClass: 'dark:text-cyan-300 text-cyan-800',
        borderClass: this.bordered ? 'border dark:border-cyan-300 border-cyan-800' : '',
        hoverClass: this.dismissType === 'manual' ? 'cursor-pointer dark:hover:bg-gray-600 hover:bg-cyan-300' : ''
      },
      teal: {
        bgClass: 'dark:bg-gray-800 bg-teal-200',
        textClass: 'dark:text-teal-300 text-teal-800',
        borderClass: this.bordered ? 'border dark:border-teal-300 border-teal-800' : '',
        hoverClass: this.dismissType === 'manual' ? 'cursor-pointer dark:hover:bg-gray-600 hover:bg-teal-300' : ''
      }
      };

      const { bgClass, textClass, borderClass, hoverClass } = styleClasses[this.type] || styleClasses['default'];

      return [
        bgClass, textClass, borderClass, hoverClass,
        this.size === 'w' ? 'inline-block' : this.size === 's' ? 'w-32' : this.size === 'm' ? 'w-48' : 'w-64',
        position,
        this.show ? 'end' : this.position + '-start'
      ];
    },
    fontClass(){
      return this.font === "normal" ? 'font-normal' :this.font === "medium" ? 'font-medium' : this.font === "bold" ? 'font-bold' : this.font === "light" ? 'font-light' : 'font-semibold'
    }
  },
  methods: {
    dismiss() {
      if(this.dismissType === "manual"){
        this.show = false;
        setTimeout(() => {  
        this.out = false;
    }, 300);
      
    }
  }},
  data() {
    return {
      out: true,
      show: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 50);

    if (this.dismissType === "auto"){
      setTimeout(() => {
      this.show = false;
      setTimeout(() => {
        this.out = false;
      }, 300);
    }, 5000);

    }
    
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
