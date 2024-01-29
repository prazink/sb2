import type { Meta, StoryObj } from '@storybook/vue3'
import ListValueProps from '~/components/shared/list/ValueProps.vue'

const meta: Meta<typeof ListValueProps> = {
  title: 'Shared/List/ValueProps',
  tags: ['autodocs'],
  component: ListValueProps,
  render: args => ({
    components: { ListValueProps },
    setup () {
      return { args }
    },
    template: `
      <ListValueProps v-bind="args" />
    `,
  }),
  argTypes: {},
  parameters: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      {
        content: {
          cta: [
            {
              link: {
                id: '',
                url: '',
                linktype: 'story',
                fieldtype: 'multilink',
                cached_url: '',
              },
              size: 'small',
              type: 'secondary',
              label: 'Book a call back',
              has_icon: false,
              component: 'modules-button',
              is_inverted: false,
            },
          ],
          title: 'Contact a trusted adviser',
          summary: 'Your Liberty Adviser will be able to look at your financial situation and help you decide the best way forward.',
        },
      },
      {
        content: {
          cta: [
            {
              link: {
                id: '',
                url: '',
                linktype: 'story',
                fieldtype: 'multilink',
                cached_url: '',
              },
              size: 'small',
              type: 'secondary',
              label: 'Get indicative pre-approval',
              has_icon: false,
              component: 'modules-button',
              is_inverted: false,
            },
          ],
          title: 'Get online pre-approval',
          summary: 'Your Liberty Adviser will be able to look at your financial situation and help you decide the best way forward.',
        },
      },
      {
        content: {
          cta: [
            {
              link: {
                id: '',
                url: '',
                linktype: 'story',
                fieldtype: 'multilink',
                cached_url: '',
              },
              size: 'small',
              type: 'secondary',
              label: 'Find my borrowing power',
              has_icon: false,
              component: 'modules-button',
              is_inverted: false,
            },
          ],
          title: 'Find out how much you can borrow',
          summary: 'Your Liberty Adviser will be able to look at your financial situation and help you decide the best way forward.',
        },
      },
    ],
    heading: 'Ready to get moving?',
    summary: "22 years in the making, finally there's a process all about you!",
  },
}
