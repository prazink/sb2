import type { Meta, StoryObj } from '@storybook/vue3'
import ListTeams from '~/components/shared/list/Teams.vue'

const meta: Meta<typeof ListTeams> = {
  title: 'Shared/List/Teams',
  tags: ['autodocs'],
  component: ListTeams,
  render: args => ({
    components: { ListTeams },
    setup () {
      return { args }
    },
    template: `
      <ListTeams v-bind="args" />
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
        name: 'Heidi Armstrong',
        pronouns: 'he/him/his',
        title: 'Chief Marketing Officer',
        descriptionHeadline: 'Richard was appointed as Liberty’s Chairman in 2005. Richard was most recently Deputy Chairman of Lend Lease where he was a Director from 1986 to 2006 and Chairman of MLC until 2000.',
        descriptionBody: 'He was also a Partner with Freehills from 1971 to 1988 and a founding Principal of the corporate advisory and private equity group Wentworth Associates. Richard is a director of Investec (Australia) and a past Chairman of AustBrokers and past Director of Boral and Metcash.',
        image: {
          id: 4273193,
          alt: 'Heidi Armstrong',
          name: '',
          focus: null,
          title: 'Heidi Armstrong',
          filename: 'https://a.storyblok.com/f/148182/266x243/b7fd020844/heidi-armstrong.png',
          copyright: 'Chromecast',
          fieldtype: 'asset',
        },
        backgroundImage: '1',
      },
      {
        name: 'Vanessa Bani',
        pronouns: 'he/him/his',
        title: 'Group Manager - ACM',
        descriptionHeadline: 'Richard was appointed as Liberty’s Chairman in 2005. Richard was most recently Deputy Chairman of Lend Lease where he was a Director from 1986 to 2006 and Chairman of MLC until 2000.',
        descriptionBody: 'He was also a Partner with Freehills from 1971 to 1988 and a founding Principal of the corporate advisory and private equity group Wentworth Associates. Richard is a director of Investec (Australia) and a past Chairman of AustBrokers and past Director of Boral and Metcash.',
        image: {
          id: 4273193,
          alt: 'Vanessa Bani',
          name: '',
          focus: null,
          title: 'Vanessa Bani',
          filename: 'https://a.storyblok.com/f/148182/276x252/79ba50d21c/vanessa-bani.png',
          copyright: 'Chromecast',
          fieldtype: 'asset',
        },
        backgroundImage: '2',
      },
      {
        name: 'Anne Bastian',
        pronouns: 'he/him/his',
        title: 'Chief People Officer',
        descriptionHeadline: 'Richard was appointed as Liberty’s Chairman in 2005. Richard was most recently Deputy Chairman of Lend Lease where he was a Director from 1986 to 2006 and Chairman of MLC until 2000.',
        descriptionBody: 'He was also a Partner with Freehills from 1971 to 1988 and a founding Principal of the corporate advisory and private equity group Wentworth Associates. Richard is a director of Investec (Australia) and a past Chairman of AustBrokers and past Director of Boral and Metcash.',
        image: {
          id: 4273193,
          alt: 'Anne Bastian',
          name: '',
          focus: null,
          title: 'Anne Bastian',
          filename: 'https://a.storyblok.com/f/148182/273x247/125887a20c/anne-bastian.png',
          copyright: 'Chromecast',
          fieldtype: 'asset',
        },
        backgroundImage: '3',
      },
      {
        name: 'Paul Dracos',
        pronouns: 'he/him/his',
        title: 'Group Manager - Finance and Corporate Development',
        descriptionHeadline: 'Richard was appointed as Liberty’s Chairman in 2005. Richard was most recently Deputy Chairman of Lend Lease where he was a Director from 1986 to 2006 and Chairman of MLC until 2000.',
        descriptionBody: 'He was also a Partner with Freehills from 1971 to 1988 and a founding Principal of the corporate advisory and private equity group Wentworth Associates. Richard is a director of Investec (Australia) and a past Chairman of AustBrokers and past Director of Boral and Metcash.',
        image: {
          id: 4273193,
          alt: 'Paul Dracos',
          name: '',
          focus: null,
          title: 'Paul Dracos',
          filename: 'https://a.storyblok.com/f/148182/273x246/9618ef7a30/paul-dracos.png',
          copyright: 'Chromecast',
          fieldtype: 'asset',
        },
        backgroundImage: '1',
      },
      {
        name: 'Glen Foley',
        pronouns: 'he/him/his',
        title: 'Group Manager - Customer Experience',
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
        backgroundImage: '2',
      },
      {
        name: 'Shaun Gibson',
        pronouns: 'he/him/his',
        title: 'Group Manager - Motor',
        descriptionHeadline: 'Richard was appointed as Liberty’s Chairman in 2005. Richard was most recently Deputy Chairman of Lend Lease where he was a Director from 1986 to 2006 and Chairman of MLC until 2000.',
        descriptionBody: 'He was also a Partner with Freehills from 1971 to 1988 and a founding Principal of the corporate advisory and private equity group Wentworth Associates. Richard is a director of Investec (Australia) and a past Chairman of AustBrokers and past Director of Boral and Metcash.',
        image: {
          id: 4273193,
          alt: 'Shaun Gibson',
          name: '',
          focus: null,
          title: 'Shaun Gibson',
          filename: 'https://a.storyblok.com/f/148182/261x247/a50f9f7e0c/shaun-gibson.png',
          copyright: 'Chromecast',
          fieldtype: 'asset',
        },
        backgroundImage: '3',
      },
    ],
  },
  parameters: {},
}
