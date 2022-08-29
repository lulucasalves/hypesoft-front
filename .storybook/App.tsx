// YourComponent.stories.ts|tsx

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import App from '../src/pages/index'

export default {
  title: 'YourComponent',
  component: App
} as ComponentMeta<typeof App>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof App> = (args) => <App {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
}
