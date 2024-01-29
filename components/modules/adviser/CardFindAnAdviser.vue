<template>
  <div class="max-w-[850px] max:max-w-[1040px] my-12">
    <div class="relative">
      <LayoutGrid multirow>
        <div class="col-span-12 my-4">
          <div
            class="flex flex-wrap shadow-card rounded-lg relative h-full rounded-2xl md:items-start lg:items-center relative px-4 py-8 sm:py-0 bg-white"
          >
            <div
              class="flex flex-col w-full mt-4 md:mt-0 lg:mb-20 md:w-1/2 lg:w-2/6 px-2 order-2 lg:order-none"
            >
              <h2
                class="text-deep-sapphire text-h2-sm my-1 text-left font-heavy md:mb-0 lg:-mt-12"
              >
                {{ fullName }}
              </h2>
              <TrustpilotWidget
                v-if="null !== trustScore && parseFloat(trustScore) >= 3.8"
                :class="['relative', 'left-0', 'my-4']"
                alignment-class="justify-start flex-nowrap"
                :trust-score="trustScore"
                :star-image="trustpilotImage"
                star-string=""
                trustpilot-url="https://au.trustpilot.com/review/www.liberty.com.au/"
                :number-of-reviews="2940"
                :show-trust-score="false"
                :show-number-of-reviews="false"
                theme="light"
              />
            </div>
            <div class="w-full md:w-1/2 lg:w-2/5 mb-4 lg:mt-6 order-2 lg:order-none">
              <span
                v-if="!showActivated"
                :data-identifier="`hpt-phone-cts-${sanitizedAdviserSlug}`"
                class="text-h5-sm text-deep-sapphire font-normal font-bold underline hover:no-underline px-4 cursor-pointer"
                @click="handleOnActivateShow"
              >
                {{ phoneNumber.slice(0, 8) }}... Show
              </span>
              <a
                :href="`tel:${phoneNumber}`"
                class="text-h5-sm text-deep-sapphire font-normal font-bold px-4"
                :data-identifier="`hpt-phone-${sanitizedAdviserSlug}`"
                @click="handleOnClickPhone"
              >
                <span v-if="showActivated">{{ phoneNumber }}</span>
              </a>
              <div class="p-4 mb-12 sm:mb-20 lg:mb-0">
                <h5 class="font-bold text-body text-font-gray">
                  {{ firstName }} specialises in:
                </h5>
                <ul
                  class="block my-4 md:max-h-28 text-body-sm text-font-tundora"
                >
                  <li v-for="s in specialties" :key="s">
                    <IconCircleCheck
                      class="w-5 h-5 fill-success inline-block"
                    />
                    <span class="relative top-1 sm:pl-4 pr-8 mt-4">{{
                      s
                    }}</span>
                  </li>
                  <li>
                    <IconCircleCheck
                      class="w-5 h-5 fill-success inline-block"
                    />
                    <span class="relative top-1 sm:pl-4 pr-8 mt-4">Liberty motor loans</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full lg:w-1/5 mb-4 bg-grey-100 rounded-2xl lg:bg-transparent lg:mt-6 order-1 lg:order-none">
              <NuxtImg
                :src="image.filename"
                :alt="image.alt"
                loading="lazy"
                class="mx-auto mt-4 rounded-2xl lg:absolute lg:bottom-0 xs:w-[187px] xs:h-[187px] lg:px-0 lg:right-0 lg:w-[337px] lg:h-[337px]"
              />
            </div>
            <div class="my-6 bottom-0 absolute inline-flex justify-left h-12 px-3">
              <Button
                tag="a"
                :href="adviserUrl"
                :disabled="false"
                variant="primary"
                size="small"
                class="mx-auto text-body"
              >
                Find out more
              </Button>
            </div>
          </div>
        </div>
      </LayoutGrid>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'
import type { FindAnAdviserProps } from '~/utils/types/aliases/adviser.alias'
import IconCircleCheck from '~/assets/icons/CircleCheck.svg?component'

/* Emit handlers */
const emit = defineEmits(['showNumber', 'clickPhone'])

/* Default props */
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  firstName: {
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
  specialties: {
    type: Array,
    required: true,
  },
  customAdviserUrl: {
    type: String,
    default: null,
  },
  trustScore: {
    type: String,
    default: null,
  },
  trustpilotImage: {
    type: String,
    default: null,
  },
}) as FindAnAdviserProps

/* Reactive props */
const id = ref(props.id)
const fullName = ref(props.fullName)
const firstName = ref(props.firstName)
const phoneNumber = ref(props.phoneNumber)
const image = ref(props.image)
const specialties = ref(props.specialties)
const customAdviserUrl = ref(props.customAdviserUrl)
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
const handleOnActivateShow = () => {
  showActivated.value = true
  emit('showNumber', sanitizedAdviserSlug)
}

const handleOnClickPhone = () => {
  emit('clickPhone', sanitizedAdviserSlug)
}

/* Watcher */
watchEffect(() => {
  id.value = props.id
  fullName.value = props.fullName
  firstName.value = props.firstName
  phoneNumber.value = props.phoneNumber
  image.value = props.image
  specialties.value = props.specialties
  customAdviserUrl.value = props.customAdviserUrl
  trustScore.value = props.trustScore
  trustpilotImage.value = props.trustpilotImage
})
</script>
