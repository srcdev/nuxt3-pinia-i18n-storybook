import StoryBookComponent from './Header.vue'

export default {
    title: 'Components/UI/Header',
    component: StoryBookComponent,
    argTypes: {}
}

const Template = (args: any) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { StoryBookComponent },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return {
            args
        }
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<story-book-component v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = {}
