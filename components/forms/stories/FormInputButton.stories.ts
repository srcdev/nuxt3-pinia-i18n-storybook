import StoryBookComponent from "../FormInputButton.vue";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/Forms/FormInputButton",
  component: StoryBookComponent,
  args: {
    buttonType: {
      type: String,
      default: "button",
    },
    buttonText: {
      type: String,
      default: "Button Text",
    },
  },
} as unknown as Meta<typeof StoryBookComponent>;

const Template: StoryFn<typeof StoryBookComponent> = (args) => ({
  components: { StoryBookComponent },
  setup() {
    return { args };
  },
  template: `<StoryBookComponent v-bind="args"></StoryBookComponent>`,
});

export const ThemeDefault = Template.bind({});
ThemeDefault.args = {
  buttonText: "Button Text",
};
