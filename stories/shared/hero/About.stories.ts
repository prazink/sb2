import type { Meta, StoryObj } from '@storybook/vue3'
import HeroAbout from '~/components/shared/hero/About.vue'

const meta: Meta<typeof HeroAbout> = {
  title: 'Shared/Hero/About',
  tags: ['autodocs'],
  component: HeroAbout,
  render: (args: any) => ({
    components: { HeroAbout },
    setup () {
      return { args }
    },
    template: `    
      <HeroAbout v-bind="args" />    
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
    heading: 'Flag bearers for all free thinkers',
    subHeading: 'We’re free thinkers too. Setting new standards in finance and the community.',
    desktopImage: {
      alt: 'About loan solutions for free thinkers',
      name: 'About loan solutions for free thinkers',
      focus: null,
      title: 'About loan solutions for free thinkers',
      filename: 'https://a.storyblok.com/f/148182/3400x1360/aed73de882/flag-bearer-flat.jpg',
      fieldtype: 'asset',
    },
    tabletImage:
      {
        id: 4439529,
        alt: 'About Loan',
        name: '',
        focus: '198x126:199x127',
        title: 'About',
        filename: 'https://a.storyblok.com/f/148182/1536x924/41eef41fbe/aboutus_tablet.jpg',
        copyright: '',
        fieldtype: 'asset',
      },
    mobileImage:
      {
        id: 4439529,
        alt: 'About Loan',
        name: '',
        focus: '198x126:199x127',
        title: 'About',
        filename: 'https://a.storyblok.com/f/148182/750x889/6cbc965094/aboutus_mobile.png',
        copyright: '',
        fieldtype: 'asset',
      },
  },
}
