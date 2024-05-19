<template>
  <div class="page-container">
    <div class="progress-container">
      <h2 class="progress-title" style="font-weight: bold;">Progress Bars</h2>

      <div v-for="(bar, index) in bars" :key="bar.variant" class="row mb-3">
        <div class="col-sm-10 pt-1">
          <div :class="`progress-bar-container ${bar.variant}`">
            <b-progress :value="bar.value" :height="height" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bars: [
        { variant: 'bg-blue-100', value: 75 },
        { variant: 'bg-blue-200', value: 75 },
        { variant: 'bg-blue-300', value: 75 },
        { variant: 'bg-blue-400', value: 75 }
      ],
      height: '20px',
      timer: null
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.bars.forEach((bar) => (bar.value = 25 + Math.random() * 75));
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }
};
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
}

.progress-container {
  width: 70%;
  margin: 20px;
  margin-left: 28%;
  padding: 20px;
  height: 300px;
  margin-top: -25.5%;
  background-color: #ffffff;
  box-shadow: 0 15px 21px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  text-align: center;
}

.progress-title {
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: bold;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: left; 
  margin-left: 5px; 
}

.row {
  align-items: center;
}

.progress-bar-container {
  position: relative;
  width: 120%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.bg-blue-100 {
  background-color: #272f68;
}

.bg-blue-200 {
  background-color: #272f68;
}

.bg-blue-300 {
  background-color: #272f68;
}

.bg-blue-400 {
  background-color: #272f68;
}

.indicator-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 14px;
  font-weight: bold;
}
</style>
