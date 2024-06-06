<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-gray-50 dark:bg-gray-900 flex flex-row scroll-smooth">
    <div class="relative w-auto mb-16">
      <PageHeader
        :class="'flex-none'"
        header="GCC Toggle"
        body="Show contextual information to your users using toggle elements based on Tailwind CSS"/>

      <Section body="The GCC toggle component can be used to switch between a binary state of true or false using a single click, available in multiple sizes, variants, and colors." />

      <Section header="Sample Toggle" 
        @sectioncreated="addLink"
        body="Start by using the GCC toggle component example, modifying it into a checkbox element that allows the user to select either true or false.">
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
              <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center">
              <ToggleComponent
                label="Toggle Me"
                size="default"
                type="blue"
                :isChecked="false"
              />
              </div>
          </div>
        </template>
      </Section>

      <Section header="Checked Toggle" 
      @sectioncreated="addLink"
      body="Start by using the GCC toggle component example, modifying it into a checkbox element that allows the user to select either true or false.">
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center">            
            <ToggleComponent
              label="Checked Toggle"
              size="default"
              :isChecked="true"
              type="blue"
            />
            </div>
          </div>
        </template>
      </Section>

      <Section header="Disabled Toggle" 
      @sectioncreated="addLink"
      body="Start by using the GCC toggle component example, modifying it into a checkbox element that allows the user to select either true or false.">
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div :class="{ 'dark': defaultDark }" class="relative space-x-4 bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center">   
            <ToggleComponent
              label="Disabled Toggle"
              size="default"
              type="blue"
              :disabled="true"
              :isChecked="false"
            />
            <ToggleComponent
              label="Disabled Toggle"
              size="default"
              type="blue"
              :disabled="true"
              :isChecked="true"
            />
            </div>
          </div>
        </template>
      </Section>

      <Section header="Colors" 
      @sectioncreated="addLink"
      body="Start by using the GCC toggle component example, modifying it into a checkbox element that allows the user to select either true or false.">
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div :class="{ 'dark': defaultDark }" class="relative space-x-4 bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center">               
            <ToggleComponent
              label="Blue (default)"
              size="default"
              type="blue"
            />
            <ToggleComponent
              label="Sky"
              size="default"
              type="sky"
            />
            <ToggleComponent
              label="Cyan"
              size="default"
              type="cyan"
            />
            <ToggleComponent
              label="Teal"
              size="default"
              type="teal"
            />
            </div>
          </div>
        </template>
      </Section>

      <Section header="Sizes" 
      @sectioncreated="addLink"
      body="Start by using the GCC toggle component example, modifying it into a checkbox element that allows the user to select either true or false.">
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div :class="{ 'dark': defaultDark }" class="relative space-x-4 mb-10 bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center">               <ToggleComponent
              label="Small"
              size="small"
              type="blue"
            />
            <ToggleComponent
              label="Default"
              size="default"
              type="blue"
            />
            <ToggleComponent
              label="Large"
              size="large"
              type="blue"
            />
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
            <i :class="[isDarkMode ? 'fas fa-sun text-2xl' : 'fas fa-moon text-2xl', 'text-blue-200']"></i>
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
import ToggleComponent from './components/ToggleComponent.vue';

export default {
  name: 'App',
  components: {
    Button,
    Section,
    PageHeader,
    PageLinks,
    ToggleComponent
  },
  data() {
    return {
      isDarkMode: false,
      links: []
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    addLink(header) {
      this.links.push({ label: header });
    }
  }
};
</script>

<style scoped>
.dark {
  background-color: #121212;
  color: #ffffff;
}
</style>
