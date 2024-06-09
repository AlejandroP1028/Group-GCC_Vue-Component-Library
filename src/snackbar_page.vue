<template>
  <!--
        main div 
    -->
  <div
    :class="{ dark: isDarkMode }"
    class="overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900 flex flex-row scroll-smooth"
  >
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    />
    <div class="relative w-auto mb-16">
      <PageHeader
        header="GCC Snackbar"
        body="Show contextual information to your users using snackbar elements based on Tailwind CSS"
      />
  
      <Section 
                    body="The GCC snackbar component provides non-intrusive notifications to users, offering brief, contextual messages that enhance user experience without disrupting workflow."
                />


      <Section
        @sectioncreated="addLink"
        header="DEFAULT"
        body="This default design prioritizes simplicity, offering a seamless and straightforward way to display brief notifications.">
            <template #content>
                        <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center">
                        <Button @click="showSnackbar('Notification Message')">Default</Button>
                        <snackbar ref="snackbar" :isDarkMode="isDarkMode"></snackbar>
                        </div>
            </template>
      </Section>
      <Section
        @sectioncreated="addLink"
        header="OTHER STYLES"
        body="These are a variety of style options available for users to select from, allowing them to choose the design that best suits their preferences.">
            <template #content>
                        <div :class="{ 'dark': defaultDark }" class=" flex gap-60 relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center">
                        <Button @click="showSnackbar('Notification Message', 'style1')" color="sky">Sky</Button>
                        <Button @click="showSnackbar('Notification Message', 'style2')" color="cyan">Cyan</Button>
                        <Button @click="showSnackbar('Notification Message', 'style3')" color="teal">Teal</Button>
                        <snackbar ref="snackbar" :isDarkMode="isDarkMode"></snackbar>
                        </div>
            </template>
      </Section>
      <Section 
                header="SUMMARY"
                @sectioncreated="addLink"
                body="Overall snackbar component discreetly delivers brief notifications to users, seamlessly integrating informative updates into the user interface."
            > 
            </Section>
            <br>
    </div>

    <div
      class="sticky top-12 w-2/12 transition-all duration-300 ease-in-out flex flex-col space-y-4 overflow-hidden mr-8"
    >
      <hr class="h-0.5 bg-blue-600 border-none rounded-full" />
      <span
        class="tracking-tight font-semibold self-center text-md text-gray-800 dark:text-gray-200"
        >ON THIS PAGE</span
      >
      <PageLinks v-for="link in links" :key="link.label" :label="link.label" />
      <div class="flex justify-center">
        <Button @click="toggleDarkMode" color="blue">
          <template #icon>
            <i
              :class="[
                isDarkMode ? 'fas fa-sun text-2xl' : 'fas fa-moon text-2xl',
                'text-blue-200',
              ]"
            ></i>
          </template>
        </Button>
      </div>
      <hr class="h-0.5 bg-blue-600 border-none rounded-full" />
    </div>
  </div>
  <!--
        If you are going to use external icons use this cdn
        
        this will allow you to use font-awesome icons 
    -->

  <!--
        PageHeader always first, it needs a header and a body
        
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
    -->
</template>

<script>
import Snackbar from './components/SnackbarComponent.vue';
import Section from "./components/Section.vue";
import PageLinks from "./components/pageLinks.vue";
import PageHeader from "./components/pageHeader.vue";
import Button from "./components/Button.vue";

export default {
  name: "CardPage",
  components: {
    PageHeader,
    Section,
    PageLinks,
    Button,
    Snackbar
  },
  data() {
    return {
      links: [],
      isDarkMode: false,
    };
  },
  methods: {
    addLink(header) {
      this.links.push({ label: header });
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    showSnackbar(message, type) {
      this.$refs.snackbar.show(message, type);
    }
  },
};
</script>

<style scoped>
.dark{
  color: #ffffff;
}
</style>
