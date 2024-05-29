<template>
  <div>
    <!-- Default Footer -->
    <footer :class="footerDefaultClasses">
      <div :class="divDefaultClass">
        <span :class="spanDefaultClasses">
          © 2024 <a href="link" :class="defaultHoverClasses">GCC™</a>. All Rights Reserved.
        </span>
        <ul :class="ulDefaultClasses">
          <li v-for="(item, index) in footerDefaultLinks" :key="index" :class="liDefaultClasses">
            <a :href="item.url" :class="defaultHoverClasses">{{ item.label }}</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerDefaultClasses: 'bg-blue-200 rounded-lg shadow m-4 dark:bg-blue-600',
      divDefaultClass: 'w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between',
      spanDefaultClasses: 'text-sm text-blue-800 sm:text-center dark:text-white',
      ulDefaultClasses: 'flex flex-wrap items-center mt-3 text-sm font-medium text-blue-800 dark:text-white sm:mt-0',
      liDefaultClasses: 'me-4 md:me-6',
      defaultHoverClasses: 'hover:underline',
      footerDefaultLinks: [
        { label: 'About', url: '#' },
        { label: 'Privacy Policy', url: '#' },
        { label: 'Licensing', url: '#' },
        { label: 'Contact', url: '#' }
      ]
    };
  }
};
</script>

<style scoped>

</style>
