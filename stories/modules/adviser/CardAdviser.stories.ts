import type { Meta, StoryObj } from '@storybook/vue3'
import CardAdviser from '~/components/modules/adviser/CardAdviser.vue'

const meta: Meta<typeof CardAdviser> = {
  title: 'Modules/Advisers/Cards/Adviser',
  tags: ['autodocs'],
  component: CardAdviser,
  render: args => ({
    components: { CardAdviser },
    setup () {
      return { args }
    },
    template: `
      <div class="lg:w-[500px]">
        <CardAdviser v-bind="args" />
      </div>
    `,
  }),
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    fullName: 'Linda Longiastname',
    phoneNumber: '0412 215 114',
    image: {
      id: 4273194,
      alt: 'Linda Longiastname',
      name: '',
      focus: null,
      title: 'Linda Longiastname',
      filename:
        'https://a.storyblok.com/f/148182/191x191/f4ca493a10/linda_shmidt.png',
      copyright: 'Chromecast',
      fieldtype: 'asset',
    },
  },
}
