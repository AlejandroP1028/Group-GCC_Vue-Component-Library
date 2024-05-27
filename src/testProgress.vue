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
    <div class="space-y-4">
      <h4 class="text-blue-400 font-semibold">Different Colors</h4>
      <Progress :progress="45" color="blue" />
      <Progress :progress="60" color="sky" />
      <Progress :progress="75" color="cyan" />
      <Progress :progress="30" color="teal" />
      <Progress :progress="90" color="gray" />

      <br>

      <h4 class="text-cyan-500 font-semibold">Styled Bar with Label Inside</h4>

      <Progress :progress="70" color="orange" gradient="true" labelInside="70%" />
      <Progress :progress="85" color="orange" gradient="true" labelInside="85%" />
      <Progress :progress="25" color="orange" gradient="true" labelInside="25%" />
      <Progress :progress="45" color="orange" gradient="true" labelInside="45%" />
      <Progress :progress="65" color="orange" gradient="true" labelInside="65%" />

      <br>

      <h4 class="text-teal-500 font-semibold">Moving and Pulsing </h4> 
      <Progress :progress="45" color="blue" animated :animationDuration="2" />
      <Progress :progress="60" color="sky" animated :animationDuration="3" />
      <Progress :progress="75" color="cyan" animated :animationDuration="4" />
      <Progress :progress="30" color="teal" animated :animationDuration="5" />
      <Progress :progress="90" color="gray" animated :animationDuration="6" />

      <h4 class="text-teal-500 font-semibold">Uncornered or Unrounded Bars</h4> 
      <Progress :progress="45" color="blue" :rounded="false" />
      <Progress :progress="60" color="sky" :rounded="false" />
      <Progress :progress="75" color="cyan" :rounded="false" />
      <Progress :progress="30" color="teal" :rounded="false" />
      <Progress :progress="90" color="gray" :rounded="false" />
    </div>
  </div>
</template>

<script>
import Progress from './components/Progress.vue';

export default {
  name: 'testProgress',
  components: {
    Progress,
  },
  data() {
    return {
      isDarkMode: false,
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
