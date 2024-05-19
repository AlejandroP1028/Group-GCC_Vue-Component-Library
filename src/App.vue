<template>
  <div id="app">
    <ProductCarousel :products="products" />
    <ProgressBars/>
  </div>
</template>

<script>
import ProductCarousel from './components/ProductCarousel.vue';
import ProgressBars from './components/ProgressBars.vue';

export default {
  name: 'App',
  components: {
    ProductCarousel,  
    ProgressBars
  },
  data() {
    return {
      products: [
        { name: 'Blueberry Cheesecake', image: 'https://www.bluezones.com/wp-content/uploads/2016/10/Mini-Blueberry-Cheesecakes-e1511160203205.jpg', inventoryStatus: 'AVAILABLE', price: 100 },
        { name: 'Chocolate Mousse', image: 'https://www.bluezones.com/wp-content/uploads/2018/03/chocolate-mousse.jpg', inventoryStatus: 'LOWSTOCK', price: 50 },
        { name: 'Black Bean Brownies', image: 'https://www.bluezones.com/wp-content/uploads/2016/10/The-Balanced-Blonde_Chocolate-Chunk-Black-Bean-Brownies.jpg', inventoryStatus: 'OUTOFSTOCK', price: 70 },
      ]
    };
  }
};
</script>

<style>
@import './assets/tailwind.css';
</style>
