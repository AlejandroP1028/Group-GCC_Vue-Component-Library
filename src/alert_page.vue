<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900">
    <Button :class="`absolute m-4 bottom-4 right-4 `" @click="toggleDarkMode"> {{ isDarkMode ? 'Light' : 'Dark' }}</Button>
    <PageHeader 
      header="Alert" 
      body="Show contextual information to your users using alert elements based on Tailwind CSS"/>
    
    <Section body="The alert component can be used to provide information to your users such as success or error messages, but also highlighted information complementing the normal flow of paragraphs and headers on a page."/>

    <Section header="Default alert" body="Use the following button to show random default alert components.">
      <template #content>
        <div class="flex flex-col items-center mt-4 h-full">
          <Button :class="'w-9/10'" @click="addAlert">Add Random Default Alert</Button>
          <div class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-3/5 h-80 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">
            <Alert v-for="(alert, index) in alerts" 
                   :key="index"
                   :msg="alert.msg"
                   :type="alert.type"
                   :position="alert.position"
                   :rounded="alert.rounded"
                   accent
            />
          </div>
        </div>
      </template>
    </Section>

    <Section header="Alert Icon" body="Use the following examples of alert components to show messages as feedback to your users.">
      <template #content>
        <Button @click="addAlert">Add Random Default Alert</Button>
      </template>
    </Section>

  </div>
</template>

<script>
import Button from './components/Button.vue';
import Section from './components/Section.vue';
import PageHeader from './components/pageHeader.vue';
import Alert from './components/Alert.vue';

export default {
  name: 'App',
  components: {
    Button,
    Section,
    PageHeader,
    Alert,
  },
  data() {
    return {
      alerts: [],
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    addAlert() {
      const positions = ['ptl', 'ptr', 'pll', 'plr'];
      const types = ['info', 'danger', 'success', 'warning'];
      const randomPosition = positions[Math.floor(Math.random() * positions.length)];
      const randomType = types[Math.floor(Math.random() * types.length)];

      const message = {
        info: 'This is an info alert',
        danger: 'This is a danger alert',
        success: 'This is a success alert',
        warning: 'This is a warning alert',
      };

      this.alerts.push({
        msg: message[randomType],
        type: randomType,
        position: randomPosition,
      });
    },
  },
};
</script>

<style scoped>
.dark {
  background-color: #121212;
  color: #ffffff;
}
</style>
