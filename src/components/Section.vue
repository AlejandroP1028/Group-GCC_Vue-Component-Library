<template>
    <div v-if="header || body" class=" mx-24 my-16">
      <div v-if="header" :id="header" class="header-container tracking text-gray-800 dark:text-gray-200 hover:text-blue-400 dark:hover:text-blue-200  text-3xl font-bold cursor-pointer mb-2 transition-all ease-in-out duration-300 hover:translate-x-8 w-full">
        {{ header }}
      </div>
      <div class="text-gray-800/[.87] dark:text-gray-200/[.87] font-medium text-md mb-4">
        {{ body }}
      </div>
      <slot name="content"></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'section-component',
    props: {
      header: String,
      body: String,
    },
  };
  </script>
  
  <style scoped>
  .header-container {
    position: relative;
  }
  
  .header-container::before {
    content: '#';
    position: absolute;
    left: -20px;
    opacity: 0;
    transition: all 0.15s ease;
  }
  
  .header-container:hover::before {
    left: -30px;
    opacity: 1;
    animation: fadeIn 0.15s ease forwards;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  </style>
  