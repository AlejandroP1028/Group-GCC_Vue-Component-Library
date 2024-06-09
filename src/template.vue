<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900 flex flex-row scroll-smooth">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <div class="relative w-auto mb-16">
      <PageHeader header="GCC Carousel" body="Show contextual information to your users using carousel elements based on Tailwind CSS" />
      <Section body="The GCC Carousel component allows you to showcase a series of images or content in a visually appealing and interactive manner. It is a great way to grab users' attention and highlight important information or products on your website. With features like autoplay, navigation controls, and customizable settings, the GCC Carousel is a versatile tool for creating dynamic and engaging content sections." />
      <Section @sectioncreated="addLink" header="Carousel Autoplay" body="The GCC Carousel is capable of automatically transitioning between slides without user interaction, providing a hands-free browsing experience.">
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div :class="{ 'dark': isDarkMode }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg">
              <CarouselComponent :items="carouselItems" :autoplay="true" :style="{ width: '1100px', height: '350px' }">
                <button v-if="showSliderControls"></button>
              </CarouselComponent>
            </div>
          </div>
        </template>
      </Section>

      <Section @sectioncreated="addLink" header="Carousel Sizes" body="The GCC Carousel can be displayed in various sizes to best suit the layout and content of your page, providing flexibility in design and enhancing user engagement with dynamic visual elements.">
        <template #content>
          <div class="flex items-center ml-[30%] h-20 w-[450px] mt-8 bg-white-50 rounded-3xl gap-4 border-4 shadow-xl border-teal-700 dark:border-teal-300 dark:bg-gray-800 hover:shadow-md transform hover:scale-105 transition duration-300">
            <div class="flex items-center">
              <label class="ml-[40px] text-sm block text-teal-700 dark:text-teal-200 font-semibold">Width : </label>
              <input v-model.number="selectedWidth" class="dark:text-white text-xs w-16 h-6 ml-1 mr-1 p-2 dark:bg-gray-500 border dark:border-gray-600 rounded-md focus:outline-none focus:border-teal-500 dark:focus:border-blue-400">
            </div>
            <div class="flex items-center">
              <label class="text-sm block text-teal-700 dark:text-teal-200 font-semibold">Height : </label>
              <input v-model.number="selectedHeight" class="dark:text-white text-xs w-16 h-6 ml-1 mr-1 p-2 dark:bg-gray-500 border dark:border-gray-600 rounded-md focus:outline-none focus:border-teal-500 dark:focus:border-blue-400">
            </div>
            <button @click="updateCarouselSize" class="bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded-2xl w-30 h-10 dark:bg-teal-00 dark:hover:bg-teal-900">Update Size</button>
          </div>

          <div class="flex flex-col items-center mt-4 h-full">
            <div :class="{ 'dark': isDarkMode }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg">
              <CarouselComponent :items="carouselItems" :autoplay="false" :style="{ width: carouselWidth + 'px', height: carouselHeight + 'px' }">
              </CarouselComponent>
            </div>
          </div>
        </template>
      </Section>

      <Section @sectioncreated="addLink" header="Carousel Customization" body="The GCC Carousel allows users to customize the appearance of carousels by adding borders and changing colors. With this feature, users can enhance the visual appeal of their carousels, making them stand out on their websites.">
        <template #content>
          <div class="flex items-center h-20 w-[520px] text-blue-400 dark:text-cyan-300 font-bold p-2 text-md mt-8 bg-white-50 rounded-3xl gap-4 border-4 shadow-xl border-sky-500 dark:border-sky-300 dark:bg-gray-800 transform hover:scale-105 transition duration-300">
            <label for="border-color" class="ml-[5%]"></label>
            <input type="radio" id="border-color-blue" name="border-color" value="blue" checked>Blue
            <input type="radio" id="border-color-cyan" name="border-color" value="cyan"> Cyan
            <input type="radio" id="border-color-teal" name="border-color" value="teal"> Teal
            <input type="radio" id="border-color-orange" name="border-color" value="orange"> Orange
            <input type="radio" id="border-color-violet" name="border-color" value="violet"> Violet
          </div>

          <div class="flex items-center h-10 w-[350px] font-semibold text-blue-500  dark:text-teal-300 text-sm mt-8 bg-white-50 rounded-3xl gap-4 border-4 shadow-xl border-sky-500 dark:border-sky-300 dark:bg-gray-800 transform hover:scale-105 transition duration-300">
            <label for="border-size" class="ml-[8%]"></label>
            <input type="radio" id="border-size-2px" name="border-size" value="2px" checked> 2px
            <input type="radio" id="border-size-4px" name="border-size" value="4px"> 4px
            <input type="radio" id="border-size-6px" name="border-size" value="6px"> 6px
          </div>

          <div class="flex flex-col items-center mt-4 h-full">
            <div id="carousel-container" :class="{ 'dark': isDarkMode }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg">
              <CarouselComponent :items="carouselItems" :autoplay="false" :style="{ width: '1100px', height: '350px' }">
              </CarouselComponent>
            </div>
          </div>
        </template>
      </Section>

      <Section @sectioncreated="addLink" header="Carousel Images with Text!" body="The GCC Carousel has a dynamic and engaging feature that enhances user experience by seamlessly integrating captivating visuals with informative text, fostering deeper engagement and conveying your message effectively to your audience.">
        <template #content>
          <div class="flex items-center ml-[15%] h-20 w-[800px]  mt-8 bg-white-50 rounded-3xl gap-4 border-4 shadow-xl border-blue-700 dark:border-blue-200 dark:bg-gray-800 transform hover:scale-105 transition duration-300">
            <div class="flex items-center">
              <label class="ml-[40px] text-sm block text-blue-700 dark:text-blue-200 font-semibold">Your Heading here : </label>
              <input v-model="headingText" class="dark:text-white text-xs w-40 h-6 ml-1 mr-1 p-2 dark:bg-gray-500 border dark:border-gray-600 rounded-md focus:outline-none focus:border-blue-700 dark:focus:border-blue-400">
            </div>
            <div class="flex items-center">
              <label class="text-sm block text-blue-700 dark:text-blue-200 font-semibold">Your Sub-Text here : </label>
              <input v-model="bodyText" class="dark:text-white text-xs w-40 h-6 ml-1 mr-1 p-2 dark:bg-gray-500 border dark:border-gray-600 rounded-md focus:outline-none focus:border-blue-700 dark:focus:border-blue-400">
            </div>
            <button @click="updateTextInside" class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-3xl w-[100px] h-10 dark:bg-blue-500 dark:hover:bg-blue-800">Show </button>
          </div>

          <div class="flex flex-col items-center mt-4 h-full">
            <div :class="{ 'dark': isDarkMode }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-[550px] p-4 overflow-hidden rounded-lg shadow-lg">
              <CarouselComponent :items="carouselItemswithText" :autoplay="true" :style="{ width: '1100px', height: '550px' }">
                <template #item="{ item }">
                  <div class="text-2xl font-bold">{{ item.headingText }}</div>
                  <div class="text-lg">{{ item.bodyText }}</div>
                </template>
              </CarouselComponent>
            </div>
          </div>
        </template>
      </Section>

      <PageHeader header="GCC Progress Bars" body="Show contextual information to your users using carousel elements based on Tailwind CSS" />
      <Section body="The GCC Carousel component  are a powerful tool in your website's UI toolbox. They are a fundamental user interface (UI) element that visually communicates the advancement of a task or process on your website. They act like a roadmap, showing users where they are in the journey and how much further they need to go." />

      <Section @sectioncreated="addLink" header="Progress Default" body="This is a fundamental progress bar that visually communicates the completion status of a task. It typically appears as a bar that fills horizontally as the process progresses. While it lacks design elements, it effectively conveys progress without any frills.">
        <template #content>
          <div class="flex flex-row items-center  mt-4 h-full">
            <div :class="{ 'dark': isDarkMode }" class="relative bg-gray-300 dark:bg-gray-800 ease-in-out ml-[10%] mr-[10%] mt-8 w-[400px] h-60 p-4 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <ProgressComponent :progress="70" color="blue" :rounded="false" class="mb-4 mt-7 ml-4" />
              <ProgressComponent :progress="60" color="blue" :rounded="false" class="mb-4 ml-4" />
              <ProgressComponent :progress="50" color="blue" :rounded="false" class="mb-4 ml-4" />
              <ProgressComponent :progress="70" color="blue" :rounded="false" class="mb-4 ml-4" />
              <ProgressComponent :progress="30" color="blue" :rounded="false" class="mb-4 ml-4" />
              <ProgressComponent :progress="25" color="blue" :rounded="false" class="mb-4 ml-4" />
            </div>
            <div :class="{ 'dark': isDarkMode }" class="relative bg-gray-300 dark:bg-gray-800 ease-in-out mt-8 w-[400px] h-60 p-4 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <ProgressComponent :progress="50" color="blue" :rounded="false" class="mb-4 mt-7 ml-4" />
              <ProgressComponent :progress="60" color="blue" :rounded="false" class="mb-4 ml-4" />
              <ProgressComponent :progress="40" color="blue" :rounded="false" class="mb-4 ml-4" />
              <ProgressComponent :progress="70" color="blue" :rounded="false" class="mb-4 ml-4" />
              <ProgressComponent :progress="30" color="blue" :rounded="false" class="mb-4 ml-4" />
              <ProgressComponent :progress="75" color="blue" :rounded="false" class="mb-4 ml-4" />
            </div>
          </div>
        </template>
      </Section>

      <Section @sectioncreated="addLink" header="Progress Customizations" body="Customize your progress bars by adjusting the size of the progression value inside to match your website's needs.">
        <template #content>
          <div class="flex items-center ml-[27%] h-10 w-[570px] text-gray-500 font-bold text-sm dark:text-teal-200 bg-white-50 rounded-xl gap-4 border-4 shadow-xl border-gray-700 dark:border-teal-200 dark:bg-gray-800 transform hover:scale-105 transition duration-300">
            <div class="flex items-center mt-4 h-full">
              <input type="radio" id="progress-10" name="progress-value" value="10" v-model="selectedProgress" class="ml-2 mb-3">
              <label for="progress-10" class="ml-2 mb-4">10%</label>
              <input type="radio" id="progress-15" name="progress-value" value="15" v-model="selectedProgress" class="ml-4 mb-3">
              <label for="progress-15" class="ml-2  mb-4">15%</label>
              <input type="radio" id="progress-25" name="progress-value" value="25" v-model="selectedProgress" class="ml-4 mb-3">
              <label for="progress-25" class="ml-2  mb-4">25%</label>
              <input type="radio" id="progress-50" name="progress-value" value="50" v-model="selectedProgress" class="ml-4 mb-3">
              <label for="progress-50" class="ml-2  mb-4">50%</label>
              <input type="radio" id="progress-75" name="progress-value" value="75" v-model="selectedProgress" class="ml-4 mb-3">
              <label for="progress-75" class="ml-2  mb-4">75%</label>
              <input type="radio" id="progress-85" name="progress-value" value="85" v-model="selectedProgress" class="ml-4 mb-3">
              <label for="progress-75" class="ml-2  mb-4">85%</label>
              <input type="radio" id="progress-95" name="progress-value" value="95" v-model="selectedProgress" class="ml-4 mb-3">
              <label for="progress-75" class="ml-2  mb-4">95%</label>
              <input type="radio" id="progress-100" name="progress-value" value="100" v-model="selectedProgress" class="ml-4 mb-3">
              <label for="progress-75" class="ml-2  mb-4">100%</label>
            </div>
          </div>

          <div class="flex flex-col items-center h-full">
            <div class="flex">

              <div :class="{ 'dark': isDarkMode }" class="relative bg-gray-300 dark:bg-gray-800 transform hover:scale-105 transition duration-300ease-in-out mt-8 mr-[10%] w-[500px] h-66 p-4 overflow-hidden rounded-lg shadow-lg">
                <ProgressComponent :progress="selectedProgress" :bgColor="selectedColor" class="ml-10 mb-4 mt-10" />
                <ProgressComponent :progress="selectedProgress" :bgColor="selectedColor" class="ml-10 mb-4" />
                <ProgressComponent :progress="selectedProgress" :bgColor="selectedColor" class="ml-10 mb-4" />
                <ProgressComponent :progress="selectedProgress" :bgColor="selectedColor" class="ml-10 mb-4" />
                <ProgressComponent :progress="selectedProgress" :bgColor="selectedColor" class="ml-10 mb-4" />
                <ProgressComponent :progress="selectedProgress" :bgColor="selectedColor" class="ml-10 mb-4" />
              </div>

              <div :class="{ 'dark': isDarkMode }" class="relative bg-gray-300 dark:bg-gray-800 transform hover:scale-105 transition duration-300  ease-in-out mt-8 w-[500px] h-66 p-4 overflow-hidden rounded-lg shadow-lg">
                <ProgressComponent :progress="selectedProgress" :bgColor="selectedColor" class="ml-10 mb-4 mt-10" />
                <ProgressComponent :progress="selectedProgress" :bgColor="selectedColor" class="ml-10 mb-4" />
                <ProgressComponent :progress="selectedProgress" :bgColor="selectedColor" class="ml-10 mb-4" />
                <ProgressComponent :progress="selectedProgress" :bgColor="selectedColor" class="ml-10 mb-4" />
                <ProgressComponent :progress="selectedProgress" :bgColor="selectedColor" class="ml-10 mb-4" />
                <ProgressComponent :progress="selectedProgress" :bgColor="selectedColor" class="ml-10 mb-4" />
              </div>
            </div>

          </div>
        </template>
      </Section>

      <Section @sectioncreated="addLink" header="Progress Styled Colors (Round and Default)" body="Progress styled colors introduce gradient effects and uncornered progress bars to elevate the visual experience. This implementation adds depth and dimensionality to the progress bars, enhancing their aesthetic appeal while maintaining clarity in tracking progress.">
        <template #content>
          <div class="flex flex-row items-center  mt-4 h-full">
            <div :class="{ 'dark': isDarkMode }" class="relative bg-gray-300 dark:bg-gray-800 ease-in-out ml-[10%] mr-[10%] mt-8 w-[400px] h-50 p-4 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <ProgressComponent :progress="70" color="blue" gradient="true" labelInside="70%" /> <br>
              <ProgressComponent :progress="85" color="blue" gradient="true" labelInside="85%" /> <br>
              <ProgressComponent :progress="25" color="blue" gradient="true" labelInside="25%" /> <br>
              <ProgressComponent :progress="45" color="blue" gradient="true" labelInside="45%" /> <br>
              <ProgressComponent :progress="65" color="blue" gradient="true" labelInside="65%" />
            </div>
            <div :class="{ 'dark': isDarkMode }" class="relative bg-gray-300 dark:bg-gray-800 ease-in-out mt-8 w-[400px] h-50 p-4 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <ProgressComponent :progress="45" color="blue" :rounded="false" gradient="true" labelInside="40%" /> <br>
              <ProgressComponent :progress="60" color="sky" :rounded="false" gradient="true" labelInside="89%" /> <br>
              <ProgressComponent :progress="75" color="cyan" :rounded="false" gradient="true" labelInside="35%" /> <br>
              <ProgressComponent :progress="30" color="teal" :rounded="false" gradient="true" labelInside="55%" /> <br>
              <ProgressComponent :progress="90" color="gray" :rounded="false" gradient="true" labelInside="65%" />
            </div>
          </div>
        </template>
      </Section>

      <Section @sectioncreated="addLink" header="Moving Progress Bars (Round)" body="Moving progress bars dynamically animate to represent the progression of tasks, offering real-time visual feedback to users. Through fluid motion, they enhance user engagement and provide a clear indication of ongoing processes.">
        <template #content>
          <div class="flex flex-row items-center  mt-4 h-full">
            <button class="animateButton" @click="toggleAnimation"></button>
            <div :class="{ 'dark': isDarkMode }" class="relative bg-gray-300 dark:bg-gray-800 ease-in-out ml-[10%] mr-[10%] mt-8 w-[400px] h-50 p-4 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <ProgressComponent :progress="45" color="blue" :animated="animateProgress" :animationDuration="2" /> <br>
              <ProgressComponent :progress="40" color="sky" :animated="animateProgress" :animationDuration="3" /> <br>
              <ProgressComponent :progress="75" color="cyan" :animated="animateProgress" :animationDuration="4" /> <br>
              <ProgressComponent :progress="30" color="teal" :animated="animateProgress" :animationDuration="5" /> <br>
              <ProgressComponent :progress="90" color="gray" :animated="animateProgress" :animationDuration="6" />
            </div>
            <div :class="{ 'dark': isDarkMode }" class="relative bg-gray-300 dark:bg-gray-800 ease-in-out mt-8 w-[400px] h-50 p-4 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <ProgressComponent :progress="45" color="blue" :animated="animateProgress" :animationDuration="2" /> <br>
              <ProgressComponent :progress="61" color="sky" :animated="animateProgress" :animationDuration="3" /> <br>
              <ProgressComponent :progress="75" color="cyan" :animated="animateProgress" :animationDuration="4" /> <br>
              <ProgressComponent :progress="10" color="teal" :animated="animateProgress" :animationDuration="5" /> <br>
              <ProgressComponent :progress="50" color="gray" :animated="animateProgress" :animationDuration="6" />
            </div>
          </div>
        </template>
      </Section>
      <br>
    </div>

    <div class="sticky top-12 w-4/12 transition-all duration-300 ease-in-out flex flex-col space-y-4 overflow-hidden mr-8">
      <hr class="h-0.5 bg-blue-600 border-none rounded-full">
      <span class="tracking-tight font-semibold self-center text-md text-gray-800 dark:text-gray-200">ON THIS PAGE</span>
      <PageLinks v-for="link in links" :key="link.label" :label="link.label" />
      <div class="flex justify-center">
        <Button @click="toggleDarkMode" color="blue">
          <template #icon>
            <i :class="[isDarkMode? 'fas fa-sun text-2xl' : 'fas fa-moon text-2xl','text-blue-200']"></i>
          </template>
        </Button>
      </div>
      <hr class="h-0.5 bg-blue-600 border-none rounded-full">
    </div>
  </div>

</template>

<script>
import Section from './components/Section.vue'
import PageLinks from './components/pageLinks.vue'; 
import PageHeader from './components/pageHeader.vue';
import Button from './components/Button.vue';
import CarouselComponent from './components/Carousel.vue';
import ProgressComponent from './components/Progress.vue'

export default {
  name: 'template',
  components:{
    PageHeader,
    Section,
    PageLinks,
    Button,
    CarouselComponent,
    ProgressComponent
  },
  data() {
    return {
      selectedColor: 'blue',
      selectedProgress: 50,
      links: [],
      isDarkMode: false,
      animateProgress: false,
      borderColor: '',
      borderSize: '',
      carouselItemswithText: [
        { src: require('@/assets/img1.png'), alt: 'First Image', heading: '', body: '' },
        { src: require('@/assets/img2.png'), alt: 'Second Image', heading: '', body: '' },
        { src: require('@/assets/img3.png'), alt: 'Third Image', heading: '', body: '' },
      ],
      carouselItems : [
        { src: require('@/assets/img1.png'), alt: 'First Image'},
        { src: require('@/assets/img2.png'), alt: 'Second Image'},
        { src: require('@/assets/img3.png'), alt: 'Third Image'},
      ],
      selectedWidth: 1100,
      selectedHeight: 350,
      carouselWidth: 1100,
      carouselHeight: 350,
      headingText: '',
      bodyText: '',
    };
  },
  methods: {
    addLink(header) {
      this.links.push({ label: header });
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },

    toggleAnimation() {
      this.animateProgress = !this.animateProgress;
    },
    updateCarouselSize() {
      this.carouselWidth = this.selectedWidth;
      this.carouselHeight = this.selectedHeight;
    },
    updateTextInside() {
      this.carouselItemswithText.forEach(item => {
        item.heading = this.headingText;
        item.body = this.bodyText;
      });
    },
updateProgressBarColor(color) {
  console.log("Selected color:", color);
  this.selectedColor = color;
  console.log("Updated selected color:", this.selectedColor);
}

  },
  mounted() {
    const carouselContainer = document.getElementById('carousel-container');
    const borderColorRadios = document.querySelectorAll('input[name="border-color"]');
    const borderSizeRadios = document.querySelectorAll('input[name="border-size"]');
    
    // Function to update carousel border style
    const updateCarouselBorder = () => {
      const selectedColor = document.querySelector('input[name="border-color"]:checked').value;
      const selectedSize = document.querySelector('input[name="border-size"]:checked').value;
      carouselContainer.style.border = `${selectedSize} solid ${selectedColor}`;
    };
    
    // Event listeners for border color radios
    borderColorRadios.forEach(radio => {
      radio.addEventListener('change', updateCarouselBorder);
    });
    
    // Event listeners for border size radios
    borderSizeRadios.forEach(radio => {
      radio.addEventListener('change', updateCarouselBorder);
    });
}
}
</script>

<style>
.animateButton {
  background-image: url("@/assets/playthis.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 80px;
  height: 80px;
}
</style> 
