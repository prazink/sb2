import type { Meta, StoryObj } from '@storybook/vue3'
import CardFindAnAdviser from '~/components/modules/adviser/CardFindAnAdviser.vue'

const meta: Meta<typeof CardFindAnAdviser> = {
  title: 'Modules/Advisers/Cards/FindAnAdviser',
  tags: ['autodocs'],
  component: CardFindAnAdviser,
  render: args => ({
    components: { CardFindAnAdviser },
    setup () {
      return { args }
    },
    template: `
      <CardFindAnAdviser v-bind="args" />
    `,
  }),
  args: {},
  parameters: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: '1',
    firstName: 'Scott',
    fullName: 'Scott Baker',
    phoneNumber: '0412 215 114',
    image: {
      id: 4273194,
      alt: 'Scott Baker',
      name: '',
      focus: null,
      title: 'Scott Baker',
      filename:
                'https://d2ttwt9gu7swv4.cloudfront.net/assets/images/advisers/8C62745B-1685-4568-B92B-743C4087426A.png',
      copyright: 'Chromecast',
      fieldtype: 'asset',
    },
    specialties: [
      'Home Loans',
      'Business finance',
      'House and land finance',
      'Personal loans',
    ],
  },
  parameters: {},
}
