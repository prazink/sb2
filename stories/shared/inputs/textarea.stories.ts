import type { Meta, StoryObj } from '@storybook/vue3'
import FormBase from '~/components/shared/forms/Base.vue'

const meta: Meta<typeof FormBase> = {
  title: 'Shared/Inputs/Textarea',
  tags: ['autodocs'],
  component: FormBase,
  render: args => ({
    components: { FormBase },
    setup () {
      return { args }
    },
    template: `
      <div class="container mx-auto">
        <FormBase v-bind="args" />
      </div>
    `,
  }),
  argTypes: {},
  parameters: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: [
      {
        $formkit: 'textarea',
        label: 'Message',
        name: 'FormMessage',
        placeholder: 'Short message',
        validation: 'required',
        rows: '10',
      },
    ],
  },
}

export const WithHelp: Story = {
  args: {
    data: [
      {
        $formkit: 'textarea',
        label: 'Message',
        name: 'FormMessage',
        placeholder: 'Short message',
        validation: 'required',
        rows: '10',
        help: 'Please enter a short message',
      },
    ],
  },
}

export const Disabled: Story = {
  args: {
    data: [
      {
        $formkit: 'textarea',
        label: 'Message',
        name: 'FormMessage',
        placeholder: 'Short message',
        validation: 'required',
        rows: '10',
        disabled: true,
      },
    ],
  },
}

export const WithValuePopulated: Story = {
  args: {
    data: [
      {
        $formkit: 'textarea',
        label: 'Message',
        name: 'FormMessage',
        placeholder: 'Short message',
        validation: 'required',
        cols: '30',
        value: 'This is a pre-populated message.',
      },
    ],
  },
}
