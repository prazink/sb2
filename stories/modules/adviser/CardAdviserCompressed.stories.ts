import type { Meta, StoryObj } from '@storybook/vue3'
import CardAdviserCompressed from '~/components/modules/adviser/CardAdviserCompressed.vue'

const meta: Meta<typeof CardAdviserCompressed> = {
  title: 'Modules/Advisers/Cards/AdviserCompressed',
  tags: ['autodocs'],
  component: CardAdviserCompressed,
  render: args => ({
    components: { CardAdviserCompressed },
    setup () {
      return { args }
    },
    template: `
      <div class="lg:w-[280px]">
        <CardAdviserCompressed v-bind="args" />
      </div>
    `,
  }),
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    fullName: 'Linda Longiastname',
    image: {
      alt: 'Linda Longiastname',
      filename: 'https://a.storyblok.com/f/148182/191x191/f4ca493a10/linda_shmidt.png',
    },
  },
}

export const Vertical: Story = {
  args: {
    ...Default.args,
    vertical: true,
  },
}
