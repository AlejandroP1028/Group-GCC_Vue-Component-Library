<template>
  <header class="sticky top-0 h-40">
    <navbar :variationIndex="1"></navbar>
  </header>
  <section
    class="page flex flex-col items-center justify-center h-screen overflow-hidden gap-20"
  >
    <section class="navbar_container flex flex-col gap-24 max-w-none">
      <div class="demo_container">
        <h1 class="mb-4 font-bold text-2xl text-blue-800 text-center">
          Default navbar
        </h1>
        <div class="demo p-10 bg-gray-100 w-auto">
          <div class="w-auto">
            <header class="bg-white p-4">
              <navbar :variationIndex="0"></navbar>
            </header>
          </div>
        </div>
      </div>
      <div class="demo_container">
        <h1 class="mb-4 font-bold text-2xl text-blue-800 text-center">
          Navbar with Search bar
        </h1>
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
      <div class="demo_container">
        <h1 class="mb-4 font-bold text-2xl text-blue-800 text-center">
          Default popovers
        </h1>
        <div class="demo p-10 bg-gray-100 w-auto">
          <div class="w-auto flex flex-row gap-24">
            <popovers
              position="top"
              trigger="mouseover"
              buttonText="Top"
              popoverColor="slate"
              popoverButtonColor="blue"
              popoverTitle="hello gaish"
              popoverContent="sabi ng mama mo,
              tita na lang daw ang itawag ko sa'yo oh sa kanya 
              tapos ngayon mama ko na siya ang tita mo noon, 
              ngayon kaya pwede na tayo magsama kasi aksept, akcipt na tayo nila, 
              ng mama mo sa tita ko noon"
            ></popovers>
            <popovers
              position="bottom"
              trigger="mouseover"
              buttonText="Bottom"
              popoverColor="sky"
              popoverButtonColor="slate"
            ></popovers>
            <popovers
              position="left"
              trigger="mouseover"
              buttonText="Left"
              popoverColor="teal"
              popoverButtonColor="cyan"
            ></popovers>
            <popovers
              position="right"
              trigger="mouseover"
              buttonText="Right"
              popoverColor="cyan"
              popoverButtonColor="sky"
            ></popovers>
          </div>
        </div>
      </div>
    </section>
  </section>

  <!--  <button
    class="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded absolute bottom-4 right-4"
  >
    Dark Mode
  </button> -->
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
