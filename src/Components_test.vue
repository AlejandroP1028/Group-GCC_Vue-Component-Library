<template>
  <section :class="{ dark: isDarkMode }">
    <div
      class="bg-gray-50 dark:bg-gray-900 dark:text-white transition-colors duration-300"
    >
      <header class="sticky top-0 bg-white z-40">
        <navbar
          :variationIndex="1"
          searchColor="cyan"
          hoverColor="sky"
          navbarColor="teal"
          :menuItems="menuItems"
        ></navbar>
      </header>
      <section
        class="page flex flex-col items-center justify-center h-full overflow-ahidden gap-20 p-12"
      >
        <section class="navbar_container flex flex-col gap-24 max-w-none">
          <div class="demo_container">
            <h1
              class="mb-4 font-bold text-2xl text-blue-800 text-center dark:text-white"
            >
              Default navbar
            </h1>
            <div class="demo p-10 bg-gray-100 w-auto dark:bg-gray-700">
              <div class="w-auto">
                <header class="bg-white p-4 dark:bg-gray-900">
                  <navbar
                    :variationIndex="0"
                    hoverColor="blue"
                    navbarColor="sky"
                    :menuItems="menuItems"
                  ></navbar>
                </header>
              </div>
            </div>
          </div>
          <div class="demo_container">
            <h1
              class="mb-4 font-bold text-2xl text-blue-800 text-center dark:text-white"
            >
              Navbar with Search bar
            </h1>
            <div class="demo p-10 bg-gray-100 w-auto dark:bg-gray-700">
              <div class="w-auto">
                <header class="bg-white p-4 dark:bg-gray-900">
                  <navbar
                    :variationIndex="1"
                    :menuItems="menuItems"
                    navbarColor="blue"
                    hoverColor="slate"
                    searchColor="white"
                  ></navbar>
                </header>
              </div>
            </div>
          </div>
        </section>

        <section class="popover_container flex flex-col gap-24 max-w-none">
          <div class="demo_container">
            <h1
              class="mb-4 font-bold text-2xl text-blue-800 text-center dark:text-white"
            >
              Default popovers - Hover
            </h1>
            <div class="demo p-10 bg-gray-100 w-auto dark:bg-gray-700">
              <div class="w-auto flex flex-row gap-24 dark:bg-gray-900 p-8">
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
            <h1
              class="mb-4 font-bold text-2xl text-blue-800 text-center dark:text-white"
            >
              Default popovers - Click
            </h1>
            <div class="demo p-10 bg-gray-100 w-auto dark:bg-gray-700">
              <div class="w-auto flex flex-row gap-24 dark:bg-gray-900 p-8">
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
            <h1
              class="mb-4 font-bold text-2xl text-blue-800 text-center dark:text-white"
            >
              Information popovers - Hover
            </h1>
            <div class="demo p-10 bg-gray-100 w-auto dark:bg-gray-700">
              <div
                class="w-auto flex flex-row justify-between dark:bg-gray-900 p-8"
              >
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
            <h1
              class="mb-4 font-bold text-2xl text-blue-800 text-center dark:text-white"
            >
              Information popovers - Click
            </h1>
            <div class="demo p-10 bg-gray-100 w-auto dark:bg-gray-700">
              <div
                class="w-auto flex flex-row justify-between dark:bg-gray-900 p-8"
              >
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
      <button
        @click="toggleDarkMode"
        class="mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300"
      >
        {{ isDarkMode ? "Dark Mode" : "Light Mode" }}
      </button>
    </div>
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
  data() {
    return {
      isDarkMode: false,
      menuItems: [
        { name: "Home", page: "Home" },
        { name: "About", page: "About" },
        { name: "Pricing", page: "Pricing" },
        { name: "Contact", page: "Contact" },
        { name: "Services", page: "Services" },
      ],
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
};
</script>
