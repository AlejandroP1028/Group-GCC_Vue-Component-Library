<template>
  <div>
    <button 
      v-for="color in colors" 
      :key="color.name"
      @click="changeColor(color.background)"
      :class="color.class">
      {{ color.name }}
    </button>
    
    <!-- New set of buttons -->
    <div class="mt-4 flex">
      <button type="button" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="showMessages">
        Messages
        <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
          2
        </span>
      </button>
      <button type="button" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="showNotifications">
        Notifications
        <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
          3
        </span>
      </button>
      <button type="button" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="showAlerts">
        Alerts
        <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
          1
        </span>
      </button>
    </div>
    
    <!-- Existing buttons -->
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
      </svg>
      Buy now
    </button>
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Choose plan
      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </button>
    
    <!-- New disabled button -->
    <button type="button" class="text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled>Disabled button</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        { name: 'Blue', class: 'bg-blue-200 text-blue-800', background: 'blue-200' },
        { name: 'Sky', class: 'bg-sky-200 text-sky-800', background: 'sky-200' },
        { name: 'Cyan', class: 'bg-cyan-200 text-cyan-800', background: 'cyan-200' },
        { name: 'Teal', class: 'bg-teal-200 text-teal-800', background: 'teal-200' },
        { name: 'Gray', class: 'bg-gray-800 text-white', background: 'gray-800' }
      ]
    };
  },
  methods: {
    changeColor(color) {
      this.$emit('button-click', color);
    },
    showMessages() {
  // Example message
  const message = {
    sender: "John",
    content: "Hello there! How are you?",
    timestamp: new Date().toLocaleString()
  };

  // Construct the message string
  const messageString = `New message received:\nSender: ${message.sender}\nContent: ${message.content}\nTimestamp: ${message.timestamp}`;

  // Display the message using an alert dialog
  alert(messageString);
},
showNotifications() {
  // Example notification
  const notification = {
    title: "New Notification",
    content: "You have a new notification! Click here to view.",
    timestamp: new Date().toLocaleString()
  };

  // Construct the notification string
  const notificationString = `Title: ${notification.title}\nContent: ${notification.content}\nTimestamp: ${notification.timestamp}`;

  // Display the notification using an alert dialog
  alert(notificationString);
},
    showAlerts() {
      alert("You have a alert!");
    }
  }
}
</script>

<style scoped>
button {
  margin-bottom: 2rem; /* Increased margin bottom */
  margin-right: 2rem;  /* Increased margin right */
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 2rem; /* Increased border radius */
  border: 2px solid transparent; /* Increased border width */
  text-align: center;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}
</style>
