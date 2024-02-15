import type { Meta, StoryFn } from "@storybook/vue3";
import CopyTextToClipboard from "../CopyTextToClipboard.vue";

export default {
  title: "Components/Common/CopyTextToClipboard",
  component: CopyTextToClipboard,
  args: {
    config: {
      copyLabel: "You can copy text to the clipboard",
      copyBtnText: "Copy to Clipboard",
      toastDisplayText: "Copied to clipboard",
      stringToCopy: "Copy this text",
      useToastConfirm: true,
      applyClasses: "customClass"
    }
  }
} as Meta<typeof CopyTextToClipboard>;

const Template: StoryFn<typeof CopyTextToClipboard> = (args) => ({
  components: { CopyTextToClipboard },
  setup() {
    return { args };
  },
  template: `<CopyTextToClipboard v-bind="args"></CopyTextToClipboard>`
});

export const Default = Template.bind({});
