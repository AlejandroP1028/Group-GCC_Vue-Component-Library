<template>
  <footer :class="footerClass">
    <div :class="divClass">
      <span :class="spanClass">
        © 2024 <a href="link" class="hover:underline">GCC™</a>. All Rights Reserved.
      </span>
      <ul :class="ulClass">
        <li v-for="(item, index) in listItems" :key="index">
          <a :href="item.href" class="hover:underline" :class="{'me-4 md:me-6': index < listItems.length - 1}">
            {{ item.text }}
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  props: {
    footerClass: {
      type: String,
      default: 'bg-blue-200 rounded-lg shadow m-4 dark:bg-blue-600'
    },
    divClass: {
      type: String,
      default: 'w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'
    },
    spanClass: {
      type: String,
      default: 'text-sm text-blue-800 sm:text-center dark:text-white'
    },
    ulClass: {
      type: String,
      default: 'flex flex-wrap items-center mt-3 text-sm font-medium text-blue-800 dark:text-white sm:mt-0'
    },
    listItems: {
      type: Array,
      default: () => [
        { href: '#', text: 'About' },
        { href: '#', text: 'Privacy Policy' },
        { href: '#', text: 'Licensing' },
        { href: '#', text: 'Contact' }
      ]
    }
  }
};
</script>

<style scoped>

</style>
