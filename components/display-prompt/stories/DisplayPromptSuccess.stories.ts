import type { Meta, StoryFn } from "@storybook/vue3";
import StoryBookComponent from "../variants/DisplayPromptSuccess.vue";

export default {
  title: "Components/Common/DisplayPrompt/Success",
  component: StoryBookComponent,
  args: {
    dismissible: true,
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
      <template v-if="${"title" in args}" v-slot:title>${args.title}</template>
      <template v-if="${"content" in args}" v-slot:content>${args.content}</template>
    </StoryBookComponent>
  `
});

export const TitleOnlyDismissable = Template.bind({});
TitleOnlyDismissable.args = {
  title: "Success Prompt Title Only Dismissable",
  dismissible: true,
  styleClassPassthrough: "mt-20 mb-20"
};

export const TitleOnlyNotDismissable = Template.bind({});
TitleOnlyNotDismissable.args = {
  title: "Success Prompt Title Only Not Dismissable",
  dismissible: false,
  styleClassPassthrough: "mt-20 mb-20"
};

export const TitleAndContentDismissable = Template.bind({});
TitleAndContentDismissable.args = {
  title: "Success Prompt Title Only Dismissable",
  content: "Description text",
  dismissible: true,
  styleClassPassthrough: "mt-20 mb-20"
};

export const TitleAndContentNotDismissable = Template.bind({});
TitleAndContentNotDismissable.args = {
  title: "Success Prompt Title Only Not Dismissable",
  content: "Description text",
  dismissible: false,
  styleClassPassthrough: "mt-20 mb-20"
};
