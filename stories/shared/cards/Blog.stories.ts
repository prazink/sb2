import type { Meta, StoryObj } from '@storybook/vue3'
import CardBlog from '~/components/shared/card/Blog.vue'

const meta: Meta<typeof CardBlog> = {
  title: 'Shared/Cards/Blog',
  tags: ['autodocs'],
  component: CardBlog,
  render: (args: any) => ({
    components: { CardBlog },
    setup () {
      return { args }
    },
    template: `
      <div
        :class="[
          cardWidth
        ]"
      >
        <CardBlog v-bind="args" />
      </div>
    `,
  }),
  argTypes: {
    image: {
      description: 'Accepts a storyblok image',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '' },
      },
      control: { type: 'object' },
    },
    author: {
      description: 'Author object. Consists of `name` and `image` (Storyblok)',
    },
    publishedAt: {
      description: 'Formatted published date of article',
    },
    readTime: {
      description: 'Accepts (in minutes) the read time of article',
    },
    isExpanded: {
      description: 'Shows author and article details on card',
      control: { type: 'boolean' },
    },
    isHorizontal: {
      description: 'Shows horizontal layout for card',
      control: { type: 'boolean' },
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: '12345',
    url: '/blog/biz-wiz/want-to-go-from-renting-to-ownership-in-2022',
    heading: 'Want to go from renting to ownership in 2022?',
    description: 'How to make your journey to homeownership a successful one.',
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
    author: {
      name: 'Jack Smith',
      image: {
        id: 4291359,
        alt: 'Jack Smith',
        name: '',
        focus: null,
        title: 'Jack Smith',
        filename: 'https://a.storyblok.com/f/148182/640x480/888d0eb11e/jack-smith.jpeg',
        copyright: '',
        fieldtype: 'asset',
      },
    },
    publishedAt: '24 Dec, 2021',
    readTime: 6,
  },
}

export const WithAuthor: Story = {
  args: {
    ...Default.args,
    isExpanded: true,
  },
}

export const Horizontal: Story = {
  args: {
    ...Default.args,
    isHorizontal: true,
  },
}
