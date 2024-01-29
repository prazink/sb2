import type { Meta, StoryObj } from '@storybook/vue3'
import HeroProduct from '~/components/shared/hero/Product.vue'
import Button from '~/components/shared/button/Button.vue'
import ButtonSave from '~/components/shared/button/Save.vue'

import { CrossSellTypesEnum } from '~/utils/types/enums/cross-sell.enum'

// Define the Meta object
const meta: Meta<typeof HeroProduct> = {
  title: 'Shared/Hero/Product',
  tags: ['autodocs'],
  component: HeroProduct,
  render: (args: any) => ({
    components: { HeroProduct, Button, ButtonSave },
    setup () {
      return { args }
    },
    template: `
        <div v-if="${'hasNavBar' in args}">
        <div class="bg-deep-sapphire h-header-mobile lg:h-header-desktop text-white flex items-center justify-center">header</div>
            <HeroProduct v-bind="args">
            <template #extras v-if="${'extras' in args}">${args.extras}</template>
            <template #content v-if="${'content' in args}">${args.content}</template>
            </HeroProduct>
            <div id="hero" class="bg-black h-96 text-white flex items-center justify-center">hero</div>
            <div id="summary" class="bg-grey-400 h-96 text-black flex items-center justify-center">summary</div>
            <div id="features" class="bg-grey-100 h-96 text-white flex items-center justify-center">features</div>
            <div id="how-it-works" class="bg-black h-96 text-white flex items-center justify-center">how it works</div>
            <div id="book-a-call-back" class="bg-deep-sapphire h-96 text-white flex items-center justify-center">book a call back</div>
            <div id="why-liberty" class="bg-grey-400 h-96 text-white flex items-center justify-center">why liberty</div>
            <div id="faqs" class="bg-grey-100 h-96 text-white flex items-center justify-center">faqs</div>
            <div id="resources" class="bg-black h-96 text-white flex items-center justify-center">resources</div>
        </div>
        <div v-else>
          <HeroProduct v-bind="args">
          <template #extras v-if="${'extras' in args}">${args.extras}</template>
          <template #content v-if="${'content' in args}">${args.content}</template>
          </HeroProduct>
        </div>
      `,
  }),
  argTypes: {
    heading: {
      description: 'Enter here your hero heading content',
      control: {
        type: 'text',
      },
    },
    subheading: {
      description: 'Enter here your hero description content',
      control: {
        type: 'text',
      },
    },
    trustpilot: {
      control: { type: 'boolean' },

    },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

// Export the meta object
export default meta

// Define the Story type
type Story = StoryObj<typeof HeroProduct>

// Export the Default story
export const Default: Story = {
  args: {
    heading: "Home Loan <br>solutions for <br class='hidden sm:block'>free thinkers",

    subheading: "Whatever your situation, don't worry <br class='hidden sm:block'>we've got you covered",
    desktop_image: {
      alt: 'Home loan solutions for free thinkers',
      title: 'Home loan solutions for free thinkers',
      filename: 'https://a.storyblok.com/f/148182/2500x1066/1d88059d91/liberty-home-loans-desktop.jpg',
      fieldtype: 'asset',
    },
    trustScore: '4.9',
    type: CrossSellTypesEnum.LOAN_HOME,
    mobile_image: {
      alt: 'Home loan solutions for free thinkers',
      title: 'Home loan solutions for free thinkers',
      filename: 'https://a.storyblok.com/f/148182/750x630/7c58cfcbbe/home-loans.webp',
      fieldtype: 'asset',
    },
    extras: `
      <Button variant="primary" size="small" inverted>
        Find the right loan for you
      </Button>
    `,
  },
}

// Export the HasNavBar story
export const HasNavBar: Story = {
  args: {
    heading: 'Residential <br> SMSF loan',
    placeholder_heading: 'Residential SMSF loan',
    subheading: 'A ready-made solution to help you tap into your SMSF and invest in residential property.',
    desktop_image: {
      alt: 'Home loan solutions for free thinkers',
      title: 'Home loan solutions for free thinkers',
      filename: 'https://a.storyblok.com/f/148182/2500x1000/400c008517/liberty-smsf-desktop.png',
      fieldtype: 'asset',
    },
    mobile_image: {
      alt: 'Home loan solutions for free thinkers',
      title: 'Home loan solutions for free thinkers',
      filename: 'https://a.storyblok.com/f/148182/750x630/0e1693db4d/smsf-loans.webp',
      fieldtype: 'asset',
    },
    type: CrossSellTypesEnum.LOAN_SMSF,
    hasNavBar: true,
    trustScore: '4.0',
    numberOfReviews: 2940,
    content: `
      <div class="hidden lg:flex items-center h-[72px]">
        <ul class="list-none flex items-center gap-x-2 text-deep-sapphire whitespace-nowrap">
          <li><a href="#summary" >Summary</a></li>
          <li><a href="#features" >Features</a></li>
          <li><a href="#how-it-works" >How it works</a></li>
          <li><a href="#why-liberty" >Why Liberty</a></li>
          <li><a href="#faqs" >FAQs</a></li>
          <li><a href="#resources" >Resources</a></li>
        </ul>
        <ButtonSave label="Save" type="product" class="ml-auto" ></ButtonSave>
        <Button
          tag="a"
          href="#"
          variant="secondary"
          size="medium"
          class="self-start mt-3 ml-4"
          >
          Book a call back
        </Button>
      </div>
      <div class="lg:hidden flex items-center h-10">
        <ButtonSave label="Save" type="product" class="ml-auto" ></ButtonSave>
      </div>
    `,
  },

}
