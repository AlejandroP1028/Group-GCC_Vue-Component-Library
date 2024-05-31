<template>
  <div :class="{ dark: isDarkMode }" class="overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900 p-4">
    <div class="flex justify-center mb-8">
      <button @click="toggleDarkMode" class="bg-blue-500 text-white px-4 py-2 rounded w-48">
        {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
      </button>
    </div>

    <h1>Carousel Variations</h1>
    <div class="carousel-container">
      <Carousel
        :items="carouselItems"
        :dark-mode="isDarkMode"
        borderColor="border-blue-500"
        borderSize="border-8"
        indicatorColor="bg-blue-500"
        sliderControlColor="bg-blue-500"
        style="width: 600px; height: 400px;"
      />
      <Carousel
        :items="carouselItems"
        :dark-mode="isDarkMode"
        borderColor="border-sky-500"
        borderSize="border-4"
        indicatorColor="bg-sky-500"
        sliderControlColor="bg-sky-500"
        style="width: 500px; height: 375px;"
      />
      <Carousel
        :items="carouselItems"
        :dark-mode="isDarkMode"
        borderColor="border-teal-500"
        borderSize="border-4"
        indicatorColor="bg-teal-500"
        sliderControlColor="bg-teal-500"
        style="width: 400px; height: 300px;"
      />
      <Carousel
        :items="carouselItems"
        :dark-mode="isDarkMode"
        borderColor="border-cyan-500"
        borderSize="border-2"
        indicatorColor="bg-cyan-500"
        sliderControlColor="bg-cyan-500"
        style="width: 300px; height: 200px;"
      />
      <Carousel
        :items="carouselItems"
        :dark-mode="isDarkMode"
        borderColor="border-gray-500"
        borderSize="border-4"
        indicatorColor="bg-gray-500"
        sliderControlColor="bg-gray-500"
        style="width: 200px; height: 150px;"
      />
      <Carousel
        :items="carouselItems"
        :dark-mode="isDarkMode"
        :showBorder="false"
        indicatorColor="bg-green-500"
        sliderControlColor="bg-green-500"
        style="width: 600px; height: 300px;"
      />
      <Carousel
        :items="carouselItems"
        :dark-mode="isDarkMode"
        borderColor="border-purple-500"
        borderSize="border-8"
        indicatorColor="bg-purple-500"
        sliderControlColor="bg-purple-500"
        style="width: 600px; height: 300px;"
      />
      <Carousel
        :items="carouselItems"
        :dark-mode="isDarkMode"
        :showBorder="false"
        indicatorColor="bg-yellow-500"
        sliderControlColor="bg-yellow-500"
        style="width: 500px; height: 250px;"
      />
      <Carousel
        :items="carouselItems"
        :dark-mode="isDarkMode"
        :showBorder="false"
        indicatorColor="bg-pink-500"
        sliderControlColor="bg-pink-500"
        style="width: 400px; height: 200px;"
      />
      <Carousel
        :items="carouselItems"
        :dark-mode="isDarkMode"
        borderColor="border-indigo-500"
        borderSize="border-4"
        indicatorColor="bg-indigo-500"
        sliderControlColor="bg-indigo-500"
        style="width: 500px; height: 300px;"
      />
      <Carousel
        :items="carouselItems"
        :dark-mode="isDarkMode"
        :showBorder="false"
        indicatorColor="bg-yellow-500"
        sliderControlColor="bg-yellow-500"
        style="width: 500px; height: 250px;"
      />
      <Carousel
        :items="carouselItems"
        :dark-mode="isDarkMode"
        :showBorder="false"
        indicatorColor="bg-pink-500"
        sliderControlColor="bg-pink-500"
        style="width: 400px; height: 200px;"
      />
      <Carousel
        :items="carouselItems"
        :dark-mode="isDarkMode"
        :showBorder="false"
        borderColor="border-red-500"
        indicatorColor="bg-red-500"
        sliderControlColor="bg-red-500"
        style="width: 600px; height: 400px;"
      />
    </div>
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
        { src: require('@/assets/img1.png'), alt: 'First Image' },
        { src: require('@/assets/img2.png'), alt: 'Second Image' },
        { src: require('@/assets/img3.png'), alt: 'Third Image' },
      ],
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
};
</script>

<style scoped>
.dark {
  background-color: #121212;
  color: #ecd9fc;
}
body {
  background-color: #c0bade;
  font-family: 'Poppins', sans-serif;
}
.carousel-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}
</style>
