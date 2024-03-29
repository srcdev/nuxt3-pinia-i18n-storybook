import type { Meta, StoryFn } from "@storybook/vue3";
import StoryBookComponent from "../QrCode.vue";

export default {
  title: "Components/QrCode",
  component: StoryBookComponent,
  args: {
    qrCodeSize: 150,
    showCopyToClipboard: true,
    config: {
      qrCodeStr: "GU4DMMZRGI2TSLJVMFTDSLJUGUYTILLBGQZTELLDMYYGCOBQMIZDQOBUGE",
      manualCodeStr: "GU4DMMZRGI2TSLJVMFTDSLJUGUYTILLBGQZTELLDMYYGCOBQMIZDQOBUGE",
      copyLabel: "Secret Key",
      copyBtnText: "Copy",
      toastSuccess: "Copied to clipboard",
      summaryContent: "Summary content text"
    },
    qrColours: {
      dark: "#000000ff",
      light: "#ffffffff"
    },
    styleClassPassthrough: "customClassName"
  }
} as Meta<typeof StoryBookComponent>;

const Template: StoryFn<typeof StoryBookComponent> = (args) => ({
  components: { StoryBookComponent },
  setup() {
    return { args };
  },
  template: `
    <StoryBookComponent v-bind="args">
      <template v-slot:default>
      </template>
    </StoryBookComponent>`
});

export const Default = Template.bind({});

// export const HyperlinkCode = Template.bind({});
// HyperlinkCode.args = {
//   textToEncode: "https://www.somesite.com",
//   qrCodeSize: 228,
// };

// export const HideCopyToClipboad = Template.bind({});
// HideCopyToClipboad.args = {
//   textToEncode: "AQWE-WASHW-1234-AQW-12-ASDQPAA90-1",
//   qrCodeSize: 150,
//   showCopyToClipboard: false,
// };

// export const BigQrCode = Template.bind({});
// BigQrCode.args = {
//   textToEncode: "AQWE-WASHW-1234-AQW-12-ASDQPAA90-1",
//   qrCodeSize: 300,
//   showCopyToClipboard: true,
// };

// export const NbrlyBrandBlue = Template.bind({});
// NbrlyBrandBlue.args = {
//   qrColours: {
//     dark: "#0376da",
//     light: "#fff",
//   },
// };
