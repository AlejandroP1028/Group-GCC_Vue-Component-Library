<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  />
  <div
    :class="{ dark: isDarkMode }"
    class="overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900 flex flex-row scroll-smooth"
  >
    <div class="relative w-auto mb-16">
      <PageHeader
        header="GCC Navbar"
        body="Show a list of navigation links using a Navbar based on Tailwind CSS"
      />

      <Section
        body="The GCC Navbar component is a navigational component designed to provide a consistent and user-friendly navigation experience across your website. It serves as a horizontal bar typically positioned at the top of the page, offering quick access to essential sections or functionalities."
      />

      <Section
        header="Default Navbar"
        @sectioncreated="addLink"
        body="The default GCC Navbar"
      >
        <template #content>
          <div
            :class="{ dark: defaultDark }"
            class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center"
          >
            <Navbar :variationIndex="0" />
          </div>
        </template>
      </Section>
      <Section
        header="Navbar with Search Bar"
        @sectioncreated="addLink"
        body="The GCC Navbar component with a search function"
      >
        <template #content>
          <div
            :class="{ dark: defaultDark }"
            class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center"
          >
            <Navbar :variationIndex="1" />
          </div>
        </template>
      </Section>

      <Section
        header="Navbar Color"
        @sectioncreated="addLink"
        body="The GCC Navbar component is customizable with different color options like blue, slate, teal, sky, and cyan."
      >
        <template #content>
          <div class="flex justify-center mt-5" :class="{ dark: defaultDark }">
            <div class="flex space-x-4">
              <Button
                label="Blue"
                color="blue"
                @click="updateSelectedColor('blue')"
              >
                Blue
              </Button>
              <Button
                label="Slate"
                color="gray"
                @click="updateSelectedColor('slate')"
              >
                Slate
              </Button>
              <Button
                label="Sky"
                color="sky"
                @click="updateSelectedColor('sky')"
              >
                Sky
              </Button>
              <Button
                label="Teal"
                color="teal"
                @click="updateSelectedColor('teal')"
              >
                Teal
              </Button>
              <Button
                label="Cyan"
                color="cyan"
                @click="updateSelectedColor('cyan')"
              >
                Cyan
              </Button>
            </div>
          </div>
          <div
            :class="{ dark: defaultDark }"
            class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center"
          >
            <Navbar :variationIndex="0" :navbarColor="selectedColor" />
          </div>
        </template>
      </Section>
      <Section
        header="Customize your own Navbar"
        @sectioncreated="addLink"
        body="The user has the freedom to customize the GCC Navbar's color, hover color, search bar color, and the menu items."
      >
        <template #content>
          <div class="flex flex-col items-center">
            <div class="flex flex-col space-y-2 self-center justify-center">
              <Toggle
                label="Variation"
                type="blue"
                :changeFunc="toggleNavbarVariation"
              ></Toggle>
            </div>
            <div class="flex flex-col gap-y-4 mt-5">
              <div
                class="flex flex-col items-start space-y-2 p-2 bg-blue-100 dark:bg-gray-800 rounded-lg shadow-md"
              >
                <h4
                  class="text-md font-semibold text-gray-900 dark:text-gray-200"
                >
                  Navbar color
                </h4>
                <Radio
                  :items="[
                    { value: 'blue', label: 'Blue' },
                    { value: 'slate', label: 'Slate' },
                    { value: 'sky', label: 'Sky' },
                    { value: 'teal', label: 'Teal' },
                    { value: 'cyan', label: 'Cyan' },
                  ]"
                  @input="changeNavbarColor"
                />
              </div>
              <div
                class="flex flex-col items-start space-y-2 p-2 bg-blue-100 dark:bg-gray-800 rounded-lg shadow-md"
              >
                <h4
                  class="text-md font-semibold text-gray-900 dark:text-gray-200"
                >
                  Hover color
                </h4>
                <Radio
                  :items="[
                    { value: 'blue', label: 'Blue' },
                    { value: 'slate', label: 'Slate' },
                    { value: 'sky', label: 'Sky' },
                    { value: 'teal', label: 'Teal' },
                    { value: 'cyan', label: 'Cyan' },
                  ]"
                  @input="changeHoverColor"
                />
              </div>
              <div
                class="flex flex-col items-start space-y-2 p-2 bg-blue-100 dark:bg-gray-800 rounded-lg shadow-md"
              >
                <h4
                  class="text-md font-semibold text-gray-900 dark:text-gray-200"
                >
                  Search Bar color
                </h4>
                <Radio
                  :items="[
                    { value: 'white', label: 'White' },
                    { value: 'transparent', label: 'Transparent' },
                    { value: 'blue', label: 'Blue' },
                    { value: 'slate', label: 'Slate' },
                    { value: 'sky', label: 'Sky' },
                    { value: 'teal', label: 'Teal' },
                    { value: 'cyan', label: 'Cyan' },
                  ]"
                  @input="changeSearchbarColor"
                />
              </div>
            </div>
            <div class="flex flex-col justify-center items-center mt-12">
              <form
                @submit.prevent="addMenuItem"
                class="flex justify-center items-center gap-x-4"
              >
                <div class="space-x-2">
                  <label
                    for="name"
                    class="text-gray-800/[.87] dark:text-gray-200/[.87] font-medium text-md mb-4"
                    >Add menu items:
                  </label>
                  <input
                    type="text"
                    id="name page"
                    class="rounded border-2 p-1"
                    v-model="newItem.name"
                  />
                </div>

                <div class="space-x-4">
                  <Button color="blue" @click="addMenuItem">Add Item</Button>
                  <Button color="blue" @click="resetForm">Reset</Button>
                </div>
              </form>
            </div>
          </div>

          <div
            :class="{ dark: defaultDark }"
            class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center"
          >
            <Navbar
              :variationIndex="NavbarVariation"
              :menuItems="menuItems"
              :navbarColor="navbarColor"
              :hoverColor="hoverColor"
              :searchColor="searchbarColor"
            />
          </div>
        </template>
      </Section>
      <br />
    </div>

    <div
      class="sticky top-8 w-4/12 transition-all duration-300 ease-in-out flex flex-col space-y-4 overflow-hidden mr-8"
    >
      <hr class="h-0.5 bg-blue-600 border-none rounded-full" />
      <span
        class="tracking-tight font-semibold self-center text-md text-gray-800 dark:text-gray-200"
        >ON THIS PAGE</span
      >
      <PageLinks v-for="link in links" :key="link.label" :label="link.label" />

      <hr class="h-0.5 bg-blue-600 border-none rounded-full" />
    </div>
  </div>
</template>

<script>
import Section from "./components/Section.vue";
import PageLinks from "./components/pageLinks.vue";
import PageHeader from "./components/pageHeader.vue";
import Button from "./components/Button.vue";
import Toggle from "./components/ToggleComponent.vue";
import Navbar from "./components/NavbarComponent.vue";
import Radio from "./components/radio.vue";

export default {
  components: {
    PageHeader,
    Section,
    PageLinks,
    Button,
    Navbar,
    Toggle,
    Radio,
  },
  data() {
    return {
      links: [],
      isDarkMode: false,
      selectedColor: "default",
      navbarColor: "default",
      hoverColor: "default",
      searchbarColor: "default",
      NavbarVariation: 0,
      newItem: {
        name: "",
        page: "",
      },
      menuItems: [],
    };
  },
  methods: {
    addLink(header) {
      this.links.push({ label: header });
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    updateSelectedColor(color) {
      this.selectedColor = color;
    },
    toggleNavbarVariation() {
      this.NavbarVariation = (this.NavbarVariation + 1) % 2;
    },
    changeNavbarColor(navbar_color) {
      this.navbarColor = navbar_color;
    },
    changeHoverColor(hover_color) {
      this.hoverColor = hover_color;
    },
    changeSearchbarColor(search_color) {
      this.searchbarColor = search_color;
    },
    addMenuItem() {
      this.menuItems.push({ ...this.newItem });
      this.newItem.name = "";
      this.newItem.page = "";
    },
    resetForm() {
      this.newItem = {
        name: "",
        page: "",
      };
      this.menuItems = [];
    },
  },
};
</script>
