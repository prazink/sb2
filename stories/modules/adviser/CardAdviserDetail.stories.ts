import type { Meta, StoryObj } from '@storybook/vue3'
import CardAdviserDetail from '~/components/modules/adviser/CardAdviserDetail.vue'

const meta: Meta<typeof CardAdviserDetail> = {
  title: 'Modules/Advisers/Cards/AdviserDetail',
  tags: ['autodocs'],
  component: CardAdviserDetail,
  render: (args: any) => ({
    components: { CardAdviserDetail },
    setup () {
      return { args }
    },
    template: `
      <CardAdviserDetail v-bind="args"> <template #extras>
        <iframe
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="https://maps.google.com/maps?q=Melbourne&t=&z=11&ie=UTF8&iwloc=&output=embed"
      /></template>
      </CardAdviserDetail>
    `,
  }),
}

export default meta

type Story = StoryObj<typeof CardAdviserDetail>;

export const Default: Story = {
  args: {
    text: 'Linda is your mortgage broker for Sippy Downs and surrounding areas',
    phone: '0412 215 114',
    email: 'lschmidt@libertynetwork.com.au',
    name: 'Linda',
    specialties: ['Home Loans', 'Business finance', 'House and land finance', 'Personal loans'],
    bookUrl: '/',
    linkedinUrl: '/',
    facebookUrl: '/',
    twitterUrl: '/',
  },
}
