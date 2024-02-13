import StoryBookComponent from "../InputButton.vue";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/Forms/Buttons/Warning",
  component: StoryBookComponent,
  args: {
    size: "small", // ["small", "normal", "medium", "large"]
    type: "button",
    variant: "warning", // ["primary", "secondary", "tertiary", "text", "link", "ghost", "cancel", "confirm", "warning"]
    buttonText: "Button Text"
  }
} as Meta<typeof StoryBookComponent>;

const Template: StoryFn<typeof StoryBookComponent> = (args) => ({
  components: { StoryBookComponent },
  setup() {
    return { args };
  },
  template: `<StoryBookComponent v-bind="args"></StoryBookComponent>`
});

export const BtnSmall = Template.bind({});
BtnSmall.args = {
  size: "small",
  buttonText: "Warning Button Small"
};

export const BtnNormal = Template.bind({});
BtnNormal.args = {
  size: "normal",
  buttonText: "Warning Button Normal"
};

export const BtnMedium = Template.bind({});
BtnMedium.args = {
  size: "medium",
  buttonText: "Warning Button Medium"
};

export const BtnLarge = Template.bind({});
BtnLarge.args = {
  size: "large",
  buttonText: "Warning Button Large"
};
