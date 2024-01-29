import type { Meta, StoryObj } from '@storybook/vue3'
import Heading from '~/components/shared/heading/Heading.vue'
import { HeadingEnum } from '~/utils/types/enums/headings.enum'

const meta: Meta<typeof Heading> = {
  title: 'Shared/Elements/Heading',
  tags: ['autodocs'],
  component: Heading,
  render: (args: any) => ({
    components: { Heading },
    setup () {
      return { args }
    },
    template: '<Heading v-bind="args" />',
  }),
  argTypes: {
    size: {
      control: { type: 'select' },
      options: Object.values(HeadingEnum),
    },
    tag: {
      control: { type: 'select' },
      options: Object.values(HeadingEnum),
    },
  },
}

export default meta

type Story = StoryObj<typeof Heading>;

export const Heading1: Story = {
  args: {
    text: 'Heading 1',
    tag: HeadingEnum.H1,
    size: HeadingEnum.H1,
  },
}

export const Heading2: Story = {
  args: {
    text: 'Heading 2',
    tag: HeadingEnum.H2,
    size: HeadingEnum.H2,
  },
}

export const Heading3: Story = {
  args: {
    text: 'Heading 3',
    tag: HeadingEnum.H3,
    size: HeadingEnum.H3,
  },
}

export const Heading4: Story = {
  args: {
    text: 'Heading 4',
    tag: HeadingEnum.H4,
    size: HeadingEnum.H4,
  },
}

export const Heading5: Story = {
  args: {
    text: 'Heading 5',
    tag: HeadingEnum.H5,
    size: HeadingEnum.H5,
  },
}

export const Heading6: Story = {
  args: {
    text: 'Heading 6',
    tag: HeadingEnum.H6,
    size: HeadingEnum.H6,
  },
}
