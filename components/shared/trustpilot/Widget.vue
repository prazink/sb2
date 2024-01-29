<template>
  <div class="flex items-center" :class="alignmentClass">
    <div class="flex items-center justify-center">
      <span v-if="starString" class="font-bold text-lg mr-2 sm:mr-3 block">{{ starString }}</span>
      <img
        v-if="starImage !== null"
        :src="starImage"
        alt=""
        loading="lazy"
        class="inline-block w-20 sm:w-32 mr-3"
        width="128"
        height="28"
      >
    </div>
    <div class="flex items-center justify-center sm:mt-0 sm:w-auto">
      <span v-if="showTrustScore" class="text-xs sm:text-sm mr-2 sm:mr-3">
        <span class="font-bold">{{ trustScore }}</span> out of <span class="font-bold">5</span>
      </span>
      <span v-if="showNumberOfReviews" class="text-xs sm:text-sm mr-2 sm:mr-3">
        <span class="font-bold">{{ numberOfReviews }}</span> reviews on
      </span>
      <img
        :src="trustpilotLogo"
        alt=""
        class="w-20 sm:w-24 inline-block"
        loading="lazy"
        width="96"
        height="24"
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'
import type { TrustPilotWidgetProps } from '~/utils/types/aliases/trustpilot.alias'

/* Default props */
const props = defineProps({
  trustScore: {
    type: String,
    required: true,
  },
  starImage: {
    types: [String, null],
    required: true,
  },
  starString: {
    type: String,
    required: true,
  },
  trustpilotUrl: {
    type: String,
    required: true,
  },
  numberOfReviews: {
    type: Number,
    required: true,
  },
  showTrustScore: {
    type: Boolean,
    default: true,
  },
  showNumberOfReviews: {
    type: Boolean,
    default: true,
  },
  theme: {
    type: String,
    default: 'light',
  },
  alignmentClass: {
    type: String,
    default: 'justify-center flex-wrap',
  },
}) as TrustPilotWidgetProps

/* Reactive props */
const trustScore = ref(props.trustScore)
const starImage = ref(props.starImage)
const starString = ref(props.starString)
const trustpilotUrl = ref(props.trustpilotUrl)
const numberOfReviews = ref(props.numberOfReviews)
const showTrustScore = ref(props.showTrustScore)
const showNumberOfReviews = ref(props.showNumberOfReviews)
const theme = ref(props.theme)
const alignmentClass = ref(props.alignmentClass)

/* Computed props */
const trustpilotLogo = computed((): string => {
  return `https://images-static.trustpilot.com/api/logos/${theme.value}-bg/logo.svg`
})

/* Method handlers */

/* Watcher */
watchEffect(() => {
  trustScore.value = props.trustScore
  starImage.value = props.starImage
  starString.value = props.starString
  trustpilotUrl.value = props.trustpilotUrl
  numberOfReviews.value = props.numberOfReviews
  showTrustScore.value = props.showTrustScore
  showNumberOfReviews.value = props.showNumberOfReviews
  theme.value = props.theme
  alignmentClass.value = props.alignmentClass
})
</script>
