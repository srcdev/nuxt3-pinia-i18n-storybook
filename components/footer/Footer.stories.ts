import StoryBookComponent from "./Footer.vue";
import type { Meta, StoryFn } from "@storybook/vue3";

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

export const ThemeDefault = Template.bind({});
ThemeDefault.args = {
  footerTheme: "theme-default",
};

export const ThemeWhite = Template.bind({});
ThemeWhite.args = {
  footerTheme: "theme-white",
};

export const ThemeGrey = Template.bind({});
ThemeGrey.args = {
  footerTheme: "theme-grey",
};

export const ThemeBlue = Template.bind({});
ThemeBlue.args = {
  footerTheme: "theme-blue",
};

export const ThemeGreen = Template.bind({});
ThemeGreen.args = {
  footerTheme: "theme-green",
};
