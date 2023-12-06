import PageRow from "./PageRow.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/UI/PageRow",
  component: PageRow,
  args: {
    fitContent: false,
    applyGutters: false,
  },
} as Meta<typeof PageRow>;

const Template: StoryFn<typeof PageRow> = (args) => ({
  components: { PageRow },
  setup() {
    return { args };
  },
  template: `
    <PageRow v-bind="args">
      <template v-slot:pageRowContent>${args.default}</template>
    </PageRow>`,
});

export const DefaultWithoutGutters = Template.bind({});
DefaultWithoutGutters.args = {
  fitContent: false,
  applyGutters: false,
  default: `
    <div style="background-color: lightgray">
      <div>
        <h2 class="text-header-medium">Default Without Gutters</h2>
        <p >Max width set to page content width, zero padding, apply to child component.</p>
        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id dolor quam. Ut lacinia finibus pellentesque. Fusce ipsum erat, maximus ac malesuada sed, lacinia nec ipsum. In eget ex ex. Mauris mattis condimentum sollicitudin. Morbi sagittis justo ac nunc pulvinar gravida. Aenean et nulla ut odio sagittis gravida. Curabitur at ante volutpat velit aliquam finibus mattis ut est. Quisque sit amet orci libero.</p>
      </div>
    </div>
  `,
};

export const DefaultWithGutters = Template.bind({});
DefaultWithGutters.args = {
  fitContent: false,
  applyGutters: true,
  default: `
    <div style="background-color: lightgray">
      <div>
        <h2 class="text-header-medium">Default With Gutters</h2>
        <p >Max width set to page content width, padding has been applied to PageRow coponent.</p>
        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id dolor quam. Ut lacinia finibus pellentesque. Fusce ipsum erat, maximus ac malesuada sed, lacinia nec ipsum. In eget ex ex. Mauris mattis condimentum sollicitudin. Morbi sagittis justo ac nunc pulvinar gravida. Aenean et nulla ut odio sagittis gravida. Curabitur at ante volutpat velit aliquam finibus mattis ut est. Quisque sit amet orci libero.</p>
      </div>
    </div>
  `,
};

export const FitContentWithoutGutters = Template.bind({});
FitContentWithoutGutters.args = {
  fitContent: true,
  applyGutters: false,
  default: `
    <div style="background-color: lightgray">
      <div>
        <h2 class="text-header-medium">Fit Content Without Gutters</h2>
        <p >Width bound to parent element's width, zero padding, apply to child component.</p>
        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id dolor quam. Ut lacinia finibus pellentesque. Fusce ipsum erat, maximus ac malesuada sed, lacinia nec ipsum. In eget ex ex. Mauris mattis condimentum sollicitudin. Morbi sagittis justo ac nunc pulvinar gravida. Aenean et nulla ut odio sagittis gravida. Curabitur at ante volutpat velit aliquam finibus mattis ut est. Quisque sit amet orci libero.</p>
      </div>
    </div>
  `,
};

export const FitContentWithGutters = Template.bind({});
FitContentWithGutters.args = {
  fitContent: true,
  applyGutters: true,
  default: `
    <div style="background-color: lightgray">
      <div>
      <h2 class="text-header-medium">Fit Content With Gutters</h2>
      <p >Width bound to parent element's width, padding has been applied to PageRow coponent.</p>
      <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id dolor quam. Ut lacinia finibus pellentesque. Fusce ipsum erat, maximus ac malesuada sed, lacinia nec ipsum. In eget ex ex. Mauris mattis condimentum sollicitudin. Morbi sagittis justo ac nunc pulvinar gravida. Aenean et nulla ut odio sagittis gravida. Curabitur at ante volutpat velit aliquam finibus mattis ut est. Quisque sit amet orci libero.</p>
      </div>
    </div>
  `,
};
