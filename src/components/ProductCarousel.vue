<template>
  <div>
    <!-- First Carousel -->
    <Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px" contentClass="flex items-center justify-start" style="margin-top: 50px; margin-left: -59%;">
        <template #item="slotProps">
          <div class="first-carousel rounded-md m-2 p-3 font-poppins shadow-xl" style="background-image: linear-gradient(to right, #dbeafe, #C3DDFD);">
            <div class="mb-3">
              <div class="relative mx-auto max-w-xs max-h-50">
                <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-60 h-48 object-contain " />
                <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:0px; top: 5px"/>
              </div>
            </div>
            <div class="mb-4 font-bold text-blue-900 text-xs">{{ slotProps.data.name }}</div>
            <div class="flex justify-between items-center">
              <div class="mt-0 font-bold text-blue-900">${{ slotProps.data.price }}</div>
              <span>
                <Button icon="pi pi-heart" severity="secondary" outlined class="text-blue-500 border-white" />
                <Button icon="pi pi-shopping-cart" class="ml-2 text-blue-900 border-white"/>
              </span>
            </div>
          </div>
        </template>
      </Carousel>

    <!-- Second Carousel -->
      <Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px" contentClass="flex items-center" style="margin-top: -27.8%; margin-left: -19%;">
        <template #item="slotProps">
          <div class="second-carousel rounded-md m-2 p-3 font-poppins shadow-xl" style="background-image: linear-gradient(to right, #e0f2fe, #75A5F5);">
            <div class="mb-3">
              <div class="relative mx-auto max-w-xs max-h-50">
                <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-60 h-48 object-contain rounded-md" />
                <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:0px; top: 5px"/>
              </div>
            </div>
            <div class="mb-4 font-bold text-sky-900 text-xs">{{ slotProps.data.name }}</div>
            <div class="flex justify-between items-center">
              <div class="mt-0 font-bold text-sky-900">${{ slotProps.data.price }}</div>
              <span>
                <Button icon="pi pi-heart" severity="secondary" outlined class="text-sky-700" />
                <Button icon="pi pi-shopping-cart" class="ml-2 text-sky-900 border-white"/>
              </span>
            </div>
          </div>
        </template>
      </Carousel>


      <!-- Third Carousel -->
      <Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px" contentClass="flex items-center" style="margin-top: -27.8%; margin-left: 22%;">
        <template #item="slotProps">
          <div class="third-carousel rounded-md m-2 p-3 font-poppins shadow-xl" style="background-image: linear-gradient(to right, #ecfeff, #99f6e4);">
            <div class="mb-3">
              <div class="relative mx-auto max-w-xs max-h-50">
                <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-60 h-48 object-contain rounded-md" />
                <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:0px; top: 5px"/>
              </div>
            </div>
            <div class="mb-4 font-bold text-cyan-900 text-xs">{{ slotProps.data.name }}</div>
            <div class="flex justify-between items-center">
              <div class="mt-0 font-bold text-cyan-900">${{ slotProps.data.price }}</div>
              <span>
                <Button icon="pi pi-heart" severity="secondary" outlined class="text-blue-500 border-black" />
                <Button icon="pi pi-shopping-cart" class="ml-2 text-cyan-900 border-white"/>
              </span>
            </div>
          </div>
        </template>
      </Carousel>


     <!-- Fourth Carousel -->
      <Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px" contentClass="flex items-center" style="margin-top: -27.8%; margin-left: 63%;">
        <template #item="slotProps">
          <div class="fourth-carousel rounded-md m-2 p-3 font-poppins shadow-xl" style="background-image: linear-gradient(to right, #f0fdfa, #a5f3fc);">
            <div class="mb-3">
              <div class="relative mx-auto max-w-xs max-h-50">
                <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-60 h-48 object-contain rounded-md" />
                <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:0px; top: 5px"/>
              </div>
            </div>
            <div class="mb-4 font-bold text-teal-900 text-xs">{{ slotProps.data.name }}</div>
            <div class="flex justify-between items-center">
              <div class="mt-0 font-bold text-teal-900">${{ slotProps.data.price }}</div>
              <span>
                <Button icon="pi pi-heart" severity="secondary" outlined class="text-blue-500 border-black" />
                <Button icon="pi pi-shopping-cart" class="ml-2 text-teal-900 border-white"/>
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
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
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


</style>
