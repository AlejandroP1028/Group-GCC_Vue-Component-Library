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
                <a href="#" :class="hoverClasses">{{ item }}</a>
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
              <svg :class="iconClasses" aria-hidden="true" :viewBox="icon.viewBox" fill="currentColor">
                <path :d="icon.path" :fill-rule="icon.fillRule" :clip-rule="icon.clipRule"></path>
              </svg>
              <span class="sr-only">{{ icon.label }}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>

    <footer :class="footerClasses">
    <span :class="spanClass">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
        <ul :class="ulClasses">
          <li v-for="(item, index) in footerLinks" :key="index" :class="liClasses">
            <a :href="item.url" :class="hoverClasses">{{ item.label }}</a>
          </li>
        </ul>
  </footer>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterComponent",
  data() {
    return {
      footerType: 'default',
      
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
      socialLinkClasses: 'text-blue-800 hover:text-white dark:text-white dark:hover:text-blue-800 ms-5',
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
      
      // SVG Icons for Social Footer
      socialIcons: [
        {
          label: 'Facebook',
          ariaHidden: 'true',
          viewBox: '0 0 24 24',
          path: 'M22.675 0h-21.35C1.2 0 0 1.2 0 2.675v18.65C0 22.8 1.2 24 2.675 24h9.569v-9.294H9.256V10.41h3.008V7.981c0-3.007 1.792-4.681 4.536-4.681 1.312 0 2.686.235 2.686.235v2.953h-1.512c-1.491 0-1.95.926-1.95 1.874v2.048h3.367l-.538 3.296h-2.829V24h5.547C22.8 24 24 22.8 24 21.325v-18.65C24 1.2 22.8 0 22.675 0z',
          fillRule: 'evenodd',
          clipRule: 'evenodd'
        },
        {
          label: 'Instagram',
          ariaHidden: 'true',
          viewBox: '0 0 24 24',
          path: 'M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.314 3.608 1.29.975.975 1.227 2.242 1.29 3.608.058 1.267.069 1.647.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.314 2.633-1.29 3.608-.975.975-2.242 1.227-3.608 1.29-1.267.058-1.647.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.314-3.608-1.29-.975-.975-1.227-2.242-1.29-3.608-.058-1.267-.069-1.647-.069-4.85s.012-3.584.07-4.85c.062-1.366.314-2.633 1.29-3.608.975-.975 2.242-1.227 3.608-1.29 1.267-.058 1.647-.069 4.85-.069zM12 0C8.741 0 8.332.012 7.052.072 5.773.131 4.429.399 3.27 1.558 2.112 2.716 1.844 4.06 1.785 5.34.725 6.62.714 6.742.714 12s.012 5.38.072 6.658c.059 1.279.327 2.624 1.486 3.783 1.158 1.158 2.503 1.426 3.783 1.485 1.279.06 1.688.072 4.947.072s3.668-.012 4.947-.072c1.279-.059 2.624-.327 3.783-1.486 1.158-1.158 1.426-2.503 1.485-3.783.06-1.279.072-1.688.072-4.947s-.012-3.668-.072-4.947c-.059-1.279-.327-2.624-1.486-3.783-1.158-1.158-2.503-1.426-3.783-1.485C15.668.012 15.259 0 12 0z',
          fillRule: 'evenodd',
          clipRule: 'evenodd'
        },
        {
          label: 'Twitter',
          ariaHidden: 'true',
          viewBox: '0 0 24 24',
          path: 'M24 4.557a9.825 9.825 0 0 1-2.827.775 4.939 4.939 0 0 0 2.165-2.724 9.84 9.84 0 0 1-3.127 1.195A4.928 4.928 0 0 0 16.616 3c-2.73 0-4.94 2.214-4.94 4.942 0 .387.043.762.127 1.124C7.728 8.83 4.1 6.855 1.671 3.958a4.932 4.932 0 0 0-.669 2.482c0 1.71.869 3.214 2.19 4.1a4.919 4.919 0 0 1-2.24-.617v.062c0 2.388 1.698 4.384 3.946 4.835a4.939 4.939 0 0 1-2.23.084c.63 1.964 2.45 3.393 4.604 3.433A9.885 9.885 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.213c9.057 0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.015-.637A10.012 10.012 0 0 0 24 4.557z',
          fillRule: 'evenodd',
          clipRule: 'evenodd'
        }
      ],

      // Sitemap Linked Footer Classes
      containerClasses: 'w-full max-w-screen-xl mx-auto p-4 py-6 lg:py-8',
      sitemapGridClasses: 'md:flex md:justify-between',
      sectionTitleClasses: 'mb-6 text-sm font-semibold text-blue-800 uppercase dark:text-white',
      sitemapUlClasses: 'text-blue-800 dark:text-white font-medium',
      footerBottomClasses: 'sm:flex sm:items-center sm:justify-between mt-6 pt-6 border-t border-blue-800 dark:border-white',
      footerTextClasses: 'text-sm text-blue-800 sm:text-center dark:text-white',
      socialLinksClasses: 'flex mt-4 space-x-6 sm:justify-center sm:mt-0',
      iconClasses: 'w-5 h-5 text-blue-800 hover:text-white dark:text-white dark:hover:text-blue-800',

      // Sitemap Sections and Links
      sections: [
        { title: 'Company', items: ['About', 'Careers', 'Brand Center', 'Blog'] },
        { title: 'Help center', items: ['Discord Server', 'Twitter', 'Facebook', 'Contact Us'] },
        { title: 'Legal', items: ['Privacy Policy', 'Licensing', 'Terms & Conditions'] }
      ]
    };
  }
});
</script>

<style scoped>

</style>
