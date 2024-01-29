import type { Meta, StoryObj } from '@storybook/vue3'
import ListLendersPanel from '~/components/shared/list/LendersPanel.vue'

const meta: Meta<typeof ListLendersPanel > = {
  title: 'Shared/List/LendersPanel',
  tags: ['autodocs'],
  component: ListLendersPanel,
  render: args => ({
    components: { ListLendersPanel },
    setup () {
      return { args }
    },
    template: `
      <ListLendersPanel  v-bind="args" />
    `,
  }),
  argTypes: {
    // Add  argTypes as needed
    cta: {
      control: { type: 'boolean' },
    },
  },
  parameters: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    heading: 'Our Liberty Advisers have access to a panel of home loan lenders to find a loan that suits your needs.',
    sub_heading: 'One thing’s for sure, we act in your best interest - always.',
    accreditations: ['liberty', 'cba', 'nab', 'westpac', 'amp', 'anz', 'bank-of-melb', 'adelaide', 'bankwest', 'heritage', 'my-state', 'unibank', 'me-bank'],
    ctas: [
      {
        type: 'secondary',
        size: 'medium',
        label: 'Find your local adviser',
        link: {
          cached_url: '/',
        },
      },
    ],
  },
}
