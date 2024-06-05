<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900 flex flex-row scroll-smooth">
      <div class="relative w-auto mb-16">
        <PageHeader :class="'flex-none'" header="GCC List" body="Show contextual information to your users using list elements based on Tailwind CSS"/>
        <Section body="The GCC list component is a versatile tool for presenting various types of information. Each list item type is designed to be distinct, ensuring that users receive important feedback clearly and promptly, thereby enhancing the overall user experience and communication on the webpage."/>
        <Section header="Unordered List" @sectioncreated="addLink" body="The GCC notification component features a default notification style that seamlessly fades out for automatic dismissal.">
          <template #content>
            <div class="flex flex-col items-center mt-4 h-full">
              <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]"> 
                <ItemList :items="List" type="unorderedlist" layout="vertical" color="sky" position="centered"/>
              </div>
            </div>
          </template>
        </Section>
        <Section header="Default Notification Style" @sectioncreated="addLink" body="The GCC notification component features a default notification with 5 different styles that seamlessly fades out for automatic dismissal.">
          <template #content>
            <div class="flex flex-col items-center mt-4 h-full">
              <div class="flex space-x-4">
                <Button color="blue" :class="'w-9/10'" @click="showNotificationDefault">Default</Button>
                <Button color="blue" :class="'w-9/10'" @click="showNotificationBlue">Blue</Button>
                <Button color="sky" :class="'w-9/10'" @click="showNotificationSky">Sky</Button>
                <Button color="teal" :class="'w-9/10'" @click="showNotificationTeal">Teal</Button>
                <Button color="cyan" :class="'w-9/10'" @click="showNotificationCyan">Cyan</Button>
              </div>
              <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">
                <Notifications v-if="notificationDefaultVisible" type="default" notification_message="This is a default notification." position="pCenter"/> 
                <Notifications v-if="notificationBlueBorderVisible"  type="BlueBorder" notification_message="This is a blue bordered default notification." position="pTop-right"/>       
                <Notifications v-if="notificationCyanBorderVisible" type="CyanBorder" notification_message="This is a cyan bordered default notification." position="pTop-left"/>
                <Notifications v-if="notificationSkyBorderVisible" type="SkyBorder" notification_message="This is a sky bordered default notification." position="pBottom-left"/>     
                <Notifications v-if="notificationTealBorderVisible" type="TealBorder" notification_message="This is a teal bordered default notification." position="pBottom-right"/>    
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
  import ItemList from './components/ItemList.vue';
  import Section from './components/Section.vue';
  import PageHeader from './components/pageHeader.vue';
  import PageLinks from './components/pageLinks.vue';
  
  export default {
    name: 'App',
    components: {
      Button,
      Section,
      PageHeader,
      PageLinks,
      ItemList
    },
    data() {
      return {
        links: [],
        isDarkMode: false,
        defaultDark: false,
      List: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
      ],
      descriptionList: [
        { term: 'Name', description: 'Juan Cutie' },
        { term: 'Address', description: 'Metro Manila, Philippines' },
        { term: 'Phone number', description: '+639781238891' }
      ],
    };
    },
    methods: {
      toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
      },
      addLink(header) {
        this.links.push({ label: header });
      },
    }
  };
  </script>
  