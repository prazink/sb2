<template>
  <div class="col-span-full my-4">
    <div class="flex flex-wrap w-full md:mt-2 px-2 md:pt-6">
      <div class="flex flex-col bg-white shadow-card rounded-lg relative w-full lg:w-[420px] h-full md:h-[450px] rounded-2xl relative px-6 py-12 md:py-0">
        <div classs="flex-1">
          <h2 class="text-deep-sapphire text-h4 my-1 text-left md:mt-4 md:mb-2">
            <span class="font-heavy">{{ headingBoldText }}</span>
            <br>{{ headingLightText }}
          </h2>
          <div>
            <ListCheckCircle :list-items="product.features" />
            <div class="px-4 mt-6">
              <!-- eslint-disable vue/no-v-html -->
              <p class="text-[14px] uppercase text-font-tundora font-heavy" v-html="product.rateHeading" />
              <!--eslint-enable-->
              <div class="flex max-w-[280px] lg:max-w-[380px]">
                <span class="text-h4-sm text-font-tundora font-bold mr-6 flex-2">
                  {{ product.rate }}
                </span>
                <span class="text-h4-sm text-font-tundora font-bold">
                  <!-- eslint-disable vue/no-v-html -->
                  <p v-html="product.comparisonRate" />
                  <!--eslint-enable-->
                  <p class="text-[12px] text-center text-font-tundora relative">
                    {{ product.ratesDisclaimer }}
                  </p>
                </span>
              </div>
            </div>
            <Button
              tag="nuxt-link"
              :to="product.link"
              variant="primary"
              size="small"
              class="bottom-0 text-body-sm my-6 relative md:absolute md:left-10"
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'
import type { ProductSliderProps } from '~/utils/types/aliases/product.alias'

/* Default props */
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
}) as ProductSliderProps

/* Reactive props */
const product = ref(props.product)

/* Computed props */
const headingBoldText = computed((): string => {
  const words = product.value?.heading.split(' ')
  words.splice(-2)
  return words.join(' ')
})

const headingLightText = computed((): string => {
  const words = product.value?.heading.split(' ').splice(-2)
  return words.join(' ')
})

/* Method handlers */

/* Watcher */
watchEffect(() => {
  product.value = props.product
})
</script>
