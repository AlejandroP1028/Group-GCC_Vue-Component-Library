<template>
  <div
    :id="`toast-${type}`"
    class="fixed flex items-center w-full max-w-xs p-4 mb-4 rounded-lg shadow"
    :class="[positionClass, notificationBgClass, notificationTextColorClass]"
    role="alert"
  >
    <div
      class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg"
      :class="iconBgClass"
    >
    </div>
    <div class="ms-3 text-sm font-normal">{{ notification_message }}</div>
    <button
      type="button"
      class="ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-blue-500 p-1.5 inline-flex items-center justify-center h-8 w-8 hover:bg-blue-500"

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
      validator: (value) => ["success", "error", "warning", "default"].includes(value),
    },
    notification_message: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      default: "bottom-right",
      validator: (value) => ["top-left", "top-right", "bottom-left", "bottom-right", "center"].includes(value),
    },
  },
  computed: {
    iconBgClass() {
      const bgClasses = {
        success: "bg-blue-800",
        error: "bg-blue-200",
        warning: "bg-blue-700",
        default: "bg-blue-900",
      };
      return bgClasses[this.type];
    },
    positionClass() {
      const positions = {
        "top-left": "top-4 left-4",
        "top-right": "top-4 right-4",
        "bottom-left": "bottom-4 left-4",
        "bottom-right": "bottom-4 right-4",
        "center": "top-4 left-1/2 transform -translate-x-1/2",
      };
      return positions[this.position];
    },
    notificationBgClass() {
      const bgClasses = {
        success: "bg-blue-200",
        error: "bg-blue-400",
        warning: "bg-blue-300",
        default: "bg-blue-100",
      };
      return bgClasses[this.type];
    },
    notificationTextColorClass() {
      const textClasses = {
        success: "text-blue-800",
        error: "text-blue-200",
        warning: "text-blue-700",
        default: "text-blue-900",
      };
      return textClasses[this.type];
    },
  },
};
</script>

<style scoped>
</style>
