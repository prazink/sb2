<template>
  <div
    ref="hero"
    class="relative z-40 mx-auto max-w-[1440px] lg:px-6 max:px-12 flex flex-col justify-end print:bg-white"
    :style="{
      minHeight: initialHeight ? `${initialHeight}px` : 'auto',
    }"
  >
    <div
      :class="[
        'text-white flex flex-col justify-end',
        isSticky ? 'lg:fixed top-0 lg:left-6 lg:right-6 max:left-1/2 max:right-auto max:w-full max:-translate-x-1/2 max:max-w-[1392px]' : 'relative',
      ]"
      :style="{
        maxHeight: currentHeight ? `${currentHeight}px` : 'none',
      }"
    >
      <div
        :class="['hidden lg:block absolute bottom-0 right-0 w-full h-full lg:rounded-3xl lg:overflow-hidden', 'gradient-' + type]"
      >
        <NuxtImg
          preset="avatar"
          :src="desktop_image.filename"
          :alt="desktop_image.alt"
          loading="eager"
          class="w-full h-full object-cover object-right-bottom"
          :style="{
            minHeight: initialHeight ? `${initialHeight}px` : 'auto',
          }"
          width="1392"
          height="600"
        />
      </div>
      <div
        :class="[
          'absolute top-0 left-0 w-full lg:w-8/12 h-full rounded-3xl lg:overflow-hidden',
          'gradient-' + type
        ]"
      />
      <LayoutWrapper ref="content" class="relative z-1 overflow-hidden border-transparent h-full rounded-xl" padding="lg:px-10">
        <div
          class="col-span-full block lg:hidden min-h-[328px]"
          :style="{background: placeholderMobileBg}"
        >
          <NuxtImg
            preset="avatar"
            :src="mobile_image.filename"
            :alt="mobile_image.alt"
            class="w-full h-full object-cover"
            width="760"
            height="630"
            loading="eager"
          />
        </div>
        <LayoutGrid>
          <div
            :class="[
              'relative lg:h-[600px] flex flex-col justify-center col-span-full lg:col-span-5 max:col-span-4 pt-5 pb-8 px-4 lg:px-0 text-center lg:text-left',
              'gradient-' + type
            ]"
          >
            <TrustpilotWidget
              v-if="showTrustpilot"
              :class="['mb-4 mx-0 lg:mb-6 bg-font-gray bg-opacity-20 justify-center text-white border-0 rounded-full p-2 w-auto']"
              trust-score="5"
              star-image="//images-static.trustpilot.com/api/stars/5/star.svg"
              star-string="Excellent"
              trustpilot-url="https://au.trustpilot.com/review/www.liberty.com.au/"
              :number-of-reviews="2940"
              :show-trust-score="false"
              :show-number-of-reviews="false"
              trust-score-style=""
              display-star-style="hidden sm:block text-body-sm"
              theme="dark"
            />
            <h1
              class="text-h1-sm font-heavy text-white md:text-h1 mb-4"
              v-html="heading"
            />
            <h2
              class="text-h5-sm text-white mb-6 md:text-h5"
              v-html="subheading"
            />
            <div class="flex flex-col lg:flex-row lg:flex-wrap lg:items-center gap-3 mt-8">
              <slot name="extras" />
            </div>
          </div>
        </LayoutGrid>
      </LayoutWrapper>
      <div
        v-if="hasNavBar"
      >
        <div
          class="hidden absolute bottom-0 left-0 z-1 w-full h-full lg:rounded-3xl lg:overflow-hidden lg:flex lg:flex-col justify-end pointer-events-none print:bg-white"
          :style="{
            background: placeholderBg,
            opacity: placeholderOpacity
          }"
        >
          <div class="flex items-center justify-center h-[150px] pb-[36px]">
            <p class="font-heavy text-white text-h4" v-html="placeholder_heading || heading" />
          </div>
        </div>
        <div class="absolute z-2 top-full left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-10 lg:right-10 -translate-y-1/2 bg-white rounded-full lg:rounded-2xl shadow-card print:bg-white">
          <LayoutWrapper>
            <slot name="content" />
          </LayoutWrapper>
        </div>
      </div>
    </div>
    <div v-if="showTrustpilotReview && !hasNavBar" class="mx-auto lg:absolute z-10 top-full left-1/2 md:w-[650px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:bg-white w-auto rounded-full lg:shadow-card text-deep-sapphire">
      <TrustpilotWidget
        class="px-4 md:px-10 py-5"
        :trust-score="trustScore"
        star-image="//images-static.trustpilot.com/api/stars/5/star.svg"
        star-string="Excellent"
        trustpilot-url="https://au.trustpilot.com/review/www.liberty.com.au/"
        :number-of-reviews="numberOfReviews"
        :show-trust-score="true"
        :show-number-of-reviews="true"
        trust-score-style=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { WindowInnerWidthSizesEnum } from '~/utils/types/enums/window-sizes.enum'
import { CrossSellTypesEnum } from '~/utils/types/enums/cross-sell.enum'
import { PlaceholderGradientTypesEnum, MobilePlaceholderBacgroundTypesEnum } from '~/utils/types/enums/gradient.enum'

const props = defineProps({

  heading: {
    type: String,
    required: true,
  },
  placeholder_heading: {
    type: String,
    default: '',
  },
  subheading: {
    type: String,
    required: true,
  },
  desktop_image: {
    type: Object,
    required: true,
  },
  mobile_image: {
    type: Object,
    default () {
      return null
    },
  },
  type: {
    type: String,
    default: CrossSellTypesEnum.LOAN_HOME,
    validator (val: CrossSellTypesEnum) {
      return Object.values(CrossSellTypesEnum).includes(val)
    },
  },
  showTrustpilot: {
    type: Boolean,
    default: true,
  },
  trustpilot: {
    type: Boolean,
    default: false,
  },
  trustScore: {
    type: String,
    required: true,
  },
  numberOfReviews: {
    type: Number,
    required: true,
  },
  showTrustpilotReview: {
    type: Boolean,
    default: false,
  },
  hasNavBar: {
    type: Boolean,
    default: false,
  },
})

// Set your initial offset value
const offset = ref(-186)

// Define ref
const initialHeight = ref(0)
const initialOffset = ref(0)
const currentHeight = ref(0)
const isSticky = ref(false)
const placeholderOpacity = ref(0)
const hero = ref(null)

const showTrustpilotReview = computed(() => {
  return props.trustpilot === true
})

let isInitialHeightSet = false
const handleResize = () => {
  if (!props.hasNavBar || window.innerWidth < WindowInnerWidthSizesEnum.SEVEN_SIX_EIGHT) {
    return
  }
  if (hero.value) {
    const { offsetHeight, offsetTop } = hero.value
    if (!isInitialHeightSet) {
      initialHeight.value = offsetHeight
      initialOffset.value = offsetTop
      currentHeight.value = offsetHeight // Set current height to the initial height on the first resize
      isInitialHeightSet = true
    }
  }
}

const handleScroll = () => {
  if (!props.hasNavBar || (window.innerWidth < WindowInnerWidthSizesEnum.SEVEN_SIX_EIGHT)) {
    return
  }

  const scrollTop = window.scrollY
  const heroScrollTop = scrollTop - initialOffset.value
  const heroTrigger = 0.4 * initialHeight.value
  const placeholderHeight = 150

  currentHeight.value =
    initialHeight.value - heroScrollTop >= placeholderHeight
      ? initialHeight.value - heroScrollTop
      : placeholderHeight

  isSticky.value = currentHeight.value === placeholderHeight

  if (heroScrollTop >= heroTrigger) {
    // Fading in placeholder only after trigger point
    placeholderOpacity.value =
      (heroScrollTop - heroTrigger) / (initialHeight.value - placeholderHeight - heroTrigger) <= 1
        ? (heroScrollTop - heroTrigger) / (initialHeight.value - placeholderHeight - heroTrigger)
        : 1
  } else {
    // Scrolling up or before trigger point
    placeholderOpacity.value = 0
  }
}

onMounted(() => {
  nextTick(() => {
    handleResize()
    offset.value = -186
  })

  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
const placeholderBg = computed(() => {
  switch (props.type) {
    case CrossSellTypesEnum.LOAN_HOME:
      return PlaceholderGradientTypesEnum.LOAN_HOME
    case CrossSellTypesEnum.LOAN_CAR:
      return PlaceholderGradientTypesEnum.LOAN_CAR
    case CrossSellTypesEnum.LOAN_PERSONAL:
      return PlaceholderGradientTypesEnum.LOAN_PERSONAL
    case CrossSellTypesEnum.LOAN_BUSINESS:
      return PlaceholderGradientTypesEnum.LOAN_BUSINESS
    case CrossSellTypesEnum.LOAN_SMSF:
      return PlaceholderGradientTypesEnum.LOAN_SMSF
    case CrossSellTypesEnum.LOAN_COMMERCIAL:
      return PlaceholderGradientTypesEnum.LOAN_COMMERCIAL
    default:
      return PlaceholderGradientTypesEnum.LOAN_HOME
  }
})

const placeholderMobileBg = computed(() => {
  switch (props.type) {
    case CrossSellTypesEnum.LOAN_HOME: return MobilePlaceholderBacgroundTypesEnum.LOAN_HOME
    case CrossSellTypesEnum.LOAN_CAR: return MobilePlaceholderBacgroundTypesEnum.LOAN_CAR
    case CrossSellTypesEnum.LOAN_PERSONAL: return MobilePlaceholderBacgroundTypesEnum.LOAN_PERSONAL
    case CrossSellTypesEnum.LOAN_BUSINESS: return MobilePlaceholderBacgroundTypesEnum.LOAN_BUSINESS
    case CrossSellTypesEnum.LOAN_SMSF: return MobilePlaceholderBacgroundTypesEnum.LOAN_SMSF
    case CrossSellTypesEnum.LOAN_COMMERCIAL: return MobilePlaceholderBacgroundTypesEnum.LOAN_COMMERCIAL
    default: return MobilePlaceholderBacgroundTypesEnum.LOAN_HOME
  }
})
</script>

<style lang="scss" scoped>

.gradient-loan-home {
  background: linear-gradient(180deg, #80d3ff 0%, #55ACE7 11.98%, #4089CF 31.25%, #2257B5 81.77%);

  @screen lg {
    background: linear-gradient(90deg, #266DAF 33.57%, rgba(38, 109, 175, 0) 77.65%);
  }
}

.gradient-loan-car {
  // TODO: needs tweaking
  background: linear-gradient(180deg, #e75473 0, #CE303F 100%);

  @screen lg {
    background: linear-gradient(90deg, #E9305D 44.17%, rgba(252, 82, 101, 0) 79.09%);
  }
}

.gradient-loan-personal {
  background: linear-gradient(180deg, #a575f0 15.14%, #8254D5 62.29%);

  @screen lg {
    background: linear-gradient(90deg, #7554C4 46.58%, rgba(117, 84, 196, 0) 96.25%);
  }
}

.gradient-loan-business {
  background: linear-gradient(180deg, #54916a 0%, #3F6B50 100%);

  @screen lg {
    background: linear-gradient(90deg, #3B8551 32.6%, rgba(59, 133, 81, 0) 77.65%);
  }
}

.gradient-loan-smsf {
  background: linear-gradient(180deg, #e7a4c4 1.04%, #AD426C 60.94%);

  @screen lg {
    background: linear-gradient(90deg, #AB3F70 28.06%, rgba(171, 63, 112, 0) 76.16%);
  }
}

.gradient-loan-commercial {
  background: linear-gradient(180deg, #ffe68f 1.04%, #ECAF75 15.14%, #D78061 30.73%, #C4574F 60.94%);

  @screen lg {
    background: linear-gradient(90deg, #D1852C 29.09%, rgba(201, 136, 39, 0) 74.15%);
  }
}
</style>
