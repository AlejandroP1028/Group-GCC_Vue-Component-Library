<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900 flex flex-row scroll-smooth">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <div class="relative w-auto mb-16">
      <PageHeader 
        class="flex-none"
        header="GCC Card" 
        body="Use these responsive card components to display data and information to your users in various forms and contexts, such as for blogs, applications, user profiles, and more."
      />
      
      <Section
        @sectioncreated="addLink"
        header="Card Types"
        body="GCC cards are available in four types: blue, sky, cyan, and teal. The default type is blue."
      >
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div :class="{ 'dark': defaultDark }" class="relative flex space-x-4 flex-row items-center justify-center bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border overflow-x-auto border-blue-600/[.87]">
              <Card v-for="(card, index) in cardTypes" 
                    :key="index"
                    :type="card.type"
                    :header="`This is a ${card.type} card.`"
                    :body="'This is the body text.'"
              />
            </div>
          </div>
        </template>
      </Section>

      <Section
        @sectioncreated="addLink"
        header="Card Sizes"
        body="GCC cards come in different sizes: xs, sm, md, lg, and xl."
      >
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div :class="{ 'dark': defaultDark }" class="relative overflow-y-scroll bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border overflow-x-auto border-blue-600/[.87]">
              <Card v-for="(card, index) in cardSizes"
                    :class="'mb-4'" 
                    :key="index"
                    :type="card.type"
                    :size="card.size"
                    :header="`This is a ${card.size} card.`"
                    :body="'This is the body text.'"
              />
            </div>
          </div>
        </template>
      </Section>

      <Section
        @sectioncreated="addLink"
        header="Card Bordered"
        body="GCC cards can have borders."
      >
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div :class="{ 'dark': defaultDark }" class="relative flex space-x-4 flex-row items-center justify-center bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border overflow-x-auto border-blue-600/[.87]">
              <Card v-for="(card, index) in cardBordered" 
                    :key="index"
                    :size="'lg'"
                    :bordered="card.bordered"
                    :header="`This is ${card.bordered ? 'a bordered' : 'not a bordered'} card.`"
                    :body="'This is the body text.'"
              />
            </div>
          </div>
        </template>
      </Section>

      <Section
        @sectioncreated="addLink"
        header="Card Image"
        body="GCC cards can include images."
      >
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div :class="{ 'dark': defaultDark }" class="relative flex space-x-4 flex-row items-center justify-center bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-full p-16 overflow-hidden rounded-lg shadow-lg border overflow-x-auto border-blue-600/[.87]">
              <Card v-for="(card, index) in cardWithImage" 
                    :key="index"
                    :type="card.type"
                    :header="`This is a ${card.type} card with an image.`"
                    :body="'This is the body text.'"
                    :image="card.image"
              />
            </div>
          </div>
        </template>
      </Section>

      <Section
        @sectioncreated="addLink"
        header="Card Orientation"
        body="GCC cards can be oriented vertically or horizontally."
      >
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div :class="{ 'dark': defaultDark }" class="relative flex space-x-4 flex-row items-center justify-center bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-full p-16 overflow-hidden rounded-lg shadow-lg border overflow-x-auto border-blue-600/[.87]">
              <Card v-for="(card, index) in cardOrientation" 
                    :key="index"
                    :horizontal="card.horizontal"
                    :header="`This is a ${card.horizontal ? 'horizontal' : 'vertical'} card with an image.`"
                    :body="'This is the body text.'"
                    :image="card.image"
              />
            </div>
          </div>
        </template>
      </Section>

      <Section
        @sectioncreated="addLink"
        header="Horizontal Sizes"
        body="GCC cards with horizontal orientation support different sizes."
      >
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-full p-16 overflow-hidden rounded-lg shadow-lg border overflow-x-auto border-blue-600/[.87]">
              <Card v-for="(card, index) in cardSizes"
                    :class="'mt-4'" 
                    :key="index"
                    :type="card.type"
                    :size="card.size"
                    :horizontal="true"
                    :header="`This is a horizontal size ${card.size} card with an image.`"
                    :body="'This is the body text.'"
                    :image="'image-1.jpg'"
              />
            </div>
          </div>
        </template>
      </Section>

      <Section
        @sectioncreated="addLink"
        header="Random Card"
        body="Customize your own card."
      >
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div class="flex flex-row justify-between space-x-6">
              <div class="flex flex-col space-y-2 self-center">
                <Toggle label="Image" type="blue" :changeFunc="toggleI"></Toggle>
                <Toggle label="Horizontal" type="sky" :changeFunc="toggleH"></Toggle>
                <Toggle label="Bordered" type="cyan" :changeFunc="toggleB"></Toggle>
              </div>

              <div class="flex flex-col items-start space-y-2 p-2 bg-blue-100 dark:bg-gray-800 rounded-lg shadow-md">
                <h4 class="text-md font-semibold text-gray-900 dark:text-gray-200">Sizes</h4>
                <Radio 
                :items="[
                          {value: 'xs' ,label: 'Extra Small'},
                          {value: 'sm' ,label: 'Small'},
                          {value: 'md' ,label: 'Medium'},
                          {value: 'lg' ,label: 'Large'},
                          {value: 'xl' ,label: 'Extra Large'},
                        ]"
                @input="changeSize"/>
              </div>

              <div class="flex flex-col items-start space-y-2 p-2 bg-blue-100 dark:bg-gray-800 rounded-lg shadow-md">
                <h4 class="text-md font-semibold text-gray-900 dark:text-gray-200">Types</h4>
                <Radio 
                :items="[
                          {value: 'default' ,label: 'Blue'},
                          {value: 'sky' ,label: 'Sky'},
                          {value: 'cyan' ,label: 'Cyan'},
                          {value: 'teal' ,label: 'Teal'},
                        ]"
                @input="changeType"/>
              </div>
            </div>
            <div :class="{ 'dark': defaultDark }" class="flex flex-row items-center justify-center bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-auto rounded-lg shadow-lg border overflow-x-auto border-blue-600/[.87]">
              <Card v-if="cardOwn" 
                    :key="index"
                    :class="'mt-12'"
                    :size="cardOwn.size"
                    :image="cardOwn.image ? 'image-1.jpg' : ''"
                    :bordered="cardOwn.bordered"
                    :type="cardOwn.type"
                    :horizontal="cardOwn.horizontal"
                    :header="`This is your card.`"
                      :body="'This is the body text.'"
                />
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
  import Card from './components/Card.vue';
  import Toggle from './components/ToggleComponent.vue';
  import Radio from './components/radio.vue';
  
  export default {
    name: 'CardPage',
    components: {
      PageHeader,
      Section,
      PageLinks,
      Button,
      Card,
      Toggle,
      Radio

    },
    data() {
      return {
        links: [],
        isDarkMode: false,
        defaultDark: false,
        cardTypes: [
          { type: 'blue' },
          { type: 'sky' },
          { type: 'cyan' },
          { type: 'teal' },
        ],
        cardSizes: [
          { type: 'blue', size: 'xs' },
          { type: 'sky', size: 'sm' },
          { type: 'cyan', size: 'md' },
          { type: 'teal', size: 'lg' },
        ],
        cardBordered: [
          { bordered: false },
          { bordered: true },
        ],
        cardWithImage: [
          { type: 'blue', image: 'image-1.jpg' },
          { type: 'sky', image: 'image-1.jpg'},
          { type: 'cyan', image: 'image-1.jpg' },
          { type: 'teal', image: 'image-1.jpg' },
        ],
        cardOrientation: [
          { horizontal: false,
            image: 'image-1.jpg'
          },
          {
            horizontal: true,
            image: 'image-1.jpg'
          }
        ],
        cardOwn: [
          {
            image: null,
            horizontal: false,
            bordered: false,
            size: 'sm',
            type: 'default'
        }

        ]
      };
    },
    methods: {
      addLink(header) {
        this.links.push({ label: header });
      },
      toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
      },
      toggleI(){
        this.cardOwn.image = !this.cardOwn.image
      },
      toggleH(){
        this.cardOwn.horizontal = !this.cardOwn.horizontal
      },
      toggleB(){
        this.cardOwn.bordered = !this.cardOwn.bordered
      },
      changeSize(val){
      this.cardOwn.size = val
    },
    changeType(val){
      this.cardOwn.type = val
    },
    },
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles if needed */
  </style>
  