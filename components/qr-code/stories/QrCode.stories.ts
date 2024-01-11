import { Meta, StoryFn } from "@storybook/vue3";
import StoryBookComponent from "../QrCode.vue";


export default {
  title: "Components/QrCode",
  component: StoryBookComponent,
  args: {
    textToEncode: "AQWE-WASHW-1234-AQW-12-ASDQPAA90-1",
    qrCodeSize: 150,
    showCopyToClipboard: true,
    copyToClipboardI18n: {
      copyLabel: "Secret key:",
      copyBtnText: "Copy",
      toastSuccess: "Copied to clipboard!",
      summaryContent: "Copy this code into your authentication app:"
    },
    qrColours: {
      dark: "#000",
      light: "#fff"
    }
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

export const HyperlinkCode = Template.bind({});
HyperlinkCode.args = {
  textToEncode: "https://www.neighbourly.com/accounts/linkcompany/642addafcb3ed7804c9ccfad",
  qrCodeSize: 228
};

export const HideCopyToClipboad = Template.bind({});
HideCopyToClipboad.args = {
  textToEncode: "AQWE-WASHW-1234-AQW-12-ASDQPAA90-1",
  qrCodeSize: 150,
  showCopyToClipboard: false
};

export const BigQrCode = Template.bind({});
BigQrCode.args = {
  textToEncode: "AQWE-WASHW-1234-AQW-12-ASDQPAA90-1",
  qrCodeSize: 300,
  showCopyToClipboard: true
};

export const NbrlyBrandBlue = Template.bind({});
NbrlyBrandBlue.args = {
  qrColours: {
    dark: "#0376da",
    light: "#fff"
  }
};
