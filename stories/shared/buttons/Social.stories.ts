import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonSocial from '~/components/shared/button/Social.vue'
import { ButtonTagEnum } from '~/utils/types/enums/buttons.enum'
import IconInstagram from '~/assets/icons/Instagram.svg?component'

const meta: Meta<typeof ButtonSocial> = {
  title: 'Shared/Buttons/Social',
  tags: ['autodocs'],
  component: ButtonSocial,
  render: args => ({
    components: { ButtonSocial, IconInstagram },
    setup () {
      return { args }
    },
    template: `
      <ButtonSocial v-bind="args">
        <template #default="{ iconClass }">
          <IconInstagram :class="iconClass" />
        </template>
      </ButtonSocial>
    `,
  }),
  argTypes: {
    tag: {
      description: 'Set tag either button, anchor or nuxt-link',
      control: { type: 'select' },
      options: Object.values(ButtonTagEnum),
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
  args: {
    tag: ButtonTagEnum.BUTTON,
    to: '',
  },
}

export default meta

type Story = StoryObj<typeof ButtonSocial>;

export const Default: Story = {
  args: {
    tag: ButtonTagEnum.BUTTON,
  },
  parameters: {},
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const WithLink: Story = {
  args: {
    tag: ButtonTagEnum.NUXT_LINK,
    to: '/',
  },
}
