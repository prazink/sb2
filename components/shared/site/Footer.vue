<template>
  <footer class="bg-grey-100">
    <div class="flex flex-col">
      <div class="order-1 pb-6 lg:pb-12 pt-8 lg:pt-16">
        <LayoutWrapper>
          <div class="flex justify-between items-center">
            <nuxt-link to="/" aria-label="Liberty Logo">
              <Logo />
            </nuxt-link>
            <div v-if="hasTrustpilot" class="ml-auto">
              <TrustpilotWidgetFooter
                trust-score="5"
                star-image="//images-static.trustpilot.com/api/stars/5/star.svg"
                star-string="Excellent"
                trustpilot-url="https://au.trustpilot.com/review/www.liberty.com.au/"
                :number-of-reviews="numberOfReviews"
              />
            </div>
          </div>
        </LayoutWrapper>
      </div>
      <div class="order-3 lg:order-2">
        <LayoutWrapper>
          <div class="columns-2 lg:columns-4 md:columns-3 gap-4 lg:gap-8" :class="isSmallerNav ? 'lg:h-[200px]': ''">
            <ul
              v-for="m in menu"
              :key="m._uid"
              :class="[
                'inline-block w-full',
                m.margin || 'mb-8'
              ]"
            >
              <li class="mb-2.5">
                <span
                  class="
                  font-extrabold
                  text-deep-sapphire text-base
                  leading-tighter
                "
                >{{ m.heading }}</span>
              </li>
              <li
                v-for="(link, cIndex) in m.children"
                :key="link._uid"
                :class="[{ 'mb-2': cIndex !== m.children.length - 1 }]"
              >
                <StoryblokLink
                  :link="link.target"
                  class="flex items-center text-deep-sapphire text-base leading-tighter hover:underline my-3 lg:my-2"
                  icon-class="ml-1 w-4 h-4"
                >
                  {{ link.label }}
                </StoryblokLink>
              </li>
            </ul>
          </div>
        </LayoutWrapper>
      </div>
      <div class="bg-grey-footer order-4 pt-12 pb-24">
        <LayoutWrapper>
          <ul
            class="
            mobile:grid mobile:grid-cols-2
            lg:flex lg:flex-wrap
            gap-4
            mb-10
            lg:mb-8
          "
          >
            <li v-for="link in secondaryMenu" :key="link._uid">
              <StoryblokLink
                :link="link"
                class="flex items-center text-deep-sapphire text-body-sm hover:underline"
                icon-class="ml-1 w-4 h-4"
              >
                {{ link.label }}
              </StoryblokLink>
            </li>
          </ul>
          <!-- eslint-disable vue/no-v-html -->
          <div class="text-font-tundora text-body-sm richtext" v-html="disclaimer" />
          <!-- eslint-disable vue/no-v-html -->
          <div class="text-font-tundora text-body-sm richtext" v-html="adviserDisclaimer" />
          <!-- eslint-disable vue/no-v-html -->
          <div class="text-font-tundora text-body-sm richtext" v-html="brokerDisclaimer" />
        </LayoutWrapper>
      </div>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import { watchEffect, toRefs } from 'vue'
import Logo from '~/assets/icons/Logo.svg?component'
import type { SiteFooterProps } from '~/utils/types/aliases/site.alias'

/* Default props */
const props = defineProps({
  menu: {
    type: Array,
    required: true,
  },
  secondaryMenu: {
    type: Array,
    required: true,
  },
  disclaimer: {
    type: String,
    required: true,
  },
  adviserDisclaimer: {
    type: String,
    required: true,
  },
  brokerDisclaimer: {
    type: String,
    required: true,
  },
  numberOfReviews: {
    type: String,
    default: '3550',
  },
  hasTrustpilot: {
    type: Boolean,
    default: true,
  },
  isSmallerNav: {
    type: Boolean,
    default: false,
  },
}) as SiteFooterProps

/* Reactive props */
const { menu, secondaryMenu, disclaimer, adviserDisclaimer, brokerDisclaimer, numberOfReviews, hasTrustpilot, isSmallerNav } = toRefs(props)

/* Computed props */

/* Method handlers */

/* Watcher */
watchEffect(() => {
  menu.value = props.menu
  secondaryMenu.value = props.secondaryMenu
  disclaimer.value = props.disclaimer
  adviserDisclaimer.value = props.adviserDisclaimer
  brokerDisclaimer.value = props.brokerDisclaimer
  numberOfReviews.value = props.numberOfReviews
  hasTrustpilot.value = props.hasTrustpilot
  isSmallerNav.value = props.isSmallerNav
})
</script>
