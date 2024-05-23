<!--Collapse HTML Structure-->
<template>
  <div class="collapse-container">
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
        default: 'Show'
      },
      hide: {
        type: String,
        default: 'Hide'
      }
    },
    data() {
      return {
        isCollapsed: this.initialCollapsed
      };
    },
    methods: {
      toggle() {
        this.isCollapsed = !this.isCollapsed;
      }
    }
  };
</script>

<style scoped>
.collapse-container {
  position: fixed;
  top: 50%;
  left: 50%;
}

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
  max-height: fit-content;
  max-width: fit-content;
  font-family: Georgia, serif;
  color: #2c3e50;
  font-size:medium;
  margin-top: 10px;
  overflow: hidden;
  background-color: #edf2fb;
  padding: 5px 8px;
  border: 4px double #03045e;
  border-radius: 3px;
  margin-top: 5px;
  transition: max-height 0.2s ease-out;
}

.collapse-enter-active, .collapse-leave-active {
  transition: ease;
}

.collapse-enter, .collapse-leave-to {
  max-height: 0;
}
</style>
  