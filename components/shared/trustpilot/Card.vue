<template>
  <div class="flex flex-col bg-white border border-grey-500 rounded p-4 h-full">
    <div class="mb-auto">
      <div class="flex items-center">
        <img
          :src="review.star_image"
          alt=""
          loading="lazy"
          class="w-24 sm:w-28"
          width="110"
          height="22"
        >
        <span class="text-font-storm text-xs leading-normal ml-auto">{{ review.review_date }}</span>
      </div>
      <p class="text-sm mt-3 font-bold">
        {{ review.title }}
      </p>
      <p class="text-xs mt-2">
        {{ review.text }}
      </p>
      <p class="text-xs leading-normal text-font-storm mt-2">
        {{ review.consumer }}
      </p>
    </div>
    <div class="mt-4">
      <div v-if="showAdviserCTA && review.adviser_url !== ''" class="mt-4">
        <img
          :src="'//d2ttwt9gu7swv4.cloudfront.net/assets/images/advisers/'+ review.adviser_guid +'.png'"
          alt=""
          loading="lazy"
          class="inline-block w-12 sm:w-14 mr-2 sm:mr-3 bg-grey-400 rounded"
        >
        <a :href="'https://www.liberty.com.au/' + review.adviser_url" class="underline text-persian-blue text-xs leading-nromal hover:no-underline font-bold">Meet {{ adviserFirstName }}</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'
// import type { TrustPilotReview } from '~/types/aliases/trustpilot.alias'

/* Default props */
const props = defineProps({
  review: {
    type: Object,
    required: true,
  },
  showAdviserCTA: {
    type: Boolean,
    default: false,
  },
})

/* Reactive props */
const review = ref(props.review) /* #NOTE annote type TrustPilotReview */
const showAdviserCTA = ref(props.showAdviserCTA)

/* Computed props */
const adviserFirstName = computed((): string => {
  return review.value.adviser_name.split(' ')[0]
})

/* Method handlers */

/* Watcher */
watchEffect(() => {
  review.value = props.review
  showAdviserCTA.value = props.showAdviserCTA
})

</script>
