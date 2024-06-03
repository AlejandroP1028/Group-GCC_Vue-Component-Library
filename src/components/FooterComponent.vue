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
          <img src="../assets/images/GCC_LOGO.png" :class="imgFooterLogoClass" alt="GCC Logo" />
          <span :class="spanFooterLogoClass">GCC™</span>
        </a>
        <ul :class="ulClasses">
          <li v-for="(item, index) in footerLinks" :key="index" :class="liClasses">
            <a :href="item.url" :class="hoverClasses">{{ item.label }}</a>
          </li>
        </ul>
        <hr :class="hrFooterLogoClasses" />
        <span :class="spanFooterLogoTextClasses">
          © 2024 <a href="link" :class="hoverClasses">GCC™</a>. All Rights Reserved.
        </span>
      </div>
    </footer>

    <!-- Social Footer -->
    <footer :class="footerClasses">
      <div :class="divSocialFooterClass">
        <div :class="socialDivClass">
          <div class="mb-6 md:mb-0">
            <a href="link" class="flex items-center">
              <img src="../assets/images/GCC_LOGO.png" :class="imgSocialFooterClass" alt="GCC Logo" />
              <span :class="spanSocialFooterClass">GCC™</span>
            </a>
          </div>
          <div :class="gridSocialFooterClass">
            <div>
              <h2 :class="h2SocialFooterClass">Resources</h2>
              <ul :class="ulSocialFooterClass">
                <li v-for="(item, index) in resourcesLinks" :key="index" :class="liSocialFooterClass">
                  <a :href="item.url" :class="hoverClasses">{{ item.label }}</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 :class="h2SocialFooterClass">Follow us</h2>
              <ul :class="ulSocialFooterClass">
                <li v-for="(item, index) in followUsLinks" :key="index" :class="liSocialFooterClass">
                  <a :href="item.url" :class="hoverClasses">{{ item.label }}</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 :class="h2SocialFooterClass">Legal</h2>
              <ul :class="ulSocialFooterClass">
                <li v-for="(item, index) in legalLinks" :key="index" :class="liSocialFooterClass">
                  <a :href="item.url" :class="hoverClasses">{{ item.label }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr :class="hrSocialFooterClasses" />
        <div :class="smDivSocialFooterClass">
          <span :class="spanSocialFooterTextClasses">
            © 2024 <a href="link" :class="hoverClasses">GCC™</a>. All Rights Reserved.
          </span>
          <div :class="flexSocialFooterClass">
            <a href="#" :class="socialLinkClasses" v-for="(icon, index) in socialIcons" :key="index">
              <svg :class="svgSocialFooterClass" :aria-hidden="icon.ariaHidden" xmlns="http://www.w3.org/2000/svg" fill="currentColor" :viewBox="icon.viewBox">
                <path :d="icon.path" :fill-rule="icon.fillRule" :clip-rule="icon.clipRule"></path>
              </svg>
              <span class="sr-only">{{ icon.label }}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Sitemap Linked Footer -->
    <footer :class="footerClasses">
      <div :class="containerClasses">
        <div :class="sitemapGridClasses">
          <div v-for="(section, index) in sections" :key="index">
            <h2 :class="sectionTitleClasses">{{ section.title }}</h2>
            <ul :class="sitemapUlClasses">
              <li v-for="(item, index) in section.items" :key="index" :class="liClasses">
                <a href="#" :class="linkClasses">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div :class="footerBottomClasses">
          <span :class="footerTextClasses">
            © 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
          </span>
          <div :class="socialLinksClasses">
            <a v-for="(icon, index) in socialIcons" :key="index" href="#" :class="socialLinkClasses">
              <component :is="icon.component" :class="iconClasses" aria-hidden="true" />
              <span class="sr-only">{{ icon.label }}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SiteFooter",
  data() {
    return {
      footerType: 'default', // Change this value to 'logo', 'social', or 'sitemap' to display different footers
      
      // Footer Similarities
      footerClasses: 'bg-blue-200 rounded-lg shadow m-4 dark:bg-blue-600',
      ulClasses: 'flex flex-wrap items-center float-right mt-3 text-sm font-medium text-blue-800 dark:text-white sm:mt-0',
      liClasses: 'me-4 md:me-6',
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

      // Social Footer Classes
      divSocialFooterClass: 'mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8',
      socialDivClass: 'md:flex md:justify-between',
      imgSocialFooterClass: 'h-8 me-3',
      spanSocialFooterClass: 'self-center text-2xl font-semibold whitespace-nowrap text-blue-800 dark:text-white',
      gridSocialFooterClass: 'grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3',
      h2SocialFooterClass: 'mb-6 text-sm font-semibold text-blue-800 uppercase dark:text-white',
      ulSocialFooterClass: 'text-blue-800 dark:text-white font-medium',
      liSocialFooterClass: 'mb-4',
      hrSocialFooterClasses: 'my-6 border-blue-800 sm:mx-auto dark:border-white lg:my-8',
      smDivSocialFooterClass: 'sm:flex sm:items-center sm:justify-between',
      spanSocialFooterTextClasses: 'text-sm text-blue-800 sm:text-center dark:text-white',
      flexSocialFooterClass: 'flex mt-4 sm:justify-center sm:mt-0',
      socialLinkClasses: 'text-blue-800 hover:text-blue-800 dark:text-white dark:hover:text-blue-200 ms-5',
      svgSocialFooterClass: 'w-4 h-4',

      // Links for Social Footer
      resourcesLinks: [
        { label: 'Flowbite', url: '#' },
        { label: 'Tailwind CSS', url: '#' }
      ],
      followUsLinks: [
        { label: 'Github', url: '#' },
        { label: 'Discord', url: '#' }
      ],
      legalLinks: [
        { label: 'Privacy Policy', url: '#' },
        { label: 'Terms & Conditions', url: '#' }
      ],

      // Icons for Social Footer
      socialIcons: [
        {
          ariaHidden: 'true',
          viewBox: '0 0 24 24',
          path: 'M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.9 1.55 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.99 1.02-2.69-.1-.25-.44-1.27.1-2.64 0 0 .83-.27 2.73 1.02A9.48 9.48 0 0112 6.8c.84.004 1.68.11 2.47.32 1.9-1.29 2.73-1.02 2.73-1.02.55 1.37.21 2.39.1 2.64.63.7 1.02 1.6 1.02 2.69 0 3.84-2.35 4.67-4.58 4.91.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .26.18.58.69.48A10.02 10.02 0 0022 12.04c0-5.52-4.48-10-10-10z',
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          label: 'GitHub'
        },
        {
          ariaHidden: 'true',
          viewBox: '0 0 24 24',
          path: 'M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.9 1.55 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.99 1.02-2.69-.1-.25-.44-1.27.1-2.64 0 0 .83-.27 2.73 1.02A9.48 9.48 0 0112 6.8c.84.004 1.68.11 2.47.32 1.9-1.29 2.73-1.02 2.73-1.02.55 1.37.21 2.39.1 2.64.63.7 1.02 1.6 1.02 2.69 0 3.84-2.35 4.67-4.58 4.91.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .26.18.58.69.48A10.02 10.02 0 0022 12.04c0-5.52-4.48-10-10-10z',
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          label: 'Twitter'
        }
      ],

      // Sitemap Linked Footer Classes
      containerClasses: 'w-full max-w-screen-xl p-4 mx-auto md:py-8',
      sitemapGridClasses: 'grid grid-cols-1 md:grid-cols-4 gap-8',
      sectionTitleClasses: 'mb-6 text-sm font-semibold text-blue-800 uppercase dark:text-white',
      sitemapUlClasses: 'space-y-4 text-blue-800 dark:text-white font-medium',
      linkClasses: 'hover:underline',
      footerBottomClasses: 'flex items-center justify-between pt-6 mt-6 border-t border-blue-800 dark:border-white',
      footerTextClasses: 'text-sm text-blue-800 dark:text-white',
      socialLinksClasses: 'flex space-x-6 sm:justify-center',
      iconClasses: 'w-5 h-5 text-blue-800 hover:text-blue-800 dark:text-white dark:hover:text-white',

      // Sections for Sitemap Linked Footer
      sections: [
        {
          title: 'Company',
          items: ['About', 'Careers', 'Brand Center', 'Blog']
        },
        {
          title: 'Help Center',
          items: ['Discord Server', 'Twitter', 'Facebook', 'Contact Us']
        },
        {
          title: 'Legal',
          items: ['Privacy Policy', 'Licensing', 'Terms & Conditions']
        },
        {
          title: 'Download',
          items: ['iOS', 'Android', 'Windows', 'MacOS']
        }
      ]
    };
  }
});
</script>

<style scoped>
.footerLogoClass {
  margin-top: 20px;
}
</style>
