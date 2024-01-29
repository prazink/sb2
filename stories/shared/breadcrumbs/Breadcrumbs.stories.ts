import type { Meta, StoryObj } from '@storybook/vue3'
import Breadcrumbs from '~/components/shared/breadcrumbs/Breadcrumbs.vue'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Shared/Breadcrumbs/Breadcrumbs',
  component: Breadcrumbs,
  render: (args: any) => ({
    components: { Breadcrumbs },
    tags: ['autodocs'],
    setup () {
      return { args }
    },
    template: `<Breadcrumbs v-bind="args">
        <template v-if="${'slotDefault' in args}">${args.slotDefault}</template>
        </Breadcrumbs>
        `,
  }),
}

export default meta

type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {
  args: {
    items: [
      { url: '/', label: 'Home' },
      { url: '/resources', label: 'Resources' },
      { url: '/resources/small-biz-wiz', label: 'Small biz wiz' },
      { label: 'Your guide to small business loans' },
    ],
  },
}
