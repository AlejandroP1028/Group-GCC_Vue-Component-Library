<template>
  <div class="relative inline-block">
    <button
      :class="[
        popoverButtonColorClass,
        'text-white font-bold py-2 px-4 rounded w-32',
      ]"
      @mouseover="popoverMouseOver"
      @mouseleave="popoverMouseLeave"
      @click="popoverClick"
      ref="button"
    >
      {{ buttonText }}
    </button>

    <div
      v-show="isPopoverVisible"
      ref="popover"
      :class="[
        positionClass,
        popoverColorClass,
        'fixed border-none rounded-lg shadow-lg p-4',
      ]"
      :style="popoverStyle"
    >
      <h3
        class="text-lg font-semibold mb-2 dark:text-white"
        v-html="popoverTitle"
      ></h3>
      <p class="text-gray-600 dark:text-white" v-html="popoverContent"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: "top",
    },
    popoverColor: {
      type: String,
      default: "blue",
    },
    popoverButtonColor: {
      type: String,
      default: "blue",
    },
    trigger: {
      type: String,
      default: "mouseover",
    },
    buttonText: {
      type: String,
      default: "Button",
    },
    popoverTitle: {
      type: String,
      default: "Popover Title",
    },
    popoverContent: {
      type: String,
      default:
        "This is the content of the popover. You can place any information here.",
    },
    isDarkMode: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isPopoverVisible: false,
      popoverStyle: {},
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    popoverMouseOver() {
      if (this.trigger === "mouseover") {
        this.showPopover();
      }
    },
    popoverMouseLeave() {
      if (this.trigger === "mouseover") {
        this.hidePopover();
      }
    },
    popoverClick() {
      if (this.trigger === "click") {
        this.isPopoverVisible ? this.hidePopover() : this.showPopover();
      }
    },
    showPopover() {
      this.isPopoverVisible = true;
      this.updatePopoverPosition();
    },
    hidePopover() {
      this.isPopoverVisible = false;
    },
    updatePopoverPosition() {
      this.$nextTick(() => {
        const button = this.$refs.button;
        const popover = this.$refs.popover;
        const buttonRect = button.getBoundingClientRect();
        const popoverRect = popover.getBoundingClientRect();
        const space = 4;

        let top, left;
        if (this.position === "top") {
          top = buttonRect.top - popoverRect.height - space;
          left = buttonRect.left + (buttonRect.width - popoverRect.width) / 2;
        } else if (this.position === "bottom") {
          top = buttonRect.bottom + space;
          left = buttonRect.left + (buttonRect.width - popoverRect.width) / 2;
        } else if (this.position === "left") {
          top = buttonRect.top + (buttonRect.height - popoverRect.height) / 2;
          left = buttonRect.left - popoverRect.width - space;
        } else if (this.position === "right") {
          top = buttonRect.top + (buttonRect.height - popoverRect.height) / 2;
          left = buttonRect.right + space;
        }

        this.popoverStyle = {
          top: `${top}px`,
          left: `${left}px`,
        };
      });
    },
    handleScroll() {
      this.hidePopover();
    },
  },
  computed: {
    positionClass() {
      return {
        top: "-translate-y-px",
        bottom: "translate-y-px",
        left: "-translate-x-px",
        right: "-translate-x-px",
      }[this.position];
    },
    popoverColorClass() {
      return {
        blue: "bg-blue-100 dark:bg-blue-900",
        slate: "bg-slate-100 dark:bg-slate-800",
        teal: "bg-teal-200 dark:bg-teal-900",
        cyan: "bg-cyan-200 dark:bg-cyan-900",
        sky: "bg-sky-200 dark:bg-sky-900",
      }[this.popoverColor];
    },
    popoverButtonColorClass() {
      return {
        blue: "bg-blue-700 hover:bg-blue-800 dark:bg-blue-900 dark:hover:bg-blue-800",
        slate:
          "bg-slate-700 hover:bg-slate-800 dark:bg-slate-900 dark:hover:bg-stale-800 ",
        cyan: "bg-cyan-700 hover:bg-cyan-800 dark:bg-cyan-900 dark:hover:bg-cyan-800",
        sky: "bg-sky-700 hover:bg-sky-800 dark:bg-sky-900 dark:hover:bg-sky-800",
      }[this.popoverButtonColor];
    },
  },
};
</script>

<style scoped>
.popover {
  transition: opacity 0.2s;
}
</style>
