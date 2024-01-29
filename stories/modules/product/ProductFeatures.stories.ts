import type { Meta, StoryObj } from '@storybook/vue3'
import ListProductFeature from '~/components/modules/product/ProductFeatures.vue'

const meta: Meta<typeof ListProductFeature> = {
  title: 'Modules/Products/Lists/ProductFeatureList',
  tags: ['autodocs'],
  component: ListProductFeature,
  render: args => ({
    components: { ListProductFeature },
    setup () {
      return { args }
    },
    template: `
      <ListProductFeature v-bind="args" />
    `,
  }),
  argTypes: {},
  parameters: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    heading: 'Easy to understand, made for you features, variables and fees',
    features: [
      {
        text: 'Maximum LVR 95%',
        textValue: '',
        booleanValue: 'true',
      },
      {
        text: 'Maximum loan amount<sup>*</sup>',
        textValue: '$900,000',
        booleanValue: '',
      },
      {
        text: 'Minimum loan amount',
        textValue: '$50,000',
        booleanValue: '',
      },
      {
        text: 'Fixed rate options',
        textValue: '',
        booleanValue: 'false',
      },
      {
        text: 'Maximum LVR 95%',
        textValue: '',
        booleanValue: 'true',
      },
      {
        text: 'Maximum loan amount<sup>*</sup>',
        textValue: '',
        booleanValue: 'true',
      },
      {
        text: 'Minimum loan amount',
        textValue: '',
        booleanValue: 'true',
      },
      {
        text: 'Fixed rate options',
        textValue: '',
        booleanValue: 'true',
      },
      {
        text: 'Maximum LVR 95%',
        textValue: '',
        booleanValue: 'true',
      },
      {
        text: 'Maximum loan amount<sup>*</sup>',
        textValue: '',
        booleanValue: 'true',
      },
      {
        text: 'Minimum loan amount',
        textValue: '',
        booleanValue: 'true',
      },
      {
        text: 'Fixed rate options',
        textValue: '',
        booleanValue: 'true',
      },
    ],
    loanVariables: [
      {
        text: 'Maximum LVR 95%',
        textValue: '',
        booleanValue: 'true',
      },
      {
        text: 'Maximum loan amount<sup>*</sup>',
        textValue: '',
        booleanValue: 'true',
      },
      {
        text: 'Minimum loan amount',
        textValue: '',
        booleanValue: 'true',
      },
      {
        text: 'Fixed rate options',
        textValue: '',
        booleanValue: 'false',
      },
    ],
    fees: [
      {
        text: 'Maximum LVR 95%',
        textValue: '',
        booleanValue: 'true',
      },
      {
        text: 'Maximum loan amount<sup>*</sup>',
        textValue: '',
        booleanValue: 'true',
      },
      {
        text: 'Minimum loan amount',
        textValue: '',
        booleanValue: 'true',
      },
      {
        text: 'Fixed rate options',
        textValue: '',
        booleanValue: 'true',
      },
      {
        text: 'Maximum LVR 95%',
        textValue: '',
        booleanValue: 'true',
      },
      {
        text: 'Maximum loan amount<sup>*</sup>',
        textValue: '',
        booleanValue: 'true',
      },
    ],
    cta: {
      tag: 'a',
      variant: 'tertiary',
      text: 'Get your Key Fact Sheet here',
      href: '/about',
    },
  },
}
