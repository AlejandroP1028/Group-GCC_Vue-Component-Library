<template>
      <div id="main" :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-gray-100 dark:bg-gray-900">
        <button @click="toggleDarkMode" type="button" class="absolute top-4 left-10 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
            {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
        </button>
            <h1 id="m_text"> COLLAPSE & SNACKBAR COMPONENT </h1>
            <!--COLLAPSE COMPONENT TESTING-->
            <div id="collapse">
                <h2>COLLAPSE COMPONENT</h2>
                <div id="collapse_test">
                    <div id="c_style1">
                    <CollapseComponent :type="'default'" :isDarkMode="isDarkMode" id="collapse1" :initialCollapsed="false">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Praesent ac magna at ipsum cursus ornare. 
                    </p>
                    </CollapseComponent>
                    <CollapseComponent :type="'type1'" :isDarkMode="isDarkMode" id="collapse2">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Praesent ac magna at ipsum cursus ornare. 
                        </p>
                    </CollapseComponent>
                    </div>
                    <div id="c_style2">
                        <CollapseComponent :type="'type2'" :isDarkMode="isDarkMode" id="collapse3">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Praesent ac magna at ipsum cursus ornare. 
                        </p>
                    </CollapseComponent>
                    <CollapseComponent :type="'type3'" :isDarkMode="isDarkMode" id="collapse4">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Praesent ac magna at ipsum cursus ornare. 
                        </p>
                    </CollapseComponent>
                    </div>
                </div>
            </div>

            <!--SNACKBAR COMPONENT TESTING-->
            <div id="snackbar">
                <h2>SNACKBAR COMPONENT</h2>
                <div id="snackbar_container">
                    <div id="s_style">
                        <button @click="showSnackbar('Awooooh!')">Style1</button>
                        <button @click="showSnackbar('Awooooh!', 'style1')">Style2</button>
                        <button @click="showSnackbar('Awooooh!', 'style2')">Style3</button>
                        <button @click="showSnackbar('Awooooh!', 'style3')">Style4</button>
                        <snackbar ref="snackbar" :isDarkMode="isDarkMode"></snackbar>
                    </div>
                
                </div>
                
            </div>
        </div>
  </template>
<script>
import CollapseComponent from './components/CollapseComponent.vue';
import Snackbar from './components/SnackbarComponent.vue';

export default {
  name: 'CollapseTest',
  components: {
    CollapseComponent,
    Snackbar
  },
  data() {
    return {
      isDarkMode: false
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    showSnackbar(message, type) {
      this.$refs.snackbar.show(message, type);
    }
  }
};
</script>

<style scoped>
.dark {
  background-color: #121212;
  color: #ffffff;
}
button{
  display: inline-block;
  padding: 10px 20px; 
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  background-color: #007BFF;
  border-radius: 5px; 
  cursor:pointer;
}

#main {
    display: flex;
    justify-content:baseline;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
}
#m_text{
    font-size: larger;
    font-weight: bold;
    color:#1e40af;
}

#collapse{
    width: fit-content; 
    height: fit-content;
    margin-left: -8%;
}
#collapse_test{
    display: flex;
    flex-direction: column;
    gap: 9em;
    margin-top: 10px;
}
#c_style1,#c_style2{
    display: flex;
    gap: 20em;
}
h2{
    font-weight: bold;
    color:#1e40af;
}
#snackbar{
    margin-left: -4%;
    margin-top: 5.2em;
}
#s_style{
    margin-top:1em;
    display: flex;
    gap:5em;
}
</style>


  