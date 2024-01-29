import type { Meta, StoryObj } from '@storybook/vue3'
import HeroSimple from '~/components/shared/hero/Simple.vue'

const meta: Meta<typeof HeroSimple> = {
  title: 'Shared/Hero/Simple',
  tags: ['autodocs'],
  component: HeroSimple,
  render: (args: any) => ({
    components: { HeroSimple },
    setup () {
      return { args }
    },
    template: `
      <HeroSimple v-bind="args" />        
    `,
  }),
  argTypes: {
    heading: {
      description: 'Enter here your hero heading content',
      control: {
        type: 'text',
      },
    },
    subHeading: {
      description: 'Enter here your hero sub heading content',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    heading: 'About us',
  },
  parameters: {},
}

export const WithSubheading: Story = {
  args: {
    ...Default.args,
    subHeading: 'Lorem ipsum dolor sit amet.',
  },
  parameters: {},
}
