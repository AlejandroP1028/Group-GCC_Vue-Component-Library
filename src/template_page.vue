<template>
    <!--
        main div <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900 flex flex-row scroll-smooth">
        </div>
    -->
    <!--
        If you are going to use external icons use this cdn
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        this will allow you to use font-awesome icons 
    -->

    <!--
        PageHeader always first, it needs a header and a body
        <PageHeader 
        header="GCC Alert" 
        body="Show contextual information to your users using alert elements based on Tailwind CSS"/>
    -->

    <!--
        Sections can be used 2 ways first is the normal section:

        <Section header="Alert Dismiss Type" 
        @sectioncreated="addLink" <------- this is very important!!!
        body="The GCC alert component supports manual and automatic dismissals. Use the following button to show random alert components with their respective dismissal type.">
        <template #content> enter your content here </template>

        and just the body text
        <Section body="The GCC alert component can be used to provide information to your users such as success or error messages, 
        but also highlighted information complementing the normal flow of paragraphs and headers on a page."/>
        
    -->




    <!--
        PageLinks on the right side this needs a links data 
        <div class="sticky top-8 w-4/12 transition-all duration-300 ease-in-out flex flex-col space-y-4 overflow-hidden mr-8">
      <hr class="h-0.5 bg-blue-600 border-none rounded-full">
      <span class="tracking-tight font-semibold self-center text-md text-gray-800 dark:text-gray-200">ON THIS PAGE</span>
      <PageLinks v-for="link in links" 
        :key="link.label"
        :label="link.label"/>
      <div class="flex justify-center">
        <Button @click="toggleDarkMode" color="blue">
        <template #icon>
          <i :class="[isDarkMode ? 'fas fa-sun text-2xl' : 'fas fa-moon text-2xl','text-blue-200']"></i>
          </template>
        </Button>

      </div>
      <hr class="h-0.5 bg-blue-600 border-none rounded-full">
    </div>
    -->

</template>

<script>
import Button from './components/Button.vue';
import Section from './components/Section.vue';
import PageHeader from './components/pageHeader.vue';
import PageLinks from './components/pageLinks.vue'; 
import Toggle from './components/ToggleComponent.vue';

export default{
    name: 'component-name_page',
    data(){
        return{
            links: [],
            isDarkMode: false,
        }
    },
    methods: {
        addLink(header) {
      this.links.push({ label: header });
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
    },
}
</script>

<style scoped>
</style>