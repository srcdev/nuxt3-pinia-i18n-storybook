import DisplayGrid from "./DisplayGrid.vue";
import DisplayGridItem from "./DisplayGridItem.vue";

import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/Scaffolding/DisplayGrid",
  component: DisplayGrid,
  args: {
    minTileWidth: "312px"
  }
} as Meta<typeof DisplayGrid>;

const Template: StoryFn<typeof DisplayGrid> = (args) => ({
  components: { DisplayGrid, DisplayGridItem },
  setup() {
    return { args };
  },
  template: `
    <DisplayGrid v-bind="args">
      <template v-slot:content>${args.default}</template>
    </DisplayGrid>
  `
});

export const Default = Template.bind({});
let defaultArgs = `
  <DisplayGridItem>
    <template #content>
      <div>
        <p class="text-normal">Grid Item</p>
      </div>
    </template>
  </DisplayGridItem>
  <DisplayGridItem>
    <template #content>
      <div>
        <p class="text-normal">Grid Item</p>
      </div>
    </template>
  </DisplayGridItem>
  <DisplayGridItem>
    <template #content>
      <div>
        <p class="text-normal">Grid Item</p>
      </div>
    </template>
  </DisplayGridItem>
  <DisplayGridItem>
    <template #content>
      <div>
        <p class="text-normal">Grid Item</p>
      </div>
    </template>
  </DisplayGridItem>
  <DisplayGridItem>
    <template #content>
      <div>
        <p class="text-normal">Grid Item</p>
      </div>
    </template>
  </DisplayGridItem>
`;

Default.args = {
  default: defaultArgs,
  minTileWidth: "312px"
};

// export const Default = Template.bind({})

// const navigationLinks = {
//   home: {
//     label: 'Homepage',
//     href: '/',
//     title: '',
//   },
//   aluminium: {
//     label: 'Assured Aluminium',
//     href: '/aluminium',
//     title: '',
//     windows: {
//       label: 'Windows',
//       href: '#windows',
//       title: '',
//     },
//     doors: {
//       label: 'Doors',
//       href: '#doors',
//       title: '',
//     },
//     bifolds: {
//       label: 'Bi-Folds',
//       href: '#bi-folds',
//       title: '',
//     },
//     rooflanterns: {
//       label: 'Roof Lanterns',
//       href: '#roof-lanterns',
//       title: '',
//     },
//   },
//   upvc: {
//     label: 'Assured UPVC',
//     href: '/upvc',
//     title: '',
//     windows: {
//       label: 'Windows',
//       href: '#windows',
//       title: '',
//     },
//     doors: {
//       label: 'Doors',
//       href: '#doors',
//       title: '',
//     },
//     conservatories: {
//       label: 'Conservatories',
//       href: '#conservatories',
//       title: '',
//     },
//     rooflanterns: {
//       label: 'Roof Lanterns',
//       href: '#roof-lanterns',
//       title: '',
//     },
//   },
//   quote: {
//     label: 'Get A Quote',
//     href: '/get-a-quote',
//     title: '',
//   },
//   reviews: {
//     label: 'Our Reviews',
//     href: '/our-reviews',
//     title: '',
//   },
//   contact: {
//     label: 'Get In Touch',
//     href: '/contact-us',
//     title: '',
//   },
// }

// let defaultArgs = ``
// const topLevelLinks = [] as any

// Object.keys(navigationLinks).forEach((key) => {
//   topLevelLinks.push({
//     label: navigationLinks[key].label,
//     href: navigationLinks[key].href,
//   })
// })

// topLevelLinks.forEach((element) => {
//   defaultArgs += `<DisplayGridItem><template #content><h1>${element.label}</h1></template></DisplayGridItem>`
// })

// Default.args = {
//   default: defaultArgs,
// }
