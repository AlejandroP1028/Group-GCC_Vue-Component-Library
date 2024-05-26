<template>
  <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900 flex flex-row scroll-smooth">
    <div class="relative w-auto mb-16">
      <PageHeader 
        :class="'flex-none'"
        @sectioncreated="addLink"
        header="GCC Alert" 
        body="Show contextual information to your users using alert elements based on Tailwind CSS"/>
      
      <Section body="The GCC alert component can be used to provide information to your users such as success or error messages, but also highlighted information complementing the normal flow of paragraphs and headers on a page."/>

      <Section header="Alert Dismiss Type" 
        @sectioncreated="addLink"
        body="The GCC alert component supports manual and automatic dismissals. Use the following button to show random alert components with their respective dismissal type.">
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div class="flex flex-row space-x-4">
              <Button color="sky" :class="'w-9/10'" @click="addAlert('auto')">Add Random Auto Alert</Button>
              <Button color="cyan" :class="'w-9/10'" @click="addAlert('manual')">Add Random Manual Alert</Button>
            </div>
            
            <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-3/5 h-80 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">
              <Alert v-for="(alert, index) in alerts" 
                     :key="index"
                     :msg="alert.msg"
                     :type="alert.type"
                     :position="alert.position"
                     :rounded="alert.rounded"
                     :accent="alert.accent"
                     :size="alert.size"
                     :icon="alert.icon"
                     :bordered="alert.bordered"
                     :font="alert.font"
                     :dismissType="alert.dismissType"/>
            </div>
          </div>
        </template>
      </Section>

      <Section @sectioncreated="addLink" header="Alert Types" body="There are 4 supported types in the GCC alert component. Info to show users important information, Danger to show whenever something bad happens, Warning which warns the user, and Success to show a successful task or input.">
        <template #content>
          <div class="flex flex-col items-center my-4 h-full">
            <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-3/5 h-80 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">
              <div class="pointer-events-none mb-24">
                <Alert v-for="(alert, index) in alertsType" 
                       :key="index"
                       :msg="alert.msg"
                       :type="alert.type"
                       :position="alert.position"
                       :dismissType="'manual'"
                       :accent="true"/>
              </div>
            </div>
          </div>
        </template>
      </Section>

      <Section @sectioncreated="addLink" header="Alert Message" body="Users can use the msg prop to change the text of the GCC alert component.">
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div class="flex flex-row space-x-4">
              <input v-model="customAlertMessage" class="border rounded-lg border-gray-800 bg-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 shadow-lg p-2" type="text" id="alertMessage">
              <Button color="cyan" :class="'w-9/10'" @click="addAlertWithMessage">Show Alert</Button>
            </div>
            
            <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-3/5 h-80 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">
              <Alert v-for="(alert, index) in alertsMessage" 
                     :key="index"
                     :msg="alert.msg"
                     :type="alert.type"
                     :position="alert.position"
                     :rounded="alert.rounded"
                     :accent="alert.accent"
                     :size="alert.size"
                     :icon="alert.icon"
                     :bordered="alert.bordered"
                     :font="alert.font"
                     :dismissType="alert.dismissType"/>
            </div>
          </div>
        </template>
      </Section>

      <Section @sectioncreated="addLink" header="Alert Positions" 
        body="There are 12 supported positions in the GCC alert component. These are divided into two, the Parent and Absolute positions. The parent positions are: ptl, ptr, pll, ptc, plc and plr. The absolute positions are: tl, tr, tc, ll, lc and lr. The parent positions are based on the parent while the absolute positions are based on the viewport. The following buttons will demonstrate where they are positioned:">
        <template #content>
          <div class="flex flex-col items-center my-4 h-full">
            <div class="flex flex-row space-x-4">
              <Button color="sky" :class="'w-9/10'" @click="addAlertPositions('absolute')">Show Absolute Positions</Button>
              <Button color="cyan" :class="'w-9/10'" @click="addAlertPositions('parent')">Show Parent Positions</Button>
            </div>
            <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-3/5 h-80 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">
              <div class="pointer-events-none mb-24">
                <Alert v-for="(alert, index) in alertsPositionsA" 
                       :key="index"
                       :msg="`This is ${alert.position} position`"
                       :type="'info'"
                       :position="alert.position"/>
                <Alert v-for="(alert, index) in alertsPositionsP" 
                       :key="index"
                       :msg="`This is ${alert.position} position`"
                       :type="'info'"
                       :position="alert.position"/>
              </div>
              
            </div>
          </div>
        </template>
      </Section>

      <Section @sectioncreated="addLink" header="Alert Classes" body="Users can toggle the icon, border class, accent class and the border-radius class of our GCC alert component by explicitly setting the respective the prop to true.">
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div class="flex flex-row space-x-4">
              <div class="flex flex-col space-y-2">
                <Toggle label="Icon" type="blue" :changeFunc="toggleI"></Toggle>
                <Toggle label="Bordered" type="sky" :changeFunc="toggleB"></Toggle>
              </div>
              <div class="flex flex-col space-y-2">
                <Toggle label="Accent" type="cyan" :changeFunc="toggleA"></Toggle>
                <Toggle label="Rounded" type="teal" :changeFunc="toggleR"></Toggle>
              </div>
              <Button color="blue" :class="'w-9/10'" @click="addAlertIBA">Show Alert</Button>
            </div>
            
            <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-3/5 h-80 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">
              <Alert v-for="(alert, index) in alertIBA" 
                     :key="index"
                     :msg="alert.msg"
                     :type="alert.type"
                     :position="alert.position"
                     :rounded="alert.rounded"
                     :accent="alert.accent"
                     :size="alert.size"
                     :icon="alert.icon"
                     :bordered="alert.bordered"
                     :font="alert.font"
                     :dismissType="alert.dismissType"/>
            </div>
          </div>
        </template>
      </Section>

      <br>
    </div>
    <div class="sticky top-8 w-2/12 transition-all duration-300 ease-in-out flex flex-col space-y-4 overflow-hidden mr-8">
      <hr class="h-0.5 bg-blue-600 border-none rounded-full">
      <span class="tracking-tight font-semibold text-md text-gray-800 dark:text-gray-200">ON THIS PAGE</span>
      <PageLinks v-for="link in links" 
        :key="link.label"
        :label="link.label"/>
      <div class="flex justify-center">
        <Button color="blue" :class="`m-4 bottom-4 right-4 z-50`" size="small" @click="toggleDarkMode"> {{ isDarkMode ? 'Light' : 'Dark' }}</Button>
      </div>
      <hr class="h-0.5 bg-blue-600 border-none rounded-full">
    </div>
  </div>  
</template>

<script>
import Button from './components/Button.vue';
import Section from './components/Section.vue';
import PageHeader from './components/pageHeader.vue';
import Alert from './components/Alert.vue';
import PageLinks from './components/pageLinks.vue'; 
import Toggle from './components/ToggleComponent.vue';

export default {
  name: 'App',
  components: {
    Button,
    Section,
    PageHeader,
    Alert,
    PageLinks,
     Toggle  
  },
  data() {
    return {
      alerts: [],
      alertsMessage: [],
      alertsPositionsA: [],
      alertsPositionsP: [],
      alertIBA: [],
      icon: false,
      accent: false,
      bordered: false,
      rounded: false,
      links: [],
      alertsType: [
        {
          position: 'ptr',
          type: 'info',
          msg: 'Info'
        },
        {
          position: 'ptl',
          type: 'danger',
          msg: 'Danger'
        },
        {
          position: 'pll',
          type: 'warning',
          msg: 'Warning'
        },
        {
          position: 'plr',
          type: 'success',
          msg: 'Success'
        },
      ],
      isDarkMode: false,
      defaultDark: false,
      customAlertMessage: '',
    };
  },
  methods: {
    toggleI(){
      this.icon = !this.icon
    },
    toggleA(){
      this.accent = !this.accent
    },
    toggleB(){
      this.bordered = !this.bordered
    },
    toggleR(){
      this.rounded = !this.rounded
    },
    addLink(header) {
      this.links.push({ label: header });
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    addAlertIBA(){
      let alert = this.getRandomAlertProps('auto')
      alert.accent = this.accent
      alert.bordered = this.bordered
      alert.icon = this.icon
      alert.rounded = this.rounded
      this.alertIBA.push(alert)
    },
    getRandomAlertProps(dismissType) {
      const positions = ['ptl', 'ptr', 'pll', 'plr'];
      const types = ['info', 'danger', 'success', 'warning'];
      const sizes = ['w', 's', 'm', 'l'];
      const fonts = ['medium', 'bold', 'semibold', 'light', 'normal'];

      return {
        msg: {
          info: 'This is an info alert',
          danger: 'This is a danger alert',
          success: 'This is a success alert',
          warning: 'This is a warning alert',
        }[types[Math.floor(Math.random() * types.length)]],
        type: types[Math.floor(Math.random() * types.length)],
        position: positions[Math.floor(Math.random() * positions.length)],
        size: sizes[Math.floor(Math.random() * sizes.length)],
        font: fonts[Math.floor(Math.random() * fonts.length)],
        rounded: Math.random() > 0.5,
        accent: Math.random() > 0.5,
        icon: Math.random() > 0.5,
        bordered: Math.random() > 0.5,
        dismissType,
      };
    },
    addAlert(dismissType) {
      this.alerts.push(this.getRandomAlertProps(dismissType));
    },
    addAlertWithMessage() {
      const alertProps = this.getRandomAlertProps('auto');
      alertProps.msg = this.customAlertMessage || 'Default message';
      this.alertsMessage.push(alertProps);
    },
    addAlertPositions(type) {
      const positions = type === 'absolute' 
        ? ['tl', 'tr', 'll', 'lr', 'lc', 'tc'] 
        : ['ptl', 'ptr', 'pll', 'plr', 'plc', 'ptc'];

      for (let p of positions) {
        if (type === 'absolute') {
          this.alertsPositionsA.push({ position: p });
        } else {
          this.alertsPositionsP.push({ position: p });
        }
      }
    },
  },
};
</script>
