<template>
  <div :class="{ 'dark': isDarkMode }">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <div class="p-24 text-left dark:bg-gray-900">
      <button @click="toggleDarkMode" class="hover:bg-gray-200 text-black dark:text-white p-2 rounded-full">
        <i :class="isDarkMode ? 'fas fa-sun text-2xl' : 'fas fa-moon text-2xl'"></i>
      </button>
      <p class="font-bold text-6xl mb-5 text-black dark:text-white"> Badge </p>
      <p class="text-black dark:text-white text-lg"> A component used to provide information on new updates and notifications. It is used with other components and cannot be used alone. </p>
      <div class="font-sans text-center text-black mt-2">
        <h1 class="flex items-center text-black dark:text-white text-lg bg-sky-200 dark:bg-gray-600 p-7 px-10 mb-5">
          Example of an inline badge in a heading
          <BadgeComponent> New </BadgeComponent>
        </h1>
      </div>
      <p class="text-black dark:text-white text-2xl font-bold my-2"> Examples of badge in a button </p>
      <div class="mt-5 px-10 p-7 mb-5 bg-sky-200 dark:bg-gray-600">
        <p class="text-black dark:text-white text-lg mb-5"> Notification badges: </p>
        <div class="relative inline-block mr-10 mb-5">
          <button class="badge-button bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 w-52 text-white font-bold py-2 px-4 rounded mr-2">
            Dot Badge
            <BadgeComponent type="dot" class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 mr-1"></BadgeComponent>
          </button>
        </div>
        <div class="relative inline-block mr-10">
          <button class="badge-button bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 w-52 text-white font-bold py-2 px-4 rounded mr-2">
            Number Badge
            <BadgeComponent type="number" class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 mr-1">7</BadgeComponent>
          </button>
        </div>
        <div class="relative inline-block">
          <button class="badge-button bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 w-52 text-white font-bold py-2 px-4 rounded mr-2">
            Icon Badge
            <BadgeComponent type="icon" class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 mr-1">
              <i class="fas fa-envelope text-white"></i>
            </BadgeComponent>
          </button>
        </div>
        <p class="text-black dark:text-white text-lg mb-5"> Badge can also be inside the button component. </p>
        <div class="flex items-center mr-10 mb-5">
          <button class="badge-button bg-blue-500 hover:bg-blue-700 dark:bg-sky-700 dark:hover:bg-blue-800 w-52 text-white font-bold py-2 px-4 rounded mr-2">
            Messages
            <BadgeComponent type="number" :class="['absolute ml-2', badgeNumber > 0 ? 'visible' : 'invisible']">{{ badgeNumber }}</BadgeComponent>
          </button>
          <p class="text-black dark:text-white text-lg ml-10 mr-5"> Increase the counter value: </p>
          <input type="range" min="1" max="99" v-model="badgeNumber" @input="updateBadgeNumber" class="h-2 w-40 appearance-none rounded-lg bg-sky-500 mt-1 outline-none dark:bg-gray-800">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BadgeComponent from './components/BadgeComponent.vue';

export default {
  name: 'App',
  components: {
    BadgeComponent
  },
  data() {
    return {
      badgeNumber: 1,
      isDarkMode: false 
    };
  },
  methods: {
    updateBadgeNumber() {},
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  }
}
</script>

<style scoped>
.badge-button {
  @apply inline-block py-2 px-4 text-base font-bold rounded bg-transparent border-2 border-sky-500 text-black dark:text-white cursor-pointer mr-2 dark:bg-sky-700;
}

.badge-button:hover {
  @apply bg-blue-200 dark:bg-blue-800 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-white;
}
</style>
