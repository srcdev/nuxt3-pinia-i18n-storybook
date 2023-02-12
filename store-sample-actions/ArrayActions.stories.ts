import StoryBookComponent from "./ArrayActions.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Pinia/Arrays/Display",
  component: StoryBookComponent,
  argTypes: {
    onArrayUpdated: { action: "arrayUpdated" },
  },
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
  sbArrayItem: {
    name: "Name D",
    description: "Description D",
  },
};
