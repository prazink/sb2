import type { Meta, StoryObj } from '@storybook/vue3'
import AccordionBlock from '~/components/shared/accordion/Block.vue'
import AccordionItem from '~/components/shared/accordion/Item.vue'
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

const meta: Meta<typeof AccordionBlock> = {
  title: 'Shared/Accordion/Block',
  component: AccordionBlock,
  render: (args: any) => ({
    components: { AccordionBlock, AccordionItem },
    tags: ['autodocs'],
    setup () {
      return { args }
    },
    template: `<LayoutWrapper>
    <LayoutGrid>
      <AccordionBlock v-bind="args" class="col-span-12"/>
    </LayoutGrid>
    </LayoutWrapper>`,
  }),
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof AccordionBlock>

export const Default: Story = {
  args: {
    heading: 'Frequently asked questions',
    sub_heading:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    accordionItems: [
      {
        title: 'First Accordion',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        title: 'Second Accordion',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        title: 'Third Accordion',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        title: 'Fourth Accordion',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        title: 'Fifth Accordion',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        title: 'Sixth Accordion',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        title: 'Seventh Accordion',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        title: 'Eigth Accordion',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        title: 'Nith Accordion',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        title: 'Tenth Accordion',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
    ],
  },
}
