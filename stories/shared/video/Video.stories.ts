import type { Meta, StoryObj } from '@storybook/vue3'
import VideoPlayer from '~/components/shared/video/Video.vue'

const meta: Meta<typeof VideoPlayer> = {
  title: 'Shared/Video/Player',
  tags: ['autodocs'],
  component: VideoPlayer,
  render: args => ({
    components: { VideoPlayer },
    setup () {
      return { args }
    },
    template: `
      <VideoPlayer v-bind="args" />
    `,
  }),
  argTypes: {
    videoUrl: {
      description: 'Accepts a Youtube URL',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: { type: 'text' },
      defaultValue: 'https://www.youtube.com/watch?v=wCIyR6rJ2HU',
    },
    videoPoster: {
      description: 'Accepts a Storyblok image object',
      table: {
        type: { summary: 'object' },
      },
    },
  },
  parameters: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Youtube: Story = {
  args: {
    videoUrl: 'https://www.youtube.com/watch?v=wCIyR6rJ2HU',
    videoPoster: {
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

export const Wistia: Story = {
  args: {
    ...Youtube.args,
    videoUrl: '//fast.wistia.net/embed/iframe/e7htabzv62?videoFoam=true',
  },
}

export const WithHeading: Story = {
  args: {
    ...Youtube.args,
    heading: 'How to apply for a new business loan and the impact to your business',
  },
}
