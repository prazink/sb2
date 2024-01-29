<template>
  <nuxt-link
    v-if="isInternalLink"
    :to="`/${url}`"
    class="cursor-pointer"
    :target="link.target"
  >
    <slot />
  </nuxt-link>
  <a
    v-else-if="isStandardLink"
    :href="url"
    target="_blank"
    class="cursor-pointer flex items-center"
  >
    <slot />
  </a>
  <a
    v-else-if="isScrollToLink && url"
    href="#"
    class="cursor-pointer"
    @click="handleOnScrollTo($event, url)"
  >
    <slot />
  </a>
  <span v-else>
    <slot />
  </span>
</template>
<script lang="ts" setup>
import { ref, watchEffect, computed } from 'vue'
import { LinkTypeEnum } from '~/utils/types/enums/link-types.enum'

/* Options */
defineOptions({
  name: 'StoryblokLink',
})

/* Emit handler */
/* const emit = defineEmits(['click']) */

/* Route */
const route = useRoute()

/* Default props */
const props = defineProps({
  iconClass: {
    type: String,
    default: 'w-8 h-8',
  },
  link: {
    type: Object,
    required: true,
  },
})

/* Reactive props */
const iconClass = ref(props.iconClass)
const link = ref(props.link)

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

const url = computed((): any => {
  if (isInternalLink.value) {
    if (link.value.story) {
      if (link.value.anchor) {
        return `${link.value.story.url.replace(/\/$/, '')}#${link.value.anchor}`
      }
      return link.value.story.url.replace(/\/$/, '')
    }
    return link.value.cached_url
  } else if (isStandardLink.value) {
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
  }

  return null
})

/* const buttonUrl = computed((): any => {
  return isInternalLink.value ? url.value : null
}) */

/* Method handlers */
const handleOnScrollTo = (evt: any, _anchor: any) => {
  evt.preventDefault()
  // #TODO ScrollTo Event
}

/* const handleOnClick = () => {
  emit('click')
} */

/* Watcher */
watchEffect(() => {
  iconClass.value = props.iconClass
  link.value = props.link
})
</script>
