<template>
  <div class="carousel-wrapper">
    <Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px" contentClass="flex items-center">
      <template #item="slotProps">
        <div class="bg-[#272f68] border border-surface-200 dark:border-surface-700 rounded-md m-2 p-3 font-poppins">
          <div class="mb-3">
            <div class="relative mx-auto max-w-xs max-h-50">
              <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-60 h-48 object-contain rounded-md" />
              <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:0px; top: 5px"/>
            </div>
          </div>
          <div class="mb-3 font-bold text-white">{{ slotProps.data.name }}</div>
          <div class="flex justify-between items-center">
            <div class="mt-0 font-semibold text-xl text-white">${{ slotProps.data.price }}</div>
            <span>
              <Button icon="pi pi-heart" severity="secondary" outlined class="text-white border-white" />
              <Button icon="pi pi-shopping-cart" class="ml-2 text-white border-white"/>
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
.carousel-wrapper {
  width: 20%;
  border-radius: 50px;
  margin-top: 100px;
  background-color: aliceblue;
  margin-left: 100px;
  box-shadow: 0 15px 21px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s; 
}

.carousel-wrapper:hover {
  transform: scale(1.1); 
}

.absolute {
  position: absolute;
}
</style>
