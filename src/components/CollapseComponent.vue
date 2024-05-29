<!--COLLAPSE COMPONENT STRUCTURE-->
<template>
  <div :class="['collapse-container', containerTypeClass]">
    <button @click="toggle" class="collapse-button">
      {{ isCollapsed ? show : hide }}
    </button>
    <transition name="collapse">
      <div v-show="!isCollapsed" class="collapse-content">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
  
<script>
  export default {
    props: {
      initialCollapsed: {
        type: Boolean,
        default: true
      },
      show: {
        type: String,
        default: 'SHOW'
      },
      hide: {
        type: String,
        default: 'HIDE'
      },
      type: {
      type: String,
      default: 'default'
      },
      isDarkMode: {
      type: Boolean,
      default: false
    }
    },
    data() {
      return {
        isCollapsed: this.initialCollapsed
      };
    },
    computed: {
    containerTypeClass() {
      return `collapse-container-${this.type}`;
    }
  },
    methods: {
      toggle() {
        this.isCollapsed = !this.isCollapsed;
      }
    }
  };
</script>

<style scoped>
/* COLLAPSE STYLE */

.collapse-button {
  display: inline-block;
  padding: 10px 20px; 
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  background-color: #007BFF;
  border-radius: 5px; 
  cursor:pointer;
}

.collapse-content {
  position:absolute;
  max-height: fit-content;
  max-width: 300px;
  margin-top: 10px;
  overflow: hidden;
  padding: 10px 10px;
  margin-top: 5px;
  transition: max-height 0.3s ease;
}

/* TRANSITIONS */
.collapse-enter-active, .collapse-leave-active {
  transition: ease;
}

.collapse-enter, .collapse-leave-to {
  max-height: 0;
}

/* LIGHT MODE STYLE */
.collapse-container-default .collapse-content {
  background-color:  #C3DDFD;
  border: 2px solid #76A9FA;
  border-radius: 5px;
}

.collapse-container-type1 .collapse-content {
  background-color: #bae6fd;
  border: 2px solid #0284c7;
  border-radius: 5px;
}

.collapse-container-type2 .collapse-content {
  background-color: #a5f3fc;
  border: 2px solid #0891b2;
  border-radius: 10px;
}
.collapse-container-type3 .collapse-content {
  background-color: #99f6e4;
  border: 2px solid #0d9488;
  border-radius: 10px;
}

/* DARK MODE STYLE  */
.dark .collapse-container-default .collapse-content  {
  background-color: #2563eb;
  border: 2px solid #C3DDFD;
}
.dark .collapse-container-type1 .collapse-content  {
  background-color: #0284c7;
  border: 2px solid #bae6fd;
}
.dark .collapse-container-type2 .collapse-content  {
  background-color: #0891b2;
  border: 2px solid #a5f3fc;
}
.dark .collapse-container-type3 .collapse-content  {
  background-color: #0d9488;
  border: 2px solid #99f6e4;
}

</style>
  