<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-hidden h-screen w-screen bg-gray-100 dark:bg-gray-900">
    <!-- Toggle button for dark/light mode -->
    <button @click="toggleDarkMode" type="button" class="absolute top-70 left-70 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>

    <!-- First Carousel -->
    <Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px" contentClass="flex items-center justify-start" style="margin-top: 50px; margin-left: -59%;">
      <template #item="slotProps">
        <div :class="['first-carousel', 'rounded-md', 'm-2', 'p-3', 'font-poppins', 'shadow-xl', {'light-mode-background-1': !isDarkMode, 'dark-mode-background-1': isDarkMode}]">
          <div class="mb-3">
            <div class="relative mx-auto max-w-xs max-h-50">
              <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-60 h-48 object-contain" />
              <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:0px; top: 5px"/>
            </div>
          </div>
          <div :class="['mb-4', 'font-bold', 'text-xs', {'light-mode-text-1': !isDarkMode, 'dark-mode-text-1': isDarkMode}]">{{ slotProps.data.name }}</div>
          <div class="flex justify-between items-center">
            <div :class="['mt-0', 'font-bold', {'light-mode-text-1': !isDarkMode, 'dark-mode-text-1': isDarkMode}]">${{ slotProps.data.price }}</div>
            <span>
              <Button icon="pi pi-heart" severity="secondary" outlined :class="{'light-mode-text-1': !isDarkMode, 'dark-mode-text-1': isDarkMode, 'border-white': true}" />
              <Button icon="pi pi-shopping-cart" class="ml-2" :class="{'light-mode-text-1': !isDarkMode, 'dark-mode-text-1': isDarkMode, 'border-white': true}" />
            </span>
          </div>
        </div>
      </template>
    </Carousel>

    <!-- Second Carousel -->
    <Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px" contentClass="flex items-center" style="margin-top: -27.8%; margin-left: -19%;">
      <template #item="slotProps">
        <div :class="['second-carousel', 'rounded-md', 'm-2', 'p-3', 'font-poppins', 'shadow-xl', {'light-mode-background-2': !isDarkMode, 'dark-mode-background-2': isDarkMode}]">
          <div class="mb-3">
            <div class="relative mx-auto max-w-xs max-h-50">
              <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-60 h-48 object-contain rounded-md" />
              <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:0px; top: 5px"/>
            </div>
          </div>
          <div :class="['mb-4', 'font-bold', 'text-xs', {'light-mode-text-2': !isDarkMode, 'dark-mode-text-2': isDarkMode}]">{{ slotProps.data.name }}</div>
          <div class="flex justify-between items-center">
            <div :class="['mt-0', 'font-bold', {'light-mode-text-2': !isDarkMode, 'dark-mode-text-2': isDarkMode}]">${{ slotProps.data.price }}</div>
            <span>
              <Button icon="pi pi-heart" severity="secondary" outlined :class="{'light-mode-text-2': !isDarkMode, 'dark-mode-text-2': isDarkMode, 'border-white': true}" />
              <Button icon="pi pi-shopping-cart" class="ml-2" :class="{'light-mode-text-2': !isDarkMode, 'dark-mode-text-2': isDarkMode, 'border-white': true}" />
            </span>
          </div>
        </div>
      </template>
    </Carousel>

    <!-- Third Carousel -->
    <Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px" contentClass="flex items-center" style="margin-top: -27.8%; margin-left: 22%;">
      <template #item="slotProps">
        <div :class="['third-carousel', 'rounded-md', 'm-2', 'p-3', 'font-poppins', 'shadow-xl', {'light-mode-background-3': !isDarkMode, 'dark-mode-background-3': isDarkMode}]">
          <div class="mb-3">
            <div class="relative mx-auto max-w-xs max-h-50">
              <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-60 h-48 object-contain rounded-md" />
              <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:0px; top: 5px"/>
            </div>
          </div>
          <div :class="['mb-4', 'font-bold', 'text-xs', {'light-mode-text-3': !isDarkMode, 'dark-mode-text-3': isDarkMode}]">{{ slotProps.data.name }}</div>
          <div class="flex justify-between items-center">
            <div :class="['mt-0', 'font-bold', {'light-mode-text-3': !isDarkMode, 'dark-mode-text-3': isDarkMode}]">${{ slotProps.data.price }}</div>
            <span>
              <Button icon="pi pi-heart" severity="secondary" outlined :class="{'light-mode-text-3': !isDarkMode, 'dark-mode-text-3': isDarkMode, 'border-black': true}" />
              <Button icon="pi pi-shopping-cart" class="ml-2" :class="{'light-mode-text-3': !isDarkMode, 'dark-mode-text-3': isDarkMode, 'border-white': true}" />
            </span>
          </div>
        </div>
      </template>
    </Carousel>

    <!-- Fourth Carousel -->
    <Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px" contentClass="flex items-center" style="margin-top: -27.8%; margin-left: 63%;">
      <template #item="slotProps">
        <div :class="['fourth-carousel', 'rounded-md', 'm-2', 'p-3', 'font-poppins', 'shadow-xl', {'light-mode-background-4': !isDarkMode, 'dark-mode-background-4': isDarkMode}]">
          <div class="mb-3">
            <div class="relative mx-auto max-w-xs max-h-50">
              <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-60 h-48 object-contain rounded-md" />
              <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:0px; top: 5px"/>
            </div>
          </div>
          <div :class="['mb-4', 'font-bold', 'text-xs', {'light-mode-text-4': !isDarkMode, 'dark-mode-text-4': isDarkMode}]">{{ slotProps.data.name }}</div>
          <div class="flex justify-between items-center">
            <div :class="['mt-0', 'font-bold', {'light-mode-text-4': !isDarkMode, 'dark-mode-text-4': isDarkMode}]">${{ slotProps.data.price }}</div>
            <span>
              <Button icon="pi pi-heart" severity="secondary" outlined :class="{'light-mode-text-4': !isDarkMode, 'dark-mode-text-4': isDarkMode, 'border-black': true}" />
              <Button icon="pi pi-shopping-cart" class="ml-2" :class="{'light-mode-text-4': !isDarkMode, 'dark-mode-text-4': isDarkMode, 'border-white': true}" />
            </span>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script>
export default {
  name: 'ProductCarousel',
  data() {
    return {
      isDarkMode: false
    };
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    getSeverity(status) {
      switch (status) {
        case 'AVAILABLE!':
          return 'success';
        case 'LOWSTOCK':
          return 'warning';
        case 'OUTOFSTOCK':
          return 'danger';
        default:
          return null;
      }
    }
  }
};
</script>

<style scoped>
/* Light mode styles */
.light-mode-background-1 {
  background-image: linear-gradient(to right, #eff6ff, #C3DDFD);
}

.light-mode-background-2 {
  background-image: linear-gradient(to right, #f0f9ff, #bae6fd);
}

.light-mode-background-3 {
  background-image: linear-gradient(to right, #ecfeff, #a5f3fc);
}

.light-mode-background-4 {
  background-image: linear-gradient(to right, #f0fdfa, #99f6e4);
}
.light-mode-text-1 {
  color: #1e40af;
}

.light-mode-text-2 {
  color: #075985;
}

.light-mode-text-3 {
  color: #155e75;
}

.light-mode-text-4 {
  color: #115e59;
}

/* Dark mode styles */
.dark-mode-background-1 {
  background-image: linear-gradient(to right, #1f2937, #1f2937);
}

.dark-mode-background-2 {
  background-image: linear-gradient(to right, #1f2937, #1f2937);
}

.dark-mode-background-3 {
  background-image: linear-gradient(to right, #1f2937, #1f2937);
}

.dark-mode-background-4 {
  background-image: linear-gradient(to right, #1f2937, #1f2937);
}

.dark-mode-text-1 {
  color: #bfdbfe;
}

.dark-mode-text-2 {
  color: #bae6fd;
}

.dark-mode-text-3 {
  color: #a5f3fc;
}

.dark-mode-text-4 {
  color: #99f6e4;
}

.first-carousel,
.second-carousel,
.third-carousel,
.fourth-carousel {
  transition: transform 0.3s;
}

.first-carousel:hover,
.second-carousel:hover,
.third-carousel:hover,
.fourth-carousel:hover {
  transform: scale(1.1);
}

.absolute {
  position: absolute;
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.dark {
  background-color: #091224;
  color: #ffffff;
}
</style>
