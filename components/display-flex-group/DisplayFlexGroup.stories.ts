import DisplayFlexGroup from "./DisplayFlexGroup.vue";
import DisplayFlexGroupItem from "./DisplayFlexGroupItem.vue";

import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/UI/Flex Group",
  component: DisplayFlexGroup,
  args: {
    flexType: "flex", //"flex", "inline-flex"
    flexFlow: "row", // "column", "column-reverse", "row", "row-reverse", "cols-to-row"
    flexWrap: "nowrap", // "initial", "nowrap", "wrap", "wrap-reverse", "cols-to-row"
    alignContent: "top-left", //"top-center", "center-center", "bottom-center", "top-left", "center-left", "bottom-left", "top-right", "center-right", "bottom-right", "top-space-around", "center-space-around", "bottom-space-around", "top-space-between", "center-space-between", "bottom-space-between"
    gap: "0",
    maxWidth: false,
    fillHeight: false,
    maxHeight: false,
    styleClassPassthrough: ""
  }
} as Meta<typeof DisplayFlexGroup>;

const Template: StoryFn<typeof DisplayFlexGroup> = (args) => ({
  components: { DisplayFlexGroup, DisplayFlexGroupItem },
  setup() {
    return { args };
  },
  template: `
    <DisplayFlexGroup v-bind="args">
      <template v-slot:default>
        <DisplayFlexGroupItem>
          <template v-slot:default>
            <div>
              <p class="text-normal">Grid Item</p>
            </div>
          </template>
        </DisplayFlexGroupItem>
        <DisplayFlexGroupItem>
          <template v-slot:default>
            <div>
              <p class="text-normal">Grid Item</p>
            </div>
          </template>
        </DisplayFlexGroupItem>
        <DisplayFlexGroupItem>
          <template v-slot:default>
            <div>
              <p class="text-normal">Grid Item</p>
            </div>
          </template>
        </DisplayFlexGroupItem>
        <DisplayFlexGroupItem>
          <template v-slot:default>
            <div>
              <p class="text-normal">Grid Item</p>
            </div>
          </template>
        </DisplayFlexGroupItem>
      </template>
    </DisplayFlexGroup>
  `
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
  styleClassPassthrough: ""
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
  styleClassPassthrough: ""
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
  styleClassPassthrough: ""
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
  styleClassPassthrough: ""
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
  styleClassPassthrough: ""
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
  styleClassPassthrough: ""
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
  styleClassPassthrough: ""
};
