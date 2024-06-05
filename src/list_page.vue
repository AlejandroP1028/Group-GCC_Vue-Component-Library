<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900 flex flex-row scroll-smooth">
      <div class="relative w-auto mb-16">
        <PageHeader :class="'flex-none'" header="GCC List" body="Show contextual information to your users using list elements based on Tailwind CSS"/>
        <Section body="The GCC list component is a versatile tool for presenting various types of information. Each list item type is designed to be distinct, ensuring that users receive important feedback clearly and promptly, thereby enhancing the overall user experience and communication on the webpage."/>
        <Section header="Unordered List" @sectioncreated="addLink" body="The GCC list component includes an unordered list option with 4 color choices, blue, sky, teal, and cyan.">
          <template #content>
            <div class="flex flex-col items-center mt-4 h-full">
              <div class="flex space-x-4">
                <Button color="blue" :class="'w-9/10'" @click="showBlue">Blue</Button>
                <Button color="sky" :class="'w-9/10'" @click="showSky">Sky</Button>
                <Button color="teal" :class="'w-9/10'" @click="showTeal">Teal</Button>
                <Button color="cyan" :class="'w-9/10'" @click="showCyan">Cyan</Button>
              </div>
              <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]"> 
                <ItemList v-if="blueList" :items="List" type="unorderedlist" layout="vertical" color="blue" position="centered"/> 
                <ItemList v-if="skyList" :items="List" type="unorderedlist" layout="vertical" color="sky" position="centered"/>
                <ItemList v-if="tealList" :items="List" type="unorderedlist" layout="vertical" color="teal" position="centered"/>
                <ItemList v-if="cyanList" :items="List" type="unorderedlist" layout="vertical" color="cyan" position="centered"/>
              </div>
            </div>
          </template>
        </Section>
        <Section header="Ordered List" @sectioncreated="addLink" body="The GCC list component includes an ordered list option with 4 color choices, blue, sky, teal, and cyan.">
          <template #content>
            <div class="flex flex-col items-center mt-4 h-full">
              <div class="flex space-x-4">
                <Button color="blue" :class="'w-9/10'" @click="showBlueO">Blue</Button>
                <Button color="sky" :class="'w-9/10'" @click="showSkyO">Sky</Button>
                <Button color="teal" :class="'w-9/10'" @click="showTealO">Teal</Button>
                <Button color="cyan" :class="'w-9/10'" @click="showCyanO">Cyan</Button>
              </div>
              <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">
                <ItemList v-if="blueListO" :items="List" type="orderedlist" layout="vertical" color="blue" position="centered"/> 
                <ItemList v-if="skyListO" :items="List" type="orderedlist" layout="vertical" color="sky" position="centered"/>
                <ItemList v-if="tealListO" :items="List" type="orderedlist" layout="vertical" color="teal" position="centered"/>
                <ItemList v-if="cyanListO" :items="List" type="orderedlist" layout="vertical" color="cyan" position="centered"/>  
              </div>
            </div>
          </template>
        </Section>
        <Section header="Description List" @sectioncreated="addLink" body="The GCC list component includes an description list option.">
          <template #content>
            <div class="flex flex-col items-center mt-4 h-full">
              <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">
                <ItemList :items="descriptionList" type="descriptionlist" color="blue" position="centered"/> 
              </div>
            </div>
          </template>
        </Section>
        <Section header="Horizontal List" @sectioncreated="addLink" body="The GCC list component includes an ordered list option with 4 color choices, blue, sky, teal, and cyan.">
          <template #content>
            <div class="flex flex-col items-center mt-4 h-full">
              <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">
                <ItemList type="unorderedlist" layout="horizontal" color="blue" position="centered">
                  <li><a href="#" class="hover:underline">About</a></li>
                  <li><a href="#" class="hover:underline">Campaign</a></li>
                  <li><a href="#" class="hover:underline">Blog</a></li>
                  <li><a href="#" class="hover:underline">FAQs</a></li>
                  <li><a href="#" class="hover:underline">Contact Us</a></li>
                </ItemList>
              </div>
            </div>
          </template>
        </Section>
        <Section header="List with icons" @sectioncreated="addLink" body="The GCC list component includes an ordered list option with 4 color choices, blue, sky, teal, and cyan.">
          <template #content>
            <div class="flex flex-col items-center mt-4 h-full">
              <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">
                <ItemList :items="List" type="unorderedicon"/>
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
        blueList: false,
        skyList: false,
        tealList: false,
        cyanList: false,
        blueListO: false,
        skyListO: false,
        tealListO: false,
        cyanListO: false,
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
  showBlue() {
    this.blueList = !this.blueList;
    this.skyList = false;
    this.tealList = false;
    this.cyanList = false;
  },
  showSky() {
    this.skyList = !this.skyList;
    this.blueList = false;
    this.tealList = false;
    this.cyanList = false;
  },
  showTeal() {
    this.tealList = !this.tealList;
    this.blueList = false;
    this.skyList = false;
    this.cyanList = false;
  },
  showCyan() {
    this.cyanList = !this.cyanList;
    this.blueList = false;
    this.skyList = false;
    this.tealList = false;
  },
  showBlueO() {
    this.blueListO = !this.blueListO;
    this.skyListO = false;
    this.tealListO = false;
    this.cyanListO = false;
  },
  showSkyO() {
    this.skyListO = !this.skyListO;
    this.blueListO = false;
    this.tealListO = false;
    this.cyanListO = false;
  },
  showTealO() {
    this.tealListO = !this.tealListO;
    this.blueListO = false;
    this.skyListO = false;
    this.cyanListO = false;
  },
  showCyanO() {
    this.cyanListO = !this.cyanListO;
    this.blueListO = false;
    this.skyListO = false;
    this.tealListO = false;
  },
}

  };
  </script>
  