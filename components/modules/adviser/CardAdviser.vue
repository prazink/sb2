<template>
  <div ref="cardElem" class="relative bg-white flex gap-x-8 shadow-card rounded-pill px-2.5 lg:px-6 min-h-[180px]">
    <div ref="imageElem" class="absolute bottom-0 right-0 lg:right-6 aspect-square w-2/5 rounded-r-pill sm:overflow-hidden">
      <img
        width="auto"
        :src="image.filename"
        :alt="image.alt"
        loading="lazy"
        class="w-ful h-full object-cover"
      >
    </div>
    <div class="flex flex-col w-3/5 py-3">
      <TrustpilotWidget
        v-if="trustScore !== null && parseFloat(trustScore) >= 3.8"
        class="mt-1 mb-2.5"
        widget-alignment=""
        alignment-class="justify-start flex-nowrap"
        widget-height="h-4"
        :trust-score="trustScore"
        :star-image="trustpilotImage"
        star-string=""
        trustpilot-url="https://au.trustpilot.com/review/www.liberty.com.au/"
        :number-of-reviews="2940"
        :show-trust-score="false"
        :show-number-of-reviews="false"
      />
      <div v-else class="pt-5" />
      <h5 class="font-heavy text-deep-sapphire text-h5-sm lg:text-h5 mb-1.5">
        {{ fullName }}
      </h5>
      <span
        v-if="!showActivated"
        class="text-h5-sm text-deep-sapphire font-normal font-bold underline hover:no-underline cursor-pointer"
        :data-identifier="`hpt-phone-cts-${sanitizedAdviserSlug}`"
        @click="handleOnActivateShow"
      >
        {{ phoneNumber.slice(0, 8) }}... Show
      </span>
      <a
        :href="`tel:${phoneNumber}`"
        :data-identifier="`hpt-phone-${sanitizedAdviserSlug}`"
        class="text-h5-sm text-deep-sapphire font-normal font-bold"
        @click="handlePhoneClick"
      >
        <span v-if="showActivated">{{ phoneNumber }}</span>
      </a>
      <Button
        tag="a"
        :href="adviserUrl"
        variant="primary"
        size="small"
        class="self-start mt-3"
      >
        Learn more
      </Button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect, nextTick, onMounted } from 'vue'
import type { AdviserProps } from '~/utils/types/aliases/adviser.alias'
import { WindowInnerWidthSizesEnum } from '~/utils/types/enums/window-sizes.enum'

/* Emit handlers */
const emit = defineEmits(['showNumber', 'clickPhone'])

/* Default props */
const props = defineProps({
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
  trustScore: {
    types: [String, null],
    default: null,
  },
  trustpilotImage: {
    types: [String, null],
    default: null,
  },
}) as AdviserProps

/* Reactive props */
const cardElem = ref()
const imageElem = ref()
const fullName = ref(props.fullName)
const phoneNumber = ref(props.phoneNumber)
const image = ref(props.image)
const trustScore = ref(props.trustScore)
const trustpilotImage = ref(props.trustpilotImage)
const showActivated = ref(false)

/* Computed props */
const sanitizedAdviserSlug = computed((): string => {
  const nameParts = fullName.value.split(' ')

  const sanitizeNamePart = (part: string) =>
    part
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')

  const sanitizedNameParts = nameParts.map(sanitizeNamePart)

  if (nameParts.length >= 5) {
    const filteredNameParts = [nameParts[0], nameParts[1], nameParts[nameParts.length - 1]]
    return filteredNameParts.map(sanitizeNamePart).join('-')
  } else {
    return sanitizedNameParts.join('-')
  }
})

const adviserUrl = computed((): string => {
  return `/mortgage-broker/${sanitizedAdviserSlug.value}`
})

/* Method handlers */
const handleOnResize = () => {
  nextTick(() => {
    if (imageElem.value.offsetHeight > cardElem.value.offsetHeight) {
      cardElem.value.style.marginTop = `${imageElem.value.offsetHeight - cardElem.value.offsetHeight}px`
    } else {
      cardElem.value.style.marginTop = null
    }
  })
}

const handleOnActivateShow = (): void => {
  showActivated.value = true
  emit('showNumber', sanitizedAdviserSlug)
}

const handlePhoneClick = (): void => {
  emit('clickPhone', sanitizedAdviserSlug)
}

/* Watcher */
watchEffect(() => {
  fullName.value = props.fullName
  phoneNumber.value = props.phoneNumber
  image.value = props.image
  trustScore.value = props.trustScore
  trustpilotImage.value = props.trustpilotImage
})

onMounted(() => {
  if (window.innerWidth < WindowInnerWidthSizesEnum.FOUR_SIX_EIGHT) {
    showActivated.value = true
  }
  handleOnResize()
})
</script>
