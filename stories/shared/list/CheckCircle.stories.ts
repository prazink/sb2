import type { Meta, StoryObj } from '@storybook/vue3'
import ListCheckCircle from '~/components/shared/list/CheckCircle.vue'

const meta: Meta<typeof ListCheckCircle> = {
  title: 'Shared/List/CheckCircle',
  tags: ['autodocs'],
  component: ListCheckCircle,
  render: args => ({
    components: { ListCheckCircle },
    setup () {
      return { args }
    },
    template: `
      <ListCheckCircle v-bind="args" />
    `,
  }),
  argTypes: {},
  parameters: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    listItems: [
      {
        text: 'Offset account',
      },
      {
        text: 'Redraw facility',
      },
      {
        text: 'Competitive rates against market leaders',
      },
      {
        text: 'Competitive rates against market leaders',
      },
    ],
  },
}
