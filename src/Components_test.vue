<template>
  <header class="sticky top-0 bg-white z-40">
    <navbar
      :variationIndex="1"
      navbarColor="white"
      searchColor="blue"
      hoverColor="blue"
    ></navbar>
  </header>
  <section
    class="page flex flex-col items-center justify-center h-full overflow-hidden gap-20 p-12"
  >
    <section class="navbar_container flex flex-col gap-24 max-w-none">
      <div class="demo_container">
        <h1 class="mb-4 font-bold text-2xl text-blue-800 text-center">
          Default navbar
        </h1>
        <div class="demo p-10 bg-gray-100 w-auto">
          <div class="w-auto">
            <header class="bg-white p-4">
              <navbar
                :variationIndex="0"
                navbarColor="white"
                hoverColor="slate"
              ></navbar>
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

    <section class="popover_container flex flex-col gap-24 max-w-none">
      <div class="demo_container">
        <h1 class="mb-4 font-bold text-2xl text-blue-800 text-center">
          Default popovers - Hover
        </h1>
        <div class="demo p-10 bg-gray-100 w-auto">
          <div class="w-auto flex flex-row gap-24">
            <popovers
              :variationIndex="0"
              position="top"
              trigger="mouseover"
              buttonText="Top"
              popoverColor="slate"
              popoverButtonColor="cyan"
              popoverTitle="hello gaish"
              popoverContent="sabi ng mama mo, <br> tita na lang daw ang itawag ko sa'yo oh sa kanya <br> tapos ngayon mama ko na siya ang tita mo noon, <br> ngayon kaya pwede na tayo magsama kasi aksept, akcipt na tayo nila, <br> ng mama mo sa tita ko noon"
            ></popovers>
            <popovers
              :variationIndex="0"
              position="bottom"
              trigger="mouseover"
              buttonText="Bottom"
              popoverButtonColor="sky"
              popoverColor="sky"
              informationColor="sky"
            ></popovers>
            <popovers
              :variationIndex="0"
              position="left"
              trigger="mouseover"
              buttonText="Left"
              popoverColor="blue"
              popoverButtonColor="cyan"
            ></popovers>
            <popovers
              :variationIndex="0"
              position="right"
              trigger="mouseover"
              buttonText="Right"
              popoverColor="cyan"
              popoverButtonColor="sky"
            ></popovers>
          </div>
        </div>
      </div>
      <div class="demo_container">
        <h1 class="mb-4 font-bold text-2xl text-blue-800 text-center">
          Default popovers - Click
        </h1>
        <div class="demo p-10 bg-gray-100 w-auto">
          <div class="w-auto flex flex-row gap-24">
            <popovers
              :variationIndex="0"
              position="top"
              trigger="click"
              buttonText="Top"
              popoverColor="slate"
              popoverButtonColor="blue"
              popoverTitle="hello gaish"
              popoverContent="sabi ng mama mo, <br> tita na lang daw ang itawag ko sa'yo oh sa kanya <br> tapos ngayon mama ko na siya ang tita mo noon, <br> ngayon kaya pwede na tayo magsama kasi aksept, akcipt na tayo nila, <br> ng mama mo sa tita ko noon"
            ></popovers>
            <popovers
              :variationIndex="0"
              position="bottom"
              trigger="click"
              buttonText="Bottom"
              popoverButtonColor="sky"
              popoverColor="sky"
              informationColor="sky"
            ></popovers>
            <popovers
              :variationIndex="0"
              position="left"
              trigger="click"
              buttonText="Left"
              popoverColor="teal"
              popoverButtonColor="cyan"
            ></popovers>
            <popovers
              :variationIndex="0"
              position="right"
              trigger="click"
              buttonText="Right"
              popoverColor="cyan"
              popoverButtonColor="sky"
            ></popovers>
          </div>
        </div>
      </div>
      <div class="demo_container">
        <h1 class="mb-4 font-bold text-2xl text-blue-800 text-center">
          Information popovers - Hover
        </h1>
        <div class="demo p-10 bg-gray-100 w-auto">
          <div class="w-auto flex flex-row justify-between">
            <popovers
              :variationIndex="1"
              position="top"
              trigger="mouseover"
              popoverColor="slate"
              informationIconColor="blue"
              popoverTitle="hello gaish"
              popoverContent="sabi ng mama mo, <br> tita na lang daw ang itawag ko sa'yo oh sa kanya <br> tapos ngayon mama ko na siya ang tita mo noon, <br> ngayon kaya pwede na tayo magsama kasi aksept, akcipt na tayo nila, <br> ng mama mo sa tita ko noon"
            ></popovers>
            <popovers
              :variationIndex="1"
              position="bottom"
              trigger="mouseover"
              popoverColor="sky"
              informationIconColor="sky"
              popoverTitle="Beer ka ba?"
              popoverContent="gusto kasi kita eh pero beero lang"
            ></popovers>
            <popovers
              :variationIndex="1"
              position="left"
              trigger="mouseover"
              popoverColor="teal"
              popoverButtonColor="cyan"
              informationIconColor="cyan"
            ></popovers>
            <popovers
              :variationIndex="1"
              position="right"
              trigger="mouseover"
              popoverColor="cyan"
              popoverButtonColor="sky"
              informationIconColor="slate"
            ></popovers>
          </div>
        </div>
      </div>
      <div class="demo_container">
        <h1 class="mb-4 font-bold text-2xl text-blue-800 text-center">
          Information popovers - Click
        </h1>
        <div class="demo p-10 bg-gray-100 w-auto">
          <div class="w-auto flex flex-row justify-between">
            <popovers
              :variationIndex="1"
              position="top"
              trigger="click"
              popoverColor="slate"
              informationIconColor="blue"
              popoverTitle="hello gaish"
              popoverContent="sabi ng mama mo, <br> tita na lang daw ang itawag ko sa'yo oh sa kanya <br> tapos ngayon mama ko na siya ang tita mo noon, <br> ngayon kaya pwede na tayo magsama kasi aksept, akcipt na tayo nila, <br> ng mama mo sa tita ko noon"
            ></popovers>
            <popovers
              :variationIndex="1"
              position="bottom"
              trigger="click"
              popoverColor="sky"
              informationIconColor="sky"
            ></popovers>
            <popovers
              :variationIndex="1"
              position="left"
              trigger="click"
              popoverColor="teal"
              popoverButtonColor="cyan"
              informationIconColor="cyan"
            ></popovers>
            <popovers
              :variationIndex="1"
              position="right"
              trigger="click"
              popoverColor="cyan"
              popoverButtonColor="sky"
              informationIconColor="slate"
            ></popovers>
          </div>
        </div>
      </div>
    </section>
  </section>
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
