/* eslint-disable */

<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-blue-50">
    <button @click="toggleDarkMode" type="button" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>

      <Card
      :class="'m-4'"
        header="Gian Catalan"
        size="xs"
        justifyHeader="center"
        type="blue">
        <template #ts>
          <div class="flex justify-center">
            <Avatar
          name="Gian Catalan"
          image="https://i.pinimg.com/originals/04/63/12/046312aac440d95cbc6d56b3eb527d5d.jpg"
          size="xxxl"
          rounded="full"/>
          </div>
        </template>
        <template #bs>
          <div class="flex flex-row space-x-2 justify-center">
            <Button :class="m-0" color="blue" size="small"> Add Friend </Button>
            <Button :class="m-0" color="gray" size="small"> Decline</Button>
          </div>
        </template>
      </Card>
    </div>
    
</template>

<script>
import Card from './components/Card.vue';
import Avatar from './components/UserAvatar.vue';
import Button from './components/Button.vue';
//  import Alert from './components/Alert.vue';

export default {
  name: 'App',
  components: {
    //  Alert,
     Card,
     Avatar,
     Button
  },
  data() {
    return {
      isDarkMode: false // Initial state is light mode
    };
  },
  methods: {
    toggleDarkMode() {
      // Toggle dark mode
      this.isDarkMode = !this.isDarkMode;
    }
  }
}
</script>

<style scoped>
/* Dark mode styles */
.dark {
  background-color: #121212;
  color: #ffffff;
}
</style>
