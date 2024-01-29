import type { Meta, StoryObj } from '@storybook/vue3'
import ListInfoBlock from '~/components/shared/list/InfoBlock.vue'

const meta: Meta<typeof ListInfoBlock> = {
  title: 'Shared/List/InfoBlocks',
  tags: ['autodocs'],
  component: ListInfoBlock,
  render: args => ({
    components: { ListInfoBlock },
    setup () {
      return { args }
    },
    template: `
      <ListInfoBlock v-bind="args" />
    `,
  }),
  argTypes: {},
  parameters: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      {
        icon: 'call',
        heading: 'Call us today',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in in eu tincidunt volutpat. Purus, mi in viverra orci tempus elementum egestas. Blandit dignissim vulputate gravida mauris est aliquet ullamcorper.',
        ctas: [
          {
            type: 'secondary',
            size: 'medium',
            label: 'Call to action',
            link: {
              cached_url: '/',
            },
          },
          {
            type: 'tertiary',
            size: 'medium',
            label: 'Optional',
            link: {
              cached_url: '/',
            },
          },
        ],
        image: {
          alt: 'Icon',
          filename: 'https://a.storyblok.com/f/148182/159x159/bcedb67a4b/personal.png',
        },
      },
      {
        icon: 'call',
        heading: 'Call us today',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in in eu tincidunt volutpat. Purus, mi in viverra orci tempus elementum egestas. Blandit dignissim vulputate gravida mauris est aliquet ullamcorper.',
        ctas: [
          {
            type: 'secondary',
            size: 'medium',
            label: 'Call to action',
            link: {
              cached_url: '/',
            },
          },
          {
            type: 'tertiary',
            size: 'medium',
            label: 'Optional',
            link: {
              cached_url: '/',
            },
          },
        ],
        image: {
          alt: 'Icon',
          filename: 'https://a.storyblok.com/f/148182/159x159/bcedb67a4b/personal.png',
        },
      },
      {
        icon: 'call',
        heading: 'Call us today',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in in eu tincidunt volutpat. Purus, mi in viverra orci tempus elementum egestas. Blandit dignissim vulputate gravida mauris est aliquet ullamcorper.',
        ctas: [
          {
            type: 'secondary',
            size: 'medium',
            label: 'Call to action',
            link: {
              cached_url: '/',
            },
          },
          {
            type: 'tertiary',
            size: 'medium',
            label: 'Optional',
            link: {
              cached_url: '/',
            },
          },
        ],
        image: {
          alt: 'Icon',
          filename: 'https://a.storyblok.com/f/148182/159x159/bcedb67a4b/personal.png',
        },
      },
    ],
  },
}
