import type { Meta, StoryObj } from '@storybook/vue3'
import FilterBar from '~/components/shared/bars/FilterBar.vue'

const meta: Meta<typeof FilterBar> = {
  title: 'Shared/Bars/FilterBar',
  tags: ['autodocs'],
  component: FilterBar,
  render: args => ({
    components: { FilterBar },
    setup () {
      return { args }
    },
    template: `
      <FilterBar v-bind="args" />
    `,
  }),
  argTypes: {},
  parameters: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    categories: [
      { label: 'Loan school', slug: 'loan-school' },
      { label: 'Free thinking finance', slug: 'free-thinking-finance' },
      { label: 'Investor central', slug: 'investor-central' },
      { label: 'Small biz wiz', slug: 'small-biz-wiz' },
    ],
  },
}

export const Centered: Story = {
  args: {
    ...Default.args,
    isCentered: true,
  },
}

export const PreSelected: Story = {
  args: {
    ...Default.args,
    defaultCategory: 'loan-school',
  },
}

export const WithTags: Story = {
  args: {
    categories: [
      {
        label: 'Loan school',
        slug: 'loan-school',
        tags: [
          { value: 'tag-a', name: 'Tag A' },
          { value: 'tag-b', name: 'Tag B' },
          { value: 'tag-c', name: 'Tag C' },
        ],
      },
      {
        label: 'Free thinking finance',
        slug: 'free-thinking-finance',
        tags: [
          { value: 'tag-f', name: 'Tag F' },
          { value: 'tag-x', name: 'Tag X' },
          { value: 'tag-d', name: 'Tag D' },
          { value: 'tag-a', name: 'Tag A' },
          { value: 'tag-b', name: 'Tag B' },
          { value: 'tag-m', name: 'Tag M' },
          { value: 'tag-n', name: 'Tag N' },
          { value: 'tag-e', name: 'Tag E' },
        ],
      },
      {
        label: 'Investor central',
        slug: 'investor-central',
        tags: [
          { value: 'tag-h', name: 'Tag H' },
          { value: 'tag-s', name: 'Tag S' },
          { value: 'tag-o', name: 'Tag O' },
          { value: 'tag-z', name: 'Tag Z' },
        ],
      },
      {
        label: 'Small biz wiz',
        slug: 'small-biz-wiz',
        tags: [
          { value: 'tag-b', name: 'Tag B' },
          { value: 'tag-c', name: 'Tag C' },
        ],
      },
    ],
  },
}
