import type { Meta, StoryObj } from '@storybook/vue3'
import CardBlogLoading from '~/components/shared/card/BlogLoading.vue'

const meta: Meta<typeof CardBlogLoading> = {
  title: 'Shared/Cards/BlogLoading',
  tags: ['autodocs'],
  component: CardBlogLoading,
  render: (args: any) => ({
    components: { CardBlogLoading },
    setup () {
      return {
        args,
        cardWidth: args.isHorizontal && !args.isExpanded ? 'lg:w-[600px]' : 'lg:w-[400px]',
      }
    },
    template: `
      <div
        :class="[
          cardWidth
        ]"
      >
        <CardBlogLoading v-bind="args" />
      </div>
    `,
  }),
  argTypes: {
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
  args: {},
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
