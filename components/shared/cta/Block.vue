<template>
  <div ref="block" :style="{ paddingTop: dynamicPaddingTop }">
    <div class="relative gradient-secondary rounded-2xl text-white flex flex-col lg:flex-row" :class="{ 'lg:flex-row-reverse': flipRow }">
      <!-- Image Section -->
      <div
        :class="[
          'absolute bottom-0 mobile+tablet:hidden',
          { 'top-0' : imageCentered },
          { 'right-8 w-4/12': !minified },
          { 'h-[400px]': !minified && !imageCentered },
          { 'right-0 w-2/5 pr-8': minified },
          { 'left-8': flipRow, 'right-8': !flipRow }
        ]"
      >
        <NuxtImg
          ref="image"
          format="webp"
          width="400"
          :src="image.filename"
          :alt="image.alt"
          :class="[
            'w-full h-full object-contain',
            imageCentered ? 'object-center' : 'object-bottom'
          ]"
          loading="lazy"
        />
      </div>
      <!-- Content Section -->
      <div
        :class="[
          'relative px-4 py-10 text-center lg:text-left w-full order-1',
          minified ? 'lg:w-3/5 lg:pl-8 lg:py-12' : 'lg:w-7/12 lg:pl-16 lg:py-20',
        ]"
      >
        <h2 :class="['font-heavy', minified ? 'text-h4-sm lg:text-h4' : 'text-h2-sm lg:text-h2']">
          {{ heading }}
        </h2>
        <span
          :class="[
            minified ? 'font-bold text-lg leading-normal mt-4' : 'text-h5-sm lg:text-h5 mt-2',
          ]"
          :aria-label="heading"
        >
          {{ content }}
        </span>
        <div
          v-if="hasCtas"
          :class="['flex flex-col lg:flex-row lg:flex-wrap lg:items-center gap-4', minified ? 'mt-6 lg:mt-10' : 'mt-6 lg:mt-9']"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CtaProps } from '../../../utils/types/aliases/cta.alias'
import { WindowInnerWidthSizesEnum } from '../../../utils/types/enums/window-sizes.enum'

const slots = useSlots()

/* Default props */
const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  content: {
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
  imageCentered: {
    type: Boolean,
    default: false,
  },
  minified: {
    type: Boolean,
    default: false,
  },
  flipRow: {
    type: Boolean,
    default: false,
  },
}) as CtaProps

const windowSize = ref(window.innerWidth)

/* Computed props */
const hasCtas = computed((): boolean => {
  return !!slots.default
})

const dynamicPaddingTop = computed(() => {
  // Adjust the conditions as needed based on your layout requirements
  if (windowSize.value > WindowInnerWidthSizesEnum.SEVEN_SIX_EIGHT && !props.imageCentered && !props.minified) {
    return '60px' // Add your desired padding value
  }
  return '0' // Default padding value when conditions are not met
})

/* Method handlers */
const handleResize = () => {
  windowSize.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

</script>
