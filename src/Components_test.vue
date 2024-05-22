/* eslint-disable */
<template>
  <section
    class="page flex flex-col items-center justify-center h-screen overflow-hidden gap-20"
  >
    <section class="navbar_container">
      <h1 class="text-2xl text-center">Navbar</h1>
      <div class="demo_container">
        <h1>Default Navbar</h1>
        <div class="demo p-10 bg-gray-100 w-auto">
          <div class="w-auto">
            <header class="bg-white p-4">
              <navbar :variationIndex="0"></navbar>
            </header>
          </div>
        </div>
      </div>
      <div class="demo_container">
        <h1>Navbar with Search bar</h1>
        <div class="demo p-10 bg-gray-100 w-auto">
          <div class="w-auto">
            <header class="bg-white p-4">
              <navbar :variationIndex="1"></navbar>
            </header>
          </div>
        </div>
      </div>
    </section>

    <section class="popover_container">
      <h1 class="text-2xl text-center">Popover</h1>
      <popovers></popovers>
    </section>
  </section>

  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-4 right-4"
  >
    Dark Mode
  </button>
</template>

<script>
import navbar from "./components/NavbarComponent.vue";
import popovers from "./components/PopoversComponent.vue";

export default {
  components: {
    navbar,
    popovers,
  },
};
</script>
