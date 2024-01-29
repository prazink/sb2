<template>
  <div
    :class="[
      'relative bg-white flex items-center gap-3 shadow-card rounded-pill p-2.5',
      vertical ? 'flex-col mt-5' : 'flex-wrap'
    ]"
  >
    <div v-if="vertical" class="relative bg-grey-100 w-full h-[162px] rounded">
      <img
        format="webp"
        width="auto"
        :src="image.filename"
        :alt="image.alt"
        loading="lazy"
        class="absolute bottom-0 left-0 w-full h-[192px] object-cover object-top"
      >
    </div>
    <div v-else class="bg-grey-100 aspect-square w-[70px] rounded overflow-hidden">
      <img
        format="webp"
        width="auto"
        :src="image.filename"
        :alt="image.alt"
        loading="lazy"
        class="w-full h-full object-cover"
      >
    </div>
    <div
      :class="[
        'flex flex-col',
        vertical ? 'w-full' : 'flex-1'
      ]"
    >
      <TrustpilotWidget
        v-if="trustScore !== null && parseFloat(trustScore) >= 3.8"
        class="mb-2"
        alignment-class="justify-start flex-nowrap"
        widget-alignment=""
        widget-height="h-4"
        :trust-score="trustScore"
        :star-image="trustpilotImage"
        star-string=""
        trustpilot-url="https://au.trustpilot.com/review/www.liberty.com.au/"
        :number-of-reviews="2940"
        :show-trust-score="false"
        :show-number-of-reviews="false"
      />
      <h5 class="font-heavy text-deep-sapphire text-[17px] leading-normal">
        {{ fullName }}
      </h5>
      <Button
        v-if="!vertical"
        tag="a"
        :href="adviserUrl"
        variant="tertiary"
        size="small"
        class="self-start mt-1"
      >
        View profile
      </Button>
    </div>
    <div class="flex items-center justify-center gap-3 w-full">
      <Button
        tag="a"
        :href="adviserUrl"
        variant="primary"
        size="small"
        :class="['whitespace-nowrap', { 'w-full' : !vertical }]"
      >
        Learn more
      </Button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'
import type { AdviserCompressedProps } from '~/utils/types/aliases/adviser.alias'

/* Default props */
const props = defineProps({
  fullName: {
    type: String,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  trustScore: {
    type: String,
    default: null,
  },
  trustpilotImage: {
    type: String,
    default: null,
  },
}) as AdviserCompressedProps

/* Reactive props */
const fullName = ref(props.fullName)
const image = ref(props.image)
const vertical = ref(props.vertical)
const trustScore = ref(props.trustScore)
const trustpilotImage = ref(props.trustpilotImage)

/* Computed props */
const adviserUrl = computed((): string => {
  const slug = fullName.value.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '')
  return `/mortgage-broker/${slug}`
})

/* Method handlers */

/* Watcher */
watchEffect(() => {
  fullName.value = props.fullName
  image.value = props.image
  vertical.value = props.vertical
  trustScore.value = props.trustScore
  trustpilotImage.value = props.trustpilotImage
})

</script>
