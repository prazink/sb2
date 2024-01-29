import type { Meta, StoryObj } from '@storybook/vue3'
import HeroBlog from '~/components/shared/hero/Blog.vue'
import Button from '~/components/shared/button/Button.vue'

const meta: Meta<typeof HeroBlog> = {
  title: 'Shared/Hero/Blog',
  tags: ['autodocs'],
  component: HeroBlog,
  render: (args: any) => ({
    components: { HeroBlog, Button },
    setup () {
      return { args }
    },
    template: `
      <HeroBlog v-bind="args">
        <template #extras v-if="${'extras' in args}">${args.extras}</template>
      </HeroBlog>
    `,
  }),
  argTypes: {
    heading: {
      description: 'Enter here your hero heading content',
      control: {
        type: 'text',
      },
    },
    description: {
      description: 'Enter here your hero description content',
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
    image: {
      id: 4273193,
      alt: 'Moon Feature',
      name: '',
      focus: null,
      title: 'Moon Feature',
      filename: 'https://a.storyblok.com/f/148182/1600x1067/e685013473/moon-feature.webp',
      copyright: 'Chromecast',
      fieldtype: 'asset',
    },
  },
}

export const HasDetails: Story = {
  args: {
    ...Default.args,
    hasDetails: true,
    heading: 'Want to go from renting to ownership in 2022?',
    description: 'How to make your journey to homeownership a successful one.',
  },
}

export const ForBlogListing: Story = {
  argTypes: {
    heading: {
      description: 'Enter here your hero heading content',
      control: {
        type: 'text',
      },
    },
    description: {
      description: 'Enter here your hero description content',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    heading: 'Expert advice for Free Thinkers',
    description: 'How to make your journey to homeownership a successful one.',
    image: {
      id: 4273193,
      alt: 'Moon Feature',
      name: '',
      focus: null,
      title: 'Moon Feature',
      filename: 'https://a.storyblok.com/f/148182/1050x1050/309dddcd49/cutout-image-2x.png',
      copyright: 'Chromecast',
      fieldtype: 'asset',
    },
    isForListing: true,
    extras: `
      <div class="mt-7">
        <Button>Button</Button>
      </div>
    `,
  },
}
