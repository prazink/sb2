<template>
  <div class="gradient-secondary text-white py-10 lg:py-20 overflow-hidden">
    <LayoutWrapper>
      <LayoutGrid>
        <div class="col-span-full lg:col-start-2 lg:col-end-12">
          <div class="relative rounded-2xl border-[3px] border-white py-7 px-5 lg:p-12 lg:pt-[72px] text-center">
            <h2 class="font-heavy text-h3-sm lg:text-h2">
              "{{ text }}"
            </h2>
            <h5 class="font-heavy text-h5-sm lg:text-h5 mt-4 lg:mt-8">
              {{ name }}
            </h5>
            <p class="text-body-lg lg:text-body-sm">
              {{ title }}
            </p>
            <ClientOnly fallback="Loading">
              <template v-if="isMorethanLgScreen">
                <img
                  src="/img/cloud.png"
                  width="176"
                  class="absolute top-0 right-0 translate-x-28 translate-y-8"
                  loading="lazy"
                >
                <img
                  src="/img/cloud.png"
                  width="176"
                  class="absolute bottom-0 left-0 -translate-x-16 translate-y-4"
                  loading="lazy"
                >
              </template>
              <template v-if="isAtleastMdScreen || (isPortraitScreen || isLandscapeScreen)">
                <img
                  src="/img/cloud.png"
                  width="90"
                  class="absolute top-0 right-0 translate-x-7 -translate-y-8"
                  loading="lazy"
                >
                <img
                  src="/img/cloud.png"
                  width="90"
                  class="absolute bottom-0 left-0 -translate-x-6 translate-y-6"
                  loading="lazy"
                >
              </template>
            </ClientOnly>
          </div>
        </div>
      </LayoutGrid>
    </LayoutWrapper>
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { useMediaQuery } from '@vueuse/core'

/* Default props */
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})

/* Reactive props */
const textRef = ref(props.text)
const nameRef = ref(props.name)
const titleRef = ref(props.title)

/* Computed props */
const isAtleastMdScreen = useMediaQuery('(min-width: 768px)')
/* const isAtleastXsScreen = useMediaQuery('(min-width: 375px)') */
const isPortraitScreen = useMediaQuery('(orientation: portrait)')
const isLandscapeScreen = useMediaQuery('(orientation: landscape)')
const isMorethanLgScreen = useMediaQuery('(min-width: 1024px)')

/* Method handlers */

/* Watcher */
watchEffect(() => {
  textRef.value = props.text
  nameRef.value = props.name
  titleRef.value = props.title
})
</script>
