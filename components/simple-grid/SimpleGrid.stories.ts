import SimpleGrid from "./SimpleGrid.vue";
import SimpleGridItem from "./SimpleGridItem.vue";

import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/Scaffolding/Simple Grid",
  component: SimpleGrid,
  args: {
    minTileWidth: "312px",
  },
} as Meta<typeof SimpleGrid>;

const Template: StoryFn<typeof SimpleGrid> = (args) => ({
  components: { SimpleGrid, SimpleGridItem },
  setup() {
    return { args };
  },
  template: `
    <SimpleGrid v-bind="args">
      <template v-slot:content>${args.default}</template>
    </SimpleGrid>
  `,
});

export const Default = Template.bind({});
let defaultArgs = `
  <SimpleGridItem>
    <template #content>
      <div>
        <p class="text-normal">Grid Item</p>
      </div>
    </template>
  </SimpleGridItem>
  <SimpleGridItem>
    <template #content>
      <div>
        <p class="text-normal">Grid Item</p>
      </div>
    </template>
  </SimpleGridItem>
  <SimpleGridItem>
    <template #content>
      <div>
        <p class="text-normal">Grid Item</p>
      </div>
    </template>
  </SimpleGridItem>
  <SimpleGridItem>
    <template #content>
      <div>
        <p class="text-normal">Grid Item</p>
      </div>
    </template>
  </SimpleGridItem>
  <SimpleGridItem>
    <template #content>
      <div>
        <p class="text-normal">Grid Item</p>
      </div>
    </template>
  </SimpleGridItem>
`;

Default.args = {
  default: defaultArgs,
  minTileWidth: "312px",
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
//   defaultArgs += `<SimpleGridItem><template #content><h1>${element.label}</h1></template></SimpleGridItem>`
// })

// Default.args = {
//   default: defaultArgs,
// }
