<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-hidden w-screen dark:bg-gray-900">
    <button @click="toggleDarkMode" type="button" class="absolute bottom-1 right-1 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
    <div class="flex flex-col justify-center items-center h-full p-4 overflow-y-auto">
      <div class="mb-8 flex">
        <ItemList type="unorderedlist" layout="horizontal">
          <li><a href="#" class="hover:underline">About</a></li>
          <li><a href="#" class="hover:underline">Campaign</a></li>
          <li><a href="#" class="hover:underline">Blog</a></li>
          <li><a href="#" class="hover:underline">FAQs</a></li>
          <li><a href="#" class="hover:underline">Contact Us</a></li>
        </ItemList>
      </div>
      <div class="mb-8 flex">
        <ItemList :iconItems="['facebook','instagram','pinterest']" type="unorderedicon-horizontal" />
      </div>
      <div class="mb-8 flex">
        <ItemList type="unorderedicon-horizontal">
          <template #icons>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#1E40AF" width="24" height="24" viewBox="0 0 32 32">
              <path d="M30.996 16.091c-0.001-8.281-6.714-14.994-14.996-14.994s-14.996 6.714-14.996 14.996c0 7.455 5.44 13.639 12.566 14.8l0.086 0.012v-10.478h-3.808v-4.336h3.808v-3.302c-0.019-0.167-0.029-0.361-0.029-0.557 0-2.923 2.37-5.293 5.293-5.293 0.141 0 0.281 0.006 0.42 0.016l-0.018-0.001c1.199 0.017 2.359 0.123 3.491 0.312l-0.134-0.019v3.69h-1.892c-0.086-0.012-0.185-0.019-0.285-0.019-1.197 0-2.168 0.97-2.168 2.168 0 0.068 0.003 0.135 0.009 0.202l-0.001-0.009v2.812h4.159l-0.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814v-0z"/>
            </svg> <li><a href="https://facebook.com" class="hover:underline">facebook</a></li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#1E40AF" viewBox="0 0 24 24" width="24" height="24">
              <path fill="#1E40AF" fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path>
              <path fill="#1E40AF" d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"></path>
              <path fill="#1E40AF" fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"></path>
            </svg> <li><a href="https://instagram.com" class="hover:underline">instagram</a></li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#1E40AF" height="24" width="24" version="1.1" id="Layer_1" viewBox="-271 273 256 256" xml:space="preserve">
            <path d="M-143,273c-70.7,0-128,57.3-128,128c0,52.4,31.5,97.4,76.6,117.2c-0.4-8.9-0.1-19.7,2.2-29.4c2.5-10.4,16.5-69.7,16.5-69.7  s-4.1-8.2-4.1-20.2c0-19,11-33.1,24.7-33.1c11.6,0,17.3,8.7,17.3,19.2c0,11.7-7.5,29.2-11.3,45.4c-3.2,13.6,6.8,24.6,20.2,24.6  c24.3,0,40.6-31.1,40.6-68c0-28-18.9-49-53.3-49c-38.8,0-63,28.9-63,61.3c0,11.2,3.3,19,8.4,25.1c2.4,2.8,2.7,3.9,1.8,7.1  c-0.6,2.3-2,8-2.6,10.3c-0.9,3.2-3.5,4.4-6.4,3.2c-17.9-7.3-26.2-26.9-26.2-48.9c0-36.4,30.7-80,91.5-80c48.9,0,81,35.4,81,73.3  c0,50.2-27.9,87.7-69.1,87.7c-13.8,0-26.8-7.5-31.3-15.9c0,0-7.4,29.5-9,35.2c-2.7,9.9-8,19.7-12.9,27.4c11.5,3.4,23.7,5.3,36.3,5.3  c70.7,0,128-57.3,128-128C-15,330.3-72.3,273-143,273z"/>
          </svg> <li><a href="https://pinterest.com" class="hover:underline">pinterest</a></li>
          </template>
        </ItemList>
      </div>
      <div class="mb-8 flex">
        <ItemList :items="List" type="unorderedlist" layout="horizontal"/>
      </div>
      <div class="mb-8 flex">
        <ItemList :items="List" type="unorderedlist" layout="vertical" />
      </div>
      <div class="mb-8 flex">
        <ItemList type="unorderedlist" layout="vertical">
          <li><a href="#" class="me-4 hover:underline md:me-6">You</a></li>
          <li><a href="#" class="me-4 hover:underline md:me-6">And</a></li>
          <li><a href="#" class="me-4 hover:underline md:me-6">Me</a></li>
          <li><a href="#" class="me-4 hover:underline md:me-6">Wow</a></li>
        </ItemList>
      </div>
      <div class="mb-8 flex">
        <ItemList :items="List" type="orderedlist" layout="vertical" />
      </div>
      <div class="mb-8 flex">
        <ItemList type="orderedlist" layout="vertical">
          <li>about</li>
          <li>bhie</li>
          <li>lat</li>
          <li>ka</li>
          <li>ba</li>
        </ItemList>
      </div>
      <div class="mb-8 flex">
        <ItemList :items="descriptionList" type="descriptionlist" layout="vertical" />
      </div>
      <div class="mb-8 flex">
        <ItemList :items="List" type="unorderedicon"/>
      </div>
      <div class="mb-8 flex">
        <ItemList type="unorderedicon">
          <li>about</li>
          <li>bhie</li>
          <li>lat</li>
          <li>ka</li>
          <li>ba</li>
        </ItemList>
      </div>
    </div>
  </div>
</template>

<script>
import ItemList from './components/ItemList.vue';

export default {
  name: 'App',
  components: {
    ItemList,
  },
  data() {
    return {
      isDarkMode: false,
      List: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
      ],
      descriptionList: [
        { term: 'Name', description: 'Juan Cutie' },
        { term: 'Address', description: 'Metro Manila, Philippines' },
        { term: 'Phone number', description: '+639781238891' }
      ],
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  }
}
</script>

<style>
.dark {
  background-color: #091224;
  color: #ffffff;
}
</style>
