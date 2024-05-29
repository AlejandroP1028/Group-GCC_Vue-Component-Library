<template>
  <div>
    <!-- Default Footer -->
    <footer :class="footerClasses">
      <div :class="divDefaultClass">
        <span :class="spanDefaultClasses">
          © 2024 <a href="link" :class="defaultHoverClasses">GCC™</a>. All Rights Reserved.
        </span>
        <ul :class="ulClasses">
          <li v-for="(item, index) in footerLinks" :key="index" :class="liClasses">
            <a :href="item.url" :class="hoverClasses">{{ item.label }}</a>
          </li>
        </ul>
      </div>
    </footer>

    <!-- Footer with Logo -->
    <footer :class="footerClasses">
      <div :class="divFooterLogoClass">
        <a href="link" :class="anchorFooterLogoClass">
          <img src="https://flowbite.com/docs/images/logo.svg" :class="imgFooterLogoClass" alt="Flowbite Logo" />
          <span :class="spanFooterLogoClass">GCC</span>
        </a>
        <ul :class="ulClasses">
          <li v-for="(item, index) in footerLinks" :key="index" :class="liClasses">
            <a :href="item.url" :class="hoverClasses">{{ item.label }}</a>
          </li>
        </ul>
        <hr :class="hrFooterLogoClasses" />
        <span :class="spanFooterLogoTextClasses">
          © 2023 <a href="link" :class="hoverClasses">GCC™</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {

      // Footer Similarities
      footerClasses: 'bg-blue-200 rounded-lg shadow m-4 dark:bg-blue-600',
      ulClasses: 'flex flex-wrap items-center mt-3 text-sm font-medium text-blue-800 dark:text-white sm:mt-0',
      liClasses: 'float-start me-4 md:me-6',
      hoverClasses: 'hover:underline',
      footerLinks: [
        { label: 'About', url: '#' },
        { label: 'Privacy Policy', url: '#' },
        { label: 'Licensing', url: '#' },
        { label: 'Contact', url: '#' }
      ],

      // Default Footer Classes
      divDefaultClass: 'w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between',
      spanDefaultClasses: 'text-sm text-blue-800 sm:text-center dark:text-white',
      

      // Footer with Logo Classes
      divFooterLogoClass: 'w-full max-w-screen-xl mx-auto p-4 md:py-8 footerLogoClass',
      anchorFooterLogoClass: 'flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse',
      imgFooterLogoClass: 'h-8',
      spanFooterLogoClass: 'self-center text-2xl font-semibold whitespace-nowrap text-blue-800 dark:text-white',
      hrFooterLogoClasses: 'my-6 border-blue-800 sm:mx-auto dark:border-white lg:my-8',
      spanFooterLogoTextClasses: 'block text-sm text-blue-800 sm:text-center dark:text-white',
    };
  }
};
</script>

<style scoped>
.footerLogoClass {
  margin-top: 20px; 
}
</style>
