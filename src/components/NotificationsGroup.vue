<template>
  <div
    :id="`toast-${type}`"
    class="fixed flex items-center w-full max-w-xs p-4 mb-4 rounded-full shadow"
    :class="[positionClass, notificationBgClass, notificationTextColorClass]"
    role="alert"
  >
    <div
      class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full"
      :class="iconBgClass"
    >
      <svg
        v-if="type === 'success'"
        class="w-5 h-5 text-blue-200 rounded-lg dark:text-sky-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
        />
      </svg>
      <svg
        v-if="type === 'error'"
        class="w-5 h-5 text-blue-900 rounded-lg dark:text-sky-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"
        />
      </svg>
      <svg
        v-if="type === 'warning'"
        class="w-5 h-5 text-blue-700 rounded-lg dark:text-sky-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"
        />
      </svg>
      <svg
        v-if="type === 'message'"
        class="w-5 h-5 text-blue-800 dark:text-sky-400 rotate-45 rounded-lg"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 20"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
        />
      </svg>
    </div>
    <div class="ms-3 text-sm font-normal">
      {{ notification_message }}
    </div>
    <button
      v-if="type !== 'default'"
      type="button"
      class="ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-blue-500 p-1.5 inline-flex items-center justify-center h-8 w-8 hover:bg-blue-400"
      :data-dismiss-target="`#toast-${type}`"
      aria-label="Close"
    >
      <span class="sr-only">Close</span>
      <svg
        class="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
        stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "NotificationComponent",
  props: {
    type: {
      type: String,
      required: true,
      validator: (value) => ["success", "error", "warning", "default", "message"].includes(value),
    },
    notification_message: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      default: "bottom-right",
      validator: (value) => ["top-left", "top-right1", "top-right2", "top-right", "bottom-right", "center"].includes(value),
    },
  },
  computed: {
    positionClass() {
      const positions = {
        "top-right": "top-4 right-4",
        "top-right1":"top-20 right-4 mt-4",
        "top-right2":"top-24 right-4 mt-20",
        "top-left": "top-4 left-4",
        "bottom-right": "bottom-4 right-4",
        "center": "top-4 left-1/2 transform -translate-x-1/2",
      };
      return positions[this.position];
    },
    notificationBgClass() {
      const bgClasses = {
        success: "bg-blue-100 dark:bg-gray-800",
        error: "bg-blue-200 dark:bg-gray-800",
        warning: "bg-blue-300 dark:bg-gray-800",
        default: "bg-blue-800 dark:bg-gray-800",
        message: "bg-blue-200 dark:bg-gray-800",
      };
      return bgClasses[this.type];
    },
    notificationTextColorClass() {
      const textClasses = {
        success: "text-blue-800 dark:text-sky-400",
        error: "text-blue-900  dark:text-sky-400",
        warning: "text-blue-800  dark:text-sky-400",
        default: "text-blue-100 dark:text-sky-400",
        message: "text-blue-800 dark:text-sky-400",
      };
      return textClasses[this.type];
    },
    iconBgClass() {
      const bgClasses = {
        success: "bg-blue-800 dark:bg-gray-700",
        error: "bg-blue-100 dark:bg-gray-700",
        warning: "bg-blue-200 dark:bg-gray-700",
        default: "",
        message: "",
      };
      return bgClasses[this.type];
    },
  },
};
</script>

<style scoped>
</style>

