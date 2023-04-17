import StoryBookComponent from './LayoutRow.vue'
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Components/Scaffolding/Layout Row',
  component: StoryBookComponent,
} as Meta<typeof StoryBookComponent>

const Template: StoryFn<typeof StoryBookComponent> = (args: any) => ({
  components: { StoryBookComponent },
  setup() {
    return { args }
  },
  template: `
    <StoryBookComponent v-bind="args">
      <template #content>
        <div>
          <h1>Layout Row</h1>
          <p>Eiusmod corned beef quis, kielbasa nostrud brisket spare ribs meatball swine salami deserunt chuck pork chop buffalo irure. Aliquip labore deserunt jerky sed excepteur sausage tri-tip minim pork belly. Jowl commodo burgdoggen fatback mollit. Eiusmod drumstick fugiat buffalo in shoulder, consequat andouille esse ex leberkas irure meatball id. Brisket cow mollit t-bone meatloaf tri-tip sunt adipisicing lorem burgdoggen. Irure kevin tri-tip ea ut.</p>
          <p>Cow salami venison, dolor ipsum consectetur nulla elit spare ribs capicola meatball enim pig. Porchetta tongue veniam buffalo cow, shoulder fugiat pork. Pork frankfurter proident cow laboris, consequat cupim kevin ribeye leberkas dolore cillum salami. In tail t-bone ex jerky veniam. Minim venison short ribs ground round. Cillum dolore voluptate pariatur, meatball jerky kielbasa elit officia hamburger veniam rump pork belly.</p>
          <p>Landjaeger sint mollit cupim, picanha ribeye ut bresaola. Ground round ut labore est nisi ad id landjaeger fatback capicola magna spare ribs. Duis ham hock pork loin ullamco ground round lorem pork chop picanha velit non eiusmod aliquip aute beef ribs bacon. Prosciutto filet mignon bacon reprehenderit lorem, velit rump corned beef duis.</p>
          <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it's tasty!</p>
        </div>
      </template>
    </StoryBookComponent>
    <StoryBookComponent v-bind="args">
      <template #content>
        <div>
          <h1>Layout Row</h1>
          <p>Bacon ipsum dolor amet ullamco tenderloin alcatra biltong venison, excepteur veniam elit meatball non short loin do beef ribs tongue. Labore consequat duis, ut salami tempor dolor voluptate doner ipsum quis magna biltong qui. Sunt tri-tip enim jowl kielbasa leberkas pastrami. Bacon qui pork chop, bresaola tenderloin commodo in hamburger laboris kevin flank shank picanha sint. Shank bacon andouille ball tip esse capicola exercitation ad veniam ullamco. Qui spare ribs mollit, eiusmod bacon elit sed laboris tenderloin dolor bresaola. Capicola burgdoggen ribeye consectetur.</p>
          <p>Beef ribs filet mignon chislic, minim ullamco occaecat rump shoulder dolore velit irure sausage. Corned beef andouille burgdoggen minim nulla. Andouille labore shank exercitation, tongue alcatra short loin strip steak in voluptate ut swine consectetur. Tenderloin id cupim, in salami brisket tri-tip adipisicing incididunt burgdoggen.</p>
        </div>
      </template>
    </StoryBookComponent>
  `,
})

export const Default = Template.bind({})

export const Desktop = Template.bind({})
Desktop.args = {
  contentMaxWidth: 'desktop',
  paddingX: 4,
  paddingY: 4,
  bgColour: 'blue'
}

export const Wide = Template.bind({})
Wide.args = {
  contentMaxWidth: 'wide',
  paddingX: 12,
  paddingY: 0,
  bgColour: 'grey'
}
