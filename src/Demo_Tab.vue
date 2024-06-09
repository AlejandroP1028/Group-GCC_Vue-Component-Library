<template>
  <TabsWrapper tabStyle="background" backgroundColor="teal" borderRadius="xl">
    <TabComponent title="Profile">Hello from Profile</TabComponent>
    <TabComponent title="Dashboard">Hello from Dashboard</TabComponent>
    <TabComponent title="Hatdog">Hello from Dashboard</TabComponent>
  </TabsWrapper>
</template>

<script>
import TabsWrapper from './components/TabsWrapper.vue';
import TabComponent from './components/TabComponent.vue';

export default {
  components: {
    TabsWrapper,
    TabComponent
  }
};
</script>
