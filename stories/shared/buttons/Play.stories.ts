import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonPlay from '~/components/shared/button/Play.vue'
import IconPlus from '~/assets/icons/Plus.svg?component'
import IconPlay from '~/assets/icons/Play.svg?component'
import IconLoading from '~/assets/icons/Loading.svg?component'

const meta: Meta<typeof ButtonPlay> = {
  title: 'Shared/Buttons/Play',
  tags: ['autodocs'],
  component: ButtonPlay,
  render: (args: any) => ({
    components: { ButtonPlay, IconPlus },
    setup () {
      return { args }
    },
    template: `
      <ButtonPlay v-bind="args">
        <template v-if="${'slotDefault' in args}" #default="{ isLoading, iconClass }">
          ${args.slotDefault}
        </template>
      </ButtonPlay>
    `,
  }),
  argTypes: {
    iconSize: {
      description: 'Set icon size',
    },
  },
  args: {
    iconSize: 'w-full h-full',
    slotDefault: '',
    enableLoader: false,
  },
}

export default meta

type Story = StoryObj<typeof ButtonPlay>;

export const Default: Story = {
  args: {
    class: 'w-16 h-16',
  },
}

export const Custom: Story = {
  args: {
    ...Default.args,
    iconSize: 'w-8 h-8',
    slotDefault: `
      <IconPlus :class="iconClass" />
    `,
  },
}

export const WithTemplateLoading: Story = {
  render: args => ({
    components: { ButtonPlay, IconPlay, IconLoading },
    setup () {
      return { args }
    },
    template: `
      <ButtonPlay
        v-bind="args"
      >
      <transition name="fade" mode="out-in">
        <IconLoading
          v-if="args.enableLoader"
          class="animate-spin fill-current w-8 h-8"
        />
        <IconPlay
          v-else
          :class="iconClass"
        />
      </transition>        
      </ButtonPlay>
    `,
  }),
  args: {
    ...Default.args,
    enableLoader: true,
  },
  parameters: {},
}
