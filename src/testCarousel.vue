<template>
    <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900 p-4">
      <div class="flex justify-center mb-8">
        <Button
          @click="toggleDarkMode"
          color="blue"
          customClasses="w-48"
        >
          {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
        </Button>
      </div>
      <Carousel :items="carouselItems" :dark-mode="isDarkMode" style="max-width: 800px;"/>
    </div>
  </template>
  
  <script>
  import Carousel from './components/Carousel.vue';
  
  export default {
    name: 'testCarousel',
    components: {
      Carousel,
    },
    data() {
      return {
        isDarkMode: false,
        carouselItems: [
          { src: 'https://media.wired.com/photos/592660f4f3e2356fd80090bf/master/w_1920,c_limit/Smurfette_TA.jpg', alt: 'Image 1' },
          { src: 'https://www.usatoday.com/gcdn/media/USATODAY/USATODAY/2013/07/30/1375219821000-XXX-SMURFS-2-MOV-jy-1133-1307301727_16_9.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp', alt: 'Image 2' },
          { src: 'https://lifebeyondnumbers.b-cdn.net/wp-content/uploads/2022/06/smurf.jpg.webp', alt: 'Image 3' },
        ],
      };
    },
    mounted() {
      this.checkDarkModePreference();
    },
    methods: {
      toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        this.updateDarkModePreference();
      },
      checkDarkModePreference() {
        const darkModePreference = localStorage.getItem('darkMode');
        if (darkModePreference) {
          this.isDarkMode = JSON.parse(darkModePreference);
        }
      },
      updateDarkModePreference() {
        localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
      },
    },
  };
  </script>
  
  <style scoped>
  .dark {
    background-color: #121212;
    color: #ffffff;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
  }
  </style>
  
