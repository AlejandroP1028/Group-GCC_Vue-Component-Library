<template>
  <div class="  bg-blue-50 dark:bg-gray-900">
    <div class="mx-24 my-8">
      <div :id="header" :href="header" 
      :class="`header-container 
      text-gray-800 
      dark:text-gray-200  
      hover:text-blue-500 
      cursor-pointer 
      transition-all ease-in-out duration-300 
      hover:translate-x-8 w-full text-5xl font-bold mb-2`">
        {{ header }}
      </div>
      <div class="text-gray-800/[.87] dark:text-gray-200/[.87] font-medium text-xl">
        {{ body }}
      </div>
    </div>
    <hr class="h-2 rounded-full border-none bg-blue-500 mx-24">

  </div>
    
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
  