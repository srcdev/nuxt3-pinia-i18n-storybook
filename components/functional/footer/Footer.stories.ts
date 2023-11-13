import StoryBookComponent from "./Footer.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/UI/Footer",
  component: StoryBookComponent,
  args: {
    subText: {
      type: String,
      default: "subText as prop/arg",
    },
  },
} as Meta<typeof StoryBookComponent>;

const Template: StoryFn<typeof StoryBookComponent> = (args) => ({
  components: { StoryBookComponent },
  setup() {
    return { args };
  },
  template: `<StoryBookComponent v-bind="args"></StoryBookComponent>`,
});

export const Primary = Template.bind({});
Primary.args = {
  subText: "subText as prop/arg",
};
