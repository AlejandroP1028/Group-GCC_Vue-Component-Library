<template>
  <div class="font-sans">
    <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900">
      <PageHeader 
        header="Alert" 
        body="Show contextual information to your users using alert elements based on Tailwind CSS"/>
      
      <Section body="The alert component can be used to provide information to your users such as success or error messages, but also highlighted information complementing the normal flow of paragraphs and headers on a page."/>

      <Section header="Default alert" body="Use the following button to show random default alert components.">
        <template #content>
          <div class="flex flex-row space-x-4">
            <Button @click="addAlert">Add Random Default Alert</Button>
          </div>
        </template>
      </Section>

      <Section header="Alert Icon" body="Use the following examples of alert components to show messages as feedback to your users.">
        <template #content>
          <div class="flex flex-row space-x-4">
            <Button @click="addAlert">Add Random Default Alert</Button>
          </div>
        </template>
      </Section>

      <div v-for="(alert, index) in alerts" :key="index" class="relative">
        <Alert 
          :msg="alert.msg"
          :type="alert.type"
          :position="alert.position"
          :rounded="alert.rounded"
          accent
        />
      </div>
    </div>
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
      const positions = ['tl', 'tr', 'tc', 'll', 'lr', 'lc']
      const type = ['info','danger','success','warning'];
      const randomPosition = positions[Math.floor(Math.random() * positions.length)];
      const randomType = type[Math.floor(Math.random() * type.length)];

      const message = {
        info: 'This is an info alert',
        danger: 'This is a danger alert',
        success: 'This is a success alert',
        warning: 'This is a warning alert',
      }
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
