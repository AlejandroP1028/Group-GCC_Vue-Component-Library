<template>
  <div :class="{ 'dark': isDarkMode }">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <div class="px-24 py-10 text-left dark:bg-gray-900 font-sans">
      <section id="badgeComponent">
        <button @click="toggleDarkMode" class="hover:bg-gray-200 text-black dark:text-white p-2 rounded-full">
          <i :class="isDarkMode ? 'fas fa-sun text-2xl' : 'fas fa-moon text-2xl'"></i>
        </button>
        <p class="font-bold text-6xl mb-5 text-black dark:text-white"> Badge </p>
        <p class="text-black dark:text-white text-lg"> A component used to provide information on new updates and notifications. It is used with other components and cannot be used alone. </p>
        <h1 class="justify-center mt-2 flex items-center text-black dark:text-white text-lg bg-blue-100 dark:bg-gray-700 p-7 px-10 mb-5 overflow-x-auto">
          Example of an inline badge in a heading
          <BadgeComponent> New </BadgeComponent>
        </h1>
        <p class="text-black dark:text-white text-lg mb-2"> Bordered badge </p>
        <div class="p-10 mb-5 bg-blue-100 dark:bg-gray-700 flex justify-center items-center overflow-x-auto">
          <BadgeComponent type="bordered" color="blue" class="mr-3"> Blue </BadgeComponent>
          <BadgeComponent type="bordered" color="cyan" class="mr-3"> Cyan </BadgeComponent>
          <BadgeComponent type="bordered" color="sky" class="mr-3"> Sky </BadgeComponent>
          <BadgeComponent type="bordered" color="teal" class="mr-3"> Teal </BadgeComponent>
        </div>
        <p class="text-black dark:text-white text-lg mb-2"> Pill badge </p>
        <div class="p-10 mb-5 bg-blue-100 dark:bg-gray-700 flex justify-center items-center overflow-x-auto">
          <BadgeComponent type="pill" color="blue" class="mr-3"> Blue </BadgeComponent>
          <BadgeComponent type="pill" color="cyan" class="mr-3"> Cyan </BadgeComponent>
          <BadgeComponent type="pill" color="sky" class="mr-3"> Sky </BadgeComponent>
          <BadgeComponent type="pill" color="teal" class="mr-3"> Teal </BadgeComponent>
        </div>
        <p class="text-black dark:text-white text-2xl font-bold mb-2"> Examples of badge in a button </p>
        <p class="text-black dark:text-white text-lg mb-2"> Floating badge </p>
        <div class="p-7 mb-5 bg-blue-100 dark:bg-gray-700 text-center overflow-x-auto">
          <div class="relative inline-block mr-10 m-5">
            <button class="badge-button bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 w-52 text-white font-bold py-2 px-4 rounded mr-2">
              Dot Badge
              <BadgeComponent type="dot" position> </BadgeComponent>
            </button>
          </div>
          <div class="relative inline-block mr-10 m-5">
            <button class="badge-button bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 w-52 text-white font-bold py-2 px-4 rounded mr-2">
              Number Badge
              <BadgeComponent type="number" position> 7 </BadgeComponent>
            </button>
          </div>
          <div class="relative inline-block mr-10 m-5">
            <button class="badge-button bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 w-52 text-white font-bold py-2 px-4 rounded mr-2">
              Icon Badge
              <BadgeComponent type="icon" position> <i class="fas fa-envelope text-white"></i> </BadgeComponent>
            </button>
          </div>
        </div>
        <p class="text-black dark:text-white text-lg mb-2"> Inline badge </p>
        <div class="mb-10 bg-blue-100 dark:bg-gray-700 flex justify-center items-center overflow-x-auto">
          <div class="p-10 flex items-center grid grid-cols-2 border-r-2 border-white dark:border-gray-800">
            <button class="badge-button bg-blue-500 hover:bg-blue-700 dark:bg-sky-700 dark:hover:bg-blue-800 w-52 text-white font-bold rounded mr-2">
              Messages
              <BadgeComponent type="number" :class="['relative ml-1', badgeNumber > 0 ? 'visible' : 'invisible']"> {{ badgeNumber }} </BadgeComponent>
            </button>
          </div>
          <div class="flex items-center justify-center"> 
            <p class="text-black dark:text-white text-lg ml-10 mr-5"> Increase the counter value: </p>
            <input type="range" min="1" max="99" v-model="badgeNumber" @input="updateBadgeNumber" class="h-2 w-40 appearance-none rounded-lg bg-white mt-1 outline-none dark:bg-gray-800">
          </div>
        </div>
      </section> 

      <section id="breadcrumbComponent"> 
        <p class="font-bold text-6xl mb-5 text-black dark:text-white"> Breadcrumb </p>
        <p class="text-black dark:text-white text-lg"> A navigational component that provides users with a trail of links that represent the path they have taken to arrive at their current location within a website or application. </p>
        <p class="text-black dark:text-white text-2xl font-bold mt-5 mb-2"> Default breadcrumb </p>
        <div class="justify-center mt-2 flex items-center text-black dark:text-white text-lg bg-blue-100 dark:bg-gray-700 p-10 mb-5 overflow-x-auto"> 
          <BreadcrumbComponent :items="breadcrumbItems" />
        </div>
        <p class="text-black dark:text-white text-lg mb-2"> With a solid background </p>
        <div class="justify-center mt-2 flex items-center text-black dark:text-white text-lg bg-blue-100 dark:bg-gray-700 p-10 mb-5 overflow-x-auto"> 
          <BreadcrumbComponent :items="breadcrumbItems" type="solidbg" divider="/"/>
        </div>
        <p class="text-black dark:text-white text-lg mb-2"> Customize divider </p>
        <div class="grid grid-cols-5 mt-2 text-black dark:text-white text-lg bg-blue-100 dark:bg-gray-700 mb-5 overflow-x-auto">
          <div class="flex-shrink-0 flex items-center justify-center col-span-3 border-r-2 border-solid border-white dark:border-gray-800"> 
            <BreadcrumbComponent type="solidbg" :items="breadcrumbItems" :divider="selectedDivider"/>
          </div>
          <div class="flex items-center p-10"> 
            <label for="divider" class="text-black dark:text-white"> Choose divider: </label>
            <select id="divider" v-model="selectedDivider" class="ml-2 p-2 rounded bg-white dark:bg-gray-800 dark:text-white">
              <option value="greaterthan"> > </option>
              <option value="backslash"> \ </option>
              <option value="forwardslash"> / </option>
              <option value="dot"> . </option>
              <option value="arrow"> → </option>
              <option value="hyphen"> - </option>
              <option value="line"> | </option>
            </select>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BadgeComponent from './components/BadgeComponent.vue';
import BreadcrumbComponent from './components/BreadcrumbComponent.vue';

export default {
  name: 'App',
  components: {
    BadgeComponent,
    BreadcrumbComponent
  },
  data() {
    return {
      badgeNumber: 1,
      isDarkMode: false,
      selectedDivider: 'greaterthan', //default divider
      breadcrumbItems: [
        { text: 'src', href: '#' },
        { text: 'components', href: '#' },
        { text: 'BreadcrumbComponent.vue' }
      ]
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