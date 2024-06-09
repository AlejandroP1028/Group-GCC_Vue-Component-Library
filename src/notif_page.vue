<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <div :class="{ 'dark': isDarkMode }" class="overflow-auto h-screen w-screen bg-blue-50 dark:bg-gray-900 flex flex-row scroll-smooth">
    <div class="relative w-auto mb-16">
      <PageHeader :class="'flex-none'" header="GCC Notification" body="Show contextual information to your users using notification elements based on Tailwind CSS"/>
      <Section body="The GCC notification component is a versatile tool for displaying various types of messages to users, including warnings, success, errors, default notifications, and general information. Each notification type is designed to stand out, ensuring that users receive important feedback clearly and promptly, thereby enhancing the overall user experience and communication on the webpage."/>
      <Section header="Default Notification" @sectioncreated="addLink" body="The GCC notification component features a default notification style that used to show messages and notifications without the use of a close button but seamlessly fades out for automatic dismissal.">
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div class="flex space-x-4">
              <Button color="blue" :class="'w-9/10'" @click="showNotification">Show Default Notification</Button>
            </div>
            <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">
              <Notifications type="default" notification_message="This is a default notification." position="centered"/>
              <Notifications v-for="(notification, index) in notifications" :key="index" :type="notification.type" :notification_message="notification.message" position="centered"/>
            </div>
          </div>
        </template>
      </Section>
      <Section header="Default Notification Style" @sectioncreated="addLink" body="The GCC notification component features a default notification with 5 different styles that seamlessly fades out for automatic dismissal.">
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div class="flex space-x-4">
              <Button color="blue" :class="'w-9/10'" @click="showNotificationDefault">Default</Button>
              <Button color="blue" :class="'w-9/10'" @click="showNotificationBlue">Blue</Button>
              <Button color="sky" :class="'w-9/10'" @click="showNotificationSky">Sky</Button>
              <Button color="teal" :class="'w-9/10'" @click="showNotificationTeal">Teal</Button>
              <Button color="cyan" :class="'w-9/10'" @click="showNotificationCyan">Cyan</Button>
            </div>
            <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">
              <Notifications type="default" notification_message="This is a default notification." position="centered"/>
              <Notifications v-for="(notification, index) in notificationsDefaultStyle" :key="index" :type="notification.type" :notification_message="notification.message" position="centered"/>
            </div>
          </div>
        </template>
      </Section>
      <Section header="Notification Dismiss" @sectioncreated="addLink" body="The GCC notification component features a notification dismiss that fades out once dismissible close button is clicked.">
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div class="flex space-x-4">
              <Button color="blue" :class="'w-9/10'" @click="showNotificationDismiss">Show Notification Dismiss</Button>
            </div>
            <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">
              <Notifications type="dismiss" notification_message="This is a notification with dismissible button." position="centered"/>
              <Notifications v-for="(notification, index) in notificationsDismiss" :key="index" :type="notification.type" :notification_message="notification.message" position="centered"/>
            </div>
          </div>
        </template>
      </Section>
      <Section header="Notification Types" @sectioncreated="addLink" body="The GCC Notification Component encompasses various notification types with dismissible close button tailored to different scenarios, ensuring users are promptly informed and can respond effectively to system events. The success notification provides reassurance by signaling successful operations, the error notification promptly alerts users to encountered errors, the warning notification preemptively highlights potential issues or risks, the message notification that informs a user that a message is sent/received.">
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div class="flex space-x-4">
              <Button color="blue" :class="'w-9/10'" @click="showMessage">Message</Button>
              <Button color="sky" :class="'w-9/10'" @click="showWarning">Warning</Button>
              <Button color="teal" :class="'w-9/10'" @click="showError">Error</Button>
              <Button color="cyan" :class="'w-9/10'" @click="showSuccess">Success</Button>
              <Button color="blue" :class="'w-9/10'" @click="showAll">Show All Notifications</Button>

            </div>
            <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">  
              <Notifications type="message" notification_message="This is a default notification." position="pBottom-right"/>
              <Notifications type="success" notification_message="This is a default notification." position="pTop-right"/>
              <Notifications type="warning" notification_message="This is a default notification." position="pTop-left"/>
              <Notifications type="error" notification_message="This is a default notification." position="pBottom-left"/>
              <Notifications v-for="(notification, index) in notificationsTypes" :key="index" :type="notification.type" :notification_message="notification.message" :position="notification.position"/>    
            </div>
          </div>
        </template>
      </Section>
      <Section header="Notification Positions" @sectioncreated="addLink" body="The GCC notification component features a notification positions, the absolute and parent position.">
        <template #content>
          <div class="flex flex-col items-center mt-4 h-full">
            <div class="flex space-x-4">
              <Button color="blue" :class="'w-9/10'" @click="() => showPositions('absolute')">Show Absolute Positions</Button>
              <Button color="blue" :class="'w-9/10'" @click="() => showPositions('parent')">Show Parent Positions</Button>
            </div>
            <div :class="{ 'dark': defaultDark }" class="relative bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out mt-4 w-full h-96 p-4 overflow-hidden rounded-lg shadow-lg border border-blue-600/[.87]">
              <Notifications v-for="(position, index) in notificationPositionsP" :key="index" :type="position.type" :notification_message="position.message" :position="position.position"/>
              <Notifications v-for="(position, index) in notificationPositionsA" :key="index" :type="position.type" :notification_message="position.message" :position="position.position"/>
            </div>
          </div>
        </template>
      </Section>
      <Section header="Summary" @sectioncreated="addLink" body="The GCC notification component features customizable notification elements utilizing Tailwind CSS, available in various colors including blue, sky, teal, and cyan, and types including warning, error, success, and message. This component also enables the seamless integration of notifications to display notifications or messages, enhancing user interaction and visual appeal.">
      </Section>
      <br/>
    </div>
    <div class="sticky top-8 w-4/12 transition-all duration-300 ease-in-out flex flex-col space-y-4 overflow-hidden mr-8">
      <hr class="h-0.5 bg-blue-600 border-none rounded-full">
      <span class="tracking-tight font-semibold self-center text-md text-gray-800 dark:text-gray-200">ON THIS PAGE</span>
      <PageLinks v-for="link in links" :key="link.label" :label="link.label"/>
      <hr class="h-0.5 bg-blue-600 border-none rounded-full">
    </div>
  </div>
</template>

<script>
import Button from './components/Button.vue';
import Section from './components/Section.vue';
import PageHeader from './components/pageHeader.vue';
import Notifications from './components/NotificationsGroup.vue';
import PageLinks from './components/pageLinks.vue';

export default {
  name: 'App',
  components: {
    Button,
    Section,
    PageHeader,
    PageLinks,
    Notifications
  },
  data() {
    return {
      links: [],
      isDarkMode: false,
      defaultDark: false,
      notifications: [],
      notificationsDefaultStyle: [],
      notificationsDismiss: [],
      notificationsTypes: [],
      notificationPositionsA: [],
      notificationPositionsP: []
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    addLink(header) {
      this.links.push({ label: header });
    },
    showNotification() {
      this.notifications.push({ type: 'default', message: 'This is a default notification.' });
    },
    showNotificationDefault() {
      this.notificationsDefaultStyle.push({ type: 'default', message: 'This is a default notification.' });
    },
    showNotificationBlue() {
      this.notificationsDefaultStyle.push({ type: 'BlueBorder', message: 'This is a blue bordered default notification.' });
    },
    showNotificationSky() {
      this.notificationsDefaultStyle.push({ type: 'SkyBorder', message: 'This is a sky bordered default notification.' });
    },
    showNotificationCyan() {
      this.notificationsDefaultStyle.push({ type: 'CyanBorder', message: 'This is a cyan bordered default notification.' });
    },
    showNotificationTeal() {
      this.notificationsDefaultStyle.push({ type: 'TealBorder', message: 'This is a teal bordered default notification.' });
    },
    showNotificationDismiss() {
      this.notificationsDismiss.push({ type: 'dismiss', message: 'This is a notification with a dismissible close button.' });
    },
    showMessage() {
      this.notificationsTypes.push({ type: 'message', message: 'This is a message notification.', position: 'pBottom-right' });
    },
    showSuccess() {
      this.notificationsTypes.push({ type: 'success', message: 'This is a success notification.', position: 'pTop-right' });
    },
    showError() {
      this.notificationsTypes.push({ type: 'error', message: 'This is an error notification.', position: 'pBottom-left' });
    },
    showWarning() {
      this.notificationsTypes.push({ type: 'warning', message: 'This is a warning notification.', position: 'pTop-left' });
    },
    showAll() {
    this.notificationsTypes.push(
      { type: 'message', message: 'This is a message notification.', position: 'pBottom-right' },
      { type: 'success', message: 'This is a success notification.', position: 'pTop-right' },
      { type: 'error', message: 'This is an error notification.', position: 'pBottom-left' },
      { type: 'warning', message: 'This is a warning notification.', position: 'pTop-left' }
    );
  },
    showPositions(type) {
      const notificationTypes = [
        { type: 'message', message: 'This is a message notification.', position: type === 'absolute' ? 'bottom-right' : 'pBottom-right' },
        { type: 'warning', message: 'This is a warning notification.', position: type === 'absolute' ? 'top-left' : 'pTop-left' },
        { type: 'error', message: 'This is an error notification.', position: type === 'absolute' ? 'bottom-left' : 'pBottom-left' },
        { type: 'success', message: 'This is a success notification.', position: type === 'absolute' ? 'top-right' : 'pTop-right' }
      ]; 
      notificationTypes.forEach(notificationType => {
        if (type === 'absolute') {
          this.notificationPositionsA.push({ ...notificationType });
        } else {
          this.notificationPositionsP.push({ ...notificationType });
        }
      });
    }
  }
};
</script>

