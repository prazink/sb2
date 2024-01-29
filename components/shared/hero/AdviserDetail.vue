<template>
  <div class="max-w-[1440px] lg:min-h-[330px] mx-auto lg:px-6">
    <div
      class="
        relative
        gradient-secondary
        text-white
        sm:rounded-3xl
        lg:min-h-[330px]
        px-4
      "
    >
      <img
        src="/img/cloud.png"
        class="absolute -right-28 -top-20 z-10 hidden lg:block"
        alt=""
      >
      <LayoutWrapper padding="lg:px-10">
        <LayoutGrid>
          <div
            class="
              col-span-12
              mobile:max-w-[300px]'
              w-72
              h-72
              mx-auto
              aspect-auto
              relative
              lg:absolute
              lg:right-0
              lg:top-0
              lg:w-5/12
              lg:h-full
              max:z-1
            "
          >
            <NuxtImg
              provider="s3"
              format="webp"
              :src="`/assets/images/liberty-adviser/${adviserGuid}.png`"
              :alt="adviserAlt"
              :class="[
                'mt-16 w-72 h-72 mx-auto relative right-1 z-10 lg:absolute lg:mt-1 lg:w-[324px] lg:h-[324px] lg:px-0 lg:object-cover lg:bottom-0 lg:right-56 max:right-64 max:mt-2',
              ]"
            />
            <IconTriangle
              class="absolute z-0 w-[282px] h-[282px] top-[70px] bottom-0 right-0 lg:right-8 mix-blend-multiply block lg:hidden"
            />
            <NuxtImg
              v-if="adviserStatus !== ''"
              provider="s3"
              :src="`/assets/images/adviser-awards/${adviserStatus}.svg`"
              alt="adviserStatus"
              loading="lazy"
              class="absolute top-64 z-20 left-0 w-20 h-20 lg:w-28 lg:h-28 lg:right-44 lg:left-auto lg:top-24"
            />
          </div>
          <div
            class="
              col-span-12
              py-5
              px-4
              mt-16
              lg:mt-0
              lg:col-span-6
              text-center
              lg:text-left
              lg:pt-16
              max:pl-14
              max:pt-20
            "
          >
            <h1
              class="text-h1-sm font-heavy text-white md:text-h1"
            >
              {{ title }}
            </h1>
            <h2
              class="text-h5-sm text-white mb-3 italic md:text-h5"
            >
              {{ heroTagline }}
            </h2>
            <TrustpilotWidget
              v-if="parseFloat(trustScore) >= 3.8"
              :class="['lg:float-left mt-4 mb-6 text-body-sm text-white w-full text-left mb-4 p-2 w-auto mx-auto mobile:flex-nowrap lg:mb-6']"
              :trust-score="trustScore"
              :star-image="trustpilotImage"
              :star-string="trustpilotString"
              trustpilot-url="https://au.trustpilot.com/review/www.liberty.com.au/"
              :number-of-reviews="2940"
              :show-trust-score="false"
              :show-number-of-reviews="false"
              theme="dark"
            />
          </div>
        </LayoutGrid>
      </LayoutWrapper>
      <img
        src="/img/cloud.png"
        class="
          absolute
          -left-32
          -bottom-20
          z-10
          hidden
          lg:block
        "
        alt=""
        loading="lazy"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import IconTriangle from '../../assets/icons/Triangle.svg?inline'

defineProps({
  heroTagline: {
    type: String,
    required: true,
    default: '',
  },
  title: {
    type: String,
    required: true,
    default: '',
  },
  adviserStatus: {
    type: String,
    default: '',
  },
  adviserGuid: {
    type: String,
    default: '',
  },
  adviserAlt: {
    type: String,
    default: '',
  },
  trustScore: {
    type: String,
    default: null,
  },
  trustpilotImage: {
    type: String,
    default: '//images-static.trustpilot.com/api/stars/5/star.svg',
  },
  trustpilotString: {
    type: String,
    default: null,
  },
})

</script>
