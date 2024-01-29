import type { Meta, StoryObj } from '@storybook/vue3'
import CardProduct from '~/components/modules/product/CardProduct.vue'

const meta: Meta<typeof CardProduct> = {
  title: 'Modules/Products/Cards/Product',
  tags: ['autodocs'],
  component: CardProduct,
  render: args => ({
    components: { CardProduct },
    setup () {
      return { args }
    },
    template: `
      <CardProduct v-bind="args" />
    `,
  }),
  argTypes: {},
  parameters: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    heading: 'Low rate home loan',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo non sint omnis nulla excepturi voluptas amet fugiat laudantium velit qui pariatur vero eos accusantium natus, est eius unde, iusto quidem.',
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
    tag: 'Most Popular',
  },
}
