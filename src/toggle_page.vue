<template>
    <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900 flex flex-row scroll-smooth">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
      <div class="relative w-10/12 mb-16">
        <PageHeader 
          class="flex-none"
          header="GCC Toggle and Footer" 
          body="Use these responsive toggle components to allow users to switch between different options, themes, or settings."
        />
  
        <Section
          @sectioncreated="addLink"
          header="Toggle Types"
          body="These toggles come in different types: blue, sky, cyan, and teal. The default type is blue."
        >
          <template #content>
            <div class="flex flex-col items-center mt-4 h-full">
              <div :class="{ 'dark': defaultDark }" class="relative flex space-x-4 flex-row items-center justify-center bg-gray-100 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border overflow-x-auto border-blue-600/[.87]">
                <Toggle v-for="(toggle, index) in toggleTypes" 
                        :key="index"
                        :label="`This is a ${toggle.type} toggle.`"
                        :type="toggle.type"
                />
              </div>
            </div>
          </template>
        </Section>
  
        <Section
          @sectioncreated="addLink"
          header="Toggle Disabled"
          body="These toggles can be disabled."
        >
          <template #content>
            <div class="flex flex-col items-center mt-4 h-full">
              <div :class="{ 'dark': defaultDark }" class="relative flex space-x-4 flex-row items-center justify-center bg-gray-100 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border overflow-x-auto border-blue-600/[.87]">
                <Toggle v-for="(toggle, index) in toggleDisabled" 
                        :key="index"
                        :label="`This is a ${toggle.type} toggle.`"
                        :type="toggle.type"
                        :isChecked="true"
                        :disabled="true"
                />
              </div>
            </div>
          </template>
        </Section>

        <Section
          @sectioncreated="addLink"
          header="Footer Types"
          body="There are 4 footer types: blue, sky, cyan and teal."
        >
          <template #content>
            <div class="flex flex-col items-center mt-4 h-full">
              <div :class="{ 'dark': defaultDark }" class=" flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 rounded-lg shadow-lg border overflow-hidden border-blue-600/[.87]">
                <FooterComponent company="Blue"></FooterComponent>
                <FooterComponent company="Sky" color="sky"></FooterComponent>
                <FooterComponent company="Cyan" color="cyan"></FooterComponent>
                <FooterComponent company="Teal" color="teal"></FooterComponent>
              </div>
            </div>
          </template>
        </Section>
  
        
        <br>
      </div>
  
      <div class="sticky top-12 w-2/12 transition-all duration-300 ease-in-out flex flex-col space-y-4 overflow-hidden mr-8">
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
  import Section from './components/Section.vue';
  import PageLinks from './components/pageLinks.vue';
  import PageHeader from './components/pageHeader.vue';
  import Button from './components/Button.vue';
  import Toggle from './components/ToggleComponent.vue';
  import FooterComponent from './components/FooterComponent.vue'
  
  export default {
    name: 'TogglePage',
    components: {
      PageHeader,
      Section,
      PageLinks,
      Button,
      Toggle,
      FooterComponent
    },
    data() {
      return {
        links: [],
        isDarkMode: false,
        defaultDark: false,
        toggleTypes: [
          { type: 'blue' },
          { type: 'sky' },
          { type: 'cyan' },
          { type: 'teal' },
        ],
        toggleDisabled: [
          { type: 'blue' },
          { type: 'sky' },
          { type: 'cyan' },
          { type: 'teal' },
        ],
        toggleSizes: [
          { type: 'blue', size: 'small' },
          { type: 'sky', size: 'medium' },
          { type: 'cyan', size: 'large' },
        ],
        customToggle: {
          type: 'blue'
        },
      };
    },
    methods: {
      addLink(header) {
        this.links.push({ label: header });
      },
      toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles if needed */
  </style>
  