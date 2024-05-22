<template>
  <div class="progress-container" :class="{ 'dark': isDarkMode }">
    <!-- Toggle button for dark/light mode -->
    <button @click="toggleDarkMode" type="button" class="toggle-mode">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>

    <!-- Static progress bars -->
    <div>
      <div class="progress-bars">
        <h6 :style="{ 'font-weight': '500', 'color': isDarkMode ? '#a5f3fc' : '#0891b2' }">Normal Bars</h6>
        <b-progress v-for="(progress, index) in staticProgresses" :key="'static-' + index" class="smaller">
          <b-progress-bar :style="{ 'background-color': colors[index], 'width': progress + '%' }"></b-progress-bar>
        </b-progress>
      </div>
    </div>

    <!-- Striped progress bars -->
    <div>
      <div class="progress-bars">
        <h6 :style="{ 'font-weight': '500', 'color': isDarkMode ? '#cffafe' : '#06b6d4' }">Striped Bars</h6>
        <b-progress v-for="(progress, index) in stripedProgresses" :key="'striped-' + index" class="smaller">
          <b-progress-bar :style="{ 'background-color': colors[index], 'width': progress + '%', 'background-image': 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)' }"></b-progress-bar>
        </b-progress>
      </div>
    </div>

    <!-- Animated progress bars -->
    <div>
      <div class="progress-bars">
        <h6 :style="{ 'font-weight': '500', 'color': isDarkMode ? '#99f6e4' : '#0891b2' }">Animated Bars</h6>
        <b-progress v-for="(progress, index) in progresses" :key="'animated-' + index" class="smaller">
          <b-progress-bar :style="{ 'background-color': colors[index], 'width': progress + '%' }"></b-progress-bar>
        </b-progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
      colors: ['#60a5fa', '#38bdf8', '#22d3ee', '#2dd4bf'],
      staticProgresses: [10, 30, 50, 70],
      stripedProgresses: [15, 35, 55, 75],
      progresses: [25, 45, 65, 85]
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  },
  mounted() {
    setInterval(() => {
      this.progresses = this.progresses.map(progress => {
        const newProgress = progress + 1;
        return newProgress > 100 ? 0 : newProgress;
      });
    }, 100);
  }
};
</script>

<style scoped>
.progress-container {
  font-family: 'Poppins';
  position: absolute;
  top: 110%;
  margin-left: 10%;
  max-width: 300px;
  transition: background-color 0.3s, color 0.3s;
}

.progress-bars {
  padding: 20px;
  width: 700px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 12px;
  background-color: #fafafa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dark .progress-bars {
  background-color: #091224;
  border-radius: 10px;
}

.b-progress-bar {
  transition: width 0.3s, background-color 0.3s;
}

.dark .b-progress-bar {
  background-color: #60a5fa;
}

.b-progress-bar:hover {
  opacity: 0.7;
}

.toggle-mode {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
