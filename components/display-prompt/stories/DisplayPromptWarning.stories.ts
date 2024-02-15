import type { Meta, StoryFn } from "@storybook/vue3";
import StoryBookComponent from "../DisplayPromptWarning.vue";

export default {
  title: "Components/Common/DisplayPrompt/Warning",
  component: StoryBookComponent,
  args: {
    dismissible: true,
    applyClasses: "customClassName"
  }
} as Meta<typeof StoryBookComponent>;

const Template: StoryFn<typeof StoryBookComponent> = (args) => ({
  components: { StoryBookComponent },
  setup() {
    return { args };
  },
  template: `
    <StoryBookComponent v-bind="args">
      <template v-if="${'title' in args}" v-slot:title>${args.title}</template>
      <template v-if="${'content' in args}" v-slot:content>${args.content}</template>
    </StoryBookComponent>
  `
});

export const TitleOnlyDismissable = Template.bind({});
TitleOnlyDismissable.args = {
  title: "Warning Prompt Title Only Dismissable",
  dismissible: true,
  applyClasses: "mt-20 mb-20"
};

export const TitleOnlyNotDismissable = Template.bind({});
TitleOnlyNotDismissable.args = {
  title: "Warning Prompt Title Only Not Dismissable",
  dismissible: false,
  applyClasses: "mt-20 mb-20"
};

export const TitleAndContentDismissable = Template.bind({});
TitleAndContentDismissable.args = {
  title: "Warning Prompt Title Only Dismissable",
  content: "Description text",
  dismissible: true,
  applyClasses: "mt-20 mb-20"
};

export const TitleAndContentNotDismissable = Template.bind({});
TitleAndContentNotDismissable.args = {
  title: "Warning Prompt Title Only Not Dismissable",
  content: "Description text",
  dismissible: false,
  applyClasses: "mt-20 mb-20"
};
