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
          <img src="../assets/images/GCC_LOGO.png" :class="imgSocialFooterClass" alt="GCC Logo" />
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Footer Similarities
      footerClasses: 'bg-blue-200 rounded-lg shadow m-4 dark:bg-blue-600',
      ulClasses: 'flex flex-wrap items-center mt-3 text-sm font-medium text-blue-800 dark:text-white sm:mt-0',
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
        { label: 'Flowbite', url: 'https://flowbite.com/' },
        { label: 'Tailwind CSS', url: 'https://tailwindcss.com/' }
      ],
      followUsLinks: [
        { label: 'Github', url: 'https://github.com/themesberg/flowbite' },
        { label: 'Discord', url: 'https://discord.gg/4eeurUVvTy' }
      ],
      legalLinks: [
        { label: 'Privacy Policy', url: '#' },
        { label: 'Terms & Conditions', url: '#' }
      ],
      socialIcons: [
        {
          ariaHidden: 'true',
          viewBox: '0 0 8 19',
          path: 'M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z',
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          label: 'Facebook page'
        },
        {
          ariaHidden: 'true',
          viewBox: '0 0 21 16',
          path: 'M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-7.19 1.528A13.224 13.224 0 0 0 .856 6.444c-.842 1.443-.962 3.183-.335 4.742.329.777.797 1.493 1.367 2.096a15.83 15.83 0 0 0 5.193 3.53c1.917.752 4.004 1.132 6.056 1.11a11.748 11.748 0 0 0 4.12-.813 11.945 11.945 0 0 0 3.684-2.388c.24-.216.5-.462.575-.8-.22.062-.442.133-.665.171a13.6 13.6 0 0 1-3.18-.32 12.41 12.41 0 0 1-4.226-1.892 15.993 15.993 0 0 1-4.49-6.315 16.69 16.69 0 0 1-.847-2.792 12.528 12.528 0 0 1-.23-4.106 8.03 8.03 0 0 0 2.156-.53c.192.582.293 1.196.388 1.812.197 1.356.23 2.72.112 4.079-.06.693-.157 1.384-.335 2.06-.463 1.739-1.293 3.348-2.36 4.723-.223.294-.474.574-.725.849-.367-.268-.654-.614-.866-.994-1.065-1.924-1.678-4.2-2.177-6.448a15.167 15.167 0 0 1-.224-3.96c.018-.726.115-1.45.275-2.165a16.26 16.26 0 0 1 1.52-4.067 11.788 11.788 0 0 1 4.335-4.535c1.698-1.065 3.64-1.626 5.611-1.757.795-.053 1.591-.03 2.378.11a8.98 8.98 0 0 1 1.753.568c.76.34 1.47.774 2.112 1.315.558.452 1.074.951 1.534 1.485a9.122 9.122 0 0 1 2.197 3.722c.235.757.405 1.527.503 2.308.115.853.153 1.71.153 2.566v1.59a10.705 10.705 0 0 1-.112 2.09 9.69 9.69 0 0 1-.236 1.67c-.065.306-.15.603-.26.894-.213.565-.512 1.102-.885 1.59-.388.508-.848.963-1.37 1.353-1.003.724-2.177 1.278-3.42 1.633-1.24.354-2.531.506-3.825.487-1.517-.022-3.032-.196-4.524-.566a19.042 19.042 0 0 1-7.55-3.515c-1.185-.822-2.264-1.755-3.268-2.77-.952-.964-1.79-2.005-2.558-3.097a16.537 16.537 0 0 1-2.307-4.277A14.356 14.356 0 0 1 0 3.353c.022-.47.086-.94.19-1.402C.284 1.299.447.836.7.451c.31-.453.743-.82 1.276-1.052A3.456 3.456 0 0 1 3.61 0a10.706 10.706 0 0 1 1.98.184 10.607 10.607 0 0 1 4.33 1.816c.76.535 1.432 1.182 2.09 1.84.57.563 1.113 1.141 1.715 1.645.675.556 1.456.947 2.287 1.147.95.227 1.942.28 2.92.164a11.33 11.33 0 0 0 2.104-.44c.68-.217 1.344-.504 1.993-.856.355-.191.708-.393 1.064-.59Z',
          fillRule: '',
          clipRule: '',
          label: 'Twitter page'
        },
        {
          ariaHidden: 'true',
          viewBox: '0 0 24 24',
          path: 'M12 0C5.374 0 0 5.372 0 12c0 5.303 3.438 9.8 8.207 11.385-.112-.978-.212-2.483.046-3.548.23-.947 1.486-6.043 1.486-6.043s-.378-.75-.378-1.854c0-1.737 1.006-3.035 2.256-3.035 1.065 0 1.577.798 1.577 1.754 0 1.065-.68 2.656-.917 4.134-.262 1.543 1.34 2.801 3.09 2.801 3.712 0 6.49-3.916 6.49-9.014C24 5.38 18.625 0 12 0z',
          fillRule: '',
          clipRule: '',
          label: 'LinkedIn page'
        }
      ]
    };
  }
};
</script>

<style scoped>
.footerLogoClass {
  margin-top: 20px;
}
</style>
