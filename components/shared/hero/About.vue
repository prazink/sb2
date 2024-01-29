<template>
  <div class="max-w-[1440px] mx-auto lg:px-6 relative">
    <div class="relative lg:rounded-xl overflow-hidden">
      <section class="hero-banner relative overflow-hidden border-transparent tablet:min-h-[460px] lg:min-h-[560px]">
        <div
          class="flex flex-col justify-end lg:absolute bottom-0 left-0 w-full h-full lg:rounded-3xl lg:overflow-hidden max:flex max:flex-col max:justify-end max:bg-deep-sapphire min-h-[380px]"
        >
          <NuxtImg
            v-if="mobileImage.filename && mobileImage.alt"
            preset="avatar"
            :src="mobileImage.filename"
            :alt="mobileImage.alt"
            class="block mx-auto w-full tablet:hidden lg:hidden"
            width="390"
            height="462"
            loading="eager"
          />
          <NuxtImg
            v-if="tabletImage.filename && tabletImage.alt"
            preset="avatar"
            :src="tabletImage.filename"
            :alt="tabletImage.alt"
            class="hidden tablet:block"
            width="920"
            height="550"
          />
          <NuxtImg
            v-if="desktopImage.filename && desktopImage.alt"
            preset="avatar"
            :src="desktopImage.filename"
            :alt="desktopImage.alt"
            class="hidden lg:block lg:w-full lg:h-full lg:object-cover lg:object-left-bottom"
            preload
            width="1392"
            height="560"
          />
          <div class="px-4 pt-2 pb-0 text-left absolute w-[250px] tablet:pl-8 tablet:pr-4 tablet:pt-0 tablet:pb-0 tablet:text-left tablet:top-[250px] lg:top-[300px] lg:pl-16 max:pr-28 lg:absolute lg:w-1/2 max:top-1/2 lg:-translate-y-1/2 lg:mt-32">
            <!-- eslint-disable vue/no-v-html -->
            <h1
              class="text-h2-sm text-white mb-8 text-white font-heavy tablet:text-h1-sm  tablet:mb-2  tablet:w-[350px] tablet:top-[310px] lg:text-h1 lg:mb-4"
              v-html="heading"
            />
            <!-- eslint-disable vue/no-v-html -->
            <h2
              class="text-h5-sm text-white mb-8 pb-6 tablet:mb-2 tablet:pt-8 tablet::pt-16  tablet:w-[400px] tablet:top-[310px]"
              v-html="subHeading"
            />
            <StoryblokButton
              v-for="cta in ctas"
              :key="cta._uid"
              :link="cta.link"
              :variant="cta.type"
              :size="cta.size"
              :inverted="true"
            >
              {{ cta.label }}
            </StoryblokButton>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import type { HeroAboutProps } from '~/utils/types/aliases/hero.alias'

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
  mobileImage: {
    type: Object,
    required: true,
  },
  tabletImage: {
    type: Object,
    required: true,
  },
  ctas: {
    type: Array,
    default () {
      return null
    },
  },
}) as HeroAboutProps

/* Reactive props */
const heading = ref(props.heading)
const subHeading = ref(props.subHeading)
const desktopImage = ref(props.desktopImage)
const mobileImage = ref(props.mobileImage)
const tabletImage = ref(props.tabletImage)
const ctas = ref(props.ctas)

/* Computed props */

/* Method handlers */

/* Watcher */
watchEffect(() => {
  heading.value = props.heading
  subHeading.value = props.subHeading
  desktopImage.value = props.desktopImage
  mobileImage.value = props.mobileImage
  tabletImage.value = props.tabletImage
  ctas.value = props.ctas
})

</script>
<style lang="scss" scoped>
.flip-horizontally {
  transform: scaleX(-1);
}

.gradient-about {
 background: linear-gradient(180deg, #80d3ff 0%, #55ACE7 11.98%, #4089CF 31.25%, #2257B5 81.77%);

@screen lg {
  background: linear-gradient(90deg, #266DAF 33.57%, rgba(38, 109, 175, 0) 77.65%);
}
}

</style>
