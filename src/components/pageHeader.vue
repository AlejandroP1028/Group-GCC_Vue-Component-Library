<template>
    <div class="mx-24 my-8">
      <div :id="header" :href="header" 
      :class="`header-container 
      text-gray-800 
      dark:text-gray-200  
      hover:text-blue-400 
      dark:hover:text-blue-200 cursor-pointer 
      transition-all ease-in-out duration-300 
      hover:translate-x-8 w-full text-5xl font-bold mb-2`">
        {{ header }}
      </div>
      <div class="text-gray-800/[.87] dark:text-gray-200/[.87] font-medium text-xl">
        {{ body }}
      </div>
    </div>
    <hr class="h-1 rounded-full bg-gray-800 dark:bg-gray-200 mx-24">
  </template>
  
  <script>
  export default {
    name: 'page-header',
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
  