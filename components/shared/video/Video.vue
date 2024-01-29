<template>
  <div class="relative aspect-video rounded-pill overflow-hidden">
    <transition v-if="showPoster" appear name="fade">
      <ButtonPlay
        v-if="!isReady"
        class="absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16"
        @click="handleLoadVideo"
      >
        <template #default="{ iconClass }">
          <transition name="fade" mode="out-in">
            <IconLoading
              v-if="isShowing"
              class="animate-spin fill-current w-8 h-8"
            />
            <IconPlay
              v-else
              :class="iconClass"
            />
          </transition>
        </template>
      </ButtonPlay>
    </transition>
    <transition appear name="fade">
      <span v-if="heading && !isShowing" class="absolute z-2 bottom-6 left-8 w-8/12 block font-bold text-white text-body">{{ heading }}</span>
    </transition>
    <transition v-if="showPoster" appear name="fade">
      <div v-if="!isReady" class="absolute z-1 w-full h-full">
        <NuxtImg
          format="webp"
          sizes="md:800px lg:1200px"
          :src="videoPoster.filename"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div v-if="!hideGradient" class="absolute inset-0 gradient w-full h-full" />
      </div>
    </transition>
    <iframe
      v-if="(isShowing || !showPoster)"
      class="absolute w-full h-full"
      :src="`${videoUrlComputed}?rel=0&autoplay=1`"
      allowtransparency="true"
      allow="autoplay"
      frameborder="0"
      scrolling="no"
      allowfullscreen
      mozallowfullscreen
      webkitallowfullscreen
      oallowfullscreen
      msallowfullscreen
      width="640"
      height="360"
      @load="handleOnLoadVideo"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'
import IconPlay from '~/assets/icons/Play.svg?component'
import IconLoading from '~/assets/icons/Loading.svg?component'

/* Default props */
const props = defineProps({
  videoUrl: {
    type: String,
    default: '',
    required: true,
    validator (value: string) {
      // The value must match one of these strings
      const matches = value.match(/(?:https?:\/\/)?(?:www\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\/?\?v=|\/embed\/|\/shorts\/|\/)(\w+)/)
      /* eslint-disable no-unneeded-ternary */
      return matches !== null && matches.length ? true : false
    },
  },
  videoPoster: {
    type: Object,
    required: true,
  },
  heading: {
    type: String,
    default: '',
  },
  hideGradient: {
    type: Boolean,
    default: true,
  },
})

/* Reactive props */
const videoUrl = ref(props.videoUrl)
const videoPoster = ref(props.videoPoster)
const heading = ref(props.heading)
const hideGradient = ref(props.hideGradient)
const isLoaded = ref(false)
const isShowing = ref(false)

/* Computed props */
const videoPlatform = computed((): string => {
  let result: string = 'n/a'

  if (videoUrl.value.match(
    /(?:https?:\/\/)?(?:www\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\/?\?v=|\/embed\/|\/shorts\/|\/)(\w+)/,
  )) {
    result = 'youtube'
  }
  if (videoUrl.value.match(/(?:\/\/)?fast\.wistia\.net\/embed\/iframe\/(\w+)/)) {
    result = 'wistia'
  }
  return result
})

const videoUrlComputed = computed((): string|null => {
  let result: string|null = null

  if (videoPlatform.value === 'youtube') {
    const videoId = videoUrl.value.match(
      /(?:https?:\/\/)?(?:www\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\/?\?v=|\/embed\/|\/shorts\/|\/)(\w+)/,
    )

    if (videoId !== null && videoId.length) {
      result = `https://www.youtube.com/embed/${videoId[1]}?autoplay=1`
    }
  }

  if (videoPlatform.value === 'wistia') {
    const videoId = videoUrl.value.match(/(?:\/\/)?fast\.wistia\.net\/embed\/iframe\/(\w+)/)

    if (videoId !== null && videoId.length) {
      result = `//fast.wistia.net/embed/iframe/${videoId[1]}?videoFoam=true&autoplay=true&playerColor=0a3370`
    }
  }

  return result
})

const isReady = computed((): boolean => {
  return isShowing.value && isLoaded.value
})

const showPoster = computed((): boolean => {
  return videoPoster.value.filename !== null
})

/* Method handlers */
const handleLoadVideo = () => {
  isShowing.value = true
}

const handleOnLoadVideo = () => {
  setTimeout(() => {
    isLoaded.value = true
  }, 1000)
}

/* Watcher */
watchEffect(() => {
  videoUrl.value = props.videoUrl
  videoPoster.value = props.videoPoster
  heading.value = props.heading
  hideGradient.value = props.hideGradient
})
</script>
<style lang="scss" scoped>
.gradient {
  background: linear-gradient(0deg, rgba(10, 51, 112, 0.87) 7.74%, rgba(10, 51, 112, 0) 72.14%);
}
</style>
