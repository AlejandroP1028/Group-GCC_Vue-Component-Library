<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900 flex flex-row scroll-smooth">
    <div class="relative w-auto mb-16">
      <PageHeader 
        :class="'flex-none'"
        header="GCC Badge" 
        body="Show contextual information to your users using badge elements based on Tailwind CSS"
      />

      <Section 
        body="The GCC badge component can be used to provide information, by acting as a label or displaying counts, to your users on new updates and notifications. "
      />
      
      <Section 
        header="Default Badge"
        @sectioncreated="addLink"
        body="The GCC badge component is supported in 4 different colors: blue, sky, teal, and cyan."
      > 
        <template #content>
          <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center">
            <BadgeComponent color="blue" class="mr-3"> Blue </BadgeComponent>
            <BadgeComponent color="sky" class="mr-3"> Sky </BadgeComponent>
            <BadgeComponent color="teal" class="mr-3"> Teal </BadgeComponent>
            <BadgeComponent color="cyan" class="mr-3"> Cyan </BadgeComponent>
          </div>
        </template>
      </Section>

      <Section 
        header="Bordered Badge"
        @sectioncreated="addLink"
        body="The badge component can be accentuated with border."
      > 
        <template #content>
          <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center">
            <BadgeComponent color="blue" bordered class="mr-3"> Blue </BadgeComponent>
            <BadgeComponent color="sky" bordered class="mr-3"> Sky </BadgeComponent>
            <BadgeComponent color="teal" bordered class="mr-3"> Teal </BadgeComponent>
            <BadgeComponent color="cyan" bordered class="mr-3"> Cyan </BadgeComponent>
          </div>
        </template>
      </Section>

      <Section 
        header="Pill Badge"
        @sectioncreated="addLink"
        body="Rounded corners can also be applied with the GCC badge component, resembling pills."
      > 
        <template #content>
          <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center">
            <BadgeComponent type="pill" color="blue" class="mr-3"> Blue </BadgeComponent>
            <BadgeComponent type="pill" color="sky" class="mr-3"> Sky </BadgeComponent>
            <BadgeComponent type="pill" color="teal" class="mr-3"> Teal </BadgeComponent>
            <BadgeComponent type="pill" color="cyan" class="mr-3"> Cyan </BadgeComponent>
          </div>
        </template>
      </Section>

      <Section 
        header="Inline Badge"
        @sectioncreated="addLink"
        body="nyenyenye"
      > 
        <template #content>
          <div class="flex justify-center flex-row space-x-4">
            <div class="flex justify-center flex-col space-y-2 p-5">
              <ToggleComponent label="Default Badge" v-model="toggles.default" @change="handleToggle('default')" :disabled="toggles.defaultDisabled"></ToggleComponent>
              <ToggleComponent label="Dot Badge" v-model="toggles.dot" @change="handleToggle('dot')" :disabled="toggles.dotDisabled"></ToggleComponent>
            </div>
            <div class="flex justify-center flex-col space-y-2 p-5">
              <ToggleComponent label="Pill Badge" v-model="toggles.pill" @change="handleToggle('pill')" :disabled="toggles.pillDisabled"></ToggleComponent>
              <ToggleComponent label="Bordered Badge" v-model="toggles.bordered" @change="handleToggle('bordered')"></ToggleComponent>
            </div>
            <div class="flex justify-center flex-col space-y-2 border-l-2 border-gray-300 p-5">
              <DropdownComponent> Colors </DropdownComponent>
            </div>
          </div>
          <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center">
            <div class="w-2/3 flex items-center justify-center">
              <Button>
                Button
                <BadgeComponent :type="badgeType" color="blue" :bordered="toggles.bordered" :class="['relative ml-1', badgeNumber > 0 ? 'visible' : 'invisible']">
                  {{ badgeNumber }}
                </BadgeComponent>
              </Button>
            </div>
            <div class="w-1/3 border-l-2 border-gray-300 p-5">
              <p class="text-gray-800/[.87] dark:text-gray-200/[.87] font-medium text-md">Increase the counter value:</p>
              <input type="range" min="1" max="99" v-model="badgeNumber" @input="updateBadgeNumber" class="h-2 w-40 appearance-none rounded-lg bg-gray-300 mt-1 outline-none dark:bg-gray-800">
            </div>
          </div>
        </template>
      </Section>

      <Section 
        header="Floating Badge"
        @sectioncreated="addLink"
        body="These are different examples of a floating badge, also known as notification badge, in a button. Use the toggle to display ways to indicate information, such as a simple dot, count indicator, or an icon."
      > 
        <template #content>
          <div class="flex justify-center flex-row space-x-4 mt-6">
            <ToggleComponent label="Dot Badge" type="blue" @change="toggleDot" :disabled="displayBadge.number || displayBadge.icon"></ToggleComponent>
            <ToggleComponent label="Number Badge" type="blue" @change="toggleNum" :disabled="displayBadge.dot || displayBadge.icon"></ToggleComponent>
            <ToggleComponent label="Icon Badge" type="blue" @change="toggleIcon" :disabled="displayBadge.dot || displayBadge.number"></ToggleComponent>
          </div>
          <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-60 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87] flex justify-center items-center">
            <div class="relative">
              <Button>
                Button
                <BadgeComponent type="dot" color="red" position v-if="displayBadge.dot"></BadgeComponent>
                <BadgeComponent type="dot" color="blue" bordered position v-if="displayBadge.number"> 2 </BadgeComponent>
                <BadgeComponent type="dot" color="teal" position bordered v-if="displayBadge.icon"> <i class="fas fa-envelope"></i> </BadgeComponent>
              </Button>
            </div>
          </div>
        </template>
      </Section>

      <Section 
        header="Summary"
        @sectioncreated="addLink"
        body="mama mo summary di pa tapos sandale"
      > 
        </Section>
    </div>

    <div class="sticky top-8 w-4/12 transition-all duration-300 ease-in-out flex flex-col space-y-4 overflow-hidden mr-8">
      <hr class="h-0.5 bg-blue-600 border-none rounded-full">
      <span class="tracking-tight font-semibold self-center text-md text-gray-800 dark:text-gray-200">ON THIS PAGE</span>
      <PageLinks v-for="link in links" 
        :key="link.label"
        :label="link.label"
      />
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
import Button from './components/Button.vue';
import Section from './components/Section.vue';
import PageHeader from './components/pageHeader.vue';
import BadgeComponent from './components/BadgeComponent.vue';
import PageLinks from './components/pageLinks.vue';
import ToggleComponent from './components/ToggleComponent.vue';

export default {
  name: 'badge_page',
  components: {
    Button,
    Section,
    PageHeader,
    BadgeComponent,
    PageLinks,
    ToggleComponent
  },
  data() {
    return {
      links: [],
      isDarkMode: false,
      displayBadge: {
        dot: false,
        number: false,
        icon: false
      },
      badgeNumber: 1,
      toggles: {
        default: false,
        dot: false,
        pill: false,
        bordered: false,
        defaultDisabled: false,
        dotDisabled: false,
        pillDisabled: false
      }
    };
  },
  computed: {
    badgeType() {
      if (this.toggles.dot) return 'dot';
      if (this.toggles.pill) return 'pill';
      return 'default';
    }
  },
  methods: {
    addLink(header) {
      this.links.push({ label: header });
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    handleToggle(type) {
      if (type === 'default') {
        this.toggles.default = !this.toggles.default;
        if (this.toggles.default) {
          this.toggles.dot = false;
          this.toggles.pill = false;
          this.toggles.dotDisabled = true;
          this.toggles.pillDisabled = true;
        } else {
          this.toggles.dotDisabled = false;
          this.toggles.pillDisabled = false;
        }
      } else if (type === 'dot') {
        this.toggles.dot = !this.toggles.dot;
        if (this.toggles.dot) {
          this.toggles.default = false;
          this.toggles.pill = false;
          this.toggles.defaultDisabled = true;
          this.toggles.pillDisabled = true;
        } else {
          this.toggles.defaultDisabled = false;
          this.toggles.pillDisabled = false;
        }
      } else if (type === 'pill') {
        this.toggles.pill = !this.toggles.pill;
        if (this.toggles.pill) {
          this.toggles.default = false;
          this.toggles.dot = false;
          this.toggles.defaultDisabled = true;
          this.toggles.dotDisabled = true;
        } else {
          this.toggles.defaultDisabled = false;
          this.toggles.dotDisabled = false;
        }
      } else if (type === 'bordered') {
          this.toggles.bordered = !this.toggles.bordered;
        }
    },
    toggleDot() {
      this.displayBadge.dot = !this.displayBadge.dot;
      if (this.displayBadge.dot) {
        this.displayBadge.number = false;
        this.displayBadge.icon = false;
      }
    },
    toggleNum() {
      this.displayBadge.number = !this.displayBadge.number;
      if (this.displayBadge.number) {
        this.displayBadge.dot = false;
        this.displayBadge.icon = false;
      }
    },
    toggleIcon() {
      this.displayBadge.icon = !this.displayBadge.icon;
      if (this.displayBadge.icon) {
        this.displayBadge.dot = false;
        this.displayBadge.number = false;
      }
    },
    updateBadgeNumber(event) {
      this.badgeNumber = event.target.value;
    }
  }
};
</script>
