import type { Meta, StoryObj } from '@storybook/vue3'
import CardProductSlider from '~/components/modules/product/CardProductSlider.vue'

const meta: Meta<typeof CardProductSlider> = {
  title: 'Modules/Products/Cards/ProductSlider',
  tags: ['autodocs'],
  component: CardProductSlider,
  render: args => ({
    components: { CardProductSlider },
    setup () {
      return { args }
    },
    template: `
      <CardProductSlider v-bind="args" class="gtg col-span-12 sm:col-span-6 md:col-span-4"/>
    `,
  }),
  argTypes: {},
  parameters: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    product: {
      heading: 'Low rate home loan',
      features: [
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
      rateHeading: 'Rates per annum from',
      rate: '2.39%',
      comparisonRate: '(2.66%*)',
      ratesDisclaimer: 'Comparison rate',
      link: '/',
    },
  },
}
