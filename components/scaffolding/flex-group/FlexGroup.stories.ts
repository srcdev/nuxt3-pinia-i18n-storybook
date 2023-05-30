import FlexGroup from "./FlexGroup.vue";
import FlexGroupItem from "./FlexGroupItem.vue";

import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/UI/Flex Group",
  component: FlexGroup,
  args: {
    flexType: "flex",
    flexFlow: "row",
    alignContent: "top",
    justifyItems: "left",
    placementX: "top",
    placementY: "left",
    gap: "0",
  },
} as Meta<typeof FlexGroup>;

const Template: StoryFn<typeof FlexGroup> = (args) => ({
  components: { FlexGroup, FlexGroupItem },
  setup() {
    return { args };
  },
  template: `
    <FlexGroup v-bind="args">
      <template v-slot:flexGroup>${args.default}</template>
    </FlexGroup>
  `,
});

export const FlowRow = Template.bind({});
let defaultArgs = `
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 1</h1>
      </div>
    </template>
  </FlexGroupItem>
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 2</h1>
      </div>
    </template>
  </FlexGroupItem>
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 3</h1>
      </div>
    </template>
  </FlexGroupItem>
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 4</h1>
      </div>
    </template>
  </FlexGroupItem>
`;

FlowRow.args = {
  default: defaultArgs,
  flexType: "flex",
  flexFlow: "row",
  alignContent: "top",
  justifyItems: "left",
  placementX: "top",
  placementY: "left",
  gap: "0",
};

export const FlowRowReverse = Template.bind({});
defaultArgs = `
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 1</h1>
      </div>
    </template>
  </FlexGroupItem>
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 2</h1>
      </div>
    </template>
  </FlexGroupItem>
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 3</h1>
      </div>
    </template>
  </FlexGroupItem>
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 4</h1>
      </div>
    </template>
  </FlexGroupItem>
`;

FlowRowReverse.args = {
  default: defaultArgs,
  flexType: "flex",
  flexFlow: "row-reverse",
  alignContent: "top",
  justifyItems: "left",
  placementX: "top",
  placementY: "left",
  gap: "0",
};

export const FlowColumn = Template.bind({});
defaultArgs = `
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 1</h1>
      </div>
    </template>
  </FlexGroupItem>
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 2</h1>
      </div>
    </template>
  </FlexGroupItem>
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 3</h1>
      </div>
    </template>
  </FlexGroupItem>
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 4</h1>
      </div>
    </template>
  </FlexGroupItem>
`;
FlowColumn.args = {
  default: defaultArgs,
  flexType: "flex",
  flexFlow: "column",
  alignContent: "top",
  justifyItems: "left",
  placementX: "top",
  placementY: "left",
  gap: "20",
};

export const FlowColumnReverse = Template.bind({});
defaultArgs = `
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 1</h1>
      </div>
    </template>
  </FlexGroupItem>
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 2</h1>
      </div>
    </template>
  </FlexGroupItem>
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 3</h1>
      </div>
    </template>
  </FlexGroupItem>
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 4</h1>
      </div>
    </template>
  </FlexGroupItem>
`;
FlowColumnReverse.args = {
  default: defaultArgs,
  flexType: "flex",
  flexFlow: "column-reverse",
  alignContent: "top",
  justifyItems: "left",
  placementX: "top",
  placementY: "left",
  gap: "20",
};
export const WithItemGrow = Template.bind({});
defaultArgs = `
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 1</h1>
      </div>
    </template>
  </FlexGroupItem>
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 2</h1>
      </div>
    </template>
  </FlexGroupItem>
  <FlexGroupItem :flexGrow="true">
    <template #flexItem>
      <div>
        <h1>Item 3</h1>
        <p>Grow: true</p>
      </div>
    </template>
  </FlexGroupItem>
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 4</h1>
      </div>
    </template>
  </FlexGroupItem>
`;

WithItemGrow.args = {
  default: defaultArgs,
  flexType: "flex",
  flexFlow: "row",
  alignContent: "top",
  justifyItems: "left",
  placementX: "top",
  placementY: "left",
  gap: "0",
};

export const ColumnSpaceAround = Template.bind({});
defaultArgs = `
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 1</h1>
      </div>
    </template>
  </FlexGroupItem>
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 2</h1>
      </div>
    </template>
  </FlexGroupItem>
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 3</h1>
      </div>
    </template>
  </FlexGroupItem>
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 4</h1>
      </div>
    </template>
  </FlexGroupItem>
`;
ColumnSpaceAround.args = {
  default: defaultArgs,
  flexType: "flex",
  flexFlow: "row",
  alignContent: "top",
  justifyItems: "space-around",
  placementX: "top",
  placementY: "left",
  gap: "20",
};

export const ColumnSpaceBetween = Template.bind({});
defaultArgs = `
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 1</h1>
      </div>
    </template>
  </FlexGroupItem>
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 2</h1>
      </div>
    </template>
  </FlexGroupItem>
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 3</h1>
      </div>
    </template>
  </FlexGroupItem>
  <FlexGroupItem>
    <template #flexItem>
      <div>
        <h1>Item 4</h1>
      </div>
    </template>
  </FlexGroupItem>
`;
ColumnSpaceBetween.args = {
  default: defaultArgs,
  flexType: "flex",
  flexFlow: "row",
  alignContent: "top",
  justifyItems: "space-between",
  placementX: "top",
  placementY: "left",
  gap: "20",
};
