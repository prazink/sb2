import type { Meta, StoryObj } from '@storybook/vue3'
import LFButton from '../../components/shared/button/Button.vue'
import { ButtonSizeEnum, ButtonTagEnum, ButtonVariantEnum } from '../../../utils/types/enums/buttons.enum'
import IconChevronDown from '~/assets/icons/ChevronDown.svg?component'

const meta: Meta<typeof LFButton> = {
  title: 'Shared/Buttons/Primary',
  tags: ['autodocs'],
  component: LFButton,
  render: args => ({
    components: { LFButton },
    setup () {
      return { args }
    },
    template: '<LFButton variant="primary" v-bind="args">Button</LFButton>',
  }),
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
      size: {
        disable: true,
      },
      tag: {
        disable: true,
      },
      disabled: {
        disable: true,
      },
    },
    tag: {
      description: 'Render as one of the following',
      table: {
        type: { summary: `${ButtonSizeEnum.SMALL},${ButtonSizeEnum.MEDIUM}` },
        defaultValue: { summary: ButtonTagEnum.BUTTON },
      },
      control: {
        type: 'inline-radio',
      },
      options: Object.values(ButtonTagEnum),
    },
    disabled: {
      description: 'Disable button conditionally',
      control: { type: 'boolean' },
    },
  },
  args: {
    tag: ButtonTagEnum.BUTTON,
    inverted: false,
    bold: false,
    disabled: false,
    variant: ButtonVariantEnum.PRIMARY,
    size: ButtonSizeEnum.MEDIUM,
  },
}

export default meta

type Story = StoryObj<typeof LFButton>;

export const Default: Story = {
  argTypes: {
    size: {
      description: 'Set size of button',
      table: {
        type: { summary: `${ButtonSizeEnum.SMALL},${ButtonSizeEnum.MEDIUM}` },
        defaultValue: { summary: ButtonSizeEnum.MEDIUM },
      },
      control: { type: 'inline-radio' },
      options: [ButtonSizeEnum.SMALL, ButtonSizeEnum.MEDIUM],
    },
    tag: {
      description: 'Render as one of the following',
      table: {
        type: { summary: Object.values(ButtonTagEnum).join(',') },
        defaultValue: { summary: ButtonTagEnum.BUTTON },
      },
      control: {
        type: 'inline-radio',
      },
      options: Object.values(ButtonTagEnum),
    },
    disabled: {
      description: 'Disable button conditionally',
      control: { type: 'boolean' },
    },
  },
}

export const Disabled: Story = {
  argTypes: {
    ...Default.argTypes,
  },
  args: {
    disabled: true,
  },
}

export const Inverted: Story = {
  argTypes: {
    ...Default.argTypes,
  },
  args: {
    inverted: true,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const Medium: Story = {
  argTypes: {
    ...Default.argTypes,
  },
  args: {
    size: ButtonSizeEnum.MEDIUM,
  },
}

export const Small: Story = {
  argTypes: {
    ...Default.argTypes,
  },
  args: {
    size: ButtonSizeEnum.SMALL,
  },
}

export const WithIcon: Story = {
  render: args => ({
    components: { LFButton, IconChevronDown },
    setup () {
      return { args }
    },
    template: `
      <LFButton variant="primary" v-bind="args">
        Button
        <template #icon="{ iconClass }"><IconChevronDown :class="iconClass" /></template>
      </LFButton>
    `,
  }),
  argTypes: {
    ...Default.argTypes,
  },
  args: {},
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
          <LFButton variant="primary">
            Button
            <template #icon="{ iconClass }"><IconChevronDown :class="iconClass" /></template>
          </LFButton>
          `,
      },
    },
  },
}

export const InvertedWithIcon: Story = {
  render: args => ({
    components: { LFButton, IconChevronDown },
    setup () {
      return { args }
    },
    template: `
      <LFButton variant="primary" v-bind="args">
        Button
        <template #icon="{ iconClass }"><IconChevronDown :class="iconClass" /></template>
      </LFButton>
    `,
  }),
  argTypes: {
    ...Default.argTypes,
  },
  args: {
    ...Inverted.args,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    ...WithIcon.parameters,
  },
}
