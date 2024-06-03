<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900 flex flex-row scroll-smooth">
    <div class="relative w-auto mb-16">
      <PageHeader :class="'flex-none'" header="GCC Notification" body="Show contextual information to your users using notification elements based on Tailwind CSS"/>
      <Section body="The GCC notification component is a versatile tool for displaying various types of messages to users, including warnings, success, errors, default notifications, and general information. Each notification type is designed to stand out, ensuring that users receive important feedback clearly and promptly, thereby enhancing the overall user experience and communication on the webpage."/>
      <Section header="Default Notification" @sectioncreated="addLink" body="The GCC notification component features a default notification with different styles that seamlessly fades out for automatic dismissal.">
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div class="flex space-x-4">
              <Button color="blue" :class="'w-9/10'" @click="showNotification">Show Notification</Button>
            </div>
            <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">
              <Notifications v-if="notificationVisible" type="default" notification_message="This is a default notification." position="pCenter"/> 
              <Notifications v-if="notificationVisible" type="BlueBorder" notification_message="This is a default notification." position="pTop-right"/>       
              <Notifications v-if="notificationVisible" type="CyanBorder" notification_message="This is a default notification." position="pTop-left"/>
              <Notifications v-if="notificationVisible" type="SkyBorder" notification_message="This is a default notification." position="pBottom-left"/>     
              <Notifications v-if="notificationVisible" type="TealBorder" notification_message="This is a default notification." position="pBottom-right"/>      
            </div>
          </div>
        </template>
      </Section>
      <Section header="Notification Types" @sectioncreated="addLink" body="The GCC notification component features a default notification style that seamlessly fades out for automatic dismissal.">
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div class="flex space-x-4">
              <Button color="blue" :class="'w-9/10'" @click="showNotificationTypes">Show Notification</Button>
            </div>
            <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">
              <Notifications v-if="notificationVisibled" type="default" notification_message="This is a default notification." position="pCenter"/> 
              <Notifications v-if="notificationVisibled"  type="success" notification_message="This is a success notification." position="pTop-right"/>       
              <Notifications v-if="notificationVisibled" type="warning" notification_message="This is a warning notification." position="pTop-left"/>
              <Notifications v-if="notificationVisibled" type="error" notification_message="This is an error notification." position="pBottom-left"/>     
              <Notifications v-if="notificationVisibled" type="message" notification_message="This is a message notification." position="pBottom-right"/>    
            </div>
          </div>
        </template>
      </Section>
      <Section header="Notification Types" @sectioncreated="addLink" body="The GCC notification component features a default notification style that seamlessly fades out for automatic dismissal.">
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div class="flex space-x-4">
              <Button color="blue" :class="'w-9/10'" @click="showNotification">Show Notification</Button>
            </div>
            <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">
              <Notifications v-if="notificationVisible" type="default" notification_message="This is a default notification." position="pCenter"/> 
              <Notifications v-if="notificationVisible"  type="success" notification_message="This is a success notification." position="pTop-right"/>       
              <Notifications v-if="notificationVisible" type="warning" notification_message="This is a warning notification." position="pTop-left"/>
              <Notifications v-if="notificationVisible" type="error" notification_message="This is an error notification." position="pBottom-left"/>     
              <Notifications v-if="notificationVisible" type="message" notification_message="This is a message notification." position="pBottom-right"/>    
            </div>
          </div>
        </template>
      </Section>
      <Section header="Notification Positions" @sectioncreated="addLink" body="The GCC notification component features a default notification style that seamlessly fades out for automatic dismissal.">
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div class="flex space-x-4">
              <Button color="blue" :class="'w-9/10'" @click="() => showPositions('absolute')">Show Absolute Positions</Button>
              <Button color="blue" :class="'w-9/10'" @click="() => showPositions('parent')">Show Parent Positions</Button>
            </div>
            <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">
              <Notifications v-for="(position, index) in notificationPositionsA" :key="index" :type="position.type" :notification_message="position.message" :position="position.position"/>
              <Notifications v-for="(position, index) in notificationPositionsP" :key="index" :type="position.type" :notification_message="position.message" :position="position.position"/>
            </div>
          </div>
        </template>
      </Section>
    </div>
    <div class="sticky top-8 w-4/12 transition-all duration-300 ease-in-out flex flex-col space-y-4 overflow-hidden mr-8">
      <hr class="h-0.5 bg-blue-600 border-none rounded-full">
      <span class="tracking-tight font-semibold self-center text-md text-gray-800 dark:text-gray-200">ON THIS PAGE</span>
      <PageLinks v-for="link in links" :key="link.label" :label="link.label"/>
      <div class="flex justify-center">
        <Button @click="toggleDarkMode" color="blue">
          <template #icon>
            <i :class="[isDarkMode ? 'fas fa-sun text-2xl' : 'fas fa-moon text-2xl','text-blue-200']"></i>
          </template>
        </Button>
      </div>
      <hr class="h-0.5 bg-blue-600 border-none rounded-full">
    </div>
  </div>  
</template>

<script>
import Button from './components/Button.vue';
import Section from './components/Section.vue';
import PageHeader from './components/pageHeader.vue';
import Notifications from './components/NotificationsGroup.vue';
import PageLinks from './components/pageLinks.vue';

export default {
  name: 'App',
  components: {
    Button,
    Section,
    PageHeader,
    PageLinks,
    Notifications
  },
  data() {
    return {
      links: [],
      isDarkMode: false,
      defaultDark: false,
      notificationVisible: false,
      notificationVisibled: false,
      notificationPositionsA: [],
      notificationPositionsP: []
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    addLink(header) {
      this.links.push({ label: header });
    },
    showNotification() {
      this.notificationVisible = !this.notificationVisible;
    },
    showNotificationTypes() {
      this.notificationVisibled = !this.notificationVisibled;
    },
    showPositions(type) {
      const notificationTypes = [
        { type: 'message', message: 'This is a message notification.', position: type === 'absolute' ? 'bottom-right' : 'pBottom-right' },
        { type: 'warning', message: 'This is a warning notification.', position: type === 'absolute' ? 'top-left' : 'pTop-left' },
        { type: 'default', message: 'This is a default notification.', position: type === 'absolute' ? 'center' : 'pCenter' },
        { type: 'error', message: 'This is an error notification.', position: type === 'absolute' ? 'bottom-left' : 'pBottom-left' },
        { type: 'success', message: 'This is a success notification.', position: type === 'absolute' ? 'top-right' : 'pTop-right' }
    ]; 
    notificationTypes.forEach(notificationType => {
      if (type === 'absolute') {
        this.notificationPositionsA.push({ ...notificationType });
      } else {
        this.notificationPositionsP.push({ ...notificationType });
      }
    });
    }
  }
};
</script>
