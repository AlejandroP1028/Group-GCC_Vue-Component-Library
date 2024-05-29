<template>
  <nav
    :class="[
      navbarColorClass,
      'navbar_default justify-between items-center p-4',
    ]"
  >
    <div class="container mx-auto flex items-center justify-between p-1">
      <div class="logo_container">
        <svg
          width="89"
          height="30"
          viewBox="0 0 89 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8 29.64C13.5333 29.64 11.44 29.2933 9.52 28.6C7.62667 27.88 5.97333 26.8667 4.56 25.56C3.17333 24.2533 2.09333 22.7067 1.32 20.92C0.546667 19.1333 0.16 17.16 0.16 15C0.16 12.84 0.546667 10.8667 1.32 9.08C2.09333 7.29333 3.18667 5.74667 4.6 4.44C6.01333 3.13333 7.68 2.13333 9.6 1.44C11.5467 0.719999 13.68 0.359999 16 0.359999C18.7733 0.359999 21.24 0.826665 23.4 1.76C25.5867 2.69333 27.3867 4.02667 28.8 5.76L22.76 11.08C21.88 10.0667 20.92 9.30667 19.88 8.8C18.8667 8.26667 17.7333 8 16.48 8C15.44 8 14.4933 8.16 13.64 8.48C12.8133 8.8 12.1067 9.26667 11.52 9.88C10.9333 10.4933 10.48 11.2267 10.16 12.08C9.84 12.9333 9.68 13.9067 9.68 15C9.68 16.04 9.84 17 10.16 17.88C10.48 18.7333 10.9333 19.4667 11.52 20.08C12.1067 20.6933 12.8 21.1733 13.6 21.52C14.4267 21.84 15.3467 22 16.36 22C17.4267 22 18.4667 21.8267 19.48 21.48C20.4933 21.1067 21.5733 20.48 22.72 19.6L28 26.08C26.2933 27.2267 24.3467 28.1067 22.16 28.72C19.9733 29.3333 17.8533 29.64 15.8 29.64ZM19.8 24.88V14.24H28V26.08L19.8 24.88ZM46.5022 29.64C44.2622 29.64 42.1822 29.2933 40.2622 28.6C38.3689 27.88 36.7155 26.8667 35.3022 25.56C33.9155 24.2533 32.8355 22.7067 32.0622 20.92C31.2889 19.1333 30.9022 17.16 30.9022 15C30.9022 12.84 31.2889 10.8667 32.0622 9.08C32.8355 7.29333 33.9155 5.74667 35.3022 4.44C36.7155 3.13333 38.3689 2.13333 40.2622 1.44C42.1822 0.719999 44.2622 0.359999 46.5022 0.359999C49.2489 0.359999 51.6755 0.839999 53.7822 1.8C55.9155 2.76 57.6755 4.14666 59.0622 5.96L53.1022 11.28C52.2755 10.24 51.3555 9.44 50.3422 8.88C49.3555 8.29333 48.2355 8 46.9822 8C45.9955 8 45.1022 8.16 44.3022 8.48C43.5022 8.8 42.8089 9.26667 42.2222 9.88C41.6622 10.4933 41.2222 11.24 40.9022 12.12C40.5822 12.9733 40.4222 13.9333 40.4222 15C40.4222 16.0667 40.5822 17.04 40.9022 17.92C41.2222 18.7733 41.6622 19.5067 42.2222 20.12C42.8089 20.7333 43.5022 21.2 44.3022 21.52C45.1022 21.84 45.9955 22 46.9822 22C48.2355 22 49.3555 21.72 50.3422 21.16C51.3555 20.5733 52.2755 19.76 53.1022 18.72L59.0622 24.04C57.6755 25.8267 55.9155 27.2133 53.7822 28.2C51.6755 29.16 49.2489 29.64 46.5022 29.64ZM75.6819 29.64C73.4419 29.64 71.3619 29.2933 69.4419 28.6C67.5485 27.88 65.8952 26.8667 64.4819 25.56C63.0952 24.2533 62.0152 22.7067 61.2419 20.92C60.4685 19.1333 60.0819 17.16 60.0819 15C60.0819 12.84 60.4685 10.8667 61.2419 9.08C62.0152 7.29333 63.0952 5.74667 64.4819 4.44C65.8952 3.13333 67.5485 2.13333 69.4419 1.44C71.3619 0.719999 73.4419 0.359999 75.6819 0.359999C78.4285 0.359999 80.8552 0.839999 82.9619 1.8C85.0952 2.76 86.8552 4.14666 88.2419 5.96L82.2819 11.28C81.4552 10.24 80.5352 9.44 79.5219 8.88C78.5352 8.29333 77.4152 8 76.1619 8C75.1752 8 74.2819 8.16 73.4819 8.48C72.6819 8.8 71.9885 9.26667 71.4019 9.88C70.8419 10.4933 70.4019 11.24 70.0819 12.12C69.7619 12.9733 69.6019 13.9333 69.6019 15C69.6019 16.0667 69.7619 17.04 70.0819 17.92C70.4019 18.7733 70.8419 19.5067 71.4019 20.12C71.9885 20.7333 72.6819 21.2 73.4819 21.52C74.2819 21.84 75.1752 22 76.1619 22C77.4152 22 78.5352 21.72 79.5219 21.16C80.5352 20.5733 81.4552 19.76 82.2819 18.72L88.2419 24.04C86.8552 25.8267 85.0952 27.2133 82.9619 28.2C80.8552 29.16 78.4285 29.64 75.6819 29.64Z"
            fill="#BFDBFE"
          />
        </svg>
      </div>
      <div class="items_container">
        <ul class="flex space-x-8 items-center">
          <li
            v-for="item in menuItems"
            :key="item.page"
            :class="{ activepage: activePage === item.page }"
          >
            <a
              href="#"
              @click.prevent="setActivePage(item.page)"
              :class="[HoverColorClass]"
            >
              {{ item.name }}
            </a>
          </li>
          <input
            type="text"
            placeholder="Search.."
            :class="[searchColorClass, 'rounded border-2 p-1 pl-6']"
          />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    variationIndex: {
      type: Number,
      required: true,
    },
    navbarColor: {
      type: String,
      default: "transparent",
    },
    searchColor: {
      type: String,
      default: "transparent",
    },
    hoverColor: {
      type: String,
      default: "white",
    },
    menuItems: {
      type: Array,
      required: true,
      default: () => [
        { name: "Home", page: "Home" },
        { name: "About", page: "About" },
        { name: "Pricing", page: "Pricing" },
        { name: "Contact", page: "Contact" },
        { name: "Services", page: "Services" },
      ],
    },
  },
  data() {
    return {
      activePage: "Home",
    };
  },
  methods: {
    setActivePage(page) {
      this.activePage = page;
    },
  },
  computed: {
    navbarColorClass() {
      return {
        transparent: "bg-transparent",
        white: "bg-white",
        blue: "bg-blue-100",
        slate: "bg-slate-200",
        teal: "bg-teal-100",
        cyan: "bg-cyan-50",
        sky: "bg-sky-100",
      }[this.navbarColor];
    },
    searchColorClass() {
      return {
        transparent: "bg-transparent",
        white: "bg-white border-slate-100",
        blue: "bg-blue-100 border-slate-50",
        slate: "bg-slate-100 border-white",
        teal: "bg-teal-50 border-sky-100",
        cyan: "bg-cyan-50 border-sky-100",
        sky: "bg-sky-100 border-blue-100",
      }[this.searchColor];
    },
    HoverColorClass() {
      return {
        transparent: "bg-transparent",
        white: "bg-white",
        blue: "hover:text-blue-600 active:text-blue-600",
        slate: "hover:text-slate-400 active:text-slate-400",
        teal: "hover:text-teal-600 active:text-teal-600",
        cyan: "hover:text-cyan-400 active:text-cyan-400",
        sky: "hover:text-sky-400 active:text-sky-400",
      }[this.hoverColor];
    },
  },
};
</script>
