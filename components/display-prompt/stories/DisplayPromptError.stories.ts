import StoryBookComponent from "../DisplayPromptError.vue";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/UI/DisplayPrompt/Error",
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
      <template #title>Title text</template>
      <template #content>Content text</template>
    </StoryBookComponent>
  `
});

export const TitleOnly = Template.bind({});
TitleOnly.args = {
  dismissible: true,
  applyClasses: "applyClasses"
};
