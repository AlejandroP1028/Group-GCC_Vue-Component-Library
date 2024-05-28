<template>
  <div class="relative w-full border-8 rounded-lg border-blue-600 dark:border-gray-700" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <transition-group name="carousel" tag="div">
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="itemClasses(index)"
          data-carousel-item
        >
          <img
            :src="item.src"
            :alt="item.alt"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />
        </div>
      </transition-group>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
      <button
        v-for="(item, index) in items"
        :key="index"
        type="button"
        :aria-current="currentSlide === index"
        :aria-label="'Slide ' + (index + 1)"
        @click="goToSlide(index)"
        :class="indicatorClasses(index)"
        data-carousel-slide-to="index"
      ></button>
    </div>
    <!-- Slider controls -->
    <button
      type="button"
      class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      @click="prevSlide"
      data-carousel-prev
    >
      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500  dark:bg-gray-800/30 group-hover:bg-cyan-400 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      @click="nextSlide"
      data-carousel-next
    >
      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500  dark:bg-gray-800/30 group-hover:bg-cyan-400 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  //no need na yung isDarkMode prop since naka 
  //selector naman tayo sa tailwind meaning as pag may dark: selector ka sa class ayon yung ipa-prioritize ng css as the class as long as yung parent ay included yung dark na class

  //dagdag colors, make border optional + border size variations and carousel size variations, plano kong gamiting etong carousel sa card page
  name: 'Carousel-component',
  props: {
    items: {
      type: Array,
      required: true,
      validator: value => value.every(item => 'src' in item && 'alt' in item),
    },
    initialSlide: {
      type: Number,
      default: 0,
    },
    isDarkMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentSlide: this.initialSlide,
    };
  },
  computed: {
    itemClasses() {
      return index => ({
        hidden: this.currentSlide!== index,
        'duration-700 ease-in-out': true,
        block: this.currentSlide === index,
        'carousel-enter-active': true,
        'carousel-leave-active': true,
      });
    },
    indicatorClasses() {
      return index => ({
        'w-3 h-3 rounded-full': true,
        'bg-blue-500': this.currentSlide === index,
        'bg-gray-300': this.currentSlide!== index,
      });
    },
  },
  methods: {
    goToSlide(index) {
      this.currentSlide = index;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.items.length) % this.items.length;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.items.length;
    },
  },
};
</script>
<style scoped>
.carousel-enter-active,.carousel-leave-active {
  transition: opacity 1s;
}
.carousel-enter,.carousel-leave-to{
  opacity: 0;
}
</style>

