import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonFilter from '~/components/shared/button/Filter.vue'
import { ButtonVariantEnum } from '~/utils/types/enums/buttons.enum'

const meta: Meta<typeof ButtonFilter> = {
  title: 'Shared/Buttons/Filter',
  tags: ['autodocs'],
  component: ButtonFilter,
  render: (args: any) => ({
    components: { ButtonFilter },
    setup () {
      return { args }
    },
    template: `
      <ButtonFilter v-bind="args"></ButtonFilter>
    `,
  }),
  argTypes: {
    label: {
      description: 'Can also be passed via default `<slot>`',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'All' },
      },
      control: { type: 'text' },
    },
    variant: {
      description: 'Toggle between primary/secondary filter buttons',
      table: {
        type: { summary: Object.values(ButtonVariantEnum).join(',') },
        defaultValue: { summary: ButtonVariantEnum.PRIMARY },
      },
      control: {
        type: 'radio',
      },
      options: Object.values(ButtonVariantEnum),
    },
    isActive: {
      description: 'Toggles active state of button when selected',
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof ButtonFilter>;

export const Default: Story = {
  args: {
    label: 'Button',
  },
}

export const Active: Story = {
  args: {
    ...Default.args,
    isActive: true,
  },
}

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: ButtonVariantEnum.SECONDARY,
  },
}

export const SecondaryActive: Story = {
  args: {
    ...Default.args,
    ...Secondary.args,
    ...Active.args,
  },
}
