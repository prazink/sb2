import type { Meta, StoryObj } from '@storybook/vue3'
import Sharebar from '~/components/shared/bars/ShareBar.vue'

const meta: Meta<typeof Sharebar> = {
  title: 'Shared/Bars/ShareBar',
  tags: ['autodocs'],
  component: Sharebar,
  render: args => ({
    components: { Sharebar },
    setup () {
      return { args }
    },
    template: `
      <Sharebar v-bind="args" />
    `,
  }),
  argTypes: {},
  parameters: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    pageUrl: 'https://liberty.com.au',
  },
  parameters: {},
}

export const Custom: Story = {
  args: {
    ...Default.args,
    customFacebookUrl: 'https://www.facebook.com/sharer.php?u=https://liberty.com.au',
    customTwitterUrl: 'https://twitter.com/intent/tweet?url=https://liberty.com.au&text=Liberty',
    customLinkedInUrl: '',
  },
}

export const WithinBlog: Story = {
  render: args => ({
    components: { Sharebar },
    setup () {
      return { args }
    }, /* #NOTE <Richtext> to be implemented */
    template: `
      <LayoutWrapper>
        <LayoutGrid>
          <div class="col-span-full lg:col-start-2 lg:col-end-8">
            <div class="relative min-h-[1000px] p-8">
                <!---<Richtext>-->
                <h4>This is heading 4</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor in leo id consequat. Aliquam <b>quam</b> felis, dapibus eget mi nec, consectetur mollis arcu. Pellentesque et rutrum nulla. Nam et purus eget turpis fermentum iaculis ut a diam. Donec laoreet euismod diam vitae ornare. Aliquam ac tortor sollicitudin dui finibus ullamcorper volutpat vel lorem. Pellentesque efficitur metus eget velit egestas, eget aliquam velit tempor. <i><u>Mauris pharetra quis</u></i><u> </u>tellus vitae auctor.</p>
                <ul>
                  <li><p>Item One</p></li>
                  <li><p>Item Two</p>
                    <ul>
                      <li><p>Item Two - One</p></li>
                      <li><p>Item Two - Two</p>
                        <ul>
                          <li><p>Item Two - Two - One</p></li>
                          <li><p>Item Two - Two - Two</p></li>
                          <li><p>Item Two - Two - Three</p>
                            <ul>
                              <li><p>Item Two - Two - Three - One</p></li>
                              <li><p>Item Two - Two - Three - Two</p></li>
                            </ul>
                          </li>
                          <li><p>Item Two - Two - Four</p></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><p>Item Three</p></li>
                  <li><p>Item Four</p></li>
                </ul>
                <blockquote><p>It is important to note that share bar's sticky behaviour will not work on 'Docs' tab for some reasaon</p></blockquote>
                <h5>This is heading 5</h5>
                <p>Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit. Morbi porttitor in leo id consequat. Aliquam quam felis, <i>dapibus eget mi</i> nec, consectetur mollis arcu. Pellentesque et rutrum nulla. Nam et purus eget turpis fermentum iaculis ut a diam. Donec laoreet euismod diam vitae ornare. Aliquam ac tortor sollicitudin dui finibus ullamcorper volutpat vel lorem. Pellentesque efficitur metus eget velit egestas, eget aliquam velit tempor. Mauris pharetra quis tellus vitae auctor.</p>
              <!---</Richtext>-->
            </div>
          </div>
          <div class="hidden lg:block col-start-12 col-end-13">
            <Sharebar class="sticky top-0 py-8" v-bind="args" />
          </div>
        </LayoutGrid>
        <div class="relative bg-grey-300 h-[1000px]"></div>
        <div class="relative bg-grey-500 h-[1000px]"></div>
      </LayoutWrapper>
    `,
  }),
  args: {
    ...Default.args,
  },
}
