import type { Meta, StoryObj } from '@storybook/vue3'
import LFMediaBlockCTA from '../../components/shared/cta/MediaBlock.vue'
import Heading from '../../components/shared/heading/Heading.vue'
import { HeadingEnum } from '~/utils/types/enums/headings.enum'

const meta: Meta<typeof LFMediaBlockCTA> = {
  title: 'Shared/Cta/MediaBlock',
  tags: ['autodocs'],
  component: LFMediaBlockCTA,
  render: (args: any) => ({
    components: { LFMediaBlockCTA, Heading, HeadingEnum },
    setup () {
      return { args }
    },
    template: `
      <LFMediaBlockCTA v-bind="args">
        <template v-if="${'content' in args}" #content>${args.content}</template>
      </LFMediaBlockCTA>
    `,
    argTypes: {

    },
    parameters: {
      layout: 'fullscreen',
    },
  }),
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: '<h2>Borrow up to <b>95% of the property value</b></h2><p>Use one of our easy-to-use calculators to get a better idea of what\'d possible.</p><ul><li>Understand what a low deposit home loans are</li><li class="list-check">Learn about who low deposit home loans are for</li><li class="list-check">Get expert advice on how to apply for a low deposit</li></ul>',
    image: {
      id: 148182,
      alt: 'Borrow up to 95% of the property value',
      name: 'Borrow up to 95% of the property value',
      focus: null,
      title: 'Borrow up to 95% of the property value',
      filename: 'https://a.storyblok.com/f/148182/383x384/2be19e23f8/liberty_icons_home.png',
      fieldtype: 'asset',
    },
    flipRow: false,
    ctas: [
      {
        type: 'primary',
        size: 'medium',
        label: 'Calculate borrowing power',
        link: {
          cached_url: 'https://www.liberty.com.au/home-loans/calculators/borrowing-power',
        },
      },
      {
        type: 'secondary',
        size: 'medium',
        label: 'All calculators',
        link: {
          cached_url: 'https://www.liberty.com.au/home-loans/calculators',
        },
      },
    ],
  },

}
export const WithDisclaimer: Story = {
  args: {
    content: '<h2>Borrow up to <b>95% of the property value</b></h2><p>Use one of our easy-to-use calculators to get a better idea of what\'d possible.</p><ul><li>Understand what a low deposit home loans are</li><li class="list-check">Learn about who low deposit home loans are for</li><li class="list-check">Get expert advice on how to apply for a low deposit</li></ul>',
    image: {
      id: 148182,
      alt: 'Borrow up to 95% of the property value',
      name: 'Borrow up to 95% of the property value',
      focus: null,
      title: 'Borrow up to 95% of the property value',
      filename: 'https://a.storyblok.com/f/148182/383x384/2be19e23f8/liberty_icons_home.png',
      fieldtype: 'asset',
    },
    flipRow: false,
    disclaimer: 'We take your privacy seriously. See our collection notice here.',

    ctas: [
      {
        type: 'primary',
        size: 'medium',
        label: 'Calculate borrowing power',
        link: {
          cached_url: 'https://www.liberty.com.au/home-loans/calculators/borrowing-power',
        },
      },
      {
        type: 'secondary',
        size: 'medium',
        label: 'All calculators',
        link: {
          cached_url: 'https://www.liberty.com.au/home-loans/calculators',
        },
      },
    ],
  },

}
export const WithVideo: Story = {
  args: {
    content: '<h2>Borrow up to <b>95% of the property value</b></h2><p>Use one of our easy-to-use calculators to get a better idea of what\'d possible.</p><ul><li>Understand what a low deposit home loans are</li><li class="list-check">Learn about who low deposit home loans are for</li><li class="list-check">Get expert advice on how to apply for a low deposit</li></ul>',
    image: {
      alt: 'Moon Feature',
      name: '',
      focus: null,
      title: 'Moon Feature',
      filename: 'https://a.storyblok.com/f/148182/1600x1067/e685013473/moon-feature.webp',
      copyright: 'Chromecast',
      fieldtype: 'asset',
    },
    video: 'https://www.youtube.com/watch?v=Tx4pHw3kgOA&t=1s',
    ctas: [
      {
        type: 'primary',
        size: 'medium',
        label: 'Calculate borrowing power',
        link: {
          cached_url: 'https://www.liberty.com.au/home-loans/calculators/borrowing-power',
        },
      },
      {
        type: 'secondary',
        size: 'medium',
        label: 'All calculators',
        link: {
          cached_url: 'https://www.liberty.com.au/home-loans/calculators',
        },
      },
    ],
    flipRow: false,
  },

}
