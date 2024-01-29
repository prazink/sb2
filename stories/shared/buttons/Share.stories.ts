import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonShare from '~/components/shared/button/Share.vue'
import { ButtonTagEnum } from '~/utils/types/enums/buttons.enum'
import IconFacebook from '~/assets/icons/Facebook.svg?component'

const meta: Meta<typeof ButtonShare> = {
  title: 'Shared/Buttons/Share',
  tags: ['autodocs'],
  component: ButtonShare,
  render: args => ({
    components: { ButtonShare, IconFacebook },
    setup () {
      return { args }
    },
    template: `
      <ButtonShare v-bind="args">
        <template #default="{ iconClass }">
          <IconFacebook :class="iconClass" />
        </template>
      </ButtonShare>
    `,
  }),
  argTypes: {
    tag: {
      description: 'Set tag either button, anchor or nuxt-link',
      control: { type: 'select' },
      options: Object.values(ButtonTagEnum),
    },
    href: {
      description: 'Set hyperlink',
    },
  },
  args: {
    tag: ButtonTagEnum.BUTTON,
    href: '',
  },
}

export default meta

type Story = StoryObj<typeof ButtonShare>;

export const Default: Story = {
  args: {
    tag: ButtonTagEnum.BUTTON,
  },
  parameters: {
    docs: {
      source: {
        language: 'javascript',
        code: `
          <ButtonShare>
            <template #default="{ iconClass }">
              <IconFacebook :class="iconClass" />
            </template>
          </ButtonShare>
        `,
      },
    },
  },
}

export const WithLink: Story = {
  args: {
    ...Default.args,
    href: 'https://www.facebook.com',
  },
  parameters: {
    docs: {
      source: {
        language: 'javascript',
        code: `
          <ButtonShare tag="a" href="https://liberty.com.au" target="_blank">
            <template #default="{ iconClass }">
              <IconFacebook :class="iconClass" />
            </template>
          </ButtonShare>
        `,
      },
    },
  },
}
