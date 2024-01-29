import type { Meta, StoryObj } from '@storybook/vue3'
import CardMessage from '~/components/shared/card/Message.vue'

const meta: Meta<typeof CardMessage> = {
  title: 'Shared/Cards/Message',
  tags: ['autodocs'],
  component: CardMessage,
  render: (args: any) => ({
    components: { CardMessage },
    setup () {
      return { args }
    },
    template: `
      <CardMessage v-bind="args">
        <template v-if="${'content' in args}" #content>${args.content}</template>
      </CardMessage>
    `,
  }),
  args: {},
  parameters: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    heading: 'Important Message',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo non sint omnis nulla excepturi voluptas amet fugiat laudantium velit qui pariatur vero eos accusantium natus, est eius unde, iusto quidem.',
  },
}
