// import { withContext } from "@storybook/addon-contexts";
// import { withContext } from '@storybook/vue3';


// import { translations } from '@/locales'
import Header from './Header.vue'

export default {
    title: 'Components/UI/Header',
    component: Header,
    argTypes: {},
    parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
        layout: 'fullscreen',
    },
    // decorators: [withContext({
    //     i18n: {
    //         messages: translations
    //     }
    // })]
}

const Template = (args: any) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Header },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return {
            ...args
        }
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `<Header v-bind="args" />`
})

export const Primary = Template.bind({})
