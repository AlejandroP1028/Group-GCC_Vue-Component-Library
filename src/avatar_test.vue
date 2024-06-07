<script setup>
import { ref } from 'vue';
import Avatar from './components/UserAvatar.vue';

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const buttonClasses = () => {
  return isDarkMode.value ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black';
};
</script>

<template>
  <button @click="toggleDarkMode" class="p-2 mb-4" :class="buttonClasses">
    Toggle Dark Mode
  </button>
  <div class="container mx-auto flex flex-col items-center justify-center h-screen">
    <div class="flex justify-between items-end space-x-1">
      <Avatar
        name="Gian Catalan"
        image="https://i.pinimg.com/originals/04/63/12/046312aac440d95cbc6d56b3eb527d5d.jpg"
        size="sm"
        rounded="full"
        :is-online="true"/>
        
      <Avatar
        name="Gian Catalan"
        image="https://i.pinimg.com/originals/04/63/12/046312aac440d95cbc6d56b3eb527d5d.jpg"
        size="md"
        rounded="full"
        :is-online="true"/>

      <Avatar
        name="Gian Catalan"
        image="https://i.pinimg.com/originals/04/63/12/046312aac440d95cbc6d56b3eb527d5d.jpg"
        size="lg"
        rounded="full"
        :is-online="true"/>

      <Avatar
        name="Gian Catalan"
        image="https://i.pinimg.com/originals/04/63/12/046312aac440d95cbc6d56b3eb527d5d.jpg"
        size="xl"
        rounded="full"
        :is-online="true"/>

      <Avatar
        name="Gian Catalan"
        image="https://i.pinimg.com/originals/04/63/12/046312aac440d95cbc6d56b3eb527d5d.jpg"
        size="xxl"
        rounded="full"
        :is-online="true"/>

      <Avatar
        name="Gian Catalan"
        image="https://i.pinimg.com/originals/04/63/12/046312aac440d95cbc6d56b3eb527d5d.jpg"
        size="xxxl"
        rounded="full"
        :is-online="true"/>
    </div>

    <div class="flex justify-between items-end space-x-1 mt-4">
      <Avatar
        name="Alejandro Prado"
        size="sm"
        rounded="full"
        :is-online="true"/>

      <Avatar
        name="Gian Catalan"
        rounded="full"
        size="md"/>

      <Avatar
        name="Paul"
        size="lg"/>

      <Avatar
        name="Edelyn"
        size="xl"/>

      <Avatar
        name="Lovely"
        size="xxl"
        rounded="full"/>

      <Avatar
        name="Lovely"
        size="xxxl"
        rounded="full"/>
    </div>
  </div>
</template>

<style>
/* Additional global styles for dark mode */
.dark .bg-gray-800 {
  background-color: #1f2937 !important;
}
.dark .bg-gray-200 {
  background-color: #e5e7eb !important;
}
.dark .text-white {
  color: #ffffff !important;
}
.dark .text-black {
  color: #000000 !important;
}
</style>
