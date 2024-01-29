import type { Meta, StoryObj } from '@storybook/vue3'
import Table from '~/components/shared/table/Table.vue'

const meta: Meta<typeof Table> = {
  title: 'Shared/Table/Base',
  tags: ['autodocs'],
  component: Table,
  render: args => ({
    components: { Table },
    setup () {
      return { args }
    },
    template: '<Table v-bind="args" />',
  }),
  argTypes: {},
  parameters: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: {
      thead: [
        { value: 'Investment Term' },
        { value: 'Target Return After Fees*' },
      ],
      tbody: [
        {
          body: [
            { value: '6 Months' },
            { value: '3.65% p.a.' },
          ],
        },
        {
          body: [
            { value: '12 Months' },
            { value: '3.65% p.a.' },
          ],
        },
        {
          body: [
            { value: '18 Months' },
            { value: '3.65% p.a.' },
          ],
        },
      ],
    },
  },
  parameters: {},
}
