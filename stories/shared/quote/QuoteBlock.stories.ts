import type { Meta, StoryObj } from '@storybook/vue3'
import QuoteBlock from '~/components/shared/quote/Block.vue'

const meta: Meta<typeof QuoteBlock> = {
  title: 'Shared/Block/Quote',
  tags: ['autodocs'],
  component: QuoteBlock,
  render: (args: any) => ({
    components: { QuoteBlock },
    setup () {
      return { args }
    },
    template: '<QuoteBlock v-bind="args" />',
  }),
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof QuoteBlock>;

export const Default: Story = {
  args: {
    name: 'Gus Lynch',
    title: 'Community director',
    text: 'We are extremely proud of our work within the community. Our partnerships have been a big part of this.',
  },
  parameters: {},
}
