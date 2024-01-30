import type { Meta, StoryObj } from '@storybook/vue3'
import LayoutWrapper from '../../components/shared/layout/Wrapper.vue'
import AssetClassLinks from '~/components/shared/list/AssetClassLinks.vue'
// import LayoutGrid from '~/components/shared/layout/Grid.vue'
const meta: Meta<typeof AssetClassLinks> = {
  title: 'Shared/List/AssetClassLinks',
  tags: ['autodocs'],
  component: AssetClassLinks,
  render: args => ({
    components: { AssetClassLinks, LayoutWrapper },
    setup () {
      return { args }
    },
    template: `
      <LayoutWrapper padding="px-0 md:px-8 lg:px-10">
      <div class="flex flex-col lg:flex-row">
        <div class="basis-auto lg:basis-1/5 lg:pl-4">
          <AssetClassLinks v-bind="args" />
        </div>
        <div class="basis-auto lg:basis-1/5 lg:pl-4">
          <AssetClassLinks v-bind="args" />
        </div>
        <div class="basis-auto lg:basis-1/5 lg:pl-4">
          <AssetClassLinks v-bind="args" />
        </div>
        <div class="basis-auto lg:basis-1/5 lg:pl-4">
          <AssetClassLinks v-bind="args" />
        </div>
        <div class="basis-auto lg:basis-1/5 lg:pl-4">
          <AssetClassLinks v-bind="args" />
        </div>
      </div>
    </LayoutWrapper>
    `,
  }),
  argTypes: {},
  parameters: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    heading: 'Home Loans',
    icon: {
      id: 4702163,
      alt: 'Home',
      name: '',
      focus: null,
      title: '',
      filename: 'https://a.storyblok.com/f/148182/112x112/c685ea160d/home.png',
      copyright: '',
      fieldtype: 'asset',
    },
    type: 'loan-home',
    links: [
      { _uid: '4de5c12d-7e11-4d02-acd5-55f6851a6189', label: 'Buying my own home', target: { id: '', url: '#', linktype: 'url', fieldtype: 'multilink', cached_url: '#' }, component: 'anchor_link', _editable: '<!--#storyblok#{"name": "anchor_link", "space": "148182", "uid": "4de5c12d-7e11-4d02-acd5-55f6851a6189", "id": "135557660"}-->' },
      { _uid: '83d7a152-4169-46bd-a4f2-58e1be2ed103', label: 'Investing in property', target: { id: '', url: '', linktype: 'story', fieldtype: 'multilink', cached_url: '' }, component: 'anchor_link', _editable: '<!--#storyblok#{"name": "anchor_link", "space": "148182", "uid": "83d7a152-4169-46bd-a4f2-58e1be2ed103", "id": "135557660"}-->' },
      { _uid: '94fdcf1b-dc51-4095-b667-017f3568f41d', label: 'Refinancing home loan', target: { id: '', url: '', linktype: 'story', fieldtype: 'multilink', cached_url: '' }, component: 'anchor_link', _editable: '<!--#storyblok#{"name": "anchor_link", "space": "148182", "uid": "94fdcf1b-dc51-4095-b667-017f3568f41d", "id": "135557660"}-->' },
      { _uid: 'ab8e5b4c-e56e-44ac-9fd0-6cdd988855e3', label: 'Refinancing investment loan', target: { id: '', url: '', linktype: 'story', fieldtype: 'multilink', cached_url: '' }, component: 'anchor_link', _editable: '<!--#storyblok#{"name": "anchor_link", "space": "148182", "uid": "ab8e5b4c-e56e-44ac-9fd0-6cdd988855e3", "id": "135557660"}-->' },
      { _uid: '1f30db71-9db0-4043-adbd-419eb045521e', label: 'Consolidating debt', target: { id: '', url: '', linktype: 'story', fieldtype: 'multilink', cached_url: '' }, component: 'anchor_link', _editable: '<!--#storyblok#{"name": "anchor_link", "space": "148182", "uid": "1f30db71-9db0-4043-adbd-419eb045521e", "id": "135557660"}-->' },
      { _uid: 'e80abe6e-4ef4-496a-975f-4903fbf0f4d7', label: 'Compare all', target: { id: '', url: '', linktype: 'story', fieldtype: 'multilink', cached_url: '' }, component: 'anchor_link', _editable: '<!--#storyblok#{"name": "anchor_link", "space": "148182", "uid": "e80abe6e-4ef4-496a-975f-4903fbf0f4d7", "id": "135557660"}-->' },
    ],
  },
}
