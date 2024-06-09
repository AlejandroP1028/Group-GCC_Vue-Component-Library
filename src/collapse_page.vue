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
        header="GCC Collapse"
        body="Show contextual information to your users using collapse elements based on Tailwind CSS"
      />
  
      <Section 
                    body="The GCC collapse component allows users to expand or hide content sections, helping to save space and improve navigation."
                />

      <Section
        @sectioncreated="addLink"
        header="DEFAULT"
        body="This represents the default style design, emanating a blend of simplicity and elegance, ideal for content presentation.">
            <template #content>
                        <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center">
                            <CollapseComponent :type="'default'" :isDarkMode="isDarkMode" :initialCollapsed="true">
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              </p>
                            </CollapseComponent>
                        </div>
            </template>
      </Section>

      <Section
        @sectioncreated="addLink"
        header="SHARP CORNERS"
        body="This design embodies a sense of cleanliness and simplicity, making it ideal for presenting user content in a refined manner.">
            <template #content>
                        <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center">
                            <div class="flex gap-60 ">
                              <CollapseComponent :type="'default'" :isDarkMode="isDarkMode" :initialCollapsed="true">
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              </p>
                            </CollapseComponent>
                            <CollapseComponent :type="'type1'" :isDarkMode="isDarkMode" :initialCollapsed="true">
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              </p>
                            </CollapseComponent>
                            </div>
                        </div>
            </template>
      </Section>
      <Section
        @sectioncreated="addLink"
        header="ROUNDED EDGES"
        body="The styles additionally integrate various background colors, providing a dynamic experience and a broad spectrum of options for users to choose from.">
            <template #content>
                        <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center">
                            <div class="flex gap-60 ">
                            <CollapseComponent :type="'type2'" :isDarkMode="isDarkMode" :initialCollapsed="true">
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              </p>
                            </CollapseComponent>
                            <CollapseComponent :type="'type3'" :isDarkMode="isDarkMode" :initialCollapsed="true">
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              </p>
                            </CollapseComponent>
                            </div>
                        </div>
            </template>
      </Section>
      <Section 
                header="SUMMARY"
                @sectioncreated="addLink"
                body="The GCC collapse component makes it convenient for users as it keeps the interface clean and organized, allowing them to focus on relevant information while easily accessing more details when needed."
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
import CollapseComponent from './components/CollapseComponent.vue';
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
    CollapseComponent
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
  },
};
</script>

<style scoped>
.dark{
  color: #ffffff;
}
</style>
