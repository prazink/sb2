<template>
  <div class="max-w-[1440px] mx-auto lg:px-6 relative">
    <div class="relative overflow-hidden">
      <section class="hero-banner relative overflow-hidden border-transparent h-full rounded-xl">
        <div class="flex flex-col justify-end lg:hidden" :class="placeholderMobileBg">
          <Carousel ref="carousel" v-bind="carouselOptions" @after-change="handleOnUpdateCurrentSlide($event)" />
        </div>
        <div v-if="!isMobile" class="hidden lg:block h-full lg:rounded-xl lg:min-h-[360px] max:min-h-[480px]" :style="placeholderBg">
          <div class="kenburns-bottom">
            <NuxtImg
              preset="avatar"
              :src="desktopImage.filename + '?format=webp&quality=100'"
              :alt="desktopImage.alt"
              width="1392"
              height="521"
              class="w-full h-full object-cover object-left-bottom"
              loading="eager"
            />
            <!-- Dog -->
            <NuxtImg
              preset="avatar"
              src="https://a.storyblok.com/f/148182/269x318/9d77d01357/dog.webp"
              alt="Liberty Banner Animate Dog"
              width="90"
              height="130"
              class="animate-dog object-cover object-left-bottom top-[44%] left-[41.5%] absolute w-[90px] h-[130px]"
              loading="lazy"
            />

            <!-- Clouds -->
            <NuxtImg
              preset="avatar"
              src="https://a.storyblok.com/f/148182/372x318/762a5df86e/cloud.webp"
              alt="Liberty Banner Animate Cloud"
              width="150"
              height="150"
              class="animate-clouds object-cover object-left-bottom top-[15%] left-[50%] absolute w-[150px] h-[150px]"
              loading="lazy"
            />
            <NuxtImg
              preset="avatar"
              src="https://a.storyblok.com/f/148182/390x315/285f6b9734/cloud2.webp"
              alt="Liberty Banner Animate Cloud"
              width="150"
              height="150"
              class="animate-clouds object-cover object-left-bottom top-[3%] left-[62%] absolute w-[150px] h-[150px]"
              loading="lazy"
            />

            <!-- Kid -->
            <NuxtImg
              preset="avatar"
              src="https://a.storyblok.com/f/148182/392x501/1fd79a8654/kid.webp"
              alt="Liberty Banner Animate Kid"
              sizes="md:150px, lg:150px, xl:180px"
              class="w-auto h-auto object-cover object-left-bottom top-[38%] left-[54%] absolute"
              loading="lazy"
            />

            <!-- Ball -->
            <NuxtImg
              preset="avatar"
              src="https://a.storyblok.com/f/148182/54x45/98b9925e8f/liberty_ball.webp"
              alt="Liberty Banner Animate Ball"
              width="30"
              height="25"
              class="animate-ball object-cover object-leaft-bottom top-[32%] left-[82%] absolute w-[30px] h-[25px]"
              loading="lazy"
            />

            <!-- Flamingo -->
            <NuxtImg
              preset="avatar"
              src="https://a.storyblok.com/f/148182/53x89/eb103a4c53/flamingov2.webp"
              alt="Liberty Banner Animate Flamingo"
              width="25"
              height="45"
              class="animate-flamingo object-cover object-left-bottom top-[46%] left-[93.8%] absolute w-[25px] h-[45px]"
              loading="lazy"
            />
          </div>
        </div>
        <div :class="[currentGradient, 'lg:absolute lg:w-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:flex']">
          <div class="px-4 mobile+tablet:pt-5 mobile+tablet:pb-12 mobile+tablet:text-center lg:pl-10 max:pl-16 xl:pl-16 max:pr-44">
            <!-- eslint-disable vue/no-v-html -->
            <h1
              class="text-h1-sm font-heavy text-white xl:mb-4 py-4 lg:p-0 xl:text-h1 transition-all duration-300 min-h-[calc(2*1em)]"
              v-html="heading"
            />
            <!-- eslint-disable vue/no-v-html -->
            <h2 class="text-h5-sm text-white mb-8 py-4 sm:text-h5 xl:text-h5 transition-all duration-300 min-h-[calc(2*1em)]" v-html="subHeading" />
            <div class="button-container min-h-12">
              <StoryblokButton
                v-for="cta in ctas"
                :key="cta._uid"
                :link="cta.link"
                :variant="cta.type"
                :size="cta.size"
                :inverted="true"
                :is-animated="cta.isAnimated"
                :data-identifier="cta.dataIdentifier"
                @click="handleOnClick"
              >
                {{ cta.label }}
              </StoryblokButton>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div
      v-if="showTrustpilot"
      class="mx-auto lg:absolute z-10 top-full left-1/2 md:w-[650px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:bg-white w-auto rounded-full lg:shadow-card"
    >
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
<script lang="ts" setup>
import { ref, reactive, watchEffect } from 'vue'
// import { usePreloadImage } from '~/utils/composables/preloadImage.composable'
import { useMobileDetection } from '~/utils/composables/mobileDetection.composable'
import type { SiteHomeAnimationProps } from '~/utils/types/aliases/site.alias'

/* Emit handlers */
const emit = defineEmits(['CTAClick'])

/* Default props */
const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  subHeading: {
    type: String,
    required: true,
  },
  desktopImage: {
    type: Object,
    required: true,
  },
  mobileImages: {
    type: Array,
    required: true,
  },
  ctas: {
    type: Array,
    default () {
      return null
    },
  },
  showTrustpilot: {
    type: Boolean,
    default: true,
  },
  trustScore: {
    type: String,
    required: true,
  },
  numberOfReviews: {
    type: Number,
    required: true,
  },
}) as SiteHomeAnimationProps

/* Reactive props */
const heading = ref(props.heading)
const subHeading = ref(props.subHeading)
const desktopImage = ref(props.desktopImage)
const mobileImages = ref(props.mobileImages)
const ctas = ref(props.ctas)
const showTrustpilot = ref(props.showTrustpilot)
const trustScore = ref(props.trustScore)
const numberOfReviews = ref(props.numberOfReviews)

const carouselOptions = reactive({
  initialSlide: 0,
  dots: false,
  navButtons: false,
  centerMode: false,
  slidesToShow: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 7000,
  slides: props.mobileImages,
})
const currentSlide = ref(0)

// #NOTE mixins preloadImageMixin, MobileDetectionMixin
/* Composables */
// const { preloadImageLink: _ } = usePreloadImage(desktopImage, mobileImages)
const { isMobile } = useMobileDetection()

/* Computed props */
const currentGradient = computed((): string => {
  return `gradient-${mobileImages.value[currentSlide.value].title}`
})

const placeholderMobileBg = computed((): string => {
  return `placeholder-bg-${mobileImages.value[currentSlide.value].title}`
})

const placeholderBg = computed((): { backgroundColor: string; width: string; height: string } => {
  return {
    backgroundColor: '#82D3FF',
    width: '760',
    height: '630',
  }
})
/* Method handlers */
const handleOnUpdateCurrentSlide = (evt: any): void => {
  currentSlide.value = evt.currentSlide
}

const handleOnClick = (): void => {
  emit('CTAClick')
}

/* Events */
/* onMounted(() => {
  showTrustpilot.value = true
}) */

/* Watcher */
watchEffect(() => {
  heading.value = props.heading
  subHeading.value = props.subHeading
  desktopImage.value = props.desktopImage
  mobileImages.value = props.mobileImages
  ctas.value = props.ctas
  showTrustpilot.value = props.showTrustpilot
  trustScore.value = props.trustScore
  numberOfReviews.value = props.numberOfReviews
  carouselOptions.slides = mobileImages.value
})
</script>
<style lang="scss" scoped>
.button-container {
  height: calc(100% + 10px); // Adjust based on the maximum movement of the button during its animation
  padding-top: 5px; // Half of the extra space
  padding-bottom: 5px; // Half of the extra space
}
.flip-horizontally {
  transform: scaleX(-1);
}
.placeholder-bg-loan-home {
  background: #82d3ff;
}
.placeholder-bg-loan-car {
  background: #E75473;
}
.placeholder-bg-loan-personal {
  background: #AD7BF4;
}
.placeholder-bg-loan-business {
  background: #518A67;
}
.placeholder-bg-loan-smsf {
  background: #E6AAC5;
}
.placeholder-bg-loan-commercial {
  background: #FEE790;
}

.gradient-loan-home {

  @screen mobile+tablet {
    background: linear-gradient(180deg, #82d3ff 0%, #55ACE7 11.98%, #4089CF 31.25%, #2257B5 81.77%);
  }
}

.gradient-loan-car {
  // TODO: needs tweaking

  @screen mobile+tablet {
    background: linear-gradient(180deg, #E75473 0, #CE303F);
  }
}

.gradient-loan-personal {

  @screen mobile+tablet {
    background: linear-gradient(180deg, #AD7BF4 15.14%, #8254D5 62.29%);
  }
}

.gradient-loan-business {

  @screen mobile+tablet {
    background: linear-gradient(180deg, #518A67 0%, #3F6B50 100%);
  }
}

.gradient-loan-smsf {

  @screen mobile+tablet {
    background: linear-gradient(180deg, #E6AAC5 1.04%, #AD426C 60.94%);
  }
}

.gradient-loan-commercial {

  @screen mobile+tablet {
    background: linear-gradient(180deg, #FEE790 1.04%, #ECAF75 15.14%, #D78061 30.73%, #C4574F 60.94%);
  }
}

.animate-kid {
  animation: kid-bounce 5s ease-in-out 0s infinite alternate;
}

.animate-dog {
  animation: dog-bounce 5s ease-in-out 0s infinite alternate;
}

.animate-ball {
  animation: rotation 2s linear infinite, rotation1 1s ease-in-out;
}

.animate-flamingo {
  animation: flamingo-bounce 5s linear infinite alternate;
}

.animate-clouds {
  animation: clouds 5s linear infinite alternate;
}

.aniamte-rotate {
  animation: rotation 8s infinite linear;
}

@keyframes clouds {
  0% {
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    transform: translateY(0px);

  }

  100% {
    -webkit-transform: translateY(25px);
    -moz-transform: translateY(25px);
    transform: translateY(25px);
  }
}

@keyframes dog-bounce {
  0% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(-20px);
  }
}

@keyframes kid-bounce {
  0% {
    transform: translateY(-15px);
  }

  100% {
    transform: translateY(10px);
  }
}

@keyframes flamingo-bounce {
  0% {
    transform: translateY(5px);

  }

  50% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-5px);
  }
}

@keyframes bounce {
  0% {
    transform: translateY(-50px);
  }
}

@keyframes bounce-ball {
  0% {
    transform: translateY(-20px);
  }

  50% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(-20px);
  }
}

@keyframes rotation1 {
  0% {
    transform: translateY(-150px);
  }

}
@keyframes rotation {
  100% {
    transform: rotate(360deg);
  }

}

.kenburns-bottom {
  //-webkit-animation: kenburns-bottom 10s ease-out both;
  //animation: kenburns-bottom 10s ease-out both;
}

/**
 * ----------------------------------------
 * animation kenburns-bottom
 * ----------------------------------------
 */
@-webkit-keyframes kenburns-bottom {
  0% {
    -webkit-transform: scale(1) translateY(0);
    transform: scale(1) translateY(0);
    -webkit-transform-origin: top;
    transform-origin: top;
  }

  100% {
    -webkit-transform: scale(1.05) translateY(0);
    transform: scale(1.05) translateY(0);
    -webkit-transform-origin: bottom;
    transform-origin: bottom;
  }
}

@keyframes kenburns-bottom {
  0% {
    -webkit-transform: scale(1) translateY(0);
    transform: scale(1) translateY(0);
    -webkit-transform-origin: top;
    transform-origin: top;
  }

  100% {
    -webkit-transform: scale(1.05) translateY(0);
    transform: scale(1.05) translateY(0);
    -webkit-transform-origin: bottom;
    transform-origin: bottom;
  }
}

@-webkit-keyframes slideshow {
  20% {
    background: url(http://tangledindesign.com/codepen/01.jpg);
  }

  25%,
  45% {
    background: url(http://tangledindesign.com/codepen/02.jpg);
  }

  50%,
  70% {
    background: url(http://tangledindesign.com/codepen/03.jpg);
  }

  75%,
  95% {
    background: url(http://tangledindesign.com/codepen/04.jpg);
  }
}

@-webkit-keyframes swing {
  0% {
    -webkit-transform: rotateX(-90deg);
  }

  30% {
    -webkit-transform: rotateX(50deg);
  }

  50% {
    -webkit-transform: rotateX(-40deg);
  }

  70% {
    -webkit-transform: rotateX(20deg);
  }

  90% {
    -webkit-transform: rotateX(-10deg);
  }
}

</style>
