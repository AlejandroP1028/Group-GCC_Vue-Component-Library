<template>
  <div :class="{ dark: isDarkMode }">
    <!-- ButtonGroup component -->
    <ButtonGroup :buttons="buttons" @button-click="handleButtonClick"></ButtonGroup>

    <!-- Individual buttons -->
    <BaylonButton buttonText="Extra Small" type="extra-small" showIcon></BaylonButton>
    <BaylonButton buttonText="Small" type="small" showIcon></BaylonButton>
    <BaylonButton buttonText="Base" type="base" showIcon></BaylonButton>
    <BaylonButton buttonText="Large" type="large" showIcon></BaylonButton>
    <BaylonButton buttonText="Extra Large" type="extra-large" showIcon></BaylonButton>
  </div>
</template>

<script>
import ButtonGroup from './components/ButtonGroup.vue';
import BaylonButton from './components/BaylonButton.vue'; // Assuming the path is correct

export default {
  components: {
    ButtonGroup,
    BaylonButton
  },
  data() {
    return {
      buttons: [
        { text: 'Button 1', active: false },
        { text: 'Button 2', active: false },
        { text: 'Button 3', active: false }
      ],
      isDarkMode: false
    }
  },
  methods: {
    handleButtonClick(button) {
      console.log('Button clicked:', button);
    },
    setBackground(type) {
      // Set background based on button type
      if (type === 'dark') {
        this.isDarkMode = true;
      } else if (type === 'light') {
        this.isDarkMode = false;
      }
    }
  }
}
</script>

<style>
/* Add any global styles here */
.dark {
  background-color: #1a202c; /* Dark background color */
  color: #ffffff; /* Light text color */
}
</style>
