import type { Meta, StoryObj } from '@storybook/vue3'
import TrustPilotWidget from '~/components/shared/trustpilot/Widget.vue'

const meta: Meta<typeof TrustPilotWidget> = {
  title: 'Shared/Cards/TrustPilot/Widget',
  tags: ['autodocs'],
  component: TrustPilotWidget,
  render: args => ({
    components: { TrustPilotWidget },
    setup () {
      return { args }
    },
    template: `
      <div class="container mx-auto"><TrustPilotWidget v-bind="args" class="mx-auto"/></div>
    `,
  }),
}

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trustScore: '5.0',
    starImage: '//images-static.trustpilot.com/api/stars/5/star.svg',
    starString: 'Excellent',
    trustpilotUrl: 'https://au.trustpilot.com/review/www.liberty.com.au/',
    numberOfReviews: 2940,
  },
}

export const FooterWidget: Story = {
  args: {
    trustScore: '5.0',
    starImage: '//images-static.trustpilot.com/api/stars/5/star.svg',
    starString: 'Excellent',
    trustpilotUrl: 'https://au.trustpilot.com/review/www.liberty.com.au/',
    numberOfReviews: 2940,
    showTrustScore: false,
  },
}

export const HeroWidget: Story = {
  args: {
    trustScore: '5.0',
    starImage: '//images-static.trustpilot.com/api/stars/5/star.svg',
    starString: 'Excellent',
    trustpilotUrl: 'https://au.trustpilot.com/review/www.liberty.com.au/',
    numberOfReviews: 2940,
    showTrustScore: false,
    showNumberOfReviews: false,
  },
}

export const Floating: Story = {
  render: args => ({
    components: { TrustPilotWidget },
    setup () {
      return { args }
    },
    template: `
      <div>
        <div class="bg-deep-sapphire text-white flex items-center justify-center h-[500px]">hero</div>
        <LayoutWrapper class="-my-[30px]">
          <LayoutGrid>
            <div class="col-start-3 col-end-10 bg-white p-4 rounded-lg">
              <LFReviewWidget v-bind="$data" />
            </div>
          </LayoutGrid>
        </LayoutWrapper>
        <div class="bg-cerulean text-white flex items-center justify-center h-[500px]">other content</div>
      </div>
    `,
  }),
  args: {
    ...Default.args,
  },
}
