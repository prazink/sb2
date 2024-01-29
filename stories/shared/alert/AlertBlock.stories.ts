import type { Meta, StoryObj } from '@storybook/vue3'
import AlertBlock from '~/components/shared/alert/Block.vue'

const meta: Meta<typeof AlertBlock> = {
  title: 'Shared/Alert/Block',
  component: AlertBlock,
  render: (args: any) => ({
    components: { AlertBlock },
    tags: ['autodocs'],
    setup () {
      return { args }
    },
    template: `<AlertBlock v-bind="args">
        <template v-if="${'slotDefault' in args}">${args.slotDefault}</template>
        </AlertBlock>
        `,
  }),
  argTypes: {
    slotDefault: {
      description: 'Other description content',
      control: { type: 'text' },
    },
  },
  args: {
    slotDefault: '',
  },
}

export default meta

type Story = StoryObj<typeof AlertBlock>

export const Default: Story = {
  args: {
    slotDefault: `
      <p>If you've been impacted by recent floods, we're here to help. <a href="#">Find out more.</a></p>
    `,
  },
}
