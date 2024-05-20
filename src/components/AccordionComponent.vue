<template>
  <div :class="isLightMode ? 'light-mode' : 'dark-mode'" class="min-h-screen p-8">
    <p class="mb-4 text-sm">Accordion</p>
    <p class="mb-4 text-sm">An accordion is a user interface (UI) element designed to enable the expansion and collapse of content, primarily to conserve space and enhance the organization of information on a webpage or within an application.</p>
    <button @click="mode" class="mb-4 px-4 py-2 border dark:text-white dark:border-white-600 dark:bg-white-700 bg-gray-200 dark:bg-blue-500 dark:border-blue-500 border-blue-500 text-blue-500 inline-block">Mode</button>
    <v-expansion-panels>
      <v-expansion-panel
        title="Title"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima">
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>


<script>
export default {
  name: 'AccordionComponent',
  data() {
    return {
      isLightMode: true,
    };
  },
  methods: {
    mode() {
      this.isLightMode = !this.isLightMode;
    },
  },
};
</script>

<style scoped>
.light-mode {
  background-color: #46a1f0; /* Light Blue */
  color: #000000;
}

.dark-mode {
  background-color: #001f3f; /* Dark Blue */
  color: #ffffff;
}

button {
  cursor: pointer;
  border: 1px solid transparent; /* Reset border */
  padding: 0.5rem 1rem; /* Adjust padding */
}

.dark-mode button {
  border-color: #fff; /* Set border color in dark mode */
}

.light-mode button {
  border-color: #46a1f0; /* Set border color in light mode */
}

.v-expansion-panels {
  border: 1px solid #cccccc;
  border-radius: 5px;
}

.v-expansion-panel {
  background-color: inherit;
  color: inherit;
}
</style>
