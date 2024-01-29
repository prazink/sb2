<template>
  <Button
    v-bind="$attrs"
    :link="link"
    :tag="tag"
    :class="{ 'cursor-pointer': (isInternalLink || isStandardLink || isScrollToLink), 'font-bold': bold }"
    :to="buttonUrl"
    :href="href"
    :target="link.target"
    @click="isScrollToLink ? handleOnScrollTo($event, url) : handleOnClick()"
    v-on="$attrs"
  >
    <slot />
  </Button>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'
import { LinkTypeEnum } from '~/utils/types/enums/link-types.enum'
import type { StoryblokButtonProps } from '~/utils/types/aliases/storyblok.alias'
import { ButtonTagEnum } from '~/utils/types/enums/buttons.enum'

/* Options */
defineOptions({
  name: 'StoryblokButton',
  inheritAttrs: false,
})

/* Emit handler */
const emit = defineEmits(['click'])

/* Route */
const route = useRoute()

/* Default props */
const props = defineProps({
  link: {
    type: Object,
    required: true,
  },
  bold: {
    type: Boolean,
    default: false,
  },
}) as StoryblokButtonProps

/* Reactive props */
const link = ref(props.link)
const bold = ref(props.bold)

/* Computed props */
const isInternalLink = computed((): boolean => {
  return link.value.linktype === LinkTypeEnum.STORY
})

const isStandardLink = computed((): boolean => {
  return link.value.linktype === LinkTypeEnum.URL && !link.value.url.startsWith('#')
})

const isScrollToLink = computed((): boolean => {
  return link.value.linktype === LinkTypeEnum.URL && link.value.url.startsWith('#')
})

const isAssetLink = computed((): boolean => {
  return link.value.linktype === LinkTypeEnum.ASSET
})

const tag = computed((): string => {
  let result: string = ButtonTagEnum.BUTTON

  if (isInternalLink.value) {
    result = ButtonTagEnum.NUXT_LINK
  } else if (isStandardLink.value || isAssetLink) {
    result = ButtonTagEnum.ANCHOR
  } else if (isScrollToLink.value) {
    result = ButtonTagEnum.BUTTON
  }

  return result
})

const url = computed((): string | null => {
  if (isInternalLink.value) {
    if (link.value.story) {
      if (link.value.anchor) {
        return `${link.value.story.url.replace(/\/$/, '')}#${link.value.anchor}`
      }
      return link.value.story.url.replace(/\/$/, '')
    }
    return link.value.cached_url
  } else if (isStandardLink.value || isScrollToLink) {
    // target.url always available even if its left empty
    const utmInfo = ''/* this.$store.getters['analytics/utmParams'] */ // #NOTE this uses store management @nuxt/pinia
    if (
      route.path !== '/campaign/car-secured-personal-loans' &&
      link.value.url === 'https://personal.liberty.com.au/apply' &&
      utmInfo
    ) {
      const q = Object.keys(utmInfo)
        .map((key) => {
          return key + '=' + utmInfo[key]
        })
        .join('&')
      return link.value.url.replace(/\/$/, '').concat(`?${q}`)
    }
    return link.value.url.replace(/\/$/, '')
  } else if (isAssetLink.value) {
    return link.value.url
  }

  return null
})

const href = computed((): any => {
  if (isStandardLink.value || isAssetLink) {
    return url
  } else if (isInternalLink.value) {
    return `/${url.value}`
  }
  return null
})

const buttonUrl = computed((): any => {
  return isInternalLink.value ? url.value : null
})

/* Method handlers */
const handleOnScrollTo = (evt: any, _anchor: any) => {
  evt.preventDefault()
  // #TODO ScrollTo Event
}

const handleOnClick = () => {
  emit('click')
}

/* Watcher */
watchEffect(() => {
  link.value = props.link
  bold.value = props.bold
})
</script>
