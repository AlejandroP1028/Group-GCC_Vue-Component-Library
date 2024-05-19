<template>
  <div>
    <ButtonGroup :buttons="buttons" @button-click="handleButtonClick"></ButtonGroup>
    <Button buttonText="Click Me"></Button>
  </div>
</template>

<script>
import ButtonGroup from './components/ButtonGroup.vue';
import Button from './components/BaylonButton.vue'; // Assuming the path is correct

export default {
  components: {
    ButtonGroup,
    Button
  },
  data() {
    return {
      buttons: [
        { text: 'Button 1', active: false },
        { text: 'Button 2', active: false },
        { text: 'Button 3', active: false }
      ]
    }
  },
  methods: {
    handleButtonClick(button) {
      console.log('Button clicked:', button);
    }
  }
}
</script>

<style>
/* Add any global styles here */
</style>
