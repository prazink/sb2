import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonSave from '~/components/shared/button/Save.vue'
import { ButtonSaveTypeEnum } from '~/utils/types/enums/buttons.enum'

const meta: Meta<typeof ButtonSave> = {
  title: 'Shared/Buttons/Save',
  tags: ['autodocs'],
  component: ButtonSave,
  render: args => ({
    components: { ButtonSave },
    setup () {
      return { args }
    },
    template: '<ButtonSave v-bind="args" />',
  }),
  argTypes: {
    label: {
      description: 'Add label',
    },
    active: {
      description: 'Is active or not?',
      disabled: {
        description: 'Disable button conditionally',
        control: { type: 'boolean' },
      },
    },
    type: {
      description: 'Save type whether adviser, blog, or product',
      table: {
        type: { summary: Object.values(ButtonSaveTypeEnum).join(',') },
        defaultValue: { summary: ButtonSaveTypeEnum.ADVISER },
      },
      control: {
        type: 'inline-radio',
      },
      options: Object.values(ButtonSaveTypeEnum),
    },
  },
  args: {
    label: '',
    active: false,
    type: ButtonSaveTypeEnum.ADVISER,
  },
}

export default meta

type Story = StoryObj<typeof ButtonSave>;

export const Default: Story = {
  args: {},
  parameters: {},
}

export const Active: Story = {
  args: {
    active: true,
  },
  parameters: {
    ...Default.parameters,
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Save',
  },
  parameters: {
    ...Default.parameters,
  },
}
