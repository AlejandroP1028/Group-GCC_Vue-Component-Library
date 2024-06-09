<template>
    <a class="transition-all duration-300 ease-in-out text-clip overflow-hidden border-l border-gray-50 dark:border-gray-900 block hover:border-l-8 hover:border-blue-600" :href="`#${label}`">
      <p class="transition-all mx-2 duration-300 ease-in-out hover:translate-x-2 hover:text-blue-600 text-gray-800 dark:text-gray-200 hover:font-semibold truncate"> 
        {{ label }} 
      </p>
    </a>
  </template>
  
  <script>
  export default {
    name: 'PageLinks',
    props: {
      label: String,
    }
  }
  </script>
  
  <style scoped>
  /* Additional styles can be added here if needed */
  </style>
  