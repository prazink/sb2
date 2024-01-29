<template>
  <div ref="carouselElem" class="carousel">
    <div
      class="relative overflow-hidden"
      @mousemove="handleMouseMove"
      @mouseend="handleMouseEnd"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div class="flex transition-transform duration-300 ease-in-out" :style="carouselStyle">
        <template v-if="!hasDefaultSlotContent">
          <div v-for="(slide, index) in visibleSlides" :key="index" class="carousel-item">
            <template v-if="component !== null">
              <!-- eslint-disable vue/require-component-is -->
              <component v-bind="slide" />
            </template>
            <template v-else>
              <NuxtImg
                :src="slide.filename + '?format=webp&quality=100'"
                :alt="slide.alt"
                class="block mx-auto w-full h-full object-cover"
                :loading="index === 0 ? 'eager' : 'lazy'"
              />
            </template>
          </div>
        </template>
        <template v-else-if="hasDefaultSlotContent && slides.length">
          <slot />
        </template>
      </div>
      <ul v-if="dots" class="carousel-dots">
        <li
          v-for="(_dot, index) in slides"
          :key="index"
          :class="{ active: index === currentSlide }"
          class="carousel-dot-item"
          @click="handleGoToSlide(index)"
        >
          <button type="button">
            {{ index + 1 }}
          </button>
        </li>
      </ul>
      <div v-if="navButtons" class="mt-4 flex justify-center">
        <button class="nav-button prev" @click="handlePrevSlide">
          &lt;
        </button>
        <button class="nav-button next" @click="handleNextSlide">
          &gt;
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
// import { useMousePressed } from '@vueuse/core'
import { ref, watchEffect, onMounted, onUnmounted, useSlots } from 'vue'
import type { CarouselProps } from '~/utils/types/aliases/carousel.alias'

/* Emit handlers */
const emit = defineEmits(['afterChange', 'beforeChange'])

/* Slots */
const slots = useSlots()

/* Default props */
const props = defineProps({
  /* Component possible values are CardBlog, CardAdviser, etc */
  component: {
    types: [String, null],
    required: false,
    default: null,
  },
  slides: {
    type: Array,
    default () {
      return []
    },
  },
  initialSlide: {
    type: Number,
    default: 0,
  },
  dots: {
    type: Boolean,
    default: true,
  },
  navButtons: {
    type: Boolean,
    default: true,
  },
  centerMode: {
    type: Boolean,
    default: false,
  },
  slidesToShow: {
    type: Number,
    default: 1,
  },
  infinite: {
    type: Boolean,
    default: true,
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
  autoplaySpeed: {
    type: Number,
    default: 3000,
  },
  slideWidth: {
    type: Number,
    default: 300,
    required: false,
  },
}) as CarouselProps

/* Reactive props */
const carouselElem = ref<HTMLElement | null>()
const initialSlide = ref(props.initialSlide)
const dots = ref(props.dots)
const navButtons = ref(props.navButtons)
const centerMode = ref(props.centerMode)
const slidesToShow = ref(props.slidesToShow)
const infinite = ref(props.infinite)
const autoplay = ref(props.autoplay)
const autoplaySpeed = ref(props.autoplaySpeed)
const currentSlide = ref(props.initialSlide)
const hasDefaultSlotContent = ref(false)
const slides = ref(props.slides) // populate slides here
const visibleSlides = ref(props.slides)
const component = ref(props.component)
const slideWidth = ref(props.slideWidth)

/* Touches ref */
let touchStartX = 0
let touchEndX = 0

/* Mouse Drags ref */
let mouseDragX = 0
let mouseDragEndX = 0

/* Computed props */
const carouselStyle = computed((): { transform: string } => {
  let result: string = ''

  if (slidesToShow.value === 1) {
    result = `translateX(${currentSlide.value * -100}%)`
  } else if (slidesToShow.value > 1) {
    result = `translateX(-${currentSlide.value * slideWidth.value}px)`
  }

  return {
    transform: result,
  }
})

/* const target = computed<HTMLElement | null>(() =>
  carouselElem.value as HTMLElement)

const mouse = reactive(useMousePressed({ target: target })) */

/* Method handlers */
let autoplayInterval: any

const handleStartAutoplay = () => {
  if (props.autoplay) {
    autoplayInterval = setInterval(handleNextSlide, props.autoplaySpeed)
  }
}

const handleStopAutoplay = () => {
  if (props.autoplay) {
    clearInterval(autoplayInterval)
  }
}

const handleUpdateVisibleSlides = () => {
  const startIndex = Math.max(currentSlide.value - 1, 0)
  visibleSlides.value = props.slides.slice(startIndex, startIndex + 3)
}

const handleNextSlide = () => {
  if (currentSlide.value < props.slides.length - 1) {
    currentSlide.value += 1
  } else if (props.infinite) {
    currentSlide.value = 0
  }
  handleUpdateVisibleSlides()
  emit('afterChange', { currentSlide: currentSlide.value })
}

const handlePrevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value -= 1
  } else if (props.infinite) {
    currentSlide.value = props.slides.length - 1
  }
  handleUpdateVisibleSlides()
  emit('afterChange', { currentSlide: currentSlide.value })
}

const handleGoToSlide = (index: number) => {
  if (index >= 0 && index < slides.value.length) {
    currentSlide.value = index
    handleUpdateVisibleSlides()
    emit('afterChange', { currentSlide: currentSlide.value })
  }
}

const handleMouseMove = (evt: any) => {
  mouseDragX = evt.x
  // console.log(mouseDragX)
}

const handleMouseEnd = (evt: any) => {
  mouseDragEndX = evt.x
  const deltaX = mouseDragEndX - mouseDragX

  if (deltaX > 0) {
    // Swipe right
    handlePrevSlide()
  } else if (deltaX < 0) {
    // Swipe left
    handleNextSlide()
  }
}

const handleTouchStart = (evt: any) => {
  touchStartX = evt.touches[0].clientX
}

const handleTouchMove = (evt: any) => {
  touchEndX = evt.touches[0].clientX
}

const handleTouchEnd = () => {
  const deltaX = touchEndX - touchStartX
  if (deltaX > 0) {
    // Swipe right
    handlePrevSlide()
  } else if (deltaX < 0) {
    // Swipe left
    handleNextSlide()
  }
}

const checkDefaultContent = () => {
  hasDefaultSlotContent.value = !!slots.default
}

/* Events */
onMounted(() => {
  handleStartAutoplay()
  handleUpdateVisibleSlides()
  checkDefaultContent()
})

onUnmounted(() => {
  handleStopAutoplay()
})

/* Watcher */
watchEffect(() => {
  initialSlide.value = props.initialSlide
  dots.value = props.dots
  navButtons.value = props.navButtons
  centerMode.value = props.centerMode
  slidesToShow.value = props.slidesToShow
  infinite.value = props.infinite
  autoplay.value = props.autoplay
  autoplaySpeed.value = props.autoplaySpeed
  slides.value = props.slides
  slideWidth.value = props.slideWidth
  component.value = props.component
})
</script>
<style lang="scss" scoped>
.carousel {
  @apply mx-auto my-auto;

  .carousel-item {
    @apply w-full flex-shrink-0;
  }

  .carousel-dots {
    @apply absolute bottom-[10px] left-[50%] flex translate-x-[-50%] items-center list-none p-0 whitespace-nowrap;

    .carousel-dot-item {
      margin-left: 0.75rem;
      margin-right: 0.75rem;
      height: 0.625rem;
      width: 0.625rem;
      border-radius: 9999px;
    }

    .active > button {
      @apply bg-[#0a3370] text-white;
    }

    button {
      @apply m-0 block h-[0.625rem] w-[0.625rem] cursor-pointer bg-[#e7e7e7] p-0 text-[0px] leading-none rounded-[9999px] border-0 duration-300;
    }
  }

  .nav-button {
    @apply absolute top-[50%] translate-y-[-50%] bg-none border-none text-2xl cursor-pointer
    mx-2 px-3 py-1 bg-[#2825c1] text-white rounded;
  }

  .prev {
    @apply left-[10px];
  }

  .next {
    @apply right-[10px];
  }
}
</style>
