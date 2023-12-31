import FlexGroup from "./FlexGroup.vue";
import FlexGroupItem from "./FlexGroupItem.vue";

import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/Scaffolding/Flex Group",
  component: FlexGroup,
  args: {
    flexType: "flex", //"flex", "inline-flex"
    flexFlow: "row", // "column", "column-reverse", "row", "row-reverse", "cols-to-row"
    flexWrap: "nowrap", // "initial", "nowrap", "wrap", "wrap-reverse", "cols-to-row"
    alignContent: "top-left", //"top-center", "center-center", "bottom-center", "top-left", "center-left", "bottom-left", "top-right", "center-right", "bottom-right", "top-space-around", "center-space-around", "bottom-space-around", "top-space-between", "center-space-between", "bottom-space-between"
    gap: "0",
    maxWidth: false,
    fillHeight: false,
    maxHeight: false,
    applyClasses: "",
  },
} as Meta<typeof FlexGroup>;

const Template: StoryFn<typeof FlexGroup> = (args) => ({
  components: { FlexGroup, FlexGroupItem },
  setup() {
    return { args };
  },
  template: `
    <FlexGroup v-bind="args">
      <template v-slot:flexGroup>
        <FlexGroupItem>
          <template v-slot:default>
            <div>
              <h1 class="text-header-large">Item 1</h1>
            </div>
          </template>
        </FlexGroupItem>
        <FlexGroupItem>
          <template v-slot:default>
            <div>
              <h1 class="text-header-large">Item 2</h1>
            </div>
          </template>
        </FlexGroupItem>
        <FlexGroupItem>
          <template v-slot:default>
            <div>
              <h1 class="text-header-large">Item 3</h1>
            </div>
          </template>
        </FlexGroupItem>
        <FlexGroupItem>
          <template v-slot:default>
            <div>
              <h1 class="text-header-large">Item 4</h1>
            </div>
          </template>
        </FlexGroupItem>
      </template>
    </FlexGroup>
  `,
});

export const FlexRowTopLeft = Template.bind({});
FlexRowTopLeft.args = {
  flexType: "flex", //"flex", "inline-flex"
  flexFlow: "row", // "column", "column-reverse", "row", "row-reverse", "cols-to-row"
  flexWrap: "nowrap", // "initial", "nowrap", "wrap", "wrap-reverse", "cols-to-row"
  alignContent: "top-left", //"top-center", "center-center", "bottom-center", "top-left", "center-left", "bottom-left", "top-right", "center-right", "bottom-right", "top-space-around", "center-space-around", "bottom-space-around", "top-space-between", "center-space-between", "bottom-space-between"
  gap: "20px",
  maxWidth: false,
  fillHeight: false,
  maxHeight: false,
  applyClasses: "",
};

export const FlexRowTopCenter = Template.bind({});
FlexRowTopCenter.args = {
  flexType: "flex", //"flex", "inline-flex"
  flexFlow: "row", // "column", "column-reverse", "row", "row-reverse", "cols-to-row"
  flexWrap: "nowrap", // "initial", "nowrap", "wrap", "wrap-reverse", "cols-to-row"
  alignContent: "top-center", //"top-center", "center-center", "bottom-center", "top-left", "center-left", "bottom-left", "top-right", "center-right", "bottom-right", "top-space-around", "center-space-around", "bottom-space-around", "top-space-between", "center-space-between", "bottom-space-between"
  gap: "20px",
  maxWidth: true,
  fillHeight: false,
  maxHeight: false,
  applyClasses: "",
};

export const FlexRowTopRight = Template.bind({});
FlexRowTopRight.args = {
  flexType: "flex", //"flex", "inline-flex"
  flexFlow: "row", // "column", "column-reverse", "row", "row-reverse", "cols-to-row"
  flexWrap: "nowrap", // "initial", "nowrap", "wrap", "wrap-reverse", "cols-to-row"
  alignContent: "top-right", //"top-center", "center-center", "bottom-center", "top-left", "center-left", "bottom-left", "top-right", "center-right", "bottom-right", "top-space-around", "center-space-around", "bottom-space-around", "top-space-between", "center-space-between", "bottom-space-between"
  gap: "20px",
  maxWidth: true,
  fillHeight: false,
  maxHeight: false,
  applyClasses: "",
};

export const FlexRowTopSpaceAround = Template.bind({});
FlexRowTopSpaceAround.args = {
  flexType: "flex", //"flex", "inline-flex"
  flexFlow: "row", // "column", "column-reverse", "row", "row-reverse", "cols-to-row"
  flexWrap: "nowrap", // "initial", "nowrap", "wrap", "wrap-reverse", "cols-to-row"
  alignContent: "top-space-around", //"top-center", "center-center", "bottom-center", "top-left", "center-left", "bottom-left", "top-right", "center-right", "bottom-right", "top-space-around", "center-space-around", "bottom-space-around", "top-space-between", "center-space-between", "bottom-space-between"
  gap: "20px",
  maxWidth: false,
  fillHeight: false,
  maxHeight: false,
  applyClasses: "",
};

export const FlexRowTopSpaceBetween = Template.bind({});
FlexRowTopSpaceBetween.args = {
  flexType: "flex", //"flex", "inline-flex"
  flexFlow: "row", // "column", "column-reverse", "row", "row-reverse", "cols-to-row"
  flexWrap: "nowrap", // "initial", "nowrap", "wrap", "wrap-reverse", "cols-to-row"
  alignContent: "top-space-between", //"top-center", "center-center", "bottom-center", "top-left", "center-left", "bottom-left", "top-right", "center-right", "bottom-right", "top-space-around", "center-space-around", "bottom-space-around", "top-space-between", "center-space-between", "bottom-space-between"
  gap: "20px",
  maxWidth: false,
  fillHeight: false,
  maxHeight: false,
  applyClasses: "",
};

export const FlexRowCenterSpaceAround = Template.bind({});
FlexRowCenterSpaceAround.args = {
  flexType: "flex", //"flex", "inline-flex"
  flexFlow: "row", // "column", "column-reverse", "row", "row-reverse", "cols-to-row"
  flexWrap: "nowrap", // "initial", "nowrap", "wrap", "wrap-reverse", "cols-to-row"
  alignContent: "center-space-around", //"top-center", "center-center", "bottom-center", "top-left", "center-left", "bottom-left", "top-right", "center-right", "bottom-right", "top-space-around", "center-space-around", "bottom-space-around", "top-space-between", "center-space-between", "bottom-space-between"
  gap: "20px",
  maxWidth: false,
  fillHeight: true,
  maxHeight: false,
  applyClasses: "",
};

export const FlexRowCenterSpaceBetween = Template.bind({});
FlexRowCenterSpaceBetween.args = {
  flexType: "flex", //"flex", "inline-flex"
  flexFlow: "row", // "column", "column-reverse", "row", "row-reverse", "cols-to-row"
  flexWrap: "nowrap", // "initial", "nowrap", "wrap", "wrap-reverse", "cols-to-row"
  alignContent: "center-space-between", //"top-center", "center-center", "bottom-center", "top-left", "center-left", "bottom-left", "top-right", "center-right", "bottom-right", "top-space-around", "center-space-around", "bottom-space-around", "top-space-between", "center-space-between", "bottom-space-between"
  gap: "20px",
  maxWidth: false,
  fillHeight: true,
  maxHeight: false,
  applyClasses: "",
};
