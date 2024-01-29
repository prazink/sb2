import type { Meta, StoryObj } from '@storybook/vue3'
import ListCallOut from '~/components/shared/list/CallOut.vue'

const meta: Meta<typeof ListCallOut> = {
  title: 'Shared/List/CallOut',
  tags: ['autodocs'],
  component: ListCallOut,
  render: args => ({
    components: { ListCallOut },
    setup () {
      return { args }
    },
    template: `
      <div class="container mx-auto">
        <ListCallOut v-bind="args" />
      </div>
    `,
  }),
  argTypes: {},
  parameters: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    heading: 'Free thinkers, like us see the possible!',
    subheading: 'When others see the impossible, we look past that and see what we can achieve together.',
    items: [
      'We’ve helped more than <strong>600,000</strong> customers get financial.',
      'Over <strong>$28 billion</strong> in funds advanced, at highly competitive rates.',
      '<strong>Unmatched flexibility</strong> to lorem ipsum dolar sit amet lorem.',
      'We’ve helped more than <strong>600,000</strong> customers get financial.',
    ],
    description: 'Whether it’s a home, car, business, commercial or personal loan you’re after, we can help you find a solution that works for you.',
    ctas: [
      {
        type: 'primary',
        size: 'medium',
        label: 'About Liberty',
        link: {
          cached_url: '/',
        },
      },
    ],
  },
}
