import type { Meta, StoryObj } from '@storybook/vue3'
import CardCrossSell from '~/components/shared/card/CrossSell.vue'
import { CrossSellTypesEnum } from '~/utils/types/enums/cross-sell.enum'

const meta: Meta<typeof CardCrossSell> = {
  title: 'Shared/Cards/CrossSell',
  tags: ['autodocs'],
  component: CardCrossSell,
  render: args => ({
    components: { CardCrossSell },
    setup () {
      return { args }
    },
    template: `
      <div class="w-[215px]">
        <CardCrossSell v-bind="args" />
      </div>
    `,
  }),
  argTypes: {},
  parameters: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Home: Story = {
  args: {
    heading: 'Home Loans',
    image: {
      id: 4702163,
      alt: 'Home',
      name: '',
      focus: null,
      title: '',
      filename: 'https://a.storyblok.com/f/148182/112x112/c685ea160d/home.png',
      copyright: '',
      fieldtype: 'asset',
    },
    type: CrossSellTypesEnum.LOAN_HOME,
    link: {
      cached_url: '#',
    },
  },
  parameters: {},
}

export const Car: Story = {
  args: {
    heading: 'Car Loans',
    image: {
      id: 4702164,
      alt: 'Car',
      name: '',
      focus: null,
      title: '',
      filename: 'https://a.storyblok.com/f/148182/159x159/e488abd4ef/car.png',
      copyright: '',
      fieldtype: 'asset',
    },
    type: CrossSellTypesEnum.LOAN_CAR,
    link: {
      cached_url: '#',
    },
  },
  parameters: {},
}

export const Personal: Story = {
  args: {
    heading: 'Personal Loans',
    image: {
      id: 4702170,
      alt: 'Personal',
      name: '',
      focus: null,
      title: '',
      filename: 'https://a.storyblok.com/f/148182/159x159/bcedb67a4b/personal.png',
      copyright: '',
      fieldtype: 'asset',
    },
    type: CrossSellTypesEnum.LOAN_PERSONAL,
    link: {
      cached_url: '#',
    },
  },
  parameters: {},
}

export const Business: Story = {
  args: {
    heading: 'Business Loans',
    image: {
      id: 4702169,
      alt: 'Business',
      name: '',
      focus: null,
      title: '',
      filename: 'https://a.storyblok.com/f/148182/159x159/946c42100a/business.png',
      copyright: '',
      fieldtype: 'asset',
    },
    type: CrossSellTypesEnum.LOAN_BUSINESS,
    link: {
      cached_url: '#',
    },
  },
  parameters: {},
}

export const SMSF: Story = {
  args: {
    heading: 'SMSF Loans',
    image: {
      id: 4702172,
      alt: 'SMSF',
      name: '',
      focus: null,
      title: '',
      filename: 'https://a.storyblok.com/f/148182/159x159/7bef61d833/smsf.png',
      copyright: '',
      fieldtype: 'asset',
    },
    type: CrossSellTypesEnum.LOAN_SMSF,
    link: {
      cached_url: '#',
    },
  },
  parameters: {},
}

export const Commercial: Story = {
  args: {
    heading: 'Commercial Loans',
    image: {
      id: 4702171,
      alt: 'Commercial',
      name: '',
      focus: null,
      title: '',
      filename: 'https://a.storyblok.com/f/148182/159x159/5a28862c79/commercial.png',
      copyright: '',
      fieldtype: 'asset',
    },
    type: CrossSellTypesEnum.LOAN_COMMERCIAL,
    link: {
      cached_url: '#',
    },
  },
  parameters: {},
}
