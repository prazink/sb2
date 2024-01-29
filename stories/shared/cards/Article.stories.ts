import type { Meta, StoryObj } from '@storybook/vue3'
import VRuntimeTemplate from 'vue3-runtime-template'
import CardArticle from '~/components/shared/card/Article.vue'

const meta: Meta<typeof CardArticle> = {
  title: 'Shared/Cards/Article',
  tags: ['autodocs'],
  component: CardArticle,
  render: args => ({
    components: { CardArticle, VRuntimeTemplate },
    setup () {
      return { args }
    },
    template: `
      <CardArticle v-bind="{ date: args.date }">
        <template v-if="${'slotDefault' in args}">
          <v-runtime-template :template="args.slotDefault" />
        </template>
      </CardArticle>
    `,
    /* #NOTE components: { VRuntimeTemplate },
        template: `<v-runtime-template :template="args.default" />` */
  }),
  argTypes: {
    date: {
      description: 'Set date text',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: '24/02/2022',
    slotDefault: '<p>Liberty settles $1 billion prime RMBS issue</p>',
  },
}

export const WithLink: Story = {
  args: {
    ...Default.args,
    slotDefault: '<p><a href="#">Liberty Financial prices its tenth medium-term note issue</a></p>',
  },
}

export const MultiLine: Story = {
  args: {
    ...Default.args,
    slotDefault: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ullam fuga veniam ex ipsa, voluptatibus velit sint facere sit quas inventore quisquam sed ducimus, quibusdam recusandae rerum culpa porro unde.</p>',
  },
}

export const NoDate: Story = {
  args: {
    date: '',
    slotDefault: '<p><a href="#">Low rate home loan calculator</a></p>',
  },
}
