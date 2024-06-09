<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  />
  <div
    :class="{ dark: isDarkMode }"
    class="overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900 flex flex-row scroll-smooth"
  >
    <div class="relative w-10/12 mb-16">
      <PageHeader
        header="GCC Popover"
        body="Show contextual information using popover elements based on Tailwind CSS"
      />

      <Section
        body="The GCC Popover component is a versatile element that provides contextual information or additional functionalities on hover or click and acts as a small overlay."
      />
      <Section
        header="Default Popover"
        @sectioncreated="addLink"
        body="The default GCC popover"
      >
        <template #content>
          <div class="flex flex-col items-center">
            <Toggle
              label="Trigger type"
              type="blue"
              :changeFunc="toggleTriggerType"
            ></Toggle>
          </div>
          <div
            :class="{ dark: defaultDark }"
            class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center"
          >
            <Popover :trigger="triggerType"></Popover>
          </div>
        </template>
      </Section>
      <Section
        header="Information Popover"
        @sectioncreated="addLink"
        body="The GCC information Popover"
      >
        <template #content>
          <div class="flex flex-col items-center">
            <Toggle
              label="Trigger type"
              type="blue"
              :changeFunc="toggleTriggerType"
            ></Toggle>
          </div>
          <div
            :class="{ dark: defaultDark }"
            class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center"
          >
            <Popover :variationIndex="1" :trigger="triggerType"></Popover>
          </div>
        </template>
      </Section>
      <Section
        header="Popover Button Color"
        @sectioncreated="addLink"
        body="The GCC popover component's button and icon is customizable with different color options like blue, slate, sky, and cyan."
      >
        <template #content>
          <div class="flex justify-center mt-5" :class="{ dark: defaultDark }">
            <div class="flex space-x-4">
              <Button
                label="Blue"
                color="blue"
                @click="updateSelectedButtonColor('blue')"
              >
                Blue
              </Button>
              <Button
                label="Slate"
                color="gray"
                @click="updateSelectedButtonColor('slate')"
              >
                Slate
              </Button>
              <Button
                label="Sky"
                color="sky"
                @click="updateSelectedButtonColor('sky')"
              >
                Sky
              </Button>

              <Button
                label="Cyan"
                color="cyan"
                @click="updateSelectedButtonColor('cyan')"
              >
                Cyan
              </Button>
            </div>
          </div>
          <div
            :class="{ dark: defaultDark }"
            class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center space-x-32"
          >
            <Popover :popoverButtonColor="selectedButtonColor"></Popover>
            <Popover
              :variationIndex="1"
              :informationIconColor="selectedButtonColor"
            ></Popover>
          </div>
        </template>
      </Section>
      <Section
        header="Popover Color"
        @sectioncreated="addLink"
        body="The GCC popover component is customizable with different color options like blue, slate, sky, teal, and cyan."
      >
        <template #content>
          <div class="flex justify-center mt-5" :class="{ dark: defaultDark }">
            <div class="flex space-x-4">
              <Button
                label="Blue"
                color="blue"
                @click="updateSelectedPopoverColor('blue')"
              >
                Blue
              </Button>
              <Button
                label="Slate"
                color="gray"
                @click="updateSelectedPopoverColor('slate')"
              >
                Slate
              </Button>
              <Button
                label="Sky"
                color="sky"
                @click="updateSelectedPopoverColor('sky')"
              >
                Sky
              </Button>
              <Button
                label="Teal"
                color="teal"
                @click="updateSelectedPopoverColor('teal')"
              >
                Teal
              </Button>
              <Button
                label="Cyan"
                color="cyan"
                @click="updateSelectedPopoverColor('cyan')"
              >
                Cyan
              </Button>
            </div>
          </div>
          <div
            :class="{ dark: defaultDark }"
            class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center space-x-32"
          >
            <Popover :popoverColor="selectedPopoverColor"></Popover>
            <Popover
              :variationIndex="1"
              :popoverColor="selectedPopoverColor"
            ></Popover>
          </div>
        </template>
      </Section>
      <Section
        header="Popover Position"
        @sectioncreated="addLink"
        body="The GCC popover component can be positioned at the top, bottom, left, or right of the trigger element."
      >
        <template #content>
          <div class="flex justify-center mt-5" :class="{ dark: defaultDark }">
            <div class="flex space-x-4">
              <Button
                label="Top"
                color="blue"
                @click="updatePopoverPosition('top')"
              >
                Top
              </Button>
              <Button
                label="Bottom"
                color="gray"
                @click="updatePopoverPosition('bottom')"
              >
                Bottom
              </Button>
              <Button
                label="Left"
                color="sky"
                @click="updatePopoverPosition('left')"
              >
                Left
              </Button>

              <Button
                label="Right"
                color="cyan"
                @click="updatePopoverPosition('right')"
              >
                Right
              </Button>
            </div>
          </div>
          <div
            :class="{ dark: defaultDark }"
            class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center space-x-32"
          >
            <Popover :position="selectedPopoverPosition"></Popover>
            <Popover
              :variationIndex="1"
              :position="selectedPopoverPosition"
            ></Popover>
          </div>
        </template>
      </Section>
      <Section
        header="Editing Contents"
        @sectioncreated="addLink"
        body="The GCC popover component offers fully customizable content."
      >
        <template #content>
          <div class="flex flex-col items-center space-y-8">
            <div class="flex flex-row justify-center items-center space-x-2">
              <label
                for="buttonText"
                class="text-gray-800/[.87] dark:text-gray-200/[.87] font-medium text-md mb-4"
                >Button Text
              </label>
              <input
                type="text"
                class="rounded border-2 p-1"
                v-model="userInputButtonText"
                ref="userInputButtonText"
              />
              <label
                for="popoverTitle"
                class="text-gray-800/[.87] dark:text-gray-200/[.87] font-medium text-md mb-4"
                >Popover Title
              </label>
              <input
                type="text"
                class="rounded border-2 p-1"
                v-model="userInputPopoverTitle"
                ref="userInputPopoverTitle"
              />
              <label
                for="popoverContent"
                class="text-gray-800/[.87] dark:text-gray-200/[.87] font-medium text-md mb-4"
                >Popover Content
              </label>
              <textarea
                type="text"
                class="rounded border-2 p-1"
                v-model="userInputPopoverContent"
                ref="userInputPopoverContent"
              ></textarea>
            </div>
            <Button color="cyan" @click="addButtonText" :class="'w-32'"
              >Edit Contents</Button
            >
          </div>

          <div
            :class="{ dark: defaultDark }"
            class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center space-x-32"
          >
            <Popover
              :buttonText="buttonText"
              :popoverTitle="popoverTitle"
              :popoverContent="popoverContent"
            ></Popover>
            <Popover
              :variationIndex="1"
              :popoverTitle="popoverTitle"
              :popoverContent="popoverContent"
            ></Popover>
          </div>
        </template>
      </Section>
      <br />
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
</template>

<script>
import Section from "./components/Section.vue";
import PageLinks from "./components/pageLinks.vue";
import PageHeader from "./components/pageHeader.vue";
import Button from "./components/Button.vue";
import Popover from "./components/PopoversComponent.vue";
import Toggle from "./components/ToggleComponent.vue";

export default {
  components: {
    PageHeader,
    Section,
    PageLinks,
    Button,
    Popover,
    Toggle,
  },
  data() {
    return {
      links: [],
      isDarkMode: false,
      selectedPopoverColor: "default",
      selectedButtonColor: "sky",
      selectedPopoverPosition: "top",
      triggerType: "mouseover",
      buttonText: "Popover",
      popoverTitle: "Popover Title",
      popoverContent:
        "This is the content of the popover. You can place any information here.",
    };
  },
  methods: {
    addLink(header) {
      this.links.push({ label: header });
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    updateSelectedButtonColor(color) {
      this.selectedButtonColor = color;
    },
    updateSelectedPopoverColor(color) {
      this.selectedPopoverColor = color;
    },
    updatePopoverPosition(position) {
      this.selectedPopoverPosition = position;
    },
    toggleTriggerType() {
      this.triggerType = "click";
    },
    addButtonText() {
      const inputButtonText = this.$refs.userInputButtonText;
      this.buttonText = inputButtonText.value;
      const inputPopoverTitle = this.$refs.userInputPopoverTitle;
      this.popoverTitle = inputPopoverTitle.value;
      const inputPopoverContent = this.$refs.userInputPopoverContent;
      this.popoverContent = inputPopoverContent.value;
    },
  },
};
</script>
