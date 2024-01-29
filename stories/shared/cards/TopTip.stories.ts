import type { Meta, StoryObj } from '@storybook/vue3'
import CardTopTip from '~/components/shared/card/TopTip.vue'
import LayoutGrid from '~/components/shared/layout/Grid.vue'
import LayoutWrapper from '~/components/shared/layout/Wrapper.vue'

const meta: Meta<typeof CardTopTip> = {
  title: 'Shared/Cards/TopTip',
  tags: ['autodocs'],
  component: CardTopTip,
  render: args => ({
    components: { CardTopTip, LayoutWrapper, LayoutGrid },
    setup () {
      return { args }
    },
    template: `
      <LayoutWrapper>
        <LayoutGrid>
          <CardTopTip v-bind="args" class="col-span-12 sm:col-span-5"/>
        </LayoutGrid>
      </LayoutWrapper>
    `,
  }),
  argTypes: {},
  parameters: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    heading: 'Adviser top tip for free thinkers:',
    content: 'Before applying for a home loan, consider reducing your credit card limit. This will help your borrowing power.',
  },
}
