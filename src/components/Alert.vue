<template>
  <div class="p-4 m-4 text-sm rounded-lg shadow-lg" :class="computedClasses"  role="alert">
    <svg v-if="icon" class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>{{ msg }}
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
    }
  },
  computed: {
    computedClasses() {
      return [
        // Apply default variant or secondary variant based on userVariant prop
        this.type === 'secondary' ? 'bg-blue-400' : 'bg-blue-600',
        this.textColor === 'white' ? 'text-zinc-200' : this.textColor === 'red' ? 'text-red-400' : 'text-yellow-400',
        this.textColor === 'white' ? 'text-zinc-200' : this.textColor === 'red' ? 'text-red-400' : 'text-yellow-400',
        this.bordered ? this.textColor === 'white' ? 'border border-zinc-200' : this.textColor === 'red' ? 'border border-red-400' : 'border border-yellow-400' : ''
      ];
    }
  }
}
</script>
