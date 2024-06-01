<template>
  <div>
    <TabCard :tabs="tabs" :initialTab="initialTab">
      <template v-slot:tab-head-tab1>
          Tab 1
      </template>
      <template v-slot:tab-panel-james>
        <h2 class="title"></h2>
        <p class="description">
        
        </p>
        <p class="description">
        </p>
      </template>
      <template v-slot:tab-head-lily>
        Tab 2
      </template>
      <template v-slot:tab-panel-Tab2>
        <h2 class="title"></h2>
        <p class="description">
          
        </p>
        <p class="description">
      
        </p>
      </template>
      <template v-slot:tab-head-Tab3>
        Tab 3
      </template>
      <template v-slot:tab-panel-Tab3>
        <h3 class="title"></h3>

      </template>
      
    </TabCard>
  </div>
</template>

<script>
import TabCard from './components/TabCard';

export default {
  name: 'App',
  components: {
    TabCard
  },
  data() {
    return {
      initialTab: 'Tab 1',
      tabs: ["Tab 1","Tab 2","Tab 3"]
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #eee;
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: 'Roboto', sans-serif;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title {
  margin-top: 10px;
  margin-bottom: 20px;
}

.description {
  margin-top: 5px;
  max-width: 85%;
  line-height: 22px;
  margin-bottom: 10px;
}

.image {
  height: 160px;
  width: auto;
}
</style>
