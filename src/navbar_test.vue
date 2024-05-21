<template>
  <section
    class="page flex flex-col items-center justify-center h-screen overflow-hidden"
  >
    <h1 class="text-2xl">Navbar</h1>
    <div>
      <h1>Default Navbar</h1>
      <div class="demo p-10 bg-gray-100 w-auto">
        <div class="w-auto">
          <header class="bg-white p-4">
            <navbar></navbar>
          </header>
        </div>
      </div>
    </div>
    <div>
      <h1>Default Navbar</h1>
      <div class="demo p-10 bg-gray-100 w-auto">
        <div class="w-auto">
          <header class="bg-white p-4">
            <navbar></navbar>
          </header>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from "./components/NavbarComponent.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
