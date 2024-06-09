<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900 flex flex-row scroll-smooth">
    <div class="relative w-10/12 mb-16">
      <PageHeader 
        class="flex-none"
        header="GCC Tabs" 
        body="Use these responsive Tabs components to display user avatars in various forms and contexts, such as for profiles, navigations, and more."
      />
          <Section
            @sectioncreated="addLink"
            header="Default Tab"
            body="This section showcases the default avatars."
          >
            <template #content>
              <div class="relative flex space-x-4 flex-row items-center justify-center bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border overflow-x-auto border-blue-600/[.87]">
                <TabsWrapper tabStyle="default" backgroundColor="teal" borderRadius="xl">
                   <TabComponent title="Profile" :isSelectedTab="selectedTab === 'Profile'" :showContainer="true" @click="selectTab('Profile')">
  Hello, this is the content for the Profile tab.
</TabComponent>
<TabComponent title="Dashboard" :isSelectedTab="selectedTab === 'Dashboard'" :showContainer="true" @click="selectTab('Dashboard')">
  Content for Dashboard
</TabComponent>
<TabComponent title="Settings" :isSelectedTab="selectedTab === 'Settings'" :showContainer="true" @click="selectTab('Settings')">
  <!-- Content for Settings tab -->
</TabComponent>
<TabComponent title="Contacts" :isSelectedTab="selectedTab === 'Contacts'" :showContainer="true" @click="selectTab('Contacts')">
  <!-- Content for Contacts tab -->
</TabComponent>

                </TabsWrapper>
              </div>
              
            </template>
          </Section>

          <Section
            @sectioncreated="addLink"
            header="Tabs with Underline"
            body="Use this alternative tabs component style with an underline instead of a background when hovering and being active on a certain page."
          >
            <template #content>
              <div class="relative flex space-x-4 flex-row items-center justify-center bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border overflow-x-auto border-blue-600/[.87]">
                <TabsWrapper tabStyle="underline" backgroundColor="cyan" borderRadius="xl">
                    <TabComponent title="Profile" :showContainer="true">

                    </TabComponent>
                    <TabComponent title="Dashboard">

                    </TabComponent>
                    <TabComponent title="Settings">

                    </TabComponent>
                    <TabComponent title="Contacts">

                    </TabComponent>
                </TabsWrapper>
              </div>
            </template>
          </Section>

        

          <Section
            @sectioncreated="addLink"
            header="Pills Tab"
            body="If you want to use pills as a style for the tabs component you can do so by using this example."
          >
            <template #content>
              <div class="relative flex space-x-4 flex-row items-center justify-center bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border overflow-x-auto border-blue-600/[.87]">
                <TabsWrapper tabStyle="background" backgroundColor="teal" borderRadius="xl">
                    <TabComponent title="Profile">

                    </TabComponent>
                    <TabComponent title="Dashboard">

                    </TabComponent>
                    <TabComponent title="Settings">

                    </TabComponent>
                    <TabComponent title="Contacts">

                    </TabComponent>
                </TabsWrapper>
              </div>
            </template>
          </Section>

          <Section
            @sectioncreated="addLink"
            header="Icons Tab"
            body="This is an example of the tabs component where you can also use a SVG powered icon to complement the text within the navigational tabs."
          >
            <template #content>
              <div class="relative flex space-x-4 flex-row items-center justify-center bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border overflow-x-auto border-blue-600/[.87]">
                

<div class="border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li class="me-2">
            <a href="#" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>Profile
            </a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                <svg class="w-4 h-4 me-2 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                </svg>Dashboard
            </a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z"/>
                </svg>Settings
            </a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>Contacts
            </a>
        </li>
        <li>
            <a class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
        </li>
    </ul>
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
import PageHeader from "@/components/pageHeader.vue";
import Section from "@/components/Section.vue";
import PageLinks from "@/components/pageLinks.vue";
import Button from "@/components/Button.vue";
import TabComponent from "@/components/TabComponent.vue";
import TabsWrapper from "@/components/TabsWrapper.vue";

export default {
  name: "TabPage",
  components: {
    PageHeader,
    Section,
    PageLinks,
    Button,
    TabComponent,
    TabsWrapper,
  },
  data() {
    return {
      links: [],
      isDarkMode: false,
      selectedTab: '' // Initialize selectedTab
    }
  },
  methods: {
    addLink(header) {
      this.links.push({ label: header });
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    selectTab(tabTitle) {
      this.selectedTab = tabTitle; // Update selectedTab when a tab is clicked
    }
  }
}
</script>