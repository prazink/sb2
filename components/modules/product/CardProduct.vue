<template>
  <div class="">
    <LayoutGrid multirow>
      <div class="col-span-full my-4">
        <div class="flex flex-wrap shadow-card rounded-lg relative h-full rounded-2xl items-center relative px-3 md:py-0 bg-white">
          <div v-if="tag !== ''" class="w-full relative text-white mr-2">
            <span class="absolute top-[-6.1px] left-2 md:left-[35px] mr-0">
              <span
                class="relative gradient-secondary text-body text-center uppercase block w-auto py-1 px-4
                rounded-b-lg leading-normal before:absolute before:content-[''] before:h-[6px] before:w-[6px] before:left-[-6px] before:top-0
                before:bg-deep-sapphire before:gradient-secondary after:bg-deep-sapphire after:h-[6px] after:w-[8px] after:left-[-8px]
                after:top-0 after:absolute after:content-[''] after:rounded-t-lg"
              >
                {{ tag }}
              </span>
            </span>
          </div>
          <div class="flex flex-col w-full mt-12 md:mt-2 md:w-1/2 px-2 md:px-8 md:pt-6">
            <a v-if="isAsset" :href="link ?? ''" target="_blank">
              <h2 class="text-deep-sapphire text-h2-sm my-1 text-left lg:text-h2 md:mt-4 md:mb-2">
                <span class="block font-heavy">{{ headingBoldText }}</span>
                {{ headingLightText }}
              </h2>
            </a>
            <NuxtLink v-else :to="`/${link}`">
              <h2
                class="text-deep-sapphire text-h2-sm my-1 text-left lg:text-h2 md:mt-4 md:mb-2"
              >
                <span class="block font-heavy">{{ headingBoldText }}</span>
                {{ headingLightText }}
              </h2>
            </NuxtLink>
            <div>
              <p class="text-font-tundora font-normal text-body mt-3 leading-relaxed sm:my-4">
                {{ content }}
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2 mb-4 mt-4 md:mt-6">
            <ListCheckCircle :list-items="features" />
            <div class="px-4 mt-6 md:mb-6 md:absolute md:bottom-5">
              <!-- eslint-disable vue/no-v-html -->
              <p class="text-[14px] uppercase text-font-tundora font-heavy" v-html="rateHeading" />
              <!--eslint-enable-->
              <div class="flex max-w-[280px] lg:max-w-[380px]">
                <span class="text-h3-sm text-font-tundora font-bold md:text-h3 mr-6 flex-2">
                  {{ rate }}
                </span>
                <span class="text-h3-sm text-font-tundora font-bold md:text-h3">
                  <!-- eslint-disable vue/no-v-html -->
                  <p v-html="comparisonRate" />
                  <!--eslint-enable-->
                  <p class="text-body-sm text-font-tundora relative text-center leading-tight">
                    {{ ratesDisclaimer }}
                  </p>
                </span>
              </div>
            </div>
          </div>
          <Button
            v-if="isAsset"
            tag="a"
            :to="link"
            :href="link"
            variant="primary"
            size="medium"
            target="_blank"
            class="text-body-sm my-6 relative bottom-0 left-5 md:my-12 md:left-10 cursor-pointer"
            :data-identifier="heading"
          >
            {{ ctaText }}
          </Button>
          <Button
            v-else
            tag="nuxt-link"
            :to="link"
            :href="`/${link}`"
            variant="primary"
            size="medium"
            class="text-body-sm my-6 relative bottom-0 left-5 md:my-12 md:left-10 cursor-pointer"
            :data-identifier="heading"
          >
            {{ ctaText }}
          </Button>
          <ButtonSave
            v-if="hasSaveButton"
            :id="id"
            type="product"
            class="relative bottom-0 left-8 my-4 md:my-12 md:left-16"
            :active="isFavoriteProduct"
          >
            Save
          </ButtonSave>
        </div>
      </div>
    </LayoutGrid>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'
import type { ProductProps } from '~/utils/types/aliases/product.alias'

/* Default props */
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  features: {
    type: Array,
    required: true,
  },
  rateHeading: {
    type: String,
    required: false,
    default: '',
  },
  rate: {
    type: String,
    required: false,
    default: '',
  },
  comparisonRate: {
    type: String,
    required: false,
    default: '',
  },
  ratesDisclaimer: {
    type: String,
    required: false,
    default: '',
  },
  link: {
    types: [String, null],
    required: true,
  },
  isAsset: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    required: false,
    default: '',
  },
  hasSaveButton: {
    type: Boolean,
    default: true,
  },
  ctaText: {
    type: String,
    default: 'Find out more',
  },
}) as ProductProps

/* Reactive props */
const id = ref(props.id)
const heading = ref(props.heading)
const content = ref(props.content)
const features = ref(props.features)
const rateHeading = ref(props.rateHeading)
const rate = ref(props.rate)
const comparisonRate = ref(props.comparisonRate)
const ratesDisclaimer = ref(props.ratesDisclaimer)
const link = ref(props.link)
const isAsset = ref(props.isAsset)
const tag = ref(props.tag)
const hasSaveButton = ref(props.hasSaveButton)
const ctaText = ref(props.ctaText)
/* const selectedValue = ref(null) */
const favoriteProducts = ref([] as string[]) // #NOTE old approach getting from store $store.state.LocalStorage.Favourites.products

/* Computed props */
const headingBoldText = computed((): string => {
  const words = heading.value.split(' ')
  words.splice(-2)

  return words.join(' ')
})

const headingLightText = computed((): string => {
  const words = heading.value.split(' ').splice(-2)
  return words.join(' ')
})

const isFavoriteProduct = computed((): boolean => {
  return favoriteProducts.value.includes(id.value)
})

/* Method handlers */
// #NOTE these methods are not being used within scope
/* const handleOnShowPopular = (item: any): any => {
  if (item.booleanVal !== '') {
    return item.booleanVal
  }
}

const handleOnSaveButton = (index: any) => {
  selectedValue.value = index
} */

/* Watcher */
watchEffect(() => {
  id.value = props.id
  heading.value = props.heading
  content.value = props.content
  features.value = props.features
  rateHeading.value = props.rateHeading
  rate.value = props.rate
  comparisonRate.value = props.comparisonRate
  ratesDisclaimer.value = props.ratesDisclaimer
  link.value = props.link
  isAsset.value = props.isAsset
  tag.value = props.tag
  hasSaveButton.value = props.hasSaveButton
  ctaText.value = props.ctaText
})
</script>
