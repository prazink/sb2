import type { Meta, StoryObj } from '@storybook/vue3'
import CardAuthor from '~/components/shared/card/Author.vue'
import LayoutWrapper from '~/components/shared/layout/Wrapper.vue'
import LayoutGrid from '~/components/shared/layout/Grid.vue'

const meta: Meta<typeof CardAuthor> = {
  title: 'Shared/Cards/Author',
  tags: ['autodocs'],
  component: CardAuthor,
  render: (args: any) => ({
    components: { CardAuthor, LayoutWrapper, LayoutGrid },
    setup () {
      return { args }
    },
    template: `
      <LayoutWrapper class="py-4 md:py-8 lg:py-10">
        <LayoutGrid>
          <div class="col-span-full lg:col-span-6">
            <CardAuthor v-bind="args">
              <template v-if="${'slotDefault' in args}">${args.slotDefault}</template>
            </CardAuthor>
          </div>
        </LayoutGrid>
      </LayoutWrapper>
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
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'Jack Smith',
    description: 'Manager at Powershop',
    image: {
      alt: 'Jack Smith',
      filename: 'https://a.storyblok.com/f/148182/640x480/888d0eb11e/jack-smith.jpeg',
    },
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
          <CardAuthor v-bind="args"/>
        `,
      },
    },
  },
}

export const WithContent: Story = {
  args: {
    ...Default.args,
    slotDefault: `
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea aut explicabo unde quis ipsum dignissimos modi voluptatibus quos. Fuga nihil delectus suscipit? Saepe dolores commodi at quasi hic, alias eveniet!</p>
    `,
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
          <CardAuthor v-bind="args">
            ... some content here
          </CardAuthor>
        `,
      },
    },
  },
}
