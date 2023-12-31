import StoryBookComponent from "./Header.vue";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/UI/Header",
  component: StoryBookComponent,
} as Meta<typeof StoryBookComponent>;

const Template: StoryFn<typeof StoryBookComponent> = (args: any) => ({
  components: { StoryBookComponent },
  setup() {
    return { args };
  },
  template: `<StoryBookComponent v-bind="args"></StoryBookComponent>`,
});

export const Primary = Template.bind({});
Primary.args = {
  headerTheme: "header-default",
};
