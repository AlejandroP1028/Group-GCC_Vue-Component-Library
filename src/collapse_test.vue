<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-gray-100 dark:bg-gray-900">
    <button @click="toggleDarkMode" type="button" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
    <div id="collapse_test">
      <CollapseComponent :type="'default'" :isDarkMode="isDarkMode" id="collapse1">
        <p>
          This is type 1 container content
          This is type 1 container content
          This is type 1 container content
        </p>
      </CollapseComponent>
      <CollapseComponent :type="'type1'" :isDarkMode="isDarkMode" id="collapse2">
        <p>
          This is type 2 container content
          This is type 2 container content
          This is type 2 container content
        </p>
      </CollapseComponent>
      <CollapseComponent :type="'type2'" :isDarkMode="isDarkMode" id="collapse3">
        <p>
          This is type 3 container content
          This is type 3 container content
          This is type 3 container content
        </p>
      </CollapseComponent>
      <CollapseComponent :type="'type3'" :isDarkMode="isDarkMode" id="collapse4">
        <p>
          This is type 4 container content
          This is type 4 container content
          This is type 4 container content
        </p>
      </CollapseComponent>
    </div>
    <AlertComponent message="This is an alert message!" />
  </div>
</template>

<script>
import CollapseComponent from './components/CollapseComponent.vue';
import AlertComponent from './components/Alert.vue';

export default {
  name: 'CollapseTest',
  components: {
    CollapseComponent,
    AlertComponent
  },
  data() {
    return {
      isDarkMode: false
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  }
};
</script>

<style scoped>
.dark {
  background-color: #121212;
  color: #ffffff;
}

#collapse1 {
  position: fixed;
  top: 25%;
  left: 25%;
}

#collapse2 {
  position: fixed;
  top: 25%;
  left: 75%;
}

#collapse3 {
  position: fixed;
  top: 75%;
  left: 25%;
}

#collapse4 {
  position: fixed;
  top: 75%;
  left: 75%;
}
</style>
