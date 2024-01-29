<template>
  <div class="flex flex-col md:flex-row items-center justify-end md:justify-center">
    <img
      :src="trustpilotLogo"
      alt=""
      class="w-20 sm:w-24 mb-1 md:mr-3 md:mb-0"
      loading="lazy"
      width="96"
      height="24"
    >
    <img
      :src="starImage"
      alt=""
      loading="lazy"
      class="inline-block w-32 mb-1 md:mb-0 md:mr-3 w-[120px] sm:w-[128px]"
      width="128"
      height="28"
    >
    <span class="text-xs md:text-sm">
      <span class="font-bold">{{ numberOfReviews }}</span> reviews
    </span>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'

/* Default props */
const props = defineProps({
  trustScore: {
    type: String,
    required: true,
  },
  starImage: {
    type: String,
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
    type: String,
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
})

/* Reactive props */
const trustScore = ref(props.trustScore)
const starImage = ref(props.starImage)
const starString = ref(props.starString)
const trustpilotUrl = ref(props.trustpilotUrl)
const numberOfReviews = ref(props.numberOfReviews)
const showTrustScore = ref(props.showTrustScore)
const showNumberOfReviews = ref(props.showNumberOfReviews)
const theme = ref(props.theme)

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
})
</script>
