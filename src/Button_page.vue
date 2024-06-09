<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
      <div :class="{ 'dark': isDarkMode }" class=" overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900 flex flex-row scroll-smooth">
         <div class="flex flex-col w-10/12 p-4">
        <PageHeader 
          header="GCC Button and Button Group" 
          body="Show contextual information to your users using Button and ButtonGroup elements based on Tailwind CSS"/>
        <Section body="The Button component serves as a clickable element in user interfaces, typically used to trigger an action or navigate to a different part of the application. It provides a clear call to action for users and can be customized to fit the design of the application.
        The ButtonGroup component, on the other hand, is used to group related buttons together. It helps organize multiple actions or options into a cohesive unit, enhancing the visual clarity and usability of the interface. ButtonGroups are particularly useful when presenting sets of actions or choices that are logically connected."/>
        <Section
            header="Default Button" 
            @sectioncreated="addLink"
            body="Use these default button styles with multiple colors to indicate an action or link within your website.">
            <template #content>
            <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center space-x-4">
            <Button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center me-0 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</Button>
            <Button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 me-0 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</Button>
            <Button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="lightAction">Light</Button>
            <Button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium ext-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</Button>
            <Button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</Button>
            <Button type="button" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">Yellow</Button>
            <Button type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</Button>

            </div>
          </template>
        </Section>

      <Section 
          header="Bordered and Pill Button"
          @sectioncreated="addLink"
          body="The button component can be accentuated with border and rounded corners can also be applied with the GCC badge component, resembling pills."> 
          <template #content>
          <div class="flex flex-col items-center justify-center my-4 h-full">
          <div class="flex flex-row space-x-4">
            <div class="flex flex-col items-start space-y-2 p-2 bg-blue-100 dark:bg-gray-800 rounded-lg shadow-md">
              <Radio 
                v-model="buttonType"
                :items="[
                  {value: 'bordered', label: 'Bordered'},
                  {value: 'pill', label: 'Pill'}
                ]"
                @input="changeButtonType"
              />
            </div>
          </div>
          <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center space-x-4">
            <template v-if="buttonType === 'bordered'">
              <Button 
                v-for="(color, index) in buttonColors" 
                :key="'bordered_' + index" 
                :color="color" 
                :bordered="true" 
                class="mr-3"
              >
                {{ color }}
              </Button>
            </template>
            <template v-else>
              <Button 
                v-for="(color, index) in buttonColors" 
                :key="'pill_' + index" 
                :color="color" 
                :pill="true" 
                class="mr-3"
              >
                {{ color }}
              </Button>
            </template>
          </div>
          </div>
        </template>
      </Section>
        <Section 
            header="Size Button"
            @sectioncreated="addLink"
            body="Select the size of the button."> 
            <template #content>
            <div class="flex flex-col items-center justify-center my-4 h-full"> <!-- Added justify-center -->
            <div class="flex flex-row space-x-4">
            <div class="flex flex-col items-start space-y-2 p-2 bg-blue-100 dark:bg-gray-800 rounded-lg shadow-md">
            <Radio 
              :items="[
                        {value: 'small' ,label: 'Small'},
                        {value: 'normal' ,label: 'Normal'},
                        {value: 'large' ,label: 'Large'}
                      ]"
              @input="changeButtonSize"/>
            </div>
            </div>
            <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center">
                <Button :size="buttonSize" class="mr-2">Button</Button>
            </div>
            </div>
            </template>
          </Section>

        <Section
          header="Button Dismiss Type" 
          @sectioncreated="addLink"
          body="The GCC Button component supports manual and automatic dismissals. Use the following button to show random Button components with their respective dismissal type.">
          <template #content>
            <div class="flex flex-col items-center mt-4 h-full">
              <div class="flex flex-row space-x-4">
                <Button color="sky" class="w-9/10" @click="showManualDismissButton">Manual Dismiss Button</Button>
                <Button color="cyan" class="w-9/10" @click="showAutoDismissButton">Auto Dismiss Button</Button>
              </div>
              
              <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">
                <!-- Display Buttons based on actions -->
                <div v-for="(button, index) in buttons" :key="index" class="mt-4">
                  <Button :color="button.color" class="w-9/10" @click="button.action">{{ button.label }}</Button>
                </div>
              </div>
            </div>
          </template>
        </Section>

        <Section
            header="Default GroupButton"
            @sectioncreated="addLink"
            body="Use the following code to stack together buttons into a single group.">
            <template #content>
              <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 pl-96 overflow-hidden rounded-lg shadow-lg flex justify-center items-center border border-blue-600/[.87]">
                <ButtonGroup>
                  <button
                    type="button"
                    class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                      >
                     Profile
                  </button>
                  <button
                    type="button"
                    class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                      >
                      Settings
                    </button>
                    <button
                    type="button"
                    class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      Messages
                    </button>
                  </ButtonGroup>
                </div>
              </template>
        </Section>
        <Section
            header="ButtonGroup with Icons "
            @sectioncreated="addLink"
            body="You can also use SVG icons inside the grouped buttons.">
            <template #content>
            <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 pl-96 overflow-hidden rounded-lg shadow-lg flex justify-center items-center border border-blue-600/[.87]">
              <ButtonGroup>
                <button
                  type="button"
                  color="blue"
                  :class="profileButtonClasses"
                  class="inline-flex px-4 py-2 text-sm font-medium border border-gray-600 rounded-s-lg hover:bg-blue-600 focus:ring-blue-300 dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                  <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                  </svg>
                  Profile
                  </button>
                  <button
                    type="button"
                    color="blue"
                    :class="settingsButtonClasses"
                    class="inline-flex px-4 py-2 text-sm font-medium border-t border-b border-gray-600 hover:bg-blue-600 focus:ring-blue-300 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                    >
                    <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                    </svg>
                    Settings
                    </button>
                    <button
                    type="button"
                    color="blue"
                    :class="downloadsButtonClasses"
                    class="inline-flex px-4 py-2 text-sm font-medium border border-gray-600 rounded-e-lg hover:bg-blue-600 focus:ring-blue-300 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                    >
                    <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                    </svg>
                    Downloads
                  </button>
                </ButtonGroup>
              </div>
            </template>
          </Section>
          <Section
            header="ButtonGroup Outlined with icon"
            @sectioncreated="addLink"
            body="Group a series of buttons together on a single line or stack them in a vertical column.">
            <template #content>
            <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 pl-96 overflow-hidden rounded-lg shadow-lg flex justify-center items-center border border-blue-600/[.87]">
            <ButtonGroup>
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
              <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
              </svg>
              Profile
              </button>
              <button
              type="button"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
              <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
              </svg>
              Settings
              </button>
              <button
              type="button"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
              <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
              <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
              </svg>
              Downloads
              </button>
          </ButtonGroup>
        </div>
      </template>
      </Section>
      <Section
            header="Summary" 
            @sectioncreated="addLink"
            body="The GCC Button and ButtonGroup components provide a versatile range of button styles and functionalities, enhancing user interactions within web applications. The Button component serves as a clickable element for actions or navigation, while the ButtonGroup organizes related buttons for improved visual clarity. With customizable styles, sizes, and dark mode support, these components ensure a cohesive and user-friendly interface."/>
      
            <br>
      </div>

      
  
      <div class="sticky top-8 w-2/12 transition-all duration-300 ease-in-out flex flex-col space-y-4 overflow-hidden mr-8">
      <hr class="h-0.5 bg-blue-600 border-none rounded-full">
      <span class="tracking-tight font-semibold self-center text-md text-gray-800 dark:text-gray-200">ON THIS PAGE</span>
      <PageLinks v-for="link in links" 
        :key="link.label"
        :label="link.label"/>
      <div class="flex justify-center">
        <Button @click="toggleDarkMode" color="blue">
          <template #icon>
            <i :class="[isDarkMode ? 'fas fa-sun' : 'fas fa-moon', 'text-2xl', 'text-blue-200']"></i>
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
import PageLinks from './components/pageLinks.vue';
import Radio from './components/radio.vue';
import ButtonGroup from './components/ButtonGroup.vue';

export default {
  name: 'ButtonPage',
  components: {
    Button,
    Section,
    PageHeader,
    PageLinks,
    ButtonGroup,
    Radio
  },
  data() {
    return {
      links: [],
      isDarkMode: false,
      defaultDark: false,
      buttons: [],
      buttonSize: 'small',
      buttonType: 'bordered',
      buttonColors: ['blue', 'sky', 'teal', 'cyan']
    };
  },
  methods: {
    addLink(header) {
      this.links.push({ label: header });
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.updateDarkModePreference();
    },
    updateDarkModePreference() {
      localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
    },
    checkDarkModePreference() {
      const darkModePreference = localStorage.getItem('darkMode');
      if (darkModePreference) {
        this.isDarkMode = JSON.parse(darkModePreference);
      }
    },
    showManualDismissButton() {
      this.buttons.push({
        label: 'Manual Dismiss Button',
        color: 'sky',
        action: this.manualDismissAction
      });
    },
    showAutoDismissButton() {
      this.buttons.push({
        label: 'Auto Dismiss Button',
        color: 'cyan',
        action: this.autoDismissAction
      });
    },
    manualDismissAction() {
      alert('Manual Dismiss Button clicked');
    },
    autoDismissAction() {
      alert('Auto Dismiss Button clicked');
    },
    changeButtonType(type) {
      this.buttonType = type;
    },
    changeButtonSize(size) {
      this.buttonSize = size;
    }
  },
  mounted() {
    this.checkDarkModePreference();
  }
};
</script>