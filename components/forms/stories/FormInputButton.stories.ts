import StoryBookComponent from "../FormInputButton.vue";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/Forms/FormInputButton",
  component: StoryBookComponent,
  args: {
    buttonType: "button",
    buttonText: "Button Text",
  },
} as Meta<typeof StoryBookComponent>;

const Template: StoryFn<typeof StoryBookComponent> = (args) => ({
  components: { StoryBookComponent },
  setup() {
    return { args };
  },
  template: `<StoryBookComponent v-bind="args"></StoryBookComponent>`,
});

export const ThemeDefault = Template.bind({});
ThemeDefault.args = {
  buttonType: "button",
  buttonText: "Button Text",
};
