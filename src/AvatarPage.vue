<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900 flex flex-row scroll-smooth">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <div class="relative w-auto mb-16">
      <PageHeader 
        class="flex-none"
        header="GCC Avatar" 
        body="Use these responsive avatar components to display user avatars in various forms and contexts, such as for profiles, comments, and more."
      />
      
      <Section
        @sectioncreated="addLink"
        header="Default Avatar"
        body="This section showcases the default avatars."
      >
        <template #content>
          <div class="relative flex space-x-4 flex-row items-center justify-center bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border overflow-x-auto border-blue-600/[.87]">
            <UserAvatar
              name="Gian Catalan"
              image="https://i.pinimg.com/originals/04/63/12/046312aac440d95cbc6d56b3eb527d5d.jpg"
              size="xl"
              rounded="full"
              :is-online="false"
            />
            <UserAvatar
              name="Alex Johnson"
              image="https://i.pinimg.com/originals/04/63/12/046312aac440d95cbc6d56b3eb527d5d.jpg"
              size="xl"
              rounded="full"
              :is-online="false"
            />
          </div>
        </template>
      </Section>

      <Section
        @sectioncreated="addLink"
        header="Roundness of the Avatar"
        body="This section showcases avatars with different roundness levels."
      >
        <template #content>
          <div class="relative flex space-x-4 flex-row items-center justify-center bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border overflow-x-auto border-blue-600/[.87]">
            <UserAvatar
              name="John Doe"
              image="https://i.pinimg.com/originals/04/63/12/046312aac440d95cbc6d56b3eb527d5d.jpg"
              size="xl"
              rounded="sm"
            />
            <UserAvatar
              name="Jane Doe"
              image="https://i.pinimg.com/originals/04/63/12/046312aac440d95cbc6d56b3eb527d5d.jpg"
              size="xl"
              rounded="md"
            />
            <UserAvatar
              name="Jim Beam"
              image="https://i.pinimg.com/originals/04/63/12/046312aac440d95cbc6d56b3eb527d5d.jpg"
              size="xl"
              rounded="lg"
            />
            <UserAvatar
              name="Jack Daniels"
              image="https://i.pinimg.com/originals/04/63/12/046312aac440d95cbc6d56b3eb527d5d.jpg"
              size="xl"
              rounded="full"
            />
          </div>
        </template>
      </Section>

      <Section
        @sectioncreated="addLink"
        header="Bordered Avatar"
        body="This section showcases avatars with borders in different colors and thicknesses."
      >
        <template #content>
          <div class="relative flex space-x-4 flex-row items-center justify-center bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border overflow-x-auto border-blue-600/[.87]">
            <div class="rounded-full border-2 border-red-500 p-1">
              <UserAvatar
                name="Gian Catalan"
                image="https://i.pinimg.com/originals/04/63/12/046312aac440d95cbc6d56b3eb527d5d.jpg"
                size="lg"
                rounded="full"
              />
            </div>
            <div class="rounded-full border-4 border-green-500 p-1">
              <UserAvatar
                name="Alex Johnson"
                image="https://i.pinimg.com/originals/04/63/12/046312aac440d95cbc6d56b3eb527d5d.jpg"
                size="lg"
                rounded="full"
              />
            </div>
            <div class="rounded-full border-8 border-blue-500 p-1">
              <UserAvatar
                name="Maria Garcia"
                image="https://i.pinimg.com/originals/04/63/12/046312aac440d95cbc6d56b3eb527d5d.jpg"
                size="lg"
                rounded="full"
              />
            </div>
            <div class="rounded-full border-2 border-red-500 p-1">
              <UserAvatar
                name="Gian Catalan"
                size="lg"
                rounded="full"
              />
            </div>
            <div class="rounded-full border-4 border-green-500 p-1">
              <UserAvatar
                name="Alex Johnson"
                size="lg"
                rounded="full"
              />
            </div>
            <div class="rounded-full border-8 border-blue-500 p-1">
              <UserAvatar
                name="Maria Garcia"
                size="lg"
                rounded="full"
              />
            </div>
          </div>
        </template>
      </Section>

      <Section
        @sectioncreated="addLink"
        header="Placeholder for Initials"
        body="This section showcases avatars with initials."
      >
        <template #content>
          <div class="relative flex space-x-4 flex-row items-center justify-center bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border overflow-x-auto border-blue-600/[.87]">
            <UserAvatar
              name="Gian Catalan"
              size="lg"
              rounded="full"
            />
            <UserAvatar
              name="Alex Johnson"
              size="lg"
              rounded="full"
            />
            <UserAvatar
              name="Maria Garcia"
              size="lg"
              rounded="full"
            />
          </div>
        </template>
      </Section>

      <Section
        @sectioncreated="addLink"
        header="IsOnline or Status Avatar"
        body="This section showcases avatars with online status indicators."
      >
        <template #content>
          <div class="relative flex space-x-4 flex-row items-center justify-center bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border overflow-x-auto border-blue-600/[.87]">
            <UserAvatar
              name="Alex Johnson"
              image="https://i.pinimg.com/originals/04/63/12/046312aac440d95cbc6d56b3eb527d5d.jpg"
              size="xl"
              rounded="full"
              :is-online="false"
            />
            <UserAvatar
              name="Maria Garcia"
              image="https://i.pinimg.com/originals/04/63/12/046312aac440d95cbc6d56b3eb527d5d.jpg"
              size="xl"
              rounded="full"
              :is-online="true"
            />
             <UserAvatar
              name="Gian Catalan"
              size="xl"
              rounded="full"
              :is-online="false"
            />
             <UserAvatar
              name="Alejadro Prado"
              size="xl"
              rounded="full"
              :is-online="true"
            />
            
          </div>
        </template>
      </Section>

      <Section
        @sectioncreated="addLink"
        header="Sizes of Avatar"
        body="This section showcases avatars of different sizes."
      >
        <template #content>
          <div class="relative flex space-x-4 flex-row items-center justify-center bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border overflow-x-auto border-blue-600/[.87]">
            <UserAvatar
              name="Gian Catalan"
              image="https://i.pinimg.com/originals/04/63/12/046312aac440d95cbc6d56b3eb527d5d.jpg"
              size="lg"
              rounded="full"
            />
            <UserAvatar
              name="Alex Johnson"
              image="https://i.pinimg.com/originals/04/63/12/046312aac440d95cbc6d56b3eb527d5d.jpg"
              size="xl"
              rounded="full"
            />
            <UserAvatar
              name="Maria Garcia"
              image="https://i.pinimg.com/originals/04/63/12/046312aac440d95cbc6d56b3eb527d5d.jpg"
              size="xxl"
              rounded="full"
            />
            <UserAvatar
              name="Jack Daniels"
              image="https://i.pinimg.com/originals/04/63/12/046312aac440d95cbc6d56b3eb527d5d.jpg"
              size="xxxl"
              rounded="full"
            />
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
import UserAvatar from "@/components/UserAvatar.vue";

export default {
  name: "AvatarPage",
  components: {
    PageHeader,
    Section,
    PageLinks,
    Button,
    UserAvatar
  },
  data() {
    return {
      links: [],
      isDarkMode: false
    }
  },
  methods: {
   addLink(header) {
          this.links.push({ label: header });
        },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  }
}
</script>