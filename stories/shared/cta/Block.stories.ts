import type { Meta, StoryObj } from '@storybook/vue3'
import CtaBlock from '../../components/shared/cta/Block.vue'
import LayoutWrapper from '../../components/shared/layout/Wrapper.vue'
import LayoutGrid from '~/components/shared/layout/Grid.vue'
import Button from '~/components/shared/button/Button.vue'

const meta: Meta<typeof CtaBlock> = {
  title: 'Shared/Cta/Block',
  tags: ['autodocs'],
  component: CtaBlock,
  render: (args: any) => ({
    components: { CtaBlock, LayoutWrapper, LayoutGrid, Button },
    setup () {
      return { args }
    },
    template: `
      <LayoutWrapper v-if="!args.minified">
        <CtaBlock v-bind="args">
          <template v-if="${'slotDefault' in args}">${args.slotDefault}</template>
        </CtaBlock>
      </LayoutWrapper>

      <!-- Additional Template -->
      <LayoutWrapper v-else>
          <LayoutGrid>
              <div class="col-span-full lg:col-span-6">
                  <CtaBlock v-bind="args">
                      <template v-if="${'slotDefault' in args}">${args.slotDefault}</template>
                  </CtaBlock>
              </div>
          </LayoutGrid>
      </LayoutWrapper>
    `,
    argTypes: {
      slotDefault: {
        description: 'Other description content',
        control: { type: 'text' },
      },

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
    heading: 'Loans for free thinkers',
    content: "Let's work together and make things happen!",
    image: {
      alt: 'Loans for free thinkers',
      copyright: '',
      fieldtype: 'asset',
      filename: 'https://a.storyblok.com/f/148182/335x335/a844fd5aeb/loans-for-free-thinkers.png',
      focus: null,
      id: 4719851,
      name: '',
      title: '',
    },
    imageCentered: false,
    minified: false,
    flipRow: false,
    slotDefault: `
    <Button variant="primary">
      Find the right loan for you
    </Button>
    <Button variant="secondary" inverted>
      Find your local adviser
    </Button>
  `,
  },
}

export const SingleCta: Story = {
  args: {
    ...Default.args,
    slotDefault: `
      <Button variant="primary">
        Find the right loan for you
      </Button>
    `,
  },
}

export const Centered: Story = {
  args: {
    ...SingleCta.args,
    image: {
      alt: 'Liberty Home Loans ',
      copyright: '',
      fieldtype: 'asset',
      filename: 'https://a.storyblok.com/f/148182/358x371/828d67e787/green-tick-350.png',
      focus: null,
      id: 4667276,
      name: '',
      title: 'Liberty Home Loans ',
    },
    imageCentered: true,
  },
}
export const Minified: Story = {
  args: {
    heading: 'Loans for free thinkers',
    content: "Let's work together and make things happen!",
    image: {
      alt: 'Liberty Home Loans ',
      copyright: '',
      fieldtype: 'asset',
      filename: 'https://a.storyblok.com/f/148182/335x335/a844fd5aeb/loans-for-free-thinkers.png',
      focus: null,
      id: 4667276,
      name: '',
      title: 'Liberty Home Loans ',
    },
    imageCentered: true,
    minified: true,
    slotDefault: `
    <Button variant="primary">
      Find the right loan for you
    </Button>
  `,

  },

}
