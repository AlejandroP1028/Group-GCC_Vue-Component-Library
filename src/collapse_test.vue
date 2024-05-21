<template>
    <div id="collapse_test">
      <CollapseComponent>
        <p>This is the content that will be collapsed and expanded.</p>
        <p>You can place any content here.</p>
      </CollapseComponent>
      
    </div>
  </template>
  
  <script>
  import CollapseComponent from './components/CollapseComponent.vue';
  
  export default {
    name: 'collapse_test',
    components: {
      CollapseComponent
    }
  };
  </script>