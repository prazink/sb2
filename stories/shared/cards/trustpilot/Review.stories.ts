import type { Meta, StoryObj } from '@storybook/vue3'
import CardTrustPilotReview from '~/components/shared/trustpilot/Card.vue'
import LayoutGrid from '~/components/shared/layout/Grid.vue'
import LayoutWrapper from '~/components/shared/layout/Wrapper.vue'

const meta: Meta<typeof CardTrustPilotReview> = {
  title: 'Shared/Cards/TrustPilot/Review',
  tags: ['autodocs'],
  component: CardTrustPilotReview,
  render: args => ({
    components: { CardTrustPilotReview, LayoutGrid, LayoutWrapper },
    setup () {
      return { args }
    },
    template: `
      <LayoutWrapper>
        <LayoutGrid>
          <CardTrustPilotReview v-bind="args" class="col-span-12 sm:col-span-6 md:col-span-4"/>
        </LayoutGrid>
      </LayoutWrapper>
    `,
  }),
  argTypes: {
    review: {
      control: {
        type: 'array',
      },
    },
    showAdviserCTA: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    review: {
      component: 'trustpilot-review-card',
      text: 'Brett helped me and my partner achieve a dream we had, very professional and easy to...',
      title: 'Brett helped me and my partner achieve…',
      consumer: 'Jodie Jamieson',
      star_image: '//images-static.trustpilot.com/api/stars/5/star.svg',
      review_date: '07 Mar 2022',
      adviser_name: 'Brett Foster',
      adviser_url: 'brett-foster',
      adviser_guid: 'BB14BACB-9C04-403A-BEA6-7220605D386A',
    },
  },
}

export const WithAdviser: Story = {
  args: {
    ...Default.args,
    showAdviserCTA: true,
  },
}
