import type { Meta, StoryObj } from '@storybook/vue3'
import HeroAdviserDetail from '~/components/shared/hero/AdviserDetail.vue'

// Define the Meta object
const meta: Meta<typeof HeroAdviserDetail> = {
  title: 'Shared/Hero/AdviserDetail',
  tags: ['autodocs'],
  component: HeroAdviserDetail,
  render: (props: any) => ({
    components: { HeroAdviserDetail },
    setup () {
      return { props }
    },
    template: `
      <HeroAdviserDetail v-bind="props">
        <template #extras v-if="props.extras">{{ props.extras }}</template>
      </HeroAdviserDetail>
    `,
  }),
  argTypes: {
    // Add  argTypes as needed
    title: {
      control: 'text',
    },
    heroTagline: {
      control: 'text',
    },
    adviserStatus: {
      control: 'select',
      options: ['platinum', 'gold', 'silver'],
    },
    adviserGuid: {
      control: 'text',
    },
    adviserAlt: {
      control: 'text',
    },
    trustScore: {
      control: 'text',
    },
    trustpilotString: {
      control: 'text',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

// Export the meta object
export default meta

// Define the Story type
type Story = StoryObj<typeof meta>

// Export the Default story
export const Default: Story = {
  args: {
    title: 'Scott Baker',
    heroTagline: 'Broker, mother and multi-tasking marvel',
    adviserStatus: 'platinum',
    adviserGuid: '8C62745B-1685-4568-B92B-743C4087426A',
    adviserAlt: 'Scott Baker',
    trustScore: '4.9',
    trustpilotString: 'Excellent',
  },
}
