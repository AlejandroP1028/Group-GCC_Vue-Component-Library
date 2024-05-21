<script setup>
import Avatar from './components/UserAvatar.vue';

</script>

<template>
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
        name="Ryan Intalan"
        size="lg"/>
    </div>
  </div>
</template>

