import type { Meta, StoryObj } from '@storybook/vue3'
import CardMeetTheTeam from '~/components/shared/card/MeetTheTeam.vue'

const meta: Meta<typeof CardMeetTheTeam> = {
  title: 'Shared/Cards/Meet-The-Team',
  tags: ['autodocs'],
  component: CardMeetTheTeam,
  render: args => ({
    components: { CardMeetTheTeam },
    setup () {
      return { args }
    },
    template: `
      <CardMeetTheTeam v-bind="args" />
    `,
  }),
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'Glen Foley',
    pronouns: 'he/him/his',
    title: 'Chief Marketing Officer',
    descriptionHeadline: 'Richard was appointed as Liberty’s Chairman in 2005. Richard was most recently Deputy Chairman of Lend Lease where he was a Director from 1986 to 2006 and Chairman of MLC until 2000.',
    descriptionBody: 'He was also a Partner with Freehills from 1971 to 1988 and a founding Principal of the corporate advisory and private equity group Wentworth Associates. Richard is a director of Investec (Australia) and a past Chairman of AustBrokers and past Director of Boral and Metcash.',
    image: {
      id: 4273193,
      alt: 'Glen Foley',
      name: '',
      focus: null,
      title: 'Glen Foley',
      filename: 'https://a.storyblok.com/f/148182/274x273/ed0c4cbe4e/glen-foley.png',
      copyright: 'Chromecast',
      fieldtype: 'asset',
    },
    backgroundImage: '1',
  },
  parameters: {},
}
