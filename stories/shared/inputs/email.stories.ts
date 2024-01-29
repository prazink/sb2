import type { Meta, StoryObj } from '@storybook/vue3'
import FormBase from '~/components/shared/forms/Base.vue'

const meta: Meta<typeof FormBase> = {
  title: 'Shared/Inputs/Email',
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
        $formkit: 'email',
        label: 'Email',
        name: 'FormEmail',
        placeholder: 'test@domain.com',
        validation: 'required|email',
      },
    ],
  },
}

export const WithHelp: Story = {
  args: {
    data: [
      {
        $formkit: 'email',
        label: 'Email',
        name: 'FormEmail',
        placeholder: 'test@domain.com',
        validation: 'required|email',
        help: 'Please enter your name',
      },
    ],
  },
}

export const Disabled: Story = {
  args: {
    data: [
      {
        $formkit: 'email',
        label: 'Email',
        name: 'FormEmail',
        placeholder: 'test@domain.com',
        validation: 'required|email',
        help: 'Please enter your name',
        disabled: true,
      },
    ],
  },
}

export const WithValuePopulated: Story = {
  args: {
    data: [
      {
        $formkit: 'email',
        label: 'Email',
        name: 'FormEmail',
        placeholder: 'test@domain.com',
        validation: 'required|email',
        help: 'Please enter your email address',
        value: 'test@domain.com',
      },
    ],
  },
}

export const WithPrefixIcon: Story = {
  args: {
    data: [
      {
        $formkit: 'email',
        label: 'Email',
        name: 'FormEmail',
        placeholder: 'test@domain.com',
        validation: 'required|email',
        help: 'Please enter your name',
        prefixIcon: 'email',
      },
    ],
  },
}
