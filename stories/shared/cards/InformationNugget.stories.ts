import type { Meta, StoryObj } from '@storybook/vue3'
import CardInformationNugget from '~/components/shared/card/InformationNugget.vue'

const meta: Meta<typeof CardInformationNugget> = {
  title: 'Shared/Cards/InformationNugget',
  tags: ['autodocs'],
  component: CardInformationNugget,
  render: args => ({
    components: { CardInformationNugget },
    setup () {
      return { args }
    },
    template: `
      <CardInformationNugget v-bind="args" />
    `,
  }),
  args: {},
  parameters: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tag: 'Life at liberty',
    content: 'Did you know that 50% of all managers at Liberty identify as female 👩',
    cta: {
      type: 'tertiary',
      size: 'medium',
      label: 'optional CTA',
      link: {
        cached_url: '/',
      },
    },
  },
}
