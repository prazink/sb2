import type { Meta, StoryObj } from '@storybook/vue3'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import HeroHomeAnimation from '~/components/shared/hero/HomeAnimation.vue'

const meta: Meta<typeof HeroHomeAnimation> = {
  title: 'Shared/Hero/HomeAnimation',
  tags: ['autodocs'],
  component: HeroHomeAnimation,
  render: args => ({
    components: { HeroHomeAnimation },
    setup () {
      return { args }
    },
    template: `
      <HeroHomeAnimation v-bind="args" />
    `,
  }),
  argTypes: {
    heading: {
      description: 'Enter here your hero heading content',
      control: {
        type: 'text',
      },
    },
    subHeading: {
      description: 'Enter here your hero sub-heading content',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    heading: 'Loans for free thinkers',
    subHeading: "Whatever your situation, don't worry <br class='hidden sm:block'>we've got you covered",
    desktopImage: {
      alt: 'Home loan solutions for free thinkers',
      name: 'Home loan solutions for free thinkers',
      focus: null,
      title: 'Home loan solutions for free thinkers',
      filename: 'https://a.storyblok.com/f/148182/2784x1042/356c1de6e1/liberty_all-layered.png',
      fieldtype: 'asset',
    },
    mobileImages: [
      {
        id: 4439529,
        alt: 'Home Loan',
        name: '',
        focus: '198x126:199x127',
        title: 'loan-home',
        filename: 'https://a.storyblok.com/f/148182/750x630/004b36e0e5/liberty-home-loans-mobile.png',
        copyright: '',
        fieldtype: 'asset',
      },
      {
        id: 4459546,
        alt: 'Business Loan',
        name: '',
        focus: '203x115:204x116',
        title: 'loan-business',
        filename: 'https://a.storyblok.com/f/148182/750x630/77397773ca/liberty-business-loans-mobile.png',
        copyright: '',
        fieldtype: 'asset',
      },
    ],
    ctas: [
      {
        link: { id: '', url: '', linktype: 'story', fieldtype: 'multilink', cached_url: '' },
        size: 'medium',
        type: 'primary',
        label: 'Find the right loan for you',
        isInverted: true,
        isAnimated: true,
      },
    ],
    numberOfReviews: 200,
    trustScore: '4.5',
  },
  parameters: {},
}

export const MobileView: Story = {
  tags: ['autodocs'],
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
}
