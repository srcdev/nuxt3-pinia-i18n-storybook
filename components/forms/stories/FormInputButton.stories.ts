import StoryBookComponent from "../input-button/InputButtonCore.vue";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/Forms/InputButtonCore",
  component: StoryBookComponent,
  args: {
    type: "button",
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
  type: "button",
  buttonText: "Button Text",
};
