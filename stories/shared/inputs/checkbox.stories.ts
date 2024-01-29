import type { Meta, StoryObj } from '@storybook/vue3'
import FormBase from '~/components/shared/forms/Base.vue'

const meta: Meta<typeof FormBase> = {
  title: 'Shared/Inputs/Checkbox',
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
        $formkit: 'checkbox',
        label: 'Loans',
        name: 'FormLoans',
        placeholder: 'Select a loan type',
        validation: 'required',
        options: [
          {
            label: 'Home loans',
            value: '1',
          },
          {
            label: 'Car loans',
            value: '99',
          },
          {
            label: 'Personal loans',
            value: '3',
          },
          {
            label: 'SMSF loans',
            value: '6',
          },
        ],
        decoratorIcon: 'check',
      },
    ],
  },
}

// export const WithHelp: Story = {
//   args: {
//     data: [
//       {
//         $formkit: 'select',
//         label: 'Loans',
//         name: 'FormLoans',
//         placeholder: 'Select a loan type',
//         validation: 'required',
//         options: [
//           {
//             label: 'Home loans',
//             value: '1',
//           },
//           {
//             label: 'Car loans',
//             value: '99',
//           },
//           {
//             label: 'Personal loans',
//             value: '3',
//           },
//           {
//             label: 'SMSF loans',
//             value: '6',
//           },
//         ],
//         help: 'Please enter your name',
//       },
//     ],
//   },
// }
//
// export const Disabled: Story = {
//   args: {
//     data: [
//       {
//         $formkit: 'select',
//         label: 'Loans',
//         name: 'FormLoans',
//         placeholder: 'Select a loan type',
//         validation: 'required',
//         options: [
//           {
//             label: 'Home loans',
//             value: '1',
//           },
//           {
//             label: 'Car loans',
//             value: '99',
//           },
//           {
//             label: 'Personal loans',
//             value: '3',
//           },
//           {
//             label: 'SMSF loans',
//             value: '6',
//           },
//         ],
//         disabled: true,
//       },
//     ],
//   },
// }
