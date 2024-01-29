import type { Meta, StoryObj } from '@storybook/vue3'
import CardAdviserCompressedLoading from '~/components/modules/adviser/CardAdviserCompressedLoading.vue'

const meta: Meta<typeof CardAdviserCompressedLoading> = {
  title: 'Modules/Advisers/Cards/AdviserCompressedLoading',
  tags: ['autodocs'],
  component: CardAdviserCompressedLoading,
  render: args => ({
    components: { CardAdviserCompressedLoading },
    setup () {
      return { args }
    },
    template: `
      <div class="lg:w-[280px]">
        <CardAdviserCompressedLoading v-bind="args" />
      </div>
    `,
  }),
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Vertical: Story = {
  args: {
    vertical: true,
  },
}
